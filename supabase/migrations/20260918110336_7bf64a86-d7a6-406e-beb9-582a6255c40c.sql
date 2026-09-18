CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE TABLE public.monthly_actions (
  id smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  image_url text,
  image_name text,
  is_active boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.monthly_actions TO anon, authenticated;
GRANT ALL ON public.monthly_actions TO service_role;
ALTER TABLE public.monthly_actions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Active monthly action is publicly visible"
ON public.monthly_actions
FOR SELECT
TO anon, authenticated
USING (is_active = true);

CREATE TABLE public.monthly_action_attempts (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  client_key text NOT NULL,
  attempted_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.monthly_action_attempts TO service_role;
ALTER TABLE public.monthly_action_attempts ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.manage_monthly_action(
  access_code text,
  operation text,
  new_image_url text DEFAULT NULL,
  new_image_name text DEFAULT NULL,
  client_key text DEFAULT 'unknown'
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  recent_failures integer;
  normalized_client_key text := encode(digest(coalesce(client_key, 'unknown'), 'sha256'), 'hex');
BEGIN
  DELETE FROM public.monthly_action_attempts
  WHERE attempted_at < now() - interval '30 minutes';

  SELECT count(*) INTO recent_failures
  FROM public.monthly_action_attempts
  WHERE monthly_action_attempts.client_key = normalized_client_key
    AND attempted_at > now() - interval '15 minutes';

  IF recent_failures >= 8 THEN
    RAISE EXCEPTION 'Te veel pogingen. Probeer het over 15 minuten opnieuw.' USING ERRCODE = 'P0001';
  END IF;

  IF access_code IS NULL OR crypt(access_code, '$2a$06$x11iO83x7YGTEtr3zJaAO.UBXJye1qsnNkXV3xoS5w3tOmaUfVH46') <> '$2a$06$x11iO83x7YGTEtr3zJaAO.UBXJye1qsnNkXV3xoS5w3tOmaUfVH46' THEN
    INSERT INTO public.monthly_action_attempts (client_key) VALUES (normalized_client_key);
    RAISE EXCEPTION 'Onjuiste beheer-code.' USING ERRCODE = 'P0001';
  END IF;

  DELETE FROM public.monthly_action_attempts
  WHERE monthly_action_attempts.client_key = normalized_client_key;

  IF operation = 'publish' THEN
    IF new_image_url IS NULL OR length(new_image_url) < 20 OR length(new_image_url) > 7000000 THEN
      RAISE EXCEPTION 'Kies een geldige afbeelding van maximaal 5 MB.' USING ERRCODE = 'P0001';
    END IF;
    IF new_image_url NOT LIKE 'data:image/%;base64,%' AND new_image_url NOT LIKE '/__l5e/assets-v1/%' THEN
      RAISE EXCEPTION 'Dit afbeeldingsformaat wordt niet ondersteund.' USING ERRCODE = 'P0001';
    END IF;

    INSERT INTO public.monthly_actions (id, image_url, image_name, is_active, updated_at)
    VALUES (1, new_image_url, left(coalesce(new_image_name, 'actie'), 160), true, now())
    ON CONFLICT (id) DO UPDATE SET
      image_url = EXCLUDED.image_url,
      image_name = EXCLUDED.image_name,
      is_active = true,
      updated_at = now();
  ELSIF operation = 'remove' THEN
    UPDATE public.monthly_actions
    SET image_url = NULL, image_name = NULL, is_active = false, updated_at = now()
    WHERE id = 1;
  ELSE
    RAISE EXCEPTION 'Ongeldige bewerking.' USING ERRCODE = 'P0001';
  END IF;

  RETURN jsonb_build_object('ok', true);
END;
$$;

REVOKE ALL ON FUNCTION public.manage_monthly_action(text, text, text, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.manage_monthly_action(text, text, text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.manage_monthly_action(text, text, text, text, text) TO service_role;
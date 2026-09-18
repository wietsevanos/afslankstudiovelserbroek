CREATE SCHEMA IF NOT EXISTS app_private;
REVOKE ALL ON SCHEMA app_private FROM PUBLIC;

ALTER FUNCTION public.manage_monthly_action(text, text, text, text, text) SET SCHEMA app_private;

CREATE OR REPLACE FUNCTION public.manage_monthly_action(
  access_code text,
  operation text,
  new_image_url text DEFAULT NULL,
  new_image_name text DEFAULT NULL,
  client_key text DEFAULT 'unknown'
)
RETURNS jsonb
LANGUAGE sql
SECURITY INVOKER
SET search_path = public, app_private
AS $$
  SELECT app_private.manage_monthly_action(access_code, operation, new_image_url, new_image_name, client_key);
$$;

REVOKE ALL ON FUNCTION public.manage_monthly_action(text, text, text, text, text) FROM PUBLIC;
GRANT USAGE ON SCHEMA app_private TO anon, authenticated;
GRANT EXECUTE ON FUNCTION app_private.manage_monthly_action(text, text, text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.manage_monthly_action(text, text, text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.manage_monthly_action(text, text, text, text, text) TO service_role;

CREATE POLICY "Attempts are never directly readable"
ON public.monthly_action_attempts
FOR SELECT
TO authenticated
USING (false);
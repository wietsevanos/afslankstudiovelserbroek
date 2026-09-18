import { supabase } from "@/integrations/supabase/client";

export type MonthlyAction = {
  imageUrl: string;
  imageName: string;
  updatedAt: string;
};

export async function getMonthlyAction(): Promise<MonthlyAction | null> {
  const { data, error } = await supabase
    .from("monthly_actions")
    .select("image_url,image_name,updated_at")
    .eq("id", 1)
    .maybeSingle();

  if (error) throw error;
  if (!data?.image_url) return null;

  return {
    imageUrl: data.image_url,
    imageName: data.image_name ?? "Actie van de maand",
    updatedAt: data.updated_at,
  };
}

function getClientKey() {
  const storageKey = "monthly-action-admin-key";
  const existing = window.sessionStorage.getItem(storageKey);
  if (existing) return existing;
  const created = window.crypto.randomUUID();
  window.sessionStorage.setItem(storageKey, created);
  return created;
}

export async function manageMonthlyAction(input: {
  code: string;
  operation: "verify" | "publish" | "remove";
  imageUrl?: string;
  imageName?: string;
}) {
  const { data, error } = await supabase.rpc("manage_monthly_action", {
    access_code: input.code,
    operation: input.operation,
    client_key: getClientKey(),
    ...(input.imageUrl ? { new_image_url: input.imageUrl } : {}),
    ...(input.imageName ? { new_image_name: input.imageName } : {}),
  });

  if (error) throw error;
  const result = data as { ok?: boolean; error?: string } | null;
  if (result?.ok) return;
  if (result?.error === "invalid_code") throw new Error("Onjuiste beheer-code.");
  if (result?.error === "rate_limited") {
    throw new Error("Te veel pogingen. Probeer het over 15 minuten opnieuw.");
  }
  if (result?.error === "invalid_image") {
    throw new Error("Kies een geldige afbeelding van maximaal 5 MB.");
  }
  throw new Error("De wijziging kon niet worden opgeslagen.");
}

export function prepareActionImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Kies een JPG-, PNG- of WEBP-afbeelding."));
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      reject(new Error("Deze foto is te groot. Kies een bestand tot 12 MB."));
      return;
    }

    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const maxSide = 1800;
      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("De foto kon niet worden verwerkt."));
        return;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const result = canvas.toDataURL("image/webp", 0.84);
      if (result.length > 6_500_000) {
        reject(new Error("De foto blijft te groot. Kies een kleinere foto."));
        return;
      }
      resolve(result);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("De foto kon niet worden geopend."));
    };
    image.src = objectUrl;
  });
}
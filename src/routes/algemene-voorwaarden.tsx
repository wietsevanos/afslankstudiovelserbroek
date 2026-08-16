import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { terms } from "@/content/legal";

const title = "Algemene voorwaarden | Afslankstudio Velserbroek";
const description =
  "De algemene voorwaarden van Afslankstudio Velserbroek: afspraken, annuleren, prijzen, gezondheidsinformatie, aansprakelijkheid en klachten.";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/algemene-voorwaarden" }],
  }),
  component: () => <LegalPage doc={terms} />,
});

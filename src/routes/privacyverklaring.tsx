import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacy } from "@/content/legal";

const title = "Privacyverklaring | Afslankstudio Velserbroek";
const description =
  "Privacyverklaring van Afslankstudio Velserbroek: welke persoonsgegevens wij verwerken, waarom, hoe lang wij ze bewaren en welke rechten je hebt (AVG).";

export const Route = createFileRoute("/privacyverklaring")({
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
    links: [{ rel: "canonical", href: "/privacyverklaring" }],
  }),
  component: () => <LegalPage doc={privacy} />,
});

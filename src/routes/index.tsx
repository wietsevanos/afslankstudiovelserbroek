import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Treatments } from "@/components/site/Treatments";
import { Actie } from "@/components/site/Actie";
import { Waarom } from "@/components/site/Waarom";
import { OverOns } from "@/components/site/OverOns";
import { Social } from "@/components/site/Social";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { contact } from "@/content/site";

const title = "Afslankstudio Velserbroek | Beauty & afslanken in Velserbroek";
const description =
  "Beauty behandelingen, lichaamsbehandelingen en afslanken in Velserbroek. Persoonlijke aandacht in een rustige studio. Plan eenvoudig een afspraak.";
const socialImage =
  "https://afslankstudiovelserbroek.nl/media/a44e658d-social-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
       { property: "og:url", content: "https://afslankstudiovelserbroek.nl/" },
       { property: "og:image", content: socialImage },
       { property: "og:image:alt", content: "Beauty en Afslankstudio Velserbroek" },
      { name: "twitter:card", content: "summary_large_image" },
       { name: "twitter:image", content: socialImage },
    ],
     links: [{ rel: "canonical", href: "https://afslankstudiovelserbroek.nl/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Afslankstudio Velserbroek",
          description,
           image: socialImage,
          telephone: contact.phone,
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Klompenmakerstraat 7",
            postalCode: "1991 JJ",
            addressLocality: "Velserbroek",
            addressCountry: "NL",
          },
          areaServed: "Velserbroek",
          sameAs: [contact.instagram, contact.facebook],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Treatments />
        <Actie />
        <Waarom />
        <OverOns />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

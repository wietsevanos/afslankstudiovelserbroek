import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { contact } from "@/content/site";

import instagram1 from "@/assets/instagram-1.png.asset.json";
import instagram2 from "@/assets/instagram-2.png.asset.json";
import instagram3 from "@/assets/instagram-3.png.asset.json";
import instagram4 from "@/assets/instagram-4.png.asset.json";
import instagram5 from "@/assets/instagram-5.png.asset.json";
import instagram6 from "@/assets/instagram-6.png.asset.json";

const posts = [
  { src: instagram1.url, alt: "Winactie: maak kans op 3 gratis behandelingen" },
  { src: instagram2.url, alt: "Vrijdag is de dag — na 27 jaar zaak verkocht" },
  { src: instagram3.url, alt: "Open dagen september: gratis intakegesprek en BMI-meting" },
  { src: instagram4.url, alt: "Na-zomer actie: 10 kilo kwijt in 6 weken tijd" },
  { src: instagram5.url, alt: "Kleurrijke studio-inrichting" },
  { src: instagram6.url, alt: "WK-kortingen op afslankbehandelingen" },
];

export function Social() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Social media"
          title="Volg ons op Instagram &amp; Facebook"
          subtitle="Blijf op de hoogte van onze behandelingen, acties en het laatste nieuws."
        />

        <Reveal delay={100} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="gold" size="xl">
            <a href={contact.instagram} target="_blank" rel="noreferrer noopener">
              <Instagram className="size-4" />
              Instagram
            </a>
          </Button>
          <Button asChild variant="goldOutline" size="xl">
            <a href={contact.facebook} target="_blank" rel="noreferrer noopener">
              <Facebook className="size-4" />
              Facebook
            </a>
          </Button>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.src} delay={i * 70}>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="group block overflow-hidden rounded-sm border border-border/70 transition-colors duration-500 hover:border-gold/40"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <p className="mt-6 text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Een kijkje achter de schermen — dagelijks tips, acties &amp; resultaten
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Instagram, Facebook, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { contact } from "@/content/site";

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
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal as="li" key={i} delay={i * 70}>
              <div className="flex aspect-square items-center justify-center rounded-sm border border-border/70 bg-sand/60 transition-colors duration-500 hover:border-gold/40">
                <ImageIcon className="size-5 text-muted-foreground/60" strokeWidth={1.2} />
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <p className="mt-6 text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Instagram preview — hier komt later echte content
          </p>
        </Reveal>
      </div>
    </section>
  );
}

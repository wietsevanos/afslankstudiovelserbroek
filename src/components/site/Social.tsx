import { Instagram, Facebook } from "lucide-react";
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
      </div>
    </section>
  );
}

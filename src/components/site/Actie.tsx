import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { actie } from "@/content/site";
import actieImage from "@/assets/actie.jpg";

export function Actie() {
  return (
    <section id="actie" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Deze maand"
          title="Actie van de maand"
          subtitle="Ontdek iedere maand een speciale behandeling of aanbieding."
        />

        <Reveal delay={120} className="mt-14">
          <div className="relative overflow-hidden rounded-sm border border-gold/30 bg-card shadow-[var(--shadow-soft)]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-gold" />
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-8 sm:p-12">
                <p className="eyebrow">{actie.period}</p>
                <h3 className="mt-5 text-3xl leading-tight sm:text-4xl">{actie.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{actie.subtitle}</p>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {actie.description}
                </p>

                <ul className="mt-8 space-y-2.5">
                  {actie.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap items-end gap-4">
                  {actie.oldPrice ? (
                    <span className="text-base text-muted-foreground line-through">
                      {actie.oldPrice}
                    </span>
                  ) : null}
                  <span className="font-display text-4xl text-gradient-gold">{actie.newPrice}</span>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="gold" size="xl">
                    <a href="#contact">Plan je afspraak</a>
                  </Button>
                  <Button asChild variant="goldOutline" size="xl">
                    <a href="#behandelingen">Bekijk behandelingen</a>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-56 bg-sand">
                <img
                  src={actieImage}
                  alt="Stijlvolle crème stof met subtiel gouden detail bij de actie van de maand"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

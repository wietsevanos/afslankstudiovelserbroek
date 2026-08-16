import { useState } from "react";
import { ArrowRight, Check, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { treatments, type Treatment } from "@/content/site";

export function Treatments() {
  const [active, setActive] = useState<Treatment | null>(null);

  return (
    <section id="behandelingen" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Behandelingen"
          title="Onze behandelingen"
          subtitle="Ontdek wat onze behandelingen voor jou kunnen betekenen."
        />

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, i) => (
            <Reveal as="li" key={treatment.id} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="h-60 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-4 left-4 rounded-sm bg-background/85 px-3 py-1 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase backdrop-blur-sm">
                    {treatment.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl">{treatment.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {treatment.short}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                    {treatment.price ? (
                      <span className="text-foreground">{treatment.price}</span>
                    ) : null}
                    {treatment.duration ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5 text-gold" />
                        {treatment.duration}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(treatment)}
                    className="mt-7 inline-flex cursor-pointer items-center gap-2 self-start border-b border-gold/40 pb-1 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-gold"
                  >
                    Bekijk behandeling
                    <ArrowRight className="size-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-3xl overflow-y-auto rounded-sm border-border/70 bg-card p-0 sm:w-full [&>button]:hidden">
          {active ? (
            <div>
              <div className="relative">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  width={1000}
                  height={1200}
                  className="h-56 w-full object-cover sm:h-72"
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Sluit behandeling"
                  className="absolute top-4 right-4 inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur transition-colors hover:bg-background"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="p-7 sm:p-10">
                <p className="eyebrow">{active.category}</p>
                <DialogTitle className="mt-3 font-display text-3xl font-light sm:text-4xl">
                  {active.name}
                </DialogTitle>
                <span className="gold-rule mt-5" />
                <DialogDescription className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </DialogDescription>

                <div className="mt-9 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="text-lg">Voor wie</h4>
                    <ul className="mt-4 space-y-2.5">
                      {active.forWho.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg">Wat je kunt verwachten</h4>
                    <ul className="mt-4 space-y-2.5">
                      {active.expect.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-muted-foreground">
                    {active.price ? <span className="text-foreground">{active.price}</span> : null}
                    {active.duration ? <span className="ml-3">{active.duration}</span> : null}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="gold" size="lg">
                      <a href="#contact" onClick={() => setActive(null)}>
                        Plan een afspraak
                      </a>
                    </Button>
                    <Button variant="quiet" size="lg" onClick={() => setActive(null)}>
                      Terug naar overzicht
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

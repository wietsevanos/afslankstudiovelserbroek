import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { TreatmentDialog } from "@/components/site/TreatmentDialog";
import { treatments, treatmentGroups, type Treatment } from "@/content/site";

export function Treatments() {
  const [active, setActive] = useState<Treatment | null>(null);

  return (
    <section id="behandelingen" className="dark bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Behandelingen"
          title="Onze behandelingen"
          subtitle="Ontdek wat onze behandelingen voor jou kunnen betekenen."
        />

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-24">
          {treatmentGroups.map((group) => {
            const items = treatments.filter((t) => t.group === group.id);
            if (items.length === 0) return null;

            return (
              <div key={group.id}>
                <Reveal className="border-t border-border/70 pt-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="eyebrow">{group.label}</p>
                      {group.intro ? (
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {group.intro}
                        </p>
                      ) : null}
                    </div>
                    <span className="text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {items.length} {items.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                </Reveal>

                <ul className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((treatment, i) => (
                    <Reveal as="li" key={treatment.id} delay={(i % 3) * 90}>
                      <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[var(--shadow-card)]">
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
                          {treatment.price || treatment.duration ? (
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
                          ) : null}
                          <button
                            type="button"
                            onClick={() => setActive(treatment)}
                            className="mt-7 inline-flex cursor-pointer items-center gap-2 self-start border-b border-gold/40 pb-1 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-gold"
                          >
                            {treatment.kind === "product"
                              ? "Bekijk product"
                              : "Bekijk behandeling"}
                            <ArrowRight className="size-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <TreatmentDialog treatment={active} onClose={() => setActive(null)} />
    </section>
  );
}

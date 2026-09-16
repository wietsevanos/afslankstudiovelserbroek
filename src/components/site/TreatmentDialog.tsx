import { Link } from "@tanstack/react-router";
import { Check, Clock, Info, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Treatment } from "@/content/site";

type Props = {
  treatment: Treatment | null;
  onClose: () => void;
};

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[0.72rem] tracking-[0.18em] font-medium text-gold uppercase">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.925rem] leading-[1.75] text-foreground/80">
            <Check className="mt-[0.2rem] size-3.5 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TreatmentDialog({ treatment, onClose }: Props) {
  return (
    <Dialog open={treatment !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-0 bg-card p-0 top-0 left-0 translate-x-0 sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[92vh] sm:w-[calc(100vw-3rem)] sm:max-w-4xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-sm sm:border sm:border-border/70 [&>button]:hidden"
      >
        {treatment ? (
          <>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <div className="relative">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  width={1400}
                  height={900}
                  className="h-56 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Sluiten"
                  className="absolute top-4 right-4 inline-flex size-9 cursor-pointer items-center justify-center rounded-sm bg-background/90 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="px-6 py-8 sm:px-12 sm:py-11">
                <p className="eyebrow">{treatment.category}</p>
                <DialogTitle className="mt-3 font-display text-3xl leading-tight font-light sm:text-[2.6rem]">
                  {treatment.name}
                </DialogTitle>
                <span className="gold-rule mt-6" />

                <DialogDescription className="mt-7 max-w-2xl text-[1.05rem] leading-[1.8] text-foreground/85">
                  {treatment.description}
                </DialogDescription>

                {treatment.duration || treatment.price ? (
                  <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-border/70 py-5 text-sm">
                    {treatment.duration ? (
                      <div className="flex items-center gap-2.5">
                        <Clock className="size-4 text-gold" />
                        <dt className="sr-only">Duur</dt>
                        <dd className="text-foreground">{treatment.duration}</dd>
                      </div>
                    ) : null}
                    {treatment.price ? (
                      <div className="flex items-center gap-2.5">
                        <Tag className="size-4 text-gold" />
                        <dt className="sr-only">Prijs</dt>
                        <dd className="text-foreground">{treatment.price}</dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}

                {treatment.details && treatment.details.length > 0 ? (
                  <div className="mt-10 max-w-2xl space-y-9">
                    {treatment.details.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-[0.72rem] tracking-[0.18em] font-medium text-gold uppercase">
                          {section.title}
                        </h4>
                        {section.paragraphs?.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="mt-4 text-[0.925rem] leading-[1.75] text-foreground/80"
                          >
                            {paragraph}
                          </p>
                        ))}
                        {section.list ? (
                          <ul className="mt-4 space-y-3">
                            {section.list.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-[0.925rem] leading-[1.75] text-foreground/80"
                              >
                                <Check className="mt-[0.2rem] size-3.5 shrink-0 text-gold" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:gap-14">
                  <List
                    title={
                      treatment.kind === "product"
                        ? "Wat het product inhoudt"
                        : "Wat de behandeling inhoudt"
                    }
                    items={treatment.includes}
                  />
                  <List title="Wat je kunt verwachten" items={treatment.expect} />
                  <List title="Voor wie is dit geschikt" items={treatment.forWho} />
                  {treatment.extra ? (
                    <div className="border-l border-gold/40 bg-sand/40 px-6 py-5">
                      <h4 className="flex items-center gap-2 text-[0.72rem] tracking-[0.18em] font-medium text-gold uppercase">
                        <Info className="size-3.5 text-gold" />
                        Goed om te weten
                      </h4>
                      <p className="mt-3 text-[0.925rem] leading-[1.75] text-foreground/80">
                        {treatment.extra}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-border/70 bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-6">
              <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                Afspraak op maat · Velserbroek
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="lg">
                  <Link to="/intake" onClick={onClose}>
                    Plan een intake
                  </Link>
                </Button>
                <Button variant="quiet" size="lg" onClick={onClose}>
                  Sluiten
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

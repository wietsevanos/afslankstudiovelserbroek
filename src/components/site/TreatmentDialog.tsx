import { Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Treatment } from "@/content/site";

type Props = {
  treatment: Treatment | null;
  onClose: () => void;
};

export function TreatmentDialog({ treatment, onClose }: Props) {
  return (
    <Dialog open={treatment !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-0 bg-card p-0 top-0 left-0 translate-x-0 sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[92vh] sm:w-[calc(100vw-3rem)] sm:max-w-3xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-sm sm:border sm:border-border/70 [&>button]:hidden"
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
                  className="h-56 w-full object-cover sm:h-72"
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

              <div className="mx-auto max-w-2xl px-6 py-10 sm:px-10 sm:py-12">
                <p className="eyebrow">{treatment.category}</p>
                <DialogTitle className="mt-3 font-display text-3xl leading-tight font-light sm:text-[2.6rem]">
                  {treatment.name}
                </DialogTitle>
                <p className="mt-4 font-display text-lg leading-snug text-foreground/70 italic sm:text-xl">
                  {treatment.short}
                </p>
                <span className="gold-rule mt-7" />

                <DialogDescription className="sr-only">
                  {treatment.short}
                </DialogDescription>

                <div className="mt-8">
                  {treatment.description.split("\n\n").map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-[1.02rem] leading-[1.85] text-foreground/85 first:mt-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 space-y-11">
                  {treatment.details.map((section) => (
                    <section key={section.title}>
                      <h4 className="text-[0.82rem] tracking-[0.14em] font-semibold text-gold-deep uppercase">
                        {section.title}
                      </h4>
                      {section.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-4 text-[0.95rem] leading-[1.85] text-foreground/80 first:mt-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.list ? (
                        <ul className="mt-5 space-y-3.5">
                          {section.list.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[0.95rem] leading-[1.8] text-foreground/80"
                            >
                              <Check className="mt-[0.28rem] size-3.5 shrink-0 text-gold" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-border/70 bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-6">
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

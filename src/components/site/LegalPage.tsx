import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import type { LegalDocument } from "@/content/legal";

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="font-display text-lg leading-none">
            Afslankstudio
            <span className="mt-1 block text-[0.6rem] tracking-[0.32em] text-muted-foreground uppercase">
              Velserbroek
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-gold"
          >
            <ArrowLeft className="size-3.5 text-gold" />
            Terug naar website
          </Link>
        </div>
      </header>

      <main className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow">Juridisch</p>
          <h1 className="mt-4 font-display text-4xl leading-tight font-light sm:text-5xl">
            {doc.title}
          </h1>
          <span className="gold-rule mt-6" />
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">{doc.intro}</p>
          <p className="mt-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Laatst bijgewerkt: {doc.updated}
          </p>

          <div className="mt-12 space-y-10 border-t border-border/70 pt-12">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl leading-snug font-light">{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-5 space-y-3 border-l border-gold/35 pl-5">
                    {section.list.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-16 border border-border/70 bg-card p-7 sm:p-9">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Gegevens tussen blokhaken zijn placeholders. Vul deze aan met de definitieve
              bedrijfs- en contactgegevens in <span className="text-foreground">src/content/legal.ts</span>.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-gold"
            >
              <ArrowLeft className="size-3.5 text-gold" />
              Terug naar de website
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

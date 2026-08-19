import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-rose pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-rose/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">Beauty &amp; afslanken in Velserbroek</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              Lekkerder in je vel,
              <span className="block text-gradient-gold italic">op jouw manier.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ontdek onze behandelingen voor huid, lichaam en welzijn. Persoonlijke aandacht, een
              fijne sfeer en behandelingen die bij jou passen.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="gold" size="xl">
                <a href="#behandelingen">Bekijk behandelingen</a>
              </Button>
              <Button asChild variant="goldOutline" size="xl">
                <a href="#contact">Plan een afspraak</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-md shadow-[var(--shadow-card)]">
            <img
              src={heroImage}
              alt="Vrouw met een verzorgde, natuurlijke huid ontspant tijdens een beautybehandeling in Velserbroek"
              width={1408}
              height={1760}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 hidden h-32 w-32 rounded-full border border-gold/30 sm:block"
          />
        </Reveal>
      </div>
    </section>
  );
}

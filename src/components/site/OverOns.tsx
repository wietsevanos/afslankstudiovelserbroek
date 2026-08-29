import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import studioImage from "@/assets/studio.jpg";

export function OverOns() {
  return (
    <section id="over-ons" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Over ons</p>
            <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
              Persoonlijk, professioneel en betrokken
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Afslankstudio Velserbroek is al ruim 27 jaar een toonaangevende salon op het gebied
              van beauty en afslanken. Persoonlijke aandacht staat bij ons voorop. In onze
              kleurrijke salon nemen wij de tijd om te bespreken wat jouw wensen zijn en hoe wij die
              samen kunnen behalen.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="goldOutline" size="xl">
                <a href="#contact">Neem contact op</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="relative">
            <img
              src={studioImage}
              alt="Sfeerbeeld van de studio van Afslankstudio Velserbroek"
              width={1408}
              height={1056}
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
            />
            <div
              aria-hidden
              className="absolute -top-5 -right-5 hidden h-24 w-24 border border-gold/30 sm:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

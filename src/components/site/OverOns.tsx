import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import welkomAsset from "@/assets/welkom-studio.png.asset.json";

export function OverOns() {
  return (
    <section id="over-ons" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Over ons</p>
            <h2 className="mt-5 max-w-md text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
              Persoonlijk, professioneel en betrokken
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Afslankstudio Velserbroek is al ruim 27 jaar een toonaangevende salon op het gebied
              van beauty en afslanken. Persoonlijke aandacht staat bij ons voorop. In onze salon
              nemen wij de tijd om te bespreken wat jouw wensen zijn en hoe wij die samen kunnen
              behalen.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10">
              <Button asChild variant="goldOutline" size="xl">
                <a href="#contact">Neem contact op</a>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="order-first lg:order-none">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-24 w-24 border-r border-t border-gold/50 sm:block"
            />
            <img
              src={overonsAsset.url}
              alt="Vrouw meet haar taille met een centimeter"
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

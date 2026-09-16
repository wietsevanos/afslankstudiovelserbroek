import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "27+", label: "jaar ervaring" },
  { value: "12", label: "behandelingen & producten" },
  { value: "1-op-1", label: "persoonlijke begeleiding" },
];

export function OverOns() {
  return (
    <section id="over-ons" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">Over ons</p>
          <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
            Persoonlijk, professioneel en betrokken
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Afslankstudio Velserbroek is al ruim 27 jaar een toonaangevende salon op het gebied
            van beauty en afslanken. Persoonlijke aandacht staat bij ons voorop. In onze salon
            nemen wij de tijd om te bespreken wat jouw wensen zijn en hoe wij die samen kunnen
            behalen.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-1 gap-6 border-y border-gold/25 py-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gold sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10">
            <Button asChild variant="goldOutline" size="xl">
              <a href="#contact">Neem contact op</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

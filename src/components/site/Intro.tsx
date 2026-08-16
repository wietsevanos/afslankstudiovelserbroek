import { Reveal } from "@/components/Reveal";
import studioImage from "@/assets/studio.jpg";

export function Intro() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <img
            src={studioImage}
            alt="Rustig ingerichte behandelruimte van Afslankstudio Velserbroek in warme crèmetinten"
            width={1408}
            height={1056}
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Welkom</p>
            <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
              Even tijd voor jezelf
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bij Afslankstudio Velserbroek draait het om jou. Even weg uit de drukte, tijd maken
              voor jezelf en werken aan hoe jij je voelt. We bieden verschillende behandelingen op
              het gebied van afslanken, lichaamsverzorging en beauty.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

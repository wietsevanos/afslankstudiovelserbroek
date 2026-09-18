import { Reveal } from "@/components/Reveal";
import overonsAsset from "@/assets/overons.png.asset.json";

export function Intro() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <img
            src={overonsAsset.url}
            alt="TC Cryo XL behandelapparaat naast een comfortabele behandelstoel in de studio"
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Welkom</p>
            <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
              Bij ons draait het om jou!
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wij geven persoonlijk advies om een gezond gewicht te krijgen en te behouden. Wij
              bieden verschillende soorten behandelingen op het gebied van beauty en afslanken.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

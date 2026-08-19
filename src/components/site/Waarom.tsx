import { Heart, Leaf, Sparkles, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const usps = [
  {
    icon: Heart,
    title: "Persoonlijke aandacht",
    text: "Iedere behandeling begint met aandacht voor jou en jouw wensen.",
  },
  {
    icon: Leaf,
    title: "Een fijne, ontspannen sfeer",
    text: "Een plek waar je even kunt ontspannen en tijd voor jezelf neemt.",
  },
  {
    icon: Sparkles,
    title: "Verschillende behandelingen",
    text: "Ontdek de mogelijkheden voor beauty, lichaamsverzorging en afslanken.",
  },
  {
    icon: MessageCircle,
    title: "Persoonlijk advies",
    text: "We kijken graag samen welke behandeling het beste bij jou past.",
  },
];

export function Waarom() {
  return (
    <section className="dark bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Waarom wij" title="Waarom Afslankstudio Velserbroek?" />
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <Reveal as="li" key={usp.title} delay={i * 90} className="text-center sm:text-left">
              <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold/35 bg-background">
                <usp.icon className="size-5 text-gold" strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 text-xl leading-snug">{usp.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{usp.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

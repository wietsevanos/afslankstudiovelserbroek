import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
            Klaar om jezelf weer even op één te zetten?
          </h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Heb je een vraag of wil je weten welke behandeling bij jou past? Neem gerust contact met
            ons op.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}>Plan een afspraak</a>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <a href={`mailto:${contact.email}`}>Neem contact op</a>
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="h-full rounded-sm border border-border/70 bg-card p-8 sm:p-10">
              <h3 className="text-2xl">Gegevens</h3>
              <span className="gold-rule mt-5" />
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-muted-foreground">
                    {contact.studio}
                    <br />
                    {contact.address}
                    <span className="mt-1 block text-xs">(adres nog te bevestigen)</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="h-full rounded-sm border border-border/70 bg-card p-8 sm:p-10">
              <h3 className="flex items-center gap-3 text-2xl">
                <Clock className="size-4 text-gold" strokeWidth={1.5} />
                Openingstijden
              </h3>
              <span className="gold-rule mt-5" />
              <ul className="mt-7 space-y-3 text-sm">
                {contact.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-2.5 last:border-b-0"
                  >
                    <span className="text-foreground">{row.day}</span>
                    <span className="text-muted-foreground">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Openingstijden zijn placeholders en worden later definitief ingevuld.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

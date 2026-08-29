import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Clock, MapPin, Mail, Check } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/Reveal";
import { contact, treatmentGroups } from "@/content/site";

const title = "Plan een intake | Afslankstudio Velserbroek";
const description =
  "Plan een gratis intakegesprek bij Afslankstudio Velserbroek. Vul het formulier in of bel direct 023 549 0556 voor persoonlijk advies over afslanken en beauty.";

export const Route = createFileRoute("/intake")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/intake" }],
  }),
  component: IntakePage,
});

const intakeSchema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100, "Naam is te lang"),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  phone: z.string().trim().min(6, "Vul je telefoonnummer in").max(30),
  interest: z.string().trim().max(120).optional(),
  moment: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1000, "Bericht is te lang").optional(),
});

type Field = keyof z.infer<typeof intakeSchema>;

const telHref = `tel:${contact.phone.replace(/[^0-9+]/g, "")}`;

const steps = [
  {
    title: "Aanvraag",
    text: "Je vult het formulier in of belt ons direct. We nemen binnen één werkdag contact met je op.",
  },
  {
    title: "Intakegesprek",
    text: "In de studio bespreken we rustig je wensen, je gezondheid en wat realistisch haalbaar is.",
  },
  {
    title: "Persoonlijk plan",
    text: "Je krijgt een advies op maat met de behandelingen die het beste bij jouw doel passen.",
  },
];

function IntakePage() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const raw = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      interest: String(form.get("interest") ?? ""),
      moment: String(form.get("moment") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const result = intakeSchema.safeParse(raw);
    if (!result.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = result.data;
    const body = [
      `Naam: ${d.name}`,
      `E-mail: ${d.email}`,
      `Telefoon: ${d.phone}`,
      `Interesse: ${d.interest || "-"}`,
      `Voorkeursmoment: ${d.moment || "-"}`,
      "",
      "Bericht:",
      d.message || "-",
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Aanvraag intakegesprek – ${d.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="font-display text-lg leading-none">
            Afslankstudio
            <span className="mt-1 block text-[0.6rem] tracking-[0.32em] text-muted-foreground uppercase">
              Velserbroek
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              to="/"
              className="hidden items-center gap-2 border-b border-gold/40 pb-1 text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-gold sm:inline-flex"
            >
              <ArrowLeft className="size-3.5 text-gold" />
              Terug naar website
            </Link>
            <Button asChild variant="gold" size="lg">
              <a href={telHref}>{contact.phone}</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-rose py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Intake</p>
              <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl md:text-[3.5rem]">
                Plan een <span className="text-gradient-gold italic">intake</span>
              </h1>
              <span className="gold-rule mt-6" />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tijdens een persoonlijk intakegesprek bekijken we samen jouw wensen en stellen we een
                plan op dat bij je past. Vul het formulier in of bel ons direct — we denken graag
                met je mee.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="xl">
                  <a href={telHref}>Bel {contact.phone}</a>
                </Button>
                <Button asChild variant="goldOutline" size="xl">
                  <a href="#formulier">Vul het formulier in</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border/70 bg-background py-14 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <div className="h-full border border-border/70 bg-card p-7">
                  <p className="font-display text-2xl text-gold">0{index + 1}</p>
                  <h2 className="mt-3 font-display text-xl">{step.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="formulier" className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Reveal>
              <div className="border border-border/70 bg-card p-7 sm:p-10">
                <p className="eyebrow">Formulier</p>
                <h2 className="mt-4 text-2xl sm:text-3xl">Vraag je intakegesprek aan</h2>
                <span className="gold-rule mt-5" />

                {sent ? (
                  <div className="mt-8 flex items-start gap-4 border border-gold/40 p-6">
                    <Check className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                    <div>
                      <p className="font-display text-lg">Bijna klaar</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Je e-mailprogramma is geopend met je aanvraag. Verstuur de e-mail om je
                        aanvraag definitief te maken, of bel ons direct op{" "}
                        <a href={telHref} className="text-foreground underline decoration-gold/60">
                          {contact.phone}
                        </a>
                        .
                      </p>
                      <Button
                        variant="goldOutline"
                        size="lg"
                        className="mt-6"
                        onClick={() => setSent(false)}
                      >
                        Formulier opnieuw invullen
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input id="name" name="name" maxLength={100} autoComplete="name" />
                        {errors.name ? <FieldError message={errors.name} /> : null}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoonnummer *</Label>
                        <Input id="phone" name="phone" maxLength={30} autoComplete="tel" />
                        {errors.phone ? <FieldError message={errors.phone} /> : null}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mailadres *</Label>
                      <Input id="email" name="email" maxLength={255} autoComplete="email" />
                      {errors.email ? <FieldError message={errors.email} /> : null}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="interest">Waarvoor heb je interesse?</Label>
                        <select
                          id="interest"
                          name="interest"
                          className="h-10 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-gold"
                          defaultValue=""
                        >
                          <option value="">Maak een keuze</option>
                          <option value="Persoonlijk advies">Persoonlijk advies</option>
                          {treatmentGroups.map((group) =>
                            group.items.map((item) => (
                              <option key={item.name} value={`${group.title} – ${item.name}`}>
                                {item.name}
                              </option>
                            )),
                          )}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="moment">Voorkeursmoment</Label>
                        <Input
                          id="moment"
                          name="moment"
                          maxLength={120}
                          placeholder="Bijv. doordeweeks in de ochtend"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Jouw vraag of doel</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        maxLength={1000}
                        placeholder="Vertel kort wat je graag wil bereiken."
                      />
                      {errors.message ? <FieldError message={errors.message} /> : null}
                    </div>

                    <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto">
                      Verstuur aanvraag
                    </Button>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Wij gebruiken je gegevens uitsluitend om contact met je op te nemen. Lees onze{" "}
                      <Link to="/privacyverklaring" className="underline decoration-gold/60">
                        privacyverklaring
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="dark h-full border border-border/70 bg-background p-7 text-foreground sm:p-10">
                <p className="eyebrow">Liever direct bellen?</p>
                <h2 className="mt-4 text-2xl">We staan voor je klaar</h2>
                <span className="gold-rule mt-5" />
                <a
                  href={telHref}
                  className="mt-7 flex items-center gap-3 font-display text-3xl text-gradient-gold"
                >
                  <Phone className="size-5 text-gold" strokeWidth={1.5} />
                  {contact.phone}
                </a>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {contact.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                    <span className="text-muted-foreground">{contact.address}</span>
                  </li>
                </ul>

                <div className="mt-9 border-t border-border/60 pt-7">
                  <p className="flex items-center gap-3 text-sm tracking-[0.14em] uppercase">
                    <Clock className="size-4 text-gold" strokeWidth={1.5} />
                    Openingstijden
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {contact.hours.map((row) => (
                      <li
                        key={row.day}
                        className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-2 last:border-b-0"
                      >
                        <span className="text-foreground">{row.day}</span>
                        <span className="text-muted-foreground">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FieldError({ message }: { message: string }) {
  return <p className="text-xs text-destructive">{message}</p>;
}

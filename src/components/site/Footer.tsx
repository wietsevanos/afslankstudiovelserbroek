import { Instagram, Facebook } from "lucide-react";
import { contact, navItems } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">Afslankstudio Velserbroek</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Beauty, lichaamsverzorging en afslanken in een rustige studio met persoonlijke
              aandacht.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram van Afslankstudio Velserbroek"
                className="inline-flex size-9 items-center justify-center rounded-full border border-gold/35 text-gold transition-colors hover:bg-gold/10"
              >
                <Instagram className="size-4" strokeWidth={1.5} />
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook van Afslankstudio Velserbroek"
                className="inline-flex size-9 items-center justify-center rounded-full border border-gold/35 text-gold transition-colors hover:bg-gold/10"
              >
                <Facebook className="size-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Navigatie</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li>{contact.address}</li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Afslankstudio Velserbroek. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#contact" className="transition-colors hover:text-foreground">
              Algemene voorwaarden
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Privacyverklaring
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

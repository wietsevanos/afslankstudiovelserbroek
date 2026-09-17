# De website op eigen hosting zetten (DirectAdmin)

De website is gemaakt met een moderne React/TanStack-opzet. Als DirectAdmin de
GitHub-repository rechtstreeks in `public_html` zet, zie je niets: dat is
broncode, geen website. Daarom is er een aparte "statische" bouw die alle
pagina's als kant-en-klare HTML-bestanden oplevert.

## Zelf bouwen

```bash
bun install
bun run build:static
```

De volledige website staat daarna in `dist/client/`:

- `index.html`, `intake/`, `algemene-voorwaarden/`, `privacyverklaring/`
- `assets/` (styling en scripts)
- `media/` (alle foto's, meegepakt zodat er niets van buiten geladen hoeft)
- `.htaccess` (nette URL's en caching voor Apache/DirectAdmin)

Upload de **inhoud** van `dist/client/` naar `public_html` — niet de map zelf.

## Automatisch via GitHub

`.github/workflows/deploy-static.yml` bouwt de site bij elke push naar `main`
en plaatst het resultaat op de branch `deploy`.

Stel in DirectAdmin de Git-integratie in op de branch `deploy` in plaats van
`main`. Dan haalt de hosting de gebouwde HTML op en is de site direct zichtbaar.

## Let op

- Zorg dat `.htaccess` mee-upload (verborgen bestanden zichtbaar maken in de
  bestandsbeheerder).
- Het intakeformulier opent de e-mailapp van de bezoeker; er is geen server
  nodig.

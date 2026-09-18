import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, ImagePlus, LoaderCircle, LockKeyhole, LogOut, ShieldCheck, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import actieImageAsset from "@/assets/actie-september-2026.jpg.asset.json";
import { getMonthlyAction, manageMonthlyAction, prepareActionImage } from "@/lib/monthly-action";

const title = "Actiebeheer | Afslankstudio Velserbroek";
const description = "Beheer de actuele actie van Afslankstudio Velserbroek.";

export const Route = createFileRoute("/beheer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BeheerPage,
});

function messageFrom(error: unknown) {
  const message = error instanceof Error ? error.message : "Er ging iets mis. Probeer het opnieuw.";
  if (message.includes("Onjuiste beheer-code")) return "De ingevoerde code is niet juist.";
  if (message.includes("Te veel pogingen")) return "Te veel pogingen. Probeer het over 15 minuten opnieuw.";
  return message;
}

function BeheerPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(actieImageAsset.url);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getMonthlyAction()
      .then((action) => {
        if (!action) setCurrentImage(null);
        else setCurrentImage(action.imageUrl.startsWith("/__l5e/assets-v1/") ? actieImageAsset.url : action.imageUrl);
      })
      .catch(() => setCurrentImage(actieImageAsset.url));
  }, []);

  async function verify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await manageMonthlyAction({ code, operation: "verify" });
      setUnlocked(true);
    } catch (caught) {
      setError(messageFrom(caught));
    } finally {
      setBusy(false);
    }
  }

  async function chooseFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      setPreview(await prepareActionImage(file));
      setFileName(file.name);
    } catch (caught) {
      setError(messageFrom(caught));
      event.target.value = "";
    } finally {
      setBusy(false);
    }
  }

  async function publish() {
    if (!preview) return;
    setBusy(true);
    setError("");
    try {
      await manageMonthlyAction({ code, operation: "publish", imageUrl: preview, imageName: fileName });
      setCurrentImage(preview);
      setPreview(null);
      setNotice("De nieuwe actie staat nu op de website.");
      if (inputRef.current) inputRef.current.value = "";
    } catch (caught) {
      setError(messageFrom(caught));
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!window.confirm("Weet je zeker dat je de huidige actie wilt verwijderen?")) return;
    setBusy(true);
    setError("");
    try {
      await manageMonthlyAction({ code, operation: "remove" });
      setCurrentImage(null);
      setPreview(null);
      setNotice("De actie is van de website verwijderd.");
    } catch (caught) {
      setError(messageFrom(caught));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-border/60 bg-background/95">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-baseline gap-1.5 leading-none">
            <span className="text-base font-medium text-foreground sm:text-lg">Afslankstudio</span>
            <span className="text-base font-medium text-gold sm:text-lg">Velserbroek</span>
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Link to="/"><ArrowLeft /> Terug naar website</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-20">
        {!unlocked ? (
          <section className="mx-auto max-w-md">
            <div className="border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-soft)] sm:px-10 sm:py-11">
              <div className="flex size-11 items-center justify-center border border-gold/25 bg-cream text-gold">
                <LockKeyhole className="size-5" strokeWidth={1.5} />
              </div>
              <p className="eyebrow mt-8">Beveiligde omgeving</p>
              <h1 className="mt-3 text-4xl leading-tight">Welkom terug</h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Log in met je beheer-code om de actie van de maand aan te passen.</p>
              <form onSubmit={verify} className="mt-8 space-y-5">
              <div className="space-y-2">
                  <Label htmlFor="access-code" className="text-xs font-normal uppercase tracking-[0.14em] text-muted-foreground">Beheer-code</Label>
                  <Input id="access-code" type="password" inputMode="numeric" autoComplete="current-password" maxLength={12} value={code} onChange={(event) => setCode(event.target.value)} required className="h-12 bg-background px-4 text-base tracking-[0.2em]" autoFocus />
              </div>
              {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" variant="gold" size="xl" className="w-full" disabled={busy || !code}>
                  {busy ? <LoaderCircle className="animate-spin" /> : <LockKeyhole />} Inloggen
              </Button>
              </form>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-3.5 text-gold" /> Alleen toegankelijk voor de studio</p>
          </section>
        ) : (
          <div>
            <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border/70 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Actie van de maand</p>
                <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Actie beheren</h1>
                <p className="mt-3 text-sm text-muted-foreground">Voeg een nieuwe poster toe of verwijder de huidige actie.</p>
              </div>
              <Button type="button" variant="ghost" size="sm" className="self-start text-muted-foreground sm:self-auto" onClick={() => { setUnlocked(false); setCode(""); setError(""); setNotice(""); }}>
                <LogOut /> Uitloggen
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <section>
              <h2 className="text-2xl">Nieuwe actie</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">Kies alleen je nieuwe poster. De vaste opmaak en intakeknop worden automatisch toegevoegd.</p>

              <div className="mt-6 border border-border/60 bg-card p-5 shadow-[var(--shadow-soft)] sm:p-7">
                <input ref={inputRef} id="action-image" type="file" accept="image/jpeg,image/png,image/webp" onChange={chooseFile} className="sr-only" />
                <button type="button" className="flex min-h-36 w-full cursor-pointer flex-col items-center justify-center border border-dashed border-gold/40 bg-cream px-6 text-center transition-colors hover:border-gold hover:bg-sand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" onClick={() => inputRef.current?.click()} disabled={busy}>
                  <span className="flex size-10 items-center justify-center bg-background text-gold"><ImagePlus className="size-5" strokeWidth={1.5} /></span>
                  <span className="mt-4 text-sm font-medium">Kies een foto</span>
                  <span className="mt-1 text-xs text-muted-foreground">JPG, PNG of WEBP · maximaal 12 MB</span>
                </button>

                {preview ? (
                  <div className="mt-7 space-y-4">
                    <div className="overflow-hidden border border-gold/25 bg-cream p-2">
                      <img src={preview} alt="Voorbeeld van de nieuwe actie" className="h-auto w-full object-contain" />
                    </div>
                    <Button type="button" variant="gold" size="xl" className="w-full" onClick={publish} disabled={busy}>
                      {busy ? <LoaderCircle className="animate-spin" /> : <Upload />} Publiceer deze actie
                    </Button>
                  </div>
                ) : null}

                {notice ? <p role="status" className="mt-5 flex items-center gap-2 text-sm text-foreground"><Check className="size-4 text-gold" />{notice}</p> : null}
                {error ? <p role="alert" className="mt-5 text-sm text-destructive">{error}</p> : null}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl">Huidige actie</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Dit staat nu op de website.</p>
                </div>
                {currentImage ? (
                  <Button type="button" variant="ghost" size="sm" onClick={remove} disabled={busy} className="text-destructive hover:text-destructive">
                    <Trash2 /> Verwijderen
                  </Button>
                ) : null}
              </div>
              <div className="mt-6 min-h-80 border border-border/60 bg-background p-3 shadow-[var(--shadow-soft)] sm:p-5">
                {currentImage ? (
                  <img src={currentImage} alt="Huidige actie van de maand" className="mx-auto h-auto max-h-[720px] w-full object-contain" />
                ) : (
                  <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
                    <ImagePlus className="size-7 text-gold" strokeWidth={1.5} />
                    <p className="mt-4 font-display text-xl">Nog geen actie geplaatst</p>
                    <p className="mt-2 text-sm text-muted-foreground">Kies links een foto om een nieuwe actie te publiceren.</p>
                  </div>
                )}
              </div>
            </section>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
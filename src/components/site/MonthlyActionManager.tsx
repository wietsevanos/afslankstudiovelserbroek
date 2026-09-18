import { useRef, useState } from "react";
import { Check, ImagePlus, LoaderCircle, LockKeyhole, Settings2, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { manageMonthlyAction, prepareActionImage } from "@/lib/monthly-action";

type Props = {
  currentImage: string | null;
  onChange: (image: string | null) => void;
};

function readableError(error: unknown) {
  return error instanceof Error ? error.message : "Er ging iets mis. Probeer het opnieuw.";
}

export function MonthlyActionManager({ currentImage, onChange }: Props) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function reset() {
    setCode("");
    setUnlocked(false);
    setPreview(null);
    setFileName("");
    setBusy(false);
    setError("");
    setNotice("");
  }

  async function verify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await manageMonthlyAction({ code, operation: "verify" });
      setUnlocked(true);
    } catch (caught) {
      setError(readableError(caught));
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
      setError(readableError(caught));
      event.target.value = "";
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    if (!preview) return;
    setBusy(true);
    setError("");
    try {
      await manageMonthlyAction({ code, operation: "publish", imageUrl: preview, imageName: fileName });
      onChange(preview);
      setPreview(null);
      setNotice("De nieuwe actie staat nu op de website.");
      if (fileInput.current) fileInput.current.value = "";
    } catch (caught) {
      setError(readableError(caught));
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    setBusy(true);
    setError("");
    try {
      await manageMonthlyAction({ code, operation: "remove" });
      onChange(null);
      setPreview(null);
      setNotice("De actie is verwijderd.");
    } catch (caught) {
      setError(readableError(caught));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => { setOpen(nextOpen); if (!nextOpen) reset(); }}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="gap-3 bg-background px-7 font-normal uppercase tracking-[0.2em]">
          <Settings2 /> Beheer
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-sm border-border bg-background p-6 sm:p-9">
        {!unlocked ? (
          <>
            <DialogHeader>
              <LockKeyhole className="mb-4 size-6 text-gold" strokeWidth={1.5} />
              <DialogTitle className="font-display text-3xl font-normal">Actie beheren</DialogTitle>
              <DialogDescription className="pt-2 text-base leading-relaxed">Voer de beheer-code in om de actie te wijzigen.</DialogDescription>
            </DialogHeader>
            <form onSubmit={verify} className="mt-5 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="monthly-action-code">Beheer-code</Label>
                <Input id="monthly-action-code" type="password" inputMode="numeric" autoComplete="current-password" maxLength={12} value={code} onChange={(event) => setCode(event.target.value)} required className="h-12" autoFocus />
              </div>
              {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" variant="gold" size="xl" className="w-full" disabled={busy || !code}>
                {busy ? <LoaderCircle className="animate-spin" /> : <LockKeyhole />} Open beheer
              </Button>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-3xl font-normal">Actie beheren</DialogTitle>
              <DialogDescription className="pt-2 text-base leading-relaxed">Voeg een nieuwe foto toe, controleer het voorbeeld en klik op opslaan.</DialogDescription>
            </DialogHeader>

            <input ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp" onChange={chooseFile} className="sr-only" />
            <Button type="button" variant="outline" className="mt-4 h-28 w-full border-dashed bg-background text-base font-normal" onClick={() => fileInput.current?.click()} disabled={busy}>
              <ImagePlus className="size-6" /> Foto toevoegen
            </Button>

            {(preview || currentImage) ? (
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {currentImage ? (
                  <div className="relative overflow-hidden rounded-sm border border-border bg-cream p-2">
                    <img src={currentImage} alt="Huidige actie" className="aspect-[4/5] h-full w-full object-contain" />
                    <Button type="button" variant="secondary" size="icon" aria-label="Huidige actie verwijderen" className="absolute right-3 top-3 shadow-sm" onClick={remove} disabled={busy}>
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                ) : null}
                {preview ? (
                  <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-cream p-2">
                    <img src={preview} alt="Voorbeeld nieuwe actie" className="aspect-[4/5] h-full w-full object-contain" />
                    <Button type="button" variant="secondary" size="icon" aria-label="Nieuwe foto verwijderen" className="absolute right-3 top-3 shadow-sm" onClick={() => setPreview(null)} disabled={busy}>
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">Er staat momenteel geen actie op de website.</p>
            )}

            {notice ? <p role="status" className="mt-3 flex items-center gap-2 text-sm"><Check className="size-4 text-gold" />{notice}</p> : null}
            {error ? <p role="alert" className="mt-3 text-sm text-destructive">{error}</p> : null}
            <Button type="button" variant="gold" size="xl" className="mt-4 w-full" onClick={save} disabled={busy || !preview}>
              {busy ? <LoaderCircle className="animate-spin" /> : <Upload />} Opslaan
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
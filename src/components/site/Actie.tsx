import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import actieImageAsset from "@/assets/actie-september-2026.jpg.asset.json";
import { getMonthlyAction } from "@/lib/monthly-action";

export function Actie() {
  const [image, setImage] = useState<string | null>(actieImageAsset.url);

  useEffect(() => {
    getMonthlyAction()
      .then((action) => {
        if (!action) {
          setImage(null);
          return;
        }
        setImage(action.imageUrl.startsWith("/__l5e/assets-v1/") ? actieImageAsset.url : action.imageUrl);
      })
      .catch(() => setImage(actieImageAsset.url));
  }, []);

  return (
    <section id="actie" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Deze maand"
          title="Actie van de maand"
          subtitle="Bekijk onze actuele aanbieding en ontdek wat we deze maand voor je hebben samengesteld."
        />

        {image ? (
          <Reveal delay={120} className="mt-12">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-gold/30 bg-card shadow-[var(--shadow-card)]">
              <div className="relative bg-sand">
                <img
                  src={image}
                  alt="Actuele aanbieding van Afslankstudio Velserbroek"
                  width={887}
                  height={1146}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-5 border-t border-gold/20 bg-card px-6 py-7 text-center sm:flex-row sm:px-9 sm:text-left">
                <div>
                  <p className="eyebrow">Persoonlijk advies</p>
                  <p className="mt-2 text-sm text-muted-foreground">Benieuwd of deze actie bij jou past?</p>
                </div>
                <Button asChild variant="gold" size="xl">
                  <Link to="/intake">Plan een intake <ArrowRight /></Link>
                </Button>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

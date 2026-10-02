import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RealisationCard } from "@/components/realisation-card";
import { BeforeAfterCard } from "@/components/before-after-card";
import ScrollExpandMedia from "@/components/scroll-expansion-hero";
import { ParallaxFeatureSection } from "@/components/parallax-feature-section";
import { WordsPullUp } from "@/components/words-pull-up";
import { BEFORE_AFTER, HERO_MEDIA, PROOF_POINTS, REALISATIONS } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={HERO_MEDIA.image}
        posterSrc={HERO_MEDIA.poster}
        bgImageSrc={HERO_MEDIA.background}
        title="Rénovation Professionnelle"
        date="Société de rénovation professionnelle au service des syndics et des agences."
        scrollToExpand="Faites défiler pour découvrir"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Rénovéa"
                className="font-serif leading-[0.85] font-medium tracking-tight text-foreground text-[clamp(3rem,10vw,8rem)]"
              />
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Le point de chute à la hauteur de vos chantiers.
              </p>
            </div>
            <div className="col-span-12 flex flex-col gap-5 lg:col-span-4">
              <p className="text-sm text-muted-foreground sm:text-base">
                <span className="font-medium text-foreground">
                  Société de rénovation professionnelle
                </span>{" "}
                au service des syndics et des agences. La référence à présenter
                à chaque nouveau donneur d&rsquo;ordre.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pr-1 pl-5 text-sm font-medium text-primary-foreground transition-all hover:gap-3"
                >
                  Nous contacter
                  <span className="flex size-9 items-center justify-center rounded-full bg-background transition-transform group-hover:scale-110">
                    <ArrowRight className="size-4 text-primary" />
                  </span>
                </Link>
                <Link
                  href="/realisations"
                  className="text-sm font-medium text-foreground hover:underline"
                >
                  Voir les réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>

      <section className="border-b border-border">
        <ParallaxFeatureSection items={PROOF_POINTS} />
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-medium text-foreground">Réalisations récentes</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Un aperçu de nos chantiers pour syndics et copropriétés.
              </p>
            </div>
            <Link
              href="/realisations"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:underline sm:inline-flex"
            >
              Tout voir <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <BeforeAfterCard item={BEFORE_AFTER[0]} />
            {REALISATIONS.slice(0, 2).map((item) => (
              <RealisationCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6">
          <h2 className="font-serif text-2xl font-medium">
            Un chantier à confier ou à discuter ?
          </h2>
          <p className="max-w-xl text-primary-foreground/80">
            Parlons de votre projet — devis et échange sans engagement.
          </p>
          <Button asChild variant="secondary" size="lg" className="h-11 px-6 text-sm">
            <Link href="/contact">
              Nous contacter <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

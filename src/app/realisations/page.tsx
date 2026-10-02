import type { Metadata } from "next";

import { RealisationCard } from "@/components/realisation-card";
import { BeforeAfterCard } from "@/components/before-after-card";
import { BEFORE_AFTER, BRAND, REALISATIONS, SITE_URL } from "@/lib/site";

const TITLE = "Réalisations";
const DESCRIPTION = "Page réalisations type — emplacements de chantiers pour syndics et copropriétés.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["chantier rénovation", "avant après rénovation copropriété"],
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: `${TITLE} — ${BRAND.name}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/realisations`,
    siteName: BRAND.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Réalisations
      </p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl font-medium text-foreground sm:text-4xl">
        Nos chantiers pour syndics et copropriétés.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Quelques chantiers récents, avant et après intervention.
      </p>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Démonstration : les emplacements ci-dessous accueillent vos propres photos
        de chantier. Aucun visuel n&rsquo;est présenté ici comme une référence réelle.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {BEFORE_AFTER.map((item) => (
          <BeforeAfterCard key={item.title} item={item} />
        ))}
      </div>

      <h2 className="mt-16 font-serif text-2xl font-medium text-foreground">Autres réalisations</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REALISATIONS.map((item) => (
          <RealisationCard key={item.title} item={item} />
        ))}
      </div>
    </main>
  );
}

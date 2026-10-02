import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BRAND, SERVICE_CATEGORIES, SERVICES, SITE_URL } from "@/lib/site";

const TITLE = "Services";
const DESCRIPTION =
  "Rénovation de parties communes, ravalement de façade, mise aux normes : page de prestations type pour syndics et copropriétés.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "rénovation parties communes",
    "ravalement façade",
    "mise aux normes accessibilité immeuble",
    "rénovation énergétique copropriété",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${TITLE} — ${BRAND.name}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    siteName: BRAND.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Services
      </p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl font-medium text-foreground sm:text-4xl">
        Des prestations pensées pour les immeubles collectifs.
      </h1>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const category = SERVICE_CATEGORIES.find((c) => c.id === service.category);
          return (
            <div key={service.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
              <Hammer className="size-5 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-medium text-foreground">{service.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
              </div>
              {category && <Badge variant="secondary" className="w-fit">{category.label}</Badge>}
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 rounded-xl border border-border bg-secondary/40 p-8">
        <p className="font-serif text-xl font-medium text-foreground">
          Un besoin qui ne figure pas ici ?
        </p>
        <p className="text-muted-foreground">
          Parlons de votre chantier — nous adaptons la prestation à votre situation.
        </p>
        <Button asChild size="lg" className="h-11 px-6 text-sm">
          <Link href="/contact">
            Nous contacter <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}

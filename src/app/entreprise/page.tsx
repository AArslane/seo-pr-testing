import type { Metadata } from "next";
import { Building2, CheckCircle2, MapPin } from "lucide-react";

import { AREA, BRAND, SITE_URL } from "@/lib/site";

const TITLE = "L'entreprise";
const DESCRIPTION =
  "Présentation type d'une entreprise de rénovation au service des syndics et des copropriétés — page de démonstration.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["entreprise rénovation", "rénovation immeuble syndic"],
  alternates: { canonical: "/entreprise" },
  openGraph: {
    title: `${TITLE} — ${BRAND.name}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/entreprise`,
    siteName: BRAND.name,
    locale: "fr_FR",
    type: "website",
  },
};

const VALEURS = [
  {
    title: "Un interlocuteur unique",
    description:
      "Du premier échange à la réception des travaux, un seul contact pour piloter le chantier.",
  },
  {
    title: "Des délais tenus",
    description:
      "Un planning annoncé et respecté — essentiel pour les décisions en assemblée générale.",
  },
  {
    title: "Une exigence de finition",
    description:
      "Des parties communes rendues dans un état à la hauteur de l'image de l'immeuble.",
  },
];

export default function EntreprisePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            L&rsquo;entreprise
          </p>
          <h1 className="mt-2 max-w-2xl font-serif text-3xl font-medium text-foreground sm:text-4xl">
            La rénovation au service des professionnels de l&rsquo;immobilier.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {BRAND.name} accompagne syndics et copropriétés dans leurs travaux de
            rénovation, de la remise en état des parties communes aux mises aux
            normes réglementaires.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <Building2 className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <p className="font-medium text-foreground">Pour les donneurs d&rsquo;ordre</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Un partenaire habitué aux processus des syndics et des agences :
              devis clairs, comptes rendus de chantier, respect des délais votés
              en assemblée générale.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <p className="font-medium text-foreground">Zone d&rsquo;intervention</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {AREA} et les environs — intervention rapide, connaissance du bâti local.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-serif text-2xl font-medium text-foreground">Notre méthode</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {VALEURS.map((valeur) => (
            <div key={valeur.title} className="flex flex-col gap-2">
              <CheckCircle2 className="size-5 text-primary" strokeWidth={1.5} />
              <p className="font-medium text-foreground">{valeur.title}</p>
              <p className="text-sm text-muted-foreground">{valeur.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

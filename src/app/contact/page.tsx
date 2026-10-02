import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { AREA, BRAND, EMAIL, PHONE, PHONE_HREF, SITE_URL } from "@/lib/site";

const TITLE = "Contact";
const DESCRIPTION = "Page de contact type d'une entreprise de rénovation — démonstration.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["devis rénovation", "contact entreprise rénovation"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${TITLE} — ${BRAND.name}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    siteName: BRAND.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Contact</p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl font-medium text-foreground sm:text-4xl">
        Parlons de votre projet.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Par téléphone, par email, ou via le formulaire — nous revenons vers vous rapidement.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/50"
          >
            <Phone className="size-5 text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-foreground">Téléphone</p>
              <p className="text-sm text-muted-foreground">{PHONE}</p>
            </div>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/50"
          >
            <Mail className="size-5 text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">{EMAIL}</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <MapPin className="size-5 text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-foreground">Zone desservie</p>
              <p className="text-sm text-muted-foreground">{AREA}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}

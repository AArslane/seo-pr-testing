import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PreloaderGate } from "@/components/preloader-gate";
import { BRAND, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const displaySerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const TITLE = "Rénovéa — Rénovation pour syndics & copropriétés (site de démonstration)";
const DESCRIPTION =
  "Démonstration de site pour une entreprise de rénovation travaillant avec des syndics et des copropriétés : parties communes, façades, mise aux normes.";
// Démo non indexée (cf. `robots` plus bas) : pas de mots-clés géolocalisés,
// on ne cherche pas à positionner une société fictive.
const KEYWORDS = [
  "démonstration site rénovation",
  "site vitrine syndic copropriété",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s — ${BRAND.name}` },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  // Démo : jamais indexée. Une société fictive n'a rien à faire dans les SERP.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <PreloaderGate>
          <SiteHeader />
          {children}
          <SiteFooter />
        </PreloaderGate>
      </body>
    </html>
  );
}

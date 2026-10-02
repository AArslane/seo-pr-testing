// Source de vérité unique du site — DÉMO réutilisable "rénovation B2B / syndics".
//
// ⚠️ Ce site est une démonstration : société fictive, aucune donnée d'un client
// réel. Il est issu de la maquette Rénoconseil 31 (24/08/2026), dépersonnalisée
// le même jour faute de deal — les médias du gérant avaient été fournis pour une
// démo privée, pas pour une publication (droit à l'image).
//
// Pour rebrander la démo sur un nouveau prospect : tout part de ce fichier.
// Ne JAMAIS y remettre le nom, la photo ou les chantiers d'un prospect avant
// d'avoir un accord écrit de publication.

export const SITE_URL = "https://renoconseil.vercel.app";

export const BRAND = {
  name: "Rénovéa",
  tagline: "Rénovation pour syndics & copropriétés · Toulouse et agglomération",
  logo: "/logo.svg",
} as const;

// Mention légale affichée en pied de page — la démo ne doit jamais pouvoir
// passer pour une entreprise existante.
export const DEMO_NOTICE =
  "Site de démonstration — société fictive, contenu d'illustration.";

// Numéro de la plage réservée à la fiction par l'ARCEP (01 99 00 XX XX) :
// techniquement injoignable, donc aucun risque d'appel parasite.
export const PHONE = "01 99 00 00 00";
export const PHONE_HREF = "tel:+33199000000";
export const EMAIL = "contact@example.com";

export const AREA = "Toulouse et agglomération";

// Hero de l'accueil — image libre (Unsplash), pas de média client.
export const HERO_MEDIA = {
  background:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop",
  image:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920&auto=format&fit=crop",
  poster:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
} as const;

// Section "preuves" (parallax) — images libres, illustratives.
export const PROOF_POINTS = [
  {
    title: "Syndics & copropriétés",
    description: "Un interlocuteur habitué aux contraintes des donneurs d'ordre professionnels.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Intervention locale",
    description: "Une intervention réactive sur l'ensemble de la zone couverte.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    reverse: true,
  },
  {
    title: "Réactivité",
    description: "Un suivi de chantier clair, du devis à la réception des travaux.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
  },
] as const;

// Réalisations et avant/après : emplacements VIDES par choix.
// On n'invente pas de chantiers (une preuve fabriquée reste une preuve fausse,
// même sur une démo) et on ne réutilise plus les photos d'un client.
// `image: null` → <RealisationCard> affiche un emplacement identifiable.
// C'est aussi l'argument de démo : « ici viennent vos photos ».
export type Realisation = {
  title: string;
  type?: string;
  location?: string;
  image: string | null;
};

export const REALISATIONS: Realisation[] = [
  { title: "Rénovation de hall d'immeuble", type: "Copropriété", image: null },
  { title: "Ravalement de façade", type: "Extérieur", image: null },
  { title: "Réfection de cage d'escalier", type: "Copropriété", image: null },
];

export type BeforeAfter = {
  title: string;
  before: string | null;
  after: string | null;
};

export const BEFORE_AFTER: BeforeAfter[] = [
  { title: "Réfection de parties communes", before: null, after: null },
  { title: "Peinture et revêtements de sol", before: null, after: null },
  { title: "Mise aux normes d'un palier", before: null, after: null },
  { title: "Reprise d'étanchéité de terrasse", before: null, after: null },
];

export type ServiceCategory = "interieur" | "exterieur" | "copropriete";

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: "interieur", label: "Intérieur" },
  { id: "exterieur", label: "Extérieur" },
  { id: "copropriete", label: "Copropriété" },
];

export type Service = {
  title: string;
  description: string;
  category: ServiceCategory;
};

export const SERVICES: Service[] = [
  {
    title: "Rénovation de parties communes",
    description: "Halls, cages d'escalier, paliers — remise à neuf complète, du sol au plafond.",
    category: "copropriete",
  },
  {
    title: "Ravalement de façade",
    description: "Traitement, réparation et embellissement des façades d'immeubles.",
    category: "exterieur",
  },
  {
    title: "Peinture & revêtements",
    description: "Peinture intérieure et extérieure, revêtements de sol et muraux.",
    category: "interieur",
  },
  {
    title: "Mise aux normes & accessibilité",
    description: "Travaux de mise en conformité réglementaire pour les immeubles collectifs.",
    category: "copropriete",
  },
  {
    title: "Étanchéité & toiture",
    description: "Réfection et entretien des toitures et terrasses en copropriété.",
    category: "exterieur",
  },
  {
    title: "Rénovation énergétique",
    description: "Isolation et amélioration de la performance énergétique des bâtiments.",
    category: "exterieur",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/entreprise", label: "L'entreprise" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

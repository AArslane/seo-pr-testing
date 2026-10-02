import type { MetadataRoute } from "next";

// Démo (société fictive) : on interdit l'indexation à tout le monde, moteurs
// classiques comme crawlers d'IA. Rien ici ne doit se retrouver dans une SERP
// ni servir de source à un modèle. Le sitemap a été supprimé pour la même raison.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}

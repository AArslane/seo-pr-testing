import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // images.unsplash.com : visuels d'ambiance libres de la démo (hero et
    // section preuves). Aucun média client n'est servi depuis ce site.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;

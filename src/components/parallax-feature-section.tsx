"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Origine : composant "parallax scroll feature section" (21st.dev). Logique
// d'animation reprise à l'identique (clip-path reveal + parallax vertical au
// scroll) ; le composant original appelait useRef/useScroll dans un .map(),
// invalide selon les règles de React (hooks dans une boucle) — ici chaque
// section est son propre composant, avec ses hooks au niveau racine. Intro/
// outro de démo retirées (hors-sujet). h-screen par section réduit à
// min-h-[80vh] pour ne pas ajouter 3 écrans pleins de scroll après le hero.
export type FeatureItem = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

function ParallaxFeatureItem({ item }: { item: FeatureItem }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <div
      ref={ref}
      className={`flex min-h-[80vh] flex-col items-center justify-center gap-10 py-16 sm:gap-16 md:flex-row md:py-0 ${
        item.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div style={{ y: translateY }} className="max-w-sm px-4 text-center md:text-left">
        <h3 className="font-serif text-4xl font-medium text-foreground sm:text-5xl">
          {item.title}
        </h3>
        <p className="mt-5 text-muted-foreground">{item.description}</p>
      </motion.div>

      <motion.div
        style={{ opacity, clipPath }}
        className="relative size-64 shrink-0 overflow-hidden rounded-2xl sm:size-80"
      >
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </motion.div>
    </div>
  );
}

export function ParallaxFeatureSection({ items }: { items: readonly FeatureItem[] }) {
  return (
    <div className="mx-auto max-w-5xl">
      {items.map((item) => (
        <ParallaxFeatureItem key={item.title} item={item} />
      ))}
    </div>
  );
}

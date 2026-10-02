"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Recréation maison (inspirée des préchargeurs typographiques type Skiper UI /
// dennissnellenberg.com) — pas de code source tiers, juste framer-motion déjà
// présent dans le projet. Modifier WORDS pour changer la séquence affichée.
const WORDS = ["Bonjour", "Rénovation", "Rénovéa"];
const WORD_DURATION = 650; // ms d'affichage par mot (480 × 1.35)
const EXIT_DELAY = 475; // ms de pause sur le dernier mot avant le wipe (350 × 1.35)
const EASE = [0.76, 0, 0.24, 1] as const;

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (index < WORDS.length - 1) {
      const timer = setTimeout(() => setIndex((i) => i + 1), WORD_DURATION);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setExiting(true), EXIT_DELAY);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-primary"
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.95, ease: EASE }}
      onAnimationComplete={() => {
        if (exiting) onComplete();
      }}
    >
      <div className="relative overflow-hidden px-4 py-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[index]}
            initial={{ y: "110%", rotate: 6, opacity: 0 }}
            animate={{ y: "0%", rotate: 0, opacity: 1 }}
            exit={{ y: "-110%", rotate: -6, opacity: 0 }}
            transition={{ duration: 0.68, ease: EASE }}
            className="block font-serif text-4xl font-medium text-primary-foreground sm:text-6xl"
          >
            {WORDS[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

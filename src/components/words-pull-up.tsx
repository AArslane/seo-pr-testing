"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Origine : https://21st.dev/@rahil1202/components/prisma-hero — porté tel
// quel (seule la brique WordsPullUp est utilisée ici, pas le hero complet ni
// la vidéo). Révèle un titre mot par mot dès qu'il entre dans le viewport.
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export function WordsPullUp({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}

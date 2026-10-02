"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Preloader } from "@/components/preloader";

// Ne s'affiche qu'au premier chargement complet (le layout ne remonte pas
// lors des navigations internes en App Router — pas de rejeu à chaque page).
// Respecte prefers-reduced-motion : le préchargeur est simplement sauté.
export function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = show ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && <Preloader onComplete={() => setShow(false)} />}
      </AnimatePresence>
      {children}
    </>
  );
}

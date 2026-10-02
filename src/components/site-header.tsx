"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

import { BRAND, NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

// Style de nav pill flottante inspiré de https://21st.dev/@rahil1202/components/prisma-hero,
// recoloré avec la palette navy/gris du projet. Sticky (pas absolute comme
// l'original) pour garder le téléphone accessible en scrollant. Sous `md`, la
// pill (scroll horizontal) est remplacée par un bouton burger + panneau
// déroulant — l'ancienne version débordait/se coupait sur petit écran (24/08).
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-full bg-background/90 py-1.5 pr-3 pl-2 shadow-sm backdrop-blur"
        >
          <Image src={BRAND.logo} alt={BRAND.name} width={28} height={28} className="size-7" unoptimized />
          <span className="hidden font-serif text-sm font-medium text-foreground sm:inline">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-8 rounded-full bg-primary px-6 py-2.5 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "shrink-0 text-xs font-medium whitespace-nowrap text-primary-foreground/70 transition-colors hover:text-primary-foreground lg:text-sm",
                pathname === link.href && "text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <Phone className="size-3.5" />
            <span className="hidden sm:inline">{PHONE}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-background p-2 shadow-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground",
                pathname === link.href && "bg-secondary text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

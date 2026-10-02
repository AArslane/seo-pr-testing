import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

import { AREA, BRAND, DEMO_NOTICE, EMAIL, NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Image src={BRAND.logo} alt={BRAND.name} width={32} height={32} className="size-8" unoptimized />
            <span className="font-serif text-base font-medium text-foreground">{BRAND.name}</span>
          </div>
          <p className="text-sm text-muted-foreground">{BRAND.tagline}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">Navigation</p>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">Contact</p>
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="size-3.5" /> {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Mail className="size-3.5" /> {EMAIL}
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-3.5" /> {AREA}
          </span>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        <p>{DEMO_NOTICE}</p>
        <p className="mt-1">© {new Date().getFullYear()} {BRAND.name}.</p>
      </div>
    </footer>
  );
}

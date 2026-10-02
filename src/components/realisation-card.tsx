import Image from "next/image";
import { Building2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Realisation } from "@/lib/site";

// Un seul point d'entrée par visuel : tant que `image` est null, on affiche ce
// placeholder identifiable — jamais une case vide ou une icône d'image cassée.
// Sur la démo toutes les entrées sont à null : les photos d'un client réel ne
// sont ajoutées qu'après accord écrit de publication.
export function RealisationCard({ item }: { item: Realisation }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <Building2 className="size-8" strokeWidth={1.5} />
            <span className="text-xs font-medium uppercase tracking-wide">
              Votre photo ici
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        {(item.type || item.location) && (
          <div className="flex items-center gap-2">
            {item.type && <Badge variant="secondary">{item.type}</Badge>}
            {item.location && <span className="text-xs text-muted-foreground">{item.location}</span>}
          </div>
        )}
        <p className="text-sm font-medium">{item.title}</p>
      </div>
    </div>
  );
}

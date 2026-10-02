import Image from "next/image";
import { ImageOff } from "lucide-react";

import type { BeforeAfter } from "@/lib/site";

// `before`/`after` peuvent être null : la démo n'affiche aucune photo de
// chantier réelle. Dans ce cas la carte montre un emplacement identifiable —
// on ne fabrique pas de fausse preuve avec des images de banque.
function Slot({
  src,
  alt,
  label,
  labelClassName,
}: {
  src: string | null;
  alt: string;
  label: string;
  labelClassName: string;
}) {
  return (
    <div className="relative overflow-hidden">
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-muted-foreground">
          <ImageOff className="size-6" strokeWidth={1.5} />
          <span className="text-[10px] font-medium uppercase tracking-wide">
            Votre photo
          </span>
        </div>
      )}
      <span className={labelClassName}>{label}</span>
    </div>
  );
}

export function BeforeAfterCard({ item }: { item: BeforeAfter }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative grid aspect-[4/3] grid-cols-2 overflow-hidden bg-secondary">
        <Slot
          src={item.before}
          alt={`${item.title} — avant`}
          label="Avant"
          labelClassName="absolute top-2 left-2 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background"
        />
        <div className="absolute inset-y-0 left-1/2 w-px bg-background/60" />
        <Slot
          src={item.after}
          alt={`${item.title} — après`}
          label="Après"
          labelClassName="absolute top-2 left-2 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground"
        />
      </div>
      <p className="p-4 text-sm font-medium text-foreground">{item.title}</p>
    </div>
  );
}

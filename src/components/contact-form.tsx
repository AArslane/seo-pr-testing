"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Formulaire de démo : aucune soumission réelle (pas de backend, pas de
// mailto). L'envoi effectif sera branché après le paiement du site.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="font-medium text-foreground">Message envoyé (aperçu)</p>
        <p className="mt-1 text-sm text-muted-foreground">
          En production, ce formulaire vous enverra directement le message par email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="nom">Nom</Label>
          <Input id="nom" name="nom" required placeholder="Votre nom" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="vous@exemple.fr" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="telephone">Téléphone</Label>
        <Input id="telephone" name="telephone" type="tel" placeholder="06 XX XX XX XX" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required placeholder="Décrivez votre projet ou votre demande" rows={5} />
      </div>
      <Button type="submit" size="lg" className="h-11 self-start px-6 text-sm">
        Envoyer <Send className="size-4" />
      </Button>
    </form>
  );
}

import { CheckIcon } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

/**
 * Engagements concrets.
 *
 * Cette section remplace volontairement des témoignages : Velnex est une
 * jeune entreprise, et inventer des avis clients tromperait les visiteurs.
 * Dès qu'un client acceptera de témoigner, sa parole prendra cette place.
 */
const COMMITMENTS = [
  {
    title: "Un devis clair, pas de surprise",
    description:
      "Périmètre, délai et prix fixés avant de commencer. Si le besoin évolue, on en reparle ensemble.",
  },
  {
    title: "Vous êtes propriétaire du code",
    description:
      "Le code source vous appartient et vous est livré. Aucun verrouillage, aucune dépendance forcée.",
  },
  {
    title: "Un interlocuteur unique",
    description:
      "Pas de chaîne de sous-traitance : vous parlez directement à la personne qui construit votre produit.",
  },
  {
    title: "Des versions testables tôt",
    description:
      "Vous manipulez le produit pendant sa construction, pas seulement à la livraison finale.",
  },
  {
    title: "Vos données restent en Europe",
    description:
      "Hébergement européen, chiffrement, conformité RGPD prise au sérieux dès la conception.",
  },
  {
    title: "Une réponse sous 48 h",
    description:
      "Toute question, tout blocage : vous obtenez une réponse en moins de deux jours ouvrés.",
  },
];

export function Commitments() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Nos engagements"
          title="Ce sur quoi vous pouvez compter"
          description="Velnex est une jeune entreprise : plutôt que des promesses, voici des engagements que vous pourrez nous opposer."
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMITMENTS.map((c) => (
            <StaggerItem key={c.title}>
              <article className="card lift ring-sheen h-full rounded-2xl p-6">
                <span className="grid size-8 place-items-center rounded-lg border border-line bg-white/[0.03] text-white/80">
                  <CheckIcon className="size-4" />
                </span>
                <h3 className="mt-5 font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

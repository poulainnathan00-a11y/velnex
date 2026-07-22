import {
  BrainCircuitIcon,
  GaugeIcon,
  HeadphonesIcon,
  LayersIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const REASONS = [
  {
    icon: GaugeIcon,
    title: "Développement rapide",
    description:
      "Une première version utilisable en quelques semaines, pas en quelques trimestres.",
  },
  {
    icon: LayersIcon,
    title: "Technologies modernes",
    description:
      "Next.js, TypeScript, Postgres : un socle éprouvé, maintenable et sans dette technique.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Architecture scalable",
    description:
      "Conçue dès le départ pour encaisser la montée en charge sans réécriture.",
  },
  {
    icon: WrenchIcon,
    title: "Maintenance",
    description:
      "Corrections, mises à jour et évolutions : votre produit reste vivant après la livraison.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description:
      "Un interlocuteur unique, en français, qui connaît votre projet de bout en bout.",
  },
  {
    icon: BrainCircuitIcon,
    title: "IA intégrée",
    description:
      "L'intelligence artificielle au service de l'usage réel, jamais comme argument marketing.",
  },
];

export function WhyVelnex() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Pourquoi Velnex"
          title="Ce que vous obtenez en travaillant avec nous"
          description="Une structure indépendante, réactive, qui soigne chaque détail plutôt que de courir après le volume."
        />

        {/* Timeline : filet vertical + jalons */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-line-strong to-transparent"
          />

          <Stagger className="space-y-8" gap={0.08}>
            {REASONS.map((r) => (
              <StaggerItem key={r.title}>
                <div className="group relative flex gap-6">
                  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-white/70 transition-all duration-300 group-hover:border-line-strong group-hover:text-white">
                    <r.icon className="size-4.5" />
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-semibold tracking-tight">{r.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">
                      {r.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

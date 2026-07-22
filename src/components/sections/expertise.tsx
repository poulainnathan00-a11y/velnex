import {
  BrainCircuitIcon,
  CloudIcon,
  LayersIcon,
  SparklesIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const EXPERTISES = [
  {
    icon: BrainCircuitIcon,
    title: "Intelligence artificielle",
    description:
      "Automatisation intelligente grâce aux derniers modèles d'IA, intégrés là où ils font vraiment gagner du temps.",
  },
  {
    icon: LayersIcon,
    title: "Développement SaaS",
    description:
      "Des applications web évolutives, conçues pour durer et pour absorber votre croissance sans être réécrites.",
  },
  {
    icon: CloudIcon,
    title: "Cloud & infrastructure",
    description:
      "Déploiement sécurisé, rapide et scalable. Vos données restent protégées et hébergées en Europe.",
  },
  {
    icon: SparklesIcon,
    title: "UX/UI premium",
    description:
      "Des interfaces modernes et épurées, pensées pour être adoptées par vos équipes — et pour convertir.",
  },
];

export function Expertise() {
  return (
    <section id="solutions" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Nos expertises"
          title="Quatre domaines, une même exigence"
          description="Nous couvrons toute la chaîne, de la conception au déploiement, pour livrer des produits qui tiennent la route."
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2">
          {EXPERTISES.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card lift ring-sheen group h-full rounded-2xl p-8">
                <span className="grid size-12 place-items-center rounded-xl border border-line bg-white/[0.03] text-white/80 transition-all duration-300 group-hover:border-line-strong group-hover:text-white">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

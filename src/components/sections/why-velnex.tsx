import { RocketIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const PILLARS = [
  {
    icon: RocketIcon,
    title: "Innovation",
    description: "Nous utilisons l'IA pour simplifier les tâches complexes.",
  },
  {
    icon: ZapIcon,
    title: "Performance",
    description: "Des applications rapides, modernes et fiables.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Sécurité",
    description: "Architecture robuste et protection des données.",
  },
];

export function WhyVelnex() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Pourquoi Velnex"
          title="Une exigence sur chaque détail"
          description="Nous construisons des produits que nous aimerions utiliser nous-mêmes : rapides, clairs et sûrs."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <article className="glass glow-hover group h-full rounded-2xl p-8 hover:-translate-y-1">
                <span className="grid size-12 place-items-center rounded-xl border border-line bg-white/[0.03] text-white/70 transition-colors duration-300 group-hover:border-line-strong group-hover:text-white">
                  <pillar.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

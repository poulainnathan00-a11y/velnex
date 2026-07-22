import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Découverte",
    description:
      "On cerne votre métier, vos irritants et ce qui vous fait perdre du temps aujourd'hui.",
  },
  {
    title: "Conception",
    description:
      "Maquettes et parcours utilisateur : vous voyez le produit avant qu'une ligne soit écrite.",
  },
  {
    title: "Développement",
    description:
      "Construction par itérations courtes, avec des versions testables tout au long du projet.",
  },
  {
    title: "Déploiement",
    description:
      "Mise en ligne sécurisée, accompagnement de vos équipes et reprise de vos données.",
  },
  {
    title: "Évolution",
    description:
      "Le produit vit : on l'améliore au fil de vos retours et de vos nouveaux besoins.",
  },
];

export function Method() {
  return (
    <section className="relative border-y border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Notre méthode"
          title="Cinq étapes, aucune zone d'ombre"
          description="Vous savez à tout moment où en est votre projet et ce qui arrive ensuite."
        />

        <div className="relative mt-16">
          {/* Filet horizontal reliant les étapes (desktop) */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block"
          />

          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="group relative">
                  <span className="relative z-10 grid size-10 place-items-center rounded-full border border-line bg-surface font-mono text-xs text-white/70 transition-all duration-300 group-hover:border-line-strong group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

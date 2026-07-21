import { Reveal } from "@/components/ui/reveal";

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="glow-orb right-1/4 top-1/2 size-[440px] bg-accent/10" />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-soft">
            Notre vision
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-2xl font-medium leading-[1.35] tracking-tight sm:text-[34px]">
            Créer des logiciels qui font{" "}
            <span className="text-gradient">gagner du temps</span> aux
            entreprises.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-muted">
            Notre objectif est de construire un écosystème de solutions SaaS
            innovantes, simples à utiliser et propulsées par l&apos;intelligence
            artificielle.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

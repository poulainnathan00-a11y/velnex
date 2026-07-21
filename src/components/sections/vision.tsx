import { Reveal } from "@/components/ui/reveal";

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(9,9,11,0.035),transparent_70%)]"
      />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-dim">
            Notre vision
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-2xl font-medium leading-[1.35] tracking-tight sm:text-[34px]">
            <span className="text-gradient">
              Créer des logiciels qui font gagner du temps aux entreprises.
            </span>
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

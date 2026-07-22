"use client";

import { motion } from "motion/react";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

import { AmbientBackground } from "@/components/ambient-background";
import { HeroVisual } from "@/components/hero-visual";
import { ButtonLink } from "@/components/ui/button";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/** Le titre se révèle mot par mot. */
function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[58px]">
      <span className="text-gradient">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: EASE }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <AmbientBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8">
        {/* Colonne texte */}
        <div className="text-center lg:text-left">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-black/[0.03] px-3.5 py-1.5 text-xs text-muted backdrop-blur">
              <SparklesIcon className="size-3.5" />
              Solutions SaaS &amp; IA sur mesure
            </span>
          </motion.div>

          <div className="mt-7">
            <AnimatedTitle text="Construisons les logiciels qui feront grandir votre entreprise." />
          </div>

          <motion.p
            {...fadeUp(0.45)}
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted lg:mx-0"
          >
            Nous développons des solutions SaaS, des plateformes IA et des outils
            sur mesure pour automatiser votre activité et accélérer votre
            croissance.
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <ButtonLink href="/#solutions" size="lg">
              Découvrir nos solutions
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/recrutia" variant="secondary" size="lg">
              Voir RecrutIA
            </ButtonLink>
          </motion.div>

          {/* Mise en avant du produit phare, dès le hero */}
          <motion.a
            {...fadeUp(0.65)}
            href="/recrutia"
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-white p-2 pr-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-product to-product-2 text-sm font-bold text-white">
              R
            </span>
            <span className="text-left">
              <span className="block text-[13px] font-semibold leading-tight">
                Notre produit phare : RecrutIA
              </span>
              <span className="block text-xs text-muted">
                Le recrutement assisté par IA
              </span>
            </span>
            <ArrowRightIcon className="size-4 text-dim transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
          </motion.a>
        </div>

        {/* Colonne illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

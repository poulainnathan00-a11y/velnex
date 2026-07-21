"use client";

import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";

import { HeroVisual } from "@/components/hero-visual";
import { ButtonLink } from "@/components/ui/button";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Fond : pointillés + voile lumineux très doux */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(79,124,255,0.07),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Colonne texte */}
        <div className="text-center lg:text-left">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs text-muted shadow-[var(--shadow-card)]">
              <span className="size-1.5 rounded-full bg-ink" />
              Éditeur de logiciels · France
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[58px]"
          >
            <span className="text-gradient">
              Construisons les logiciels IA de demain.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted lg:mx-0"
          >
            Chez Velnex, nous développons des solutions SaaS intelligentes qui
            permettent aux entreprises de gagner du temps, automatiser leurs
            processus et travailler plus efficacement.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <ButtonLink href="/#recrutia" size="lg">
              Découvrir nos produits
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary" size="lg">
              Nous contacter
            </ButtonLink>
          </motion.div>

          {/* Mise en avant du produit dès le hero */}
          <motion.div {...fadeUp(0.42)} className="mt-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
              Notre premier produit
            </p>
            <a
              href="#recrutia"
              className="group mt-4 inline-flex items-center gap-3.5 rounded-2xl border border-line bg-white p-3 pr-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-product to-product-2 text-sm font-bold text-white shadow-[0_8px_20px_-8px_var(--color-product)]">
                R
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold">RecrutIA</span>
                <span className="block text-xs text-muted">
                  Le recrutement assisté par IA
                </span>
              </span>
              <ArrowRightIcon className="size-4 text-dim transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
            </a>
          </motion.div>
        </div>

        {/* Colonne illustration */}
        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

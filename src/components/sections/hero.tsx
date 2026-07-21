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
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade" />
      <div
        aria-hidden
        className="glow-orb -top-40 left-1/2 size-[560px] -translate-x-1/2 bg-white/[0.07]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Colonne texte */}
        <div className="text-center lg:text-left">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted backdrop-blur">
              <span className="size-1.5 rounded-full bg-white/70" />
              Éditeur de logiciels · France
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]"
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
          <motion.div {...fadeUp(0.42)} className="mt-12">
            <div className="hairline lg:hidden" />
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-dim lg:mt-0">
              Notre premier produit
            </p>
            <a
              href="#recrutia"
              className="mt-3 inline-flex items-center gap-3 text-left transition-opacity hover:opacity-80"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-product to-product-2 text-sm font-bold">
                R
              </span>
              <span>
                <span className="block text-sm font-medium">RecrutIA</span>
                <span className="block text-xs text-dim">
                  Le recrutement assisté par IA
                </span>
              </span>
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

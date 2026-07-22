"use client";

import { motion } from "motion/react";
import { ActivityIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const BARS = [34, 52, 41, 68, 58, 84, 72, 91];

/**
 * Illustration du hero : tableau de bord SaaS, entouré de deux cartes
 * flottantes. Thème clair, purement décoratif (aria-hidden).
 */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[540px]">
      {/* Lueur colorée derrière la carte */}
      <div className="glow-orb inset-x-8 top-6 h-64 bg-[#4f7cff]/10" />

      {/* Carte principale */}
      <div className="relative rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-float)]">
        {/* Barre de fenêtre */}
        <div className="flex items-center gap-1.5 border-b border-line pb-4">
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="ml-3 font-mono text-[11px] text-dim">
            velnex · tableau de bord
          </span>
        </div>

        {/* Indicateurs */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { label: "Traitées", value: "1 284" },
            { label: "Temps gagné", value: "72 %" },
            { label: "Précision", value: "96 %" },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: EASE }}
              className="rounded-xl border border-line bg-surface p-3"
            >
              <p className="text-[10px] text-dim">{kpi.label}</p>
              <p className="mt-1 text-base font-semibold tracking-tight">
                {kpi.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Graphe */}
        <div className="mt-3 rounded-xl border border-line bg-surface p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-dim">Automatisation</p>
            <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
              <TrendingUpIcon className="size-3" />
              +24 %
            </span>
          </div>
          <div className="mt-3 flex h-24 items-end gap-1.5">
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.9, delay: 0.8 + i * 0.06, ease: EASE }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-ink/15 to-ink/70"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carte flottante — analyse IA */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: EASE }}
        className="absolute -left-6 top-[42%] hidden sm:block"
      >
        <div
          className="w-44 rounded-xl border border-line bg-white p-3.5 shadow-[var(--shadow-float)]"
          style={{ animation: "float 7s ease-in-out infinite" }}
        >
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-surface-2 text-ink">
              <SparklesIcon className="size-3.5" />
            </span>
            <p className="text-[11px] font-medium">Analyse IA</p>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-surface-2">
              <div className="h-full w-[86%] rounded-full bg-ink/75" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-surface-2">
              <div className="h-full w-[58%] rounded-full bg-ink/35" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Carte flottante — statut */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
        className="absolute -right-4 -top-6 hidden sm:block"
      >
        <div
          className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 shadow-[var(--shadow-float)]"
          style={{ animation: "float 9s ease-in-out infinite reverse" }}
        >
          <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <ActivityIcon className="size-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-medium leading-none">Automatisé</p>
            <p className="mt-1 text-[10px] leading-none text-dim">temps réel</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

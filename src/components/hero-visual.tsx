"use client";

import { motion } from "motion/react";
import { ActivityIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const BARS = [38, 55, 44, 72, 61, 88, 76];

/**
 * Illustration du hero : tableau de bord SaaS stylisé, entouré de deux cartes
 * flottantes. Thème clair, décoratif (aria-hidden).
 */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[520px]">
      {/* Carte principale */}
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        className="relative rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-float)]"
      >
        <div className="flex items-center gap-1.5 border-b border-line pb-4">
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="ml-3 text-[11px] text-dim">Tableau de bord</span>
        </div>

        {/* KPIs */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Traitées", value: "1 284" },
            { label: "Gain de temps", value: "72 %" },
            { label: "Précision", value: "96 %" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl bg-surface p-3">
              <p className="text-[10px] text-dim">{kpi.label}</p>
              <p className="mt-1 text-base font-semibold tracking-tight">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        {/* Graphe */}
        <div className="mt-3 rounded-xl bg-surface p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-dim">Activité</p>
            <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
              <TrendingUpIcon className="size-3" />
              +24 %
            </span>
          </div>
          <div className="mt-3 flex h-20 items-end gap-2">
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.07, ease: EASE }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-ink/15 to-ink/70"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Carte flottante — analyse IA */}
      <motion.div
        initial={{ opacity: 0, x: -28, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        className="absolute -left-6 top-1/2 hidden sm:block"
      >
        <div
          className="w-48 rounded-xl border border-line bg-white p-3.5 shadow-[var(--shadow-float)]"
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
              <div className="h-full w-[62%] rounded-full bg-ink/35" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Carte flottante — statut */}
      <motion.div
        initial={{ opacity: 0, x: 28, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
        className="absolute -right-4 -top-8 hidden sm:block"
      >
        <div
          className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 shadow-[var(--shadow-float)]"
          style={{ animation: "float 8.5s ease-in-out infinite reverse" }}
        >
          <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <ActivityIcon className="size-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-medium leading-none">Automatisé</p>
            <p className="mt-1 text-[10px] leading-none text-dim">
              en temps réel
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

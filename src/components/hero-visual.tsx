"use client";

import { motion } from "motion/react";
import { ActivityIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const BARS = [38, 55, 44, 72, 61, 88, 76];

/**
 * Illustration du hero : un tableau de bord SaaS stylisé, entouré de deux
 * cartes flottantes. Purement décoratif (aria-hidden).
 */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[520px]">
      {/* Halos */}
      <div
        className="glow-orb -top-16 left-1/4 size-64 bg-brand/30"
        style={{ animation: "float 9s ease-in-out infinite" }}
      />
      <div className="glow-orb bottom-0 right-0 size-56 bg-accent/25" />

      {/* Carte principale */}
      <motion.div
        initial={{ opacity: 0, y: 34, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        className="glass relative rounded-2xl p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
      >
        {/* Barre de fenêtre */}
        <div className="flex items-center gap-1.5 border-b border-line pb-4">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] text-muted">Tableau de bord</span>
        </div>

        {/* KPIs */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Traitées", value: "1 284" },
            { label: "Gain de temps", value: "72 %" },
            { label: "Précision", value: "96 %" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[10px] text-muted">{kpi.label}</p>
              <p className="mt-1 text-base font-semibold tracking-tight">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        {/* Graphe */}
        <div className="mt-4 rounded-xl bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-muted">Activité</p>
            <span className="flex items-center gap-1 text-[11px] text-brand-soft">
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
                className="flex-1 rounded-t-md bg-gradient-to-t from-brand/40 to-brand"
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
          className="glass w-48 rounded-xl p-3.5 shadow-2xl shadow-black/60"
          style={{ animation: "float 7s ease-in-out infinite" }}
        >
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-brand/15 text-brand-soft">
              <SparklesIcon className="size-3.5" />
            </span>
            <p className="text-[11px] font-medium">Analyse IA</p>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-brand to-accent" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand to-accent" />
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
          className="glass flex items-center gap-2.5 rounded-xl px-3.5 py-3 shadow-2xl shadow-black/60"
          style={{ animation: "float 8.5s ease-in-out infinite reverse" }}
        >
          <span className="grid size-7 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
            <ActivityIcon className="size-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-medium leading-none">Automatisé</p>
            <p className="mt-1 text-[10px] leading-none text-muted">
              en temps réel
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

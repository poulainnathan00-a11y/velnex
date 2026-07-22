"use client";

import { motion } from "motion/react";
import { CheckIcon, SparklesIcon, TrophyIcon } from "lucide-react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const CANDIDATES = [
  { initial: "T", name: "Thomas M.", role: "6 ans · React, Node", score: 92, top: true },
  { initial: "L", name: "Léa D.", role: "3 ans · React, UX", score: 74, top: false },
  { initial: "K", name: "Karim B.", role: "1 an · JavaScript", score: 51, top: false },
];

/**
 * Illustration du hero : un aperçu direct de RecrutIA (classement de
 * candidats), pour montrer le produit phare dès l'arrivée. Thème clair,
 * décoratif (aria-hidden). La couleur d'accent est celle du produit.
 */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[540px]">
      {/* Lueur colorée derrière la carte */}
      <div className="glow-orb inset-x-8 top-6 h-64 bg-[#4f7cff]/12" />

      {/* Fenêtre produit */}
      <div className="relative rounded-2xl border border-line bg-white shadow-[var(--shadow-float)]">
        {/* Barre de fenêtre */}
        <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="size-2.5 rounded-full bg-surface-2" />
          <span className="ml-3 flex items-center gap-1.5 font-mono text-[11px] text-dim">
            <span className="grid size-4 place-items-center rounded bg-gradient-to-br from-product to-product-2 text-[8px] font-bold text-white">
              R
            </span>
            recrutia.pro
          </span>
        </div>

        <div className="p-5">
          {/* En-tête : offre + compteur */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Développeur Fullstack
              </p>
              <p className="text-[11px] text-dim">127 candidatures analysées</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-product/25 bg-product/8 px-2.5 py-1 text-[11px] font-medium text-product">
              <SparklesIcon className="size-3" />
              Classé par l&apos;IA
            </span>
          </div>

          {/* Classement des candidats */}
          <div className="mt-4 space-y-2.5">
            {CANDIDATES.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.6 + i * 0.14, ease: EASE }}
                className={`flex items-center gap-3 rounded-xl border p-3 ${
                  c.top
                    ? "border-product/30 bg-product/[0.04]"
                    : "border-line bg-surface"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                    c.top
                      ? "bg-gradient-to-br from-product to-product-2 text-white"
                      : "bg-surface-2 text-muted"
                  }`}
                >
                  {c.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 truncate text-[13px] font-medium">
                    {c.name}
                    {c.top && <TrophyIcon className="size-3 text-product" />}
                  </p>
                  <p className="truncate text-[11px] text-dim">{c.role}</p>
                </div>
                <span
                  className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums ${
                    c.score >= 80
                      ? "bg-product/10 text-product"
                      : c.score >= 60
                        ? "bg-amber-100 text-amber-700"
                        : "bg-surface-2 text-muted"
                  }`}
                >
                  {c.score}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Recommandation IA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
            className="mt-4 flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3"
          >
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-product/12 text-product">
              <CheckIcon className="size-3" />
            </span>
            <p className="text-[11px] leading-relaxed text-muted">
              <span className="font-medium text-ink">Recommandation :</span>{" "}
              Thomas M. correspond au poste sur l&apos;expérience et la stack. À
              convoquer en priorité.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Carte flottante — score expliqué */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
        className="absolute -left-6 top-[38%] hidden sm:block"
      >
        <div
          className="w-40 rounded-xl border border-line bg-white p-3.5 shadow-[var(--shadow-float)]"
          style={{ animation: "float 7s ease-in-out infinite" }}
        >
          <p className="text-[10px] text-dim">Score de compatibilité</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-product">
            92<span className="text-sm text-dim">/100</span>
          </p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-surface-2">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-product to-product-2" />
          </div>
        </div>
      </motion.div>

      {/* Carte flottante — gain de temps */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        className="absolute -right-4 -top-6 hidden sm:block"
      >
        <div
          className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 shadow-[var(--shadow-float)]"
          style={{ animation: "float 9s ease-in-out infinite reverse" }}
        >
          <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <SparklesIcon className="size-3.5" />
          </span>
          <div>
            <p className="text-[11px] font-medium leading-none">~30 s</p>
            <p className="mt-1 text-[10px] leading-none text-dim">par CV</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

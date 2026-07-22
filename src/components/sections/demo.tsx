"use client";

import { motion } from "motion/react";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const SHORTLIST = [
  { initial: "T", name: "Thomas M.", role: "6 ans · React, Node", score: 92 },
  { initial: "L", name: "Léa D.", role: "3 ans · React, UX", score: 74 },
  { initial: "K", name: "Karim B.", role: "1 an · JavaScript", score: 51 },
];

export function Demo() {
  return (
    <section className="relative border-y border-line bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="RecrutIA en action"
          title="De 100 CV à une shortlist, en quelques minutes"
          description="Vous importez la pile de candidatures. L'IA lit chaque CV, le note face à votre offre et fait remonter les meilleurs profils — justification à l'appui."
        />

        <div className="mt-16 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Avant : la pile de CV */}
          <Reveal>
            <div className="card rounded-2xl p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-dim">
                Ce que vous recevez
              </p>
              <div className="relative mt-6 h-56">
                {/* Pile désordonnée de candidatures */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-x-4 rounded-xl border border-line bg-background p-3 shadow-sm"
                    style={{
                      top: i * 14,
                      transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i + 1)}deg)`,
                      zIndex: 5 - i,
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="size-8 shrink-0 rounded-full bg-surface-2" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2 w-2/3 rounded-full bg-surface-2" />
                        <div className="h-2 w-1/3 rounded-full bg-surface-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm font-medium text-muted">
                127 candidatures · des heures de lecture
              </p>
            </div>
          </Reveal>

          {/* Flux IA */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col items-center gap-2"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-product to-product-2 text-white shadow-[0_12px_30px_-10px_var(--color-product)]">
                <SparklesIcon className="size-5" />
              </span>
              <span className="text-xs font-medium text-product">Analyse IA</span>
              <ArrowRightIcon className="size-5 rotate-90 text-dim lg:rotate-0" />
            </motion.div>
          </div>

          {/* Après : la shortlist classée */}
          <Reveal delay={0.15}>
            <div className="card ring-sheen rounded-2xl p-6 shadow-[var(--shadow-lift)]">
              <p className="text-xs font-medium uppercase tracking-widest text-product">
                Ce que RecrutIA vous rend
              </p>
              <div className="mt-6 space-y-3">
                {SHORTLIST.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: EASE }}
                    className="flex items-center gap-3 rounded-xl border border-line bg-background p-3"
                  >
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                        c.score >= 80
                          ? "bg-gradient-to-br from-product to-product-2 text-white"
                          : "bg-surface-2 text-muted"
                      }`}
                    >
                      {c.initial}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{c.name}</p>
                      <p className="truncate text-[11px] text-dim">{c.role}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums ${
                        c.score >= 80
                          ? "bg-product/10 text-product"
                          : "bg-surface-2 text-muted"
                      }`}
                    >
                      {c.score}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 text-center text-sm font-medium text-muted">
                Les 3 meilleurs profils · prêts en quelques minutes
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <ButtonLink href="/recrutia" size="lg">
              Voir comment ça marche
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

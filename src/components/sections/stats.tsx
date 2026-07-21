"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import { Stagger, StaggerItem } from "@/components/ui/reveal";

type Stat = {
  /** Valeur numérique à animer, ou texte fixe si `display` est fourni. */
  to?: number;
  suffix?: string;
  display?: string;
  label: string;
};

const STATS: Stat[] = [
  { to: 1, label: "produit en développement" },
  { to: 100, suffix: " %", label: "développé en France" },
  { display: "IA", label: "au cœur de nos solutions" },
];

/** Compteur qui s'anime lorsqu'il entre dans le viewport. */
function Counter({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Mouvement réduit : durée nulle → la valeur finale est posée dès la
    // première frame (on évite un setState synchrone dans l'effet).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 0 : duration * 1000;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = total === 0 ? 1 : Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="glass rounded-3xl px-8 py-12 sm:px-12">
          <Stagger className="grid gap-12 sm:grid-cols-3">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl">
                  <span className="text-gradient">
                    {stat.display ?? (
                      <>
                        <Counter to={stat.to ?? 0} />
                        {stat.suffix}
                      </>
                    )}
                  </span>
                </p>
                <p className="mt-4 text-sm text-muted">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

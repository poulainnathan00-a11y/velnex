"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import { Stagger, StaggerItem } from "@/components/ui/reveal";

type Stat = {
  /** Valeur numérique à animer, ou texte fixe si `display` est fourni. */
  to?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

const STATS: Stat[] = [
  { to: 1000, prefix: "+", label: "heures automatisables" },
  { display: "IA", label: "intégrée à chaque produit" },
  { to: 100, suffix: " %", label: "sur mesure" },
  { display: "🇫🇷", label: "support français" },
];

/** Compteur qui s'anime lorsqu'il entre dans le viewport. */
function Counter({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

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

  return <span ref={ref}>{value.toLocaleString("fr-FR")}</span>;
}

export function Stats() {
  return (
    <section className="relative border-y border-line py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight tabular-nums sm:text-[42px]">
                <span className="text-gradient">
                  {stat.display ?? (
                    <>
                      {stat.prefix}
                      <Counter to={stat.to ?? 0} />
                      {stat.suffix}
                    </>
                  )}
                </span>
              </p>
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

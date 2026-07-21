import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

/** En-tête de section : label discret + titre + sous-titre optionnel. */
export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <Reveal className={alignment}>
      {label && (
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-dim">
          {label}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-[40px] sm:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "product" | "onDark";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  /* Bouton principal : encre sur blanc (signature du thème clair). */
  primary:
    "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-[0_12px_30px_-10px_rgba(9,9,11,0.5)]",
  secondary:
    "border border-line bg-white text-ink shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[var(--shadow-lift)]",
  ghost: "text-muted hover:text-ink",
  /* Réservé à la vitrine RecrutIA : seule touche de couleur du site. */
  product:
    "bg-product text-white hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-12px_var(--color-product)]",
  /* Sur fond sombre (bloc CTA inversé). */
  onDark:
    "bg-white text-ink hover:-translate-y-0.5 hover:bg-white/92 hover:shadow-[0_14px_38px_-12px_rgba(255,255,255,0.35)]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type ButtonLinkProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;

/** Lien stylé en bouton (interne ou externe). */
export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${buttonClass(variant, size)} ${className}`} {...props}>
      {children}
    </Link>
  );
}

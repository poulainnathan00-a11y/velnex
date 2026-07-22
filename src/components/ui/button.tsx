import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "product";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  /* Blanc sur noir : le bouton principal du thème sombre. */
  primary:
    "bg-white text-background hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_rgba(255,255,255,0.35)]",
  secondary:
    "card text-white/90 hover:-translate-y-0.5 hover:border-line-strong hover:text-white",
  ghost: "text-muted hover:text-white",
  /* Réservé à la vitrine RecrutIA : seule touche de couleur du site. */
  product:
    "bg-product text-white hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-12px_var(--color-product)]",
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

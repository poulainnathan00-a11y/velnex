import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_30px_-8px_var(--color-brand)] hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[0_14px_44px_-10px_var(--color-brand)]",
  secondary:
    "glass text-white/90 hover:-translate-y-0.5 hover:border-white/25 hover:text-white",
  ghost: "text-muted hover:text-white",
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

import Link from "next/link";

/** Marque Velnex : pastille dégradée + wordmark. */
export function Logo({
  href = "/",
  className = "",
}: {
  href?: string | null;
  className?: string;
}) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-[10px] bg-ink shadow-[0_6px_18px_-8px_rgba(9,9,11,0.7)]">
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
          <path
            d="M5 7 L12 18 L19 7"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight">Velnex</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Velnex — accueil">
      {content}
    </Link>
  );
}

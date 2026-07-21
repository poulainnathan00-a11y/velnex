import Link from "next/link";
import Image from "next/image";

/** Marque Velnex : monogramme (tuile sombre arrondie) + wordmark. */
export function Logo({
  href = "/",
  className = "",
}: {
  href?: string | null;
  className?: string;
}) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="Velnex"
        width={64}
        height={64}
        priority
        className="size-8 rounded-[9px] shadow-[0_4px_14px_-4px_rgba(9,9,11,0.5)] ring-1 ring-black/5"
      />
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

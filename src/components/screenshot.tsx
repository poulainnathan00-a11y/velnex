import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

/**
 * Capture d'écran du produit, présentée dans un cadre « fenêtre ».
 *
 * Si le fichier n'est pas encore présent dans `public/`, on affiche un cadre
 * neutre à la place — le site reste propre et ne casse jamais.
 */
export function Screenshot({
  src,
  alt,
  caption,
  priority = false,
}: {
  /** Chemin public, ex. "/screenshots/dashboard.png" */
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  const exists = existsSync(join(process.cwd(), "public", src));

  return (
    <figure className="overflow-hidden rounded-2xl card shadow-[0_30px_80px_-30px_rgba(0,0,0,1)]">
      {/* Barre de fenêtre */}
      <div className="flex items-center gap-1.5 border-b border-line bg-black/[0.03] px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        {caption && (
          <span className="ml-3 truncate text-[11px] text-dim">{caption}</span>
        )}
      </div>

      {exists ? (
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1500}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="h-auto w-full"
        />
      ) : (
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-black/[0.03] text-dim">
          <ImageIcon className="size-7" />
          <p className="px-6 text-center text-xs">{alt}</p>
        </div>
      )}
    </figure>
  );
}

/**
 * Génère les déclinaisons du logo Velnex à partir d'une image source.
 *
 * 1. Dépose ton logo dans  public/logo-source.png
 * 2. Lance  node scripts/gen-logo.mjs
 *
 * Produit :
 *  - public/logo-mark.png   → le monogramme « V » seul (pour la navbar / footer)
 *  - public/og.png          → image de partage 1200×630 (réseaux sociaux)
 *  - src/app/icon.png       → favicon (Next.js le détecte automatiquement)
 */
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "public", "logo-source.png");

if (!existsSync(SRC)) {
  console.error(
    "\n⚠  public/logo-source.png introuvable.\n   Dépose ton logo à cet emplacement puis relance : node scripts/gen-logo.mjs\n",
  );
  process.exit(1);
}

const BG = { r: 9, g: 9, b: 11, alpha: 1 }; // #09090b, fond du logo

const meta = await sharp(SRC).metadata();
const W = meta.width ?? 0;
const H = meta.height ?? 0;
console.log(`Source : ${W}×${H}`);

// ------------------------------------------------------------ Monogramme « V »
// Cadrage calé sur le monogramme (mesuré sur la source 1254×1254).
const box = {
  left: Math.round(W * 0.235),
  top: Math.round(H * 0.21),
  width: Math.round(W * 0.53),
  height: Math.round(H * 0.4),
};

await sharp(SRC)
  .extract(box)
  .resize(512, 512, { fit: "contain", background: BG })
  .png()
  .toFile(join(root, "public", "logo-mark.png"));
console.log("✓ public/logo-mark.png");

// ------------------------------------------------------------------ Favicon
await sharp(join(root, "public", "logo-mark.png"))
  .resize(256, 256, { fit: "contain", background: BG })
  .png()
  .toFile(join(root, "src", "app", "icon.png"));
console.log("✓ src/app/icon.png");

// -------------------------------------------------------------- Image de partage
// Logo complet centré sur un fond sombre, au format 1200×630.
const logo = await sharp(SRC).resize(820, 470, { fit: "inside" }).toBuffer();

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: BG },
})
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile(join(root, "public", "og.png"));
console.log("✓ public/og.png");

console.log("\nTerminé ✅");

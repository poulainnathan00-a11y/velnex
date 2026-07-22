/**
 * Fond d'ambiance du hero : grille façon Vercel, halos radiaux colorés très
 * légers et fines particules. Purement décoratif, sans coût JavaScript.
 */

/* Positions figées : un rendu identique serveur/client, sans hydratation. */
const PARTICLES = [
  { left: "12%", top: "22%", delay: "0s", size: 2 },
  { left: "27%", top: "68%", delay: "1.4s", size: 1 },
  { left: "41%", top: "14%", delay: "2.6s", size: 1 },
  { left: "58%", top: "48%", delay: "0.8s", size: 2 },
  { left: "69%", top: "26%", delay: "3.2s", size: 1 },
  { left: "78%", top: "62%", delay: "1.9s", size: 2 },
  { left: "88%", top: "34%", delay: "2.2s", size: 1 },
  { left: "34%", top: "82%", delay: "3.8s", size: 1 },
];

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grille */}
      <div className="absolute inset-0 grid-bg" />

      {/* Halos lumineux colorés qui dérivent lentement */}
      <div
        className="glow-orb -top-40 left-1/2 size-[680px] -translate-x-1/2 bg-[#4f7cff]/[0.08]"
        style={{ animation: "drift 22s ease-in-out infinite" }}
      />
      <div
        className="glow-orb right-[6%] top-24 size-[420px] bg-[#7c4dff]/[0.06]"
        style={{ animation: "drift 28s ease-in-out infinite reverse" }}
      />

      {/* Particules */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-ink/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `float ${7 + i}s ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Fondu vers le fond en bas, pour enchaîner sans couture */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

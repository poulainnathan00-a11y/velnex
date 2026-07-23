/**
 * Maquettes de RecrutIA reproduites en direct (pas des captures d'écran).
 * Chaque bloc illustre une fonctionnalité, dans le style du produit réel :
 * thème clair, accent bleu. Purement décoratif (aria-hidden).
 */
import {
  BriefcaseIcon,
  CheckIcon,
  SparklesIcon,
  TrophyIcon,
  XIcon,
} from "lucide-react";

/** Cadre « fenêtre navigateur » commun à toutes les maquettes. */
function Frame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-float)]"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-surface-2" />
        <span className="size-2.5 rounded-full bg-surface-2" />
        <span className="size-2.5 rounded-full bg-surface-2" />
        <span className="ml-3 flex items-center gap-1.5 font-mono text-[11px] text-dim">
          <span className="grid size-4 place-items-center rounded bg-gradient-to-br from-product to-product-2 text-[8px] font-bold text-white">
            R
          </span>
          {caption}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function ScorePill({ score }: { score: number }) {
  const tone =
    score >= 80
      ? "bg-product/10 text-product"
      : score >= 60
        ? "bg-amber-100 text-amber-700"
        : "bg-surface-2 text-muted";
  return (
    <span
      className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums ${tone}`}
    >
      {score}
    </span>
  );
}

/* --------------------------------------------------- 1. Tableau de bord */
export function DashboardMockup() {
  const kpis = [
    { label: "CV importés", value: "127" },
    { label: "Analysés", value: "127" },
    { label: "Compatibles", value: "18" },
    { label: "Score moyen", value: "71" },
  ];
  const offers = [
    { title: "Développeur Fullstack", done: 127, best: 92 },
    { title: "Chargé de recrutement", done: 44, best: 88 },
    { title: "Alternance Marketing", done: 31, best: 79 },
  ];
  return (
    <Frame caption="recrutia.pro · tableau de bord">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-line bg-surface p-3">
            <p className="text-[10px] text-dim">{k.label}</p>
            <p className="mt-1 text-xl font-semibold tracking-tight tabular-nums">
              {k.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-line bg-surface p-4">
        <p className="text-[11px] font-medium text-dim">Offres actives</p>
        <div className="mt-3 space-y-2.5">
          {offers.map((o) => (
            <div key={o.title} className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-product/10 text-product">
                <BriefcaseIcon className="size-3.5" />
              </span>
              <span className="flex-1 truncate text-[13px] font-medium">
                {o.title}
              </span>
              <span className="text-[11px] text-dim">{o.done} CV</span>
              <ScorePill score={o.best} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------ 2. Analyse / scoring */
export function ScoringMockup() {
  const criteria = [
    { label: "Expérience", pct: 90 },
    { label: "Compétences", pct: 82 },
    { label: "Formation", pct: 70 },
    { label: "Langues", pct: 60 },
  ];
  return (
    <Frame caption="recrutia.pro · fiche candidat">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-product to-product-2 text-sm font-semibold text-white">
          T
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">Thomas Martin</p>
          <p className="text-[11px] text-dim">Développeur Fullstack</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold tracking-tight text-product">
            92<span className="text-sm text-dim">/100</span>
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {criteria.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-[11px] text-muted">{c.label}</span>
            <div className="h-1.5 flex-1 rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-product to-product-2"
                style={{ width: `${c.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-3">
          <p className="mb-1.5 text-[10px] font-medium text-emerald-600">Forces</p>
          {["6 ans React/Node", "A managé une équipe"].map((s) => (
            <p key={s} className="flex items-center gap-1.5 text-[11px] text-muted">
              <CheckIcon className="size-3 text-emerald-600" />
              {s}
            </p>
          ))}
        </div>
        <div className="rounded-xl border border-line bg-surface p-3">
          <p className="mb-1.5 text-[10px] font-medium text-rose-600">
            Points d&apos;attention
          </p>
          {["PostgreSQL non détecté", "Anglais intermédiaire"].map((s) => (
            <p key={s} className="flex items-center gap-1.5 text-[11px] text-muted">
              <XIcon className="size-3 text-rose-500" />
              {s}
            </p>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------- 3. Pipeline */
export function PipelineMockup() {
  const columns = [
    {
      title: "Présélectionné",
      accent: "bg-product",
      cards: [{ n: "Léa D.", s: 74 }, { n: "Marc P.", s: 68 }],
    },
    {
      title: "Entretien",
      accent: "bg-violet-500",
      cards: [{ n: "Thomas M.", s: 92 }],
    },
    {
      title: "Embauché",
      accent: "bg-emerald-500",
      cards: [{ n: "Sarah L.", s: 88 }],
    },
  ];
  return (
    <Frame caption="recrutia.pro · pipeline">
      <div className="grid grid-cols-3 gap-2.5">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-2 flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${col.accent}`} />
              <span className="truncate text-[11px] font-medium">{col.title}</span>
              <span className="ml-auto text-[10px] text-dim">
                {col.cards.length}
              </span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c) => (
                <div
                  key={c.n}
                  className="rounded-lg border border-line bg-surface p-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface-2 text-[10px] font-semibold text-muted">
                      {c.n.charAt(0)}
                    </span>
                    <span className="flex-1 truncate text-[11px] font-medium">
                      {c.n}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <ScorePill score={c.s} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* --------------------------------------------------- 4. Comparateur */
export function ComparatorMockup() {
  const cols = [
    {
      initial: "T",
      name: "Thomas M.",
      score: 92,
      lead: true,
      rows: ["6 ans d'expérience", "React, Node, TypeScript", "Management d'équipe"],
    },
    {
      initial: "L",
      name: "Léa D.",
      score: 74,
      lead: false,
      rows: ["3 ans d'expérience", "React, UX/UI", "Fort sens produit"],
    },
  ];
  return (
    <Frame caption="recrutia.pro · comparateur">
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
        {cols.map((c, i) => (
          <div key={c.name} className="contents">
            <div
              className={`rounded-xl border p-3.5 ${
                c.lead ? "border-product/30 bg-product/[0.04]" : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                    c.lead
                      ? "bg-gradient-to-br from-product to-product-2 text-white"
                      : "bg-surface-2 text-muted"
                  }`}
                >
                  {c.initial}
                </span>
                <span className="flex-1 truncate text-[13px] font-medium">
                  {c.name}
                </span>
                <ScorePill score={c.score} />
              </div>
              <div className="mt-3 space-y-1.5">
                {c.rows.map((r) => (
                  <p key={r} className="text-[11px] text-muted">
                    {r}
                  </p>
                ))}
              </div>
              {c.lead && (
                <p className="mt-3 inline-flex items-center gap-1 rounded-md bg-product/10 px-2 py-0.5 text-[10px] font-medium text-product">
                  <TrophyIcon className="size-3" />
                  Recommandé
                </p>
              )}
            </div>

            {/* Pastille VS entre les deux colonnes */}
            {i === 0 && (
              <div className="flex h-full items-center justify-center pt-6">
                <span className="grid size-8 place-items-center rounded-full border border-line bg-white text-[10px] font-bold text-dim">
                  VS
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-xl border border-line bg-surface p-3">
        <SparklesIcon className="mt-0.5 size-3.5 shrink-0 text-product" />
        <p className="text-[11px] leading-relaxed text-muted">
          <span className="font-medium text-ink">Verdict de l&apos;IA :</span>{" "}
          Thomas prend l&apos;avantage sur l&apos;expérience et la stack, mais Léa
          reste un excellent profil produit.
        </p>
      </div>
    </Frame>
  );
}

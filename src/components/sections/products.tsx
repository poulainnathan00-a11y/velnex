import {
  ArrowUpRightIcon,
  BarChart3Icon,
  MailIcon,
  MessagesSquareIcon,
  ScaleIcon,
  ScanTextIcon,
  TargetIcon,
} from "lucide-react";

import { PRODUCTS, STATUS_LABEL, type Capability, type Product } from "@/data/products";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const ICONS = {
  scan: ScanTextIcon,
  target: TargetIcon,
  scale: ScaleIcon,
  messages: MessagesSquareIcon,
  mail: MailIcon,
  chart: BarChart3Icon,
} as const;

export function Products() {
  const featured = PRODUCTS.find((p) => p.featured);
  const others = PRODUCTS.filter((p) => !p.featured);

  return (
    <section id="produits" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Nos produits"
          title="Un premier produit, pensé jusqu'au détail"
          description="Velnex construit des SaaS qui résolvent un problème concret. Voici celui sur lequel nous travaillons aujourd'hui."
        />

        {featured && <ProductShowcase product={featured} />}

        {others.length > 0 && (
          <Stagger className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((product) => (
              <StaggerItem key={product.slug}>
                <CompactProduct product={product} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}

/** Pastille de statut. */
function StatusBadge({ status }: { status: Product["status"] }) {
  const tone =
    status === "live"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      : status === "development"
        ? "border-product/30 bg-product/10 text-product"
        : "border-line bg-white/[0.03] text-muted";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tone}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {STATUS_LABEL[status]}
    </span>
  );
}

/**
 * Vitrine complète du produit mis en avant : présentation, capacités et
 * fonctionnement. C'est le seul endroit du site où la couleur du produit
 * apparaît, pour qu'il ressorte sur l'identité monochrome de Velnex.
 */
function ProductShowcase({ product }: { product: Product }) {
  return (
    <div id={product.slug} className="mt-16 scroll-mt-24">
      {/* Bloc principal */}
      <Reveal>
        <article className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          {/* Voile coloré discret, signature du produit */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-gradient-to-br from-product/25 to-product-2/10 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-product to-product-2 text-lg font-bold shadow-[0_10px_30px_-10px_var(--color-product)]">
                  R
                </span>
                <StatusBadge status={product.status} />
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {product.name}
              </h3>
              <p className="mt-2 text-[15px] text-muted">{product.tagline}</p>

              {/* Le problème résolu */}
              <p className="mt-7 border-l-2 border-product/50 pl-4 text-[15px] italic leading-relaxed text-muted">
                « {product.problem} »
              </p>

              <p className="mt-6 leading-relaxed text-muted">
                {product.description}
              </p>

              {product.href && (
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ButtonLink
                    href={product.href}
                    variant="product"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.cta}
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </ButtonLink>
                  <span className="text-sm text-dim">recrutia.pro</span>
                </div>
              )}
            </div>

            <ProductPreview />
          </div>
        </article>
      </Reveal>

      {/* Capacités */}
      <div className="mt-8">
        <Reveal>
          <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-dim">
            Ce que fait {product.name}
          </h4>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.capabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <CapabilityCard capability={capability} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Fonctionnement */}
      <div className="mt-16">
        <Reveal>
          <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-dim">
            Comment ça fonctionne
          </h4>
        </Reveal>
        <Stagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {product.steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="relative">
                <span className="font-mono text-xs text-product">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="hairline my-4" />
                <h5 className="font-medium tracking-tight">{step.title}</h5>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}

function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = ICONS[capability.icon];
  return (
    <article className="glass glow-hover h-full rounded-2xl p-6 hover:-translate-y-1">
      <span className="grid size-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-white/80">
        <Icon className="size-[18px]" />
      </span>
      <h5 className="mt-5 font-medium tracking-tight">{capability.title}</h5>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {capability.description}
      </p>
    </article>
  );
}

/** Aperçu stylisé du produit (décoratif). */
function ProductPreview() {
  const candidates = [
    { initial: "T", name: "Thomas M.", role: "6 ans · React, Node", score: 92 },
    { initial: "L", name: "Léa D.", role: "3 ans · React, UX", score: 74 },
    { initial: "K", name: "Karim B.", role: "1 an · JavaScript", score: 51 },
  ];

  return (
    <div aria-hidden className="relative">
      <div className="glass rounded-2xl p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)]">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <p className="text-xs text-muted">Classement des candidats</p>
          <span className="text-[10px] text-dim">Développeur Fullstack</span>
        </div>

        <div className="mt-4 space-y-4">
          {candidates.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                  c.score >= 80
                    ? "bg-gradient-to-br from-product to-product-2 text-white"
                    : "bg-white/[0.06] text-muted"
                }`}
              >
                {c.initial}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium">{c.name}</p>
                <p className="truncate text-[10px] text-dim">{c.role}</p>
                <div className="mt-1.5 h-1 w-full rounded-full bg-white/[0.07]">
                  <div
                    className={`h-full rounded-full ${
                      c.score >= 80
                        ? "bg-gradient-to-r from-product to-product-2"
                        : "bg-white/25"
                    }`}
                    style={{ width: `${c.score}%` }}
                  />
                </div>
              </div>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums ${
                  c.score >= 80
                    ? "bg-product/15 text-product"
                    : "bg-white/[0.06] text-muted"
                }`}
              >
                {c.score}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-line bg-white/[0.02] p-3">
          <p className="text-[10px] text-dim">Recommandation de l&apos;IA</p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted">
            Thomas M. correspond au poste sur l&apos;expérience et la stack.
            À convoquer en priorité.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Carte compacte pour les futurs produits. */
function CompactProduct({ product }: { product: Product }) {
  const inner = (
    <article className="glass glow-hover flex h-full flex-col rounded-2xl p-7 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
        <StatusBadge status={product.status} />
      </div>
      <p className="mt-1.5 text-sm text-muted">{product.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {product.description}
      </p>
      {product.href && (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-white">
          {product.cta}
          <ArrowUpRightIcon className="size-4" />
        </span>
      )}
    </article>
  );

  if (!product.href) return inner;

  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {inner}
    </a>
  );
}

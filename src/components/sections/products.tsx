import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

import { PRODUCTS, STATUS_LABEL, type Product } from "@/data/products";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Products() {
  const featured = PRODUCTS.filter((p) => p.featured);
  const others = PRODUCTS.filter((p) => !p.featured);

  return (
    <section id="produits" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="glow-orb left-1/4 top-1/3 size-[420px] bg-brand/10" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Nos produits"
          title="Des SaaS pensés pour faire gagner du temps"
          description="Chaque produit Velnex répond à un problème concret, avec l'intelligence artificielle au cœur de son fonctionnement."
        />

        <div className="mt-16 space-y-6">
          {featured.map((product) => (
            <FeaturedProduct key={product.slug} product={product} />
          ))}

          {others.length > 0 && (
            <Stagger className="grid gap-6 md:grid-cols-2">
              {others.map((product) => (
                <StaggerItem key={product.slug}>
                  <CompactProduct product={product} />
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </div>
    </section>
  );
}

/** Pastille de statut (En développement / Disponible / À venir). */
function StatusBadge({ product }: { product: Product }) {
  const tone =
    product.status === "live"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      : product.status === "development"
        ? "border-brand/30 bg-brand/10 text-brand-soft"
        : "border-line bg-white/[0.03] text-muted";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tone}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {STATUS_LABEL[product.status]}
    </span>
  );
}

/** Grande carte premium pour le produit mis en avant. */
function FeaturedProduct({ product }: { product: Product }) {
  return (
    <Reveal>
      <article className="glass glow-hover relative overflow-hidden rounded-3xl p-8 sm:p-12">
        {/* Dégradé décoratif */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br from-brand/20 to-accent/10 blur-3xl"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          {/* Infos */}
          <div>
            <StatusBadge product={product} />
            <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              {product.name}
            </h3>
            <p className="mt-2 text-brand-soft">{product.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              {product.description}
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted">{feature}</span>
                </li>
              ))}
            </ul>

            {product.href && (
              <div className="mt-9">
                <ButtonLink
                  href={product.href}
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.cta}
                  <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </ButtonLink>
              </div>
            )}
          </div>

          {/* Aperçu produit */}
          <ProductPreview />
        </div>
      </article>
    </Reveal>
  );
}

/** Aperçu stylisé du produit (décoratif). */
function ProductPreview() {
  const candidates = [
    { initial: "T", name: "Thomas M.", score: 92, tone: "emerald" },
    { initial: "L", name: "Léa D.", score: 74, tone: "brand" },
    { initial: "K", name: "Karim B.", score: 51, tone: "muted" },
  ];

  return (
    <div aria-hidden className="relative">
      <div className="glass rounded-2xl p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <p className="text-xs text-muted">Classement des candidats</p>
          <span className="text-[10px] text-muted">Poste : Développeur</span>
        </div>

        <div className="mt-4 space-y-3">
          {candidates.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                  c.tone === "emerald"
                    ? "bg-gradient-to-br from-brand to-accent text-white"
                    : "bg-white/[0.06] text-muted"
                }`}
              >
                {c.initial}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs">{c.name}</p>
                <div className="mt-1.5 h-1 w-full rounded-full bg-white/[0.07]">
                  <div
                    className={`h-full rounded-full ${
                      c.tone === "muted"
                        ? "bg-white/25"
                        : "bg-gradient-to-r from-brand to-accent"
                    }`}
                    style={{ width: `${c.score}%` }}
                  />
                </div>
              </div>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums ${
                  c.score >= 80
                    ? "bg-emerald-500/15 text-emerald-400"
                    : c.score >= 60
                      ? "bg-brand/15 text-brand-soft"
                      : "bg-white/[0.06] text-muted"
                }`}
              >
                {c.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Carte compacte pour les produits suivants. */
function CompactProduct({ product }: { product: Product }) {
  const inner = (
    <article className="glass glow-hover flex h-full flex-col rounded-2xl p-7 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
        <StatusBadge product={product} />
      </div>
      <p className="mt-1.5 text-sm text-brand-soft">{product.tagline}</p>
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
    <a href={product.href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </a>
  );
}

import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  BarChart3Icon,
  MailIcon,
  MessagesSquareIcon,
  ScaleIcon,
  ScanTextIcon,
  TargetIcon,
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Screenshot } from "@/components/screenshot";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { PRODUCTS, STATUS_LABEL } from "@/data/products";

const ICONS = {
  scan: ScanTextIcon,
  target: TargetIcon,
  scale: ScaleIcon,
  messages: MessagesSquareIcon,
  mail: MailIcon,
  chart: BarChart3Icon,
} as const;

const product = PRODUCTS.find((p) => p.slug === "recrutia")!;

export const metadata: Metadata = {
  title: "RecrutIA — Le recrutement assisté par IA",
  description:
    "RecrutIA analyse automatiquement les CV, attribue un score de compatibilité expliqué, compare les candidats et génère les questions d'entretien. Un produit Velnex.",
  alternates: { canonical: "/recrutia" },
  openGraph: {
    title: "RecrutIA — Le recrutement assisté par IA",
    description:
      "Analysez, classez et contactez vos candidats en quelques minutes grâce à l'intelligence artificielle.",
    url: "/recrutia",
  },
};

/** Captures d'écran réelles du produit (fichiers dans public/screenshots/). */
const SHOTS = [
  {
    src: "/screenshots/dashboard.png",
    alt: "Tableau de bord RecrutIA : statistiques de recrutement, offres actives et meilleurs candidats",
    caption: "recrutia.pro · Tableau de bord",
    title: "Un tableau de bord clair",
    description:
      "CV importés, candidats analysés, profils compatibles et score moyen — l'activité de recrutement en un coup d'œil.",
  },
  {
    src: "/screenshots/analyse-candidat.png",
    alt: "Fiche candidat RecrutIA : score sur 100, forces, faiblesses et justification critère par critère",
    caption: "recrutia.pro · Fiche candidat",
    title: "Un score que l'on peut défendre",
    description:
      "Chaque note est décomposée critère par critère et justifiée, avec les forces, les faiblesses et un indice de confiance.",
  },
  {
    src: "/screenshots/pipeline.png",
    alt: "Pipeline de recrutement RecrutIA : colonnes de suivi des candidats par étape",
    caption: "recrutia.pro · Pipeline",
    title: "Le suivi des candidatures",
    description:
      "Un pipeline visuel pour faire avancer chaque candidat, de la réception de son CV jusqu'à l'embauche.",
  },
  {
    src: "/screenshots/comparateur.png",
    alt: "Comparateur de candidats RecrutIA : deux profils côte à côte avec verdict de l'IA",
    caption: "recrutia.pro · Comparateur",
    title: "Deux profils, face à face",
    description:
      "L'IA explique qui prend l'avantage et pourquoi l'autre candidat reste intéressant. La décision reste humaine.",
  },
];

export default function RecrutiaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* -------------------------------------------------------- Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(79,124,255,0.12),transparent_70%)]"
          />

          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <Reveal>
              <div className="flex items-center justify-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-product to-product-2 text-xl font-bold text-white shadow-[0_12px_30px_-10px_var(--color-product)]">
                  R
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-product/25 bg-product/8 px-3 py-1 text-xs font-medium text-product">
                  <span className="size-1.5 rounded-full bg-current" />
                  {STATUS_LABEL[product.status]}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[52px]">
                <span className="text-gradient">
                  Le recrutement assisté par intelligence artificielle.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href={product.href ?? "#"}
                  variant="product"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir RecrutIA
                  <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink href="/#contact" variant="secondary" size="lg">
                  Nous contacter
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------ Le problème */}
        <section className="px-6 pb-8 lg:px-8">
          <Reveal className="mx-auto max-w-3xl">
            <blockquote className="border-l-2 border-product/40 pl-6 text-xl leading-relaxed text-muted sm:text-2xl">
              « {product.problem} »
            </blockquote>
          </Reveal>
        </section>

        {/* ------------------------------------------------- Captures */}
        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-24">
            {SHOTS.map((shot, index) => (
              <Reveal key={shot.src}>
                <div className="mx-auto max-w-2xl text-center">
                  <span className="font-mono text-xs font-medium text-product">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    {shot.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    {shot.description}
                  </p>
                </div>
                <div className="mt-10">
                  <Screenshot
                    src={shot.src}
                    alt={shot.alt}
                    caption={shot.caption}
                    priority={index === 0}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ Capacités */}
        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
                Fonctionnalités
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-[38px]">
                Tout ce dont un recruteur a besoin
              </h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.capabilities.map((capability) => {
                const Icon = ICONS[capability.icon];
                return (
                  <StaggerItem key={capability.title}>
                    <article className="card lift h-full rounded-2xl p-6">
                      <span className="grid size-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-white">
                        <Icon className="size-[18px]" />
                      </span>
                      <h3 className="mt-5 font-semibold tracking-tight">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {capability.description}
                      </p>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* ------------------------------------------------- Étapes */}
        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
                Comment ça fonctionne
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-[38px]">
                De la pile de CV à la shortlist
              </h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {product.steps.map((step, index) => (
                <StaggerItem key={step.title}>
                  <span className="font-mono text-xs font-medium text-product">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="hairline my-4" />
                  <h3 className="font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ---------------------------------------------------- CTA */}
        <section className="px-6 py-20 sm:py-28 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="card ring-sheen relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,1)] sm:px-16 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.32),transparent_65%)] blur-2xl"
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-[40px] sm:leading-[1.12]">
                  <span className="text-gradient">
                    Essayez RecrutIA gratuitement.
                  </span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/65">
                  Créez un compte et analysez vos premiers CV en quelques
                  minutes. Sans carte bancaire.
                </p>
                <div className="mt-10">
                  <ButtonLink
                    href={product.href ?? "#"}
                    variant="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ouvrir RecrutIA
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

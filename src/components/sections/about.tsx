import { BuildingIcon, CalendarIcon, MapPinIcon } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const FACTS = [
  { icon: CalendarIcon, label: "Fondée en", value: "2026" },
  { icon: MapPinIcon, label: "Basée à", value: "Longuenesse, France" },
  { icon: BuildingIcon, label: "Structure", value: "Entreprise individuelle" },
];

export function About() {
  return (
    <section id="a-propos" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* Récit */}
          <div>
            <Reveal>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
                À propos
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-[40px] sm:leading-[1.12]">
                <span className="text-gradient">
                  Une entreprise française, à taille humaine.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-muted">
                <p>
                  Velnex est née d&apos;un constat simple : l&apos;intelligence
                  artificielle est partout, mais rarement transformée en outils
                  réellement utiles au quotidien. Trop de promesses, pas assez de
                  produits qui font vraiment gagner du temps.
                </p>
                <p>
                  Nous avons donc choisi l&apos;approche inverse : partir d&apos;un
                  problème concret, vécu par de vraies personnes, et construire le
                  logiciel qui le résout — jusque dans le détail.
                </p>
                <p>
                  C&apos;est ainsi qu&apos;est né{" "}
                  <span className="font-medium text-white">RecrutIA</span>, notre
                  premier produit, dédié aux recruteurs qui passent des heures à
                  trier des candidatures. D&apos;autres solutions suivront, dans la
                  cybersécurité et l&apos;automatisation.
                </p>
                <p>
                  Être une structure indépendante est un choix : cela nous permet
                  d&apos;avancer vite, de rester proches de nos utilisateurs et de
                  soigner chaque détail plutôt que de courir après le volume.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Carte d'identité */}
          <Reveal delay={0.24}>
            <div className="card rounded-3xl p-8 lg:sticky lg:top-28">
              <h3 className="text-sm font-semibold tracking-tight">
                Carte d&apos;identité
              </h3>

              <dl className="mt-6 space-y-6">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-white">
                      <fact.icon className="size-[18px]" />
                    </span>
                    <div>
                      <dt className="text-xs text-dim">{fact.label}</dt>
                      <dd className="mt-0.5 text-sm font-medium">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="hairline my-7" />

              <p className="text-sm leading-relaxed text-muted">
                Une question, une idée de collaboration ou simplement envie
                d&apos;échanger&nbsp;? Nous lisons tous les messages.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white underline underline-offset-4 decoration-line-strong transition-colors hover:decoration-white"
              >
                Nous écrire
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

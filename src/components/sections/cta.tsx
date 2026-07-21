import { ArrowUpRightIcon, MailIcon } from "lucide-react";

import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  const featured = PRODUCTS.find((p) => p.featured);

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Grille + halo blanc diffus */}
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-3xl"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-[40px] sm:leading-[1.12]">
              {/* Espace insécable avant « ? » : typographie FR + évite que le
                  point d'interrogation se retrouve seul en fin de ligne. */}
              <span className="text-gradient">
                Prêt à découvrir les SaaS de demain&nbsp;?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
              Explorez notre premier produit, ou parlons de votre projet — nous
              répondons rapidement.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {featured?.href && (
                <ButtonLink
                  href={featured.href}
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featured.cta}
                  <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </ButtonLink>
              )}
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-7 text-[15px] font-medium text-white/90 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-white"
              >
                <MailIcon className="size-4" />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

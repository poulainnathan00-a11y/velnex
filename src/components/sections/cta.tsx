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
        {/* Bloc inversé : fort contraste sur le fond blanc du site. */}
        <div className="inverse relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[var(--shadow-float)] sm:px-16 sm:py-20">
          {/* Grille + halo diffus */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.28),transparent_65%)] blur-2xl"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-[40px] sm:leading-[1.12]">
              {/* Espace insécable avant « ? » : typographie FR + évite que le
                  point d'interrogation se retrouve seul en fin de ligne. */}
              <span className="text-gradient">
                Prêt à découvrir les SaaS de demain&nbsp;?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/65">
              Explorez notre premier produit, ou parlons de votre projet — nous
              répondons rapidement.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {featured?.href && (
                <ButtonLink
                  href={featured.href}
                  variant="onDark"
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
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[15px] font-medium text-white/90 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:text-white"
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

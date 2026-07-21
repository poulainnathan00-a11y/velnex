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
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Dégradé bleu → violet */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#2b4bd8_0%,#4f7cff_45%,#7c4dff_100%)]"
          />
          {/* Voiles lumineux */}
          <div
            aria-hidden
            className="absolute -left-20 -top-20 -z-10 size-72 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-16 -z-10 size-80 rounded-full bg-accent/40 blur-3xl"
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-[40px] sm:leading-[1.12]">
            Prêt à découvrir les SaaS de demain ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/80">
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
                className="!bg-white !text-[#2b4bd8] !shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:!bg-white/95"
              >
                {featured.cta}
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </ButtonLink>
            )}
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-[15px] font-medium text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <MailIcon className="size-4" />
              {SITE.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

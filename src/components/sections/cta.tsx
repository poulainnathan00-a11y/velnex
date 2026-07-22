import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* Halo qui attire l'œil sur la zone de conversion */}
      <div
        aria-hidden
        className="glow-orb left-1/2 top-0 size-[560px] -translate-x-1/2 bg-white/[0.05]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-[44px] sm:leading-[1.1]">
            <span className="text-gradient">
              Prêt à transformer votre entreprise&nbsp;?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            Décrivez-nous votre besoin en quelques lignes. Nous revenons vers
            vous sous 48 h avec une première piste concrète.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-14 max-w-2xl">
          <div className="card ring-sheen rounded-3xl p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Accroche */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-dim">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-[40px] sm:leading-[1.12]">
              <span className="text-gradient">Parlons de votre projet.</span>
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
              Une question sur RecrutIA, une idée de collaboration ou un besoin
              particulier&nbsp;? Écrivez-nous, nous répondons rapidement.
            </p>
          </div>
        </Reveal>

        {/* Formulaire */}
        <Reveal delay={0.1}>
          <div className="card rounded-3xl p-6 shadow-[var(--shadow-lift)] sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

/** Gabarit commun aux pages légales. */
export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(9,9,11,0.04),transparent_70%)]" />
          <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8">
            <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-3 text-sm text-muted">
              Dernière mise à jour : {updatedAt}
            </p>
            <div className="mt-12 space-y-10">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Bloc de section dans une page légale. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">{heading}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-line-strong [&_a:hover]:decoration-white">
        {children}
      </div>
    </section>
  );
}

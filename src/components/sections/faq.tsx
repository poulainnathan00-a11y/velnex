"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    q: "Combien de temps faut-il pour développer un projet ?",
    a: "Cela dépend du périmètre. Une première version utilisable arrive généralement en 4 à 8 semaines ; un produit complet demande quelques mois. Nous fixons ensemble un calendrier réaliste dès la phase de découverte.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est chiffré sur mesure, après la phase de découverte. Vous recevez un devis clair avec un périmètre, un délai et un prix fixés avant de commencer — jamais de facturation surprise.",
  },
  {
    q: "À qui appartient le code une fois le projet livré ?",
    a: "À vous, entièrement. Le code source vous est livré et vous en êtes propriétaire. Vous restez libre de le faire évoluer avec nous ou avec une autre équipe.",
  },
  {
    q: "Travaillez-vous avec des petites entreprises ?",
    a: "Oui. Nous travaillons aussi bien avec des indépendants et des TPE qu'avec des structures plus établies. Le critère, c'est le besoin — pas la taille.",
  },
  {
    q: "Où sont hébergées les données ?",
    a: "En Europe, avec chiffrement et conformité RGPD prise en compte dès la conception. Nous privilégions systématiquement des hébergeurs européens pour les données sensibles.",
  },
  {
    q: "Assurez-vous la maintenance après la livraison ?",
    a: "Oui. Corrections, mises à jour de sécurité et évolutions font partie de notre accompagnement. Un produit livré n'est pas un produit abandonné.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-ink"
        >
          <span className="font-medium tracking-tight">{q}</span>
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
              open ? "rotate-45 border-line-strong bg-[#4f7cff]/[0.07]" : ""
            }`}
          >
            <PlusIcon className="size-4" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-14 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Les questions qu'on nous pose"
          description="Une interrogation qui n'est pas ici ? Écrivez-nous, nous répondons sous 48 h."
        />

        <Reveal className="mt-14">
          <div className="border-t border-line">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

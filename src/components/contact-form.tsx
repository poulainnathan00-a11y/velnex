"use client";

import { useState } from "react";
import { CheckIcon, SendIcon } from "lucide-react";

import { SITE } from "@/data/site";

/**
 * Formulaire de contact sans backend : à l'envoi, il ouvre le logiciel de
 * messagerie du visiteur avec un e-mail pré-rempli vers l'adresse Velnex.
 * Aucun service tiers, aucune donnée stockée.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      message,
      "",
      "—",
      `Nom : ${name}`,
      `E-mail : ${email}`,
    ].join("\n");

    const href =
      `mailto:${SITE.email}` +
      `?subject=${encodeURIComponent(subject || `Contact — ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  const field =
    "h-11 w-full rounded-xl border border-line bg-black/[0.02] px-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-dim focus:border-line-strong focus:bg-black/[0.03] focus:ring-4 focus:ring-white/5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@entreprise.fr"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="L'objet de votre message"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Dites-nous en quelques mots ce dont vous avez besoin…"
          className="w-full resize-y rounded-xl border border-line bg-black/[0.02] px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-dim focus:border-line-strong focus:bg-black/[0.03] focus:ring-4 focus:ring-white/5"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_rgba(255,255,255,0.35)] sm:w-auto"
      >
        {sent ? (
          <>
            <CheckIcon className="size-4" />
            Message préparé
          </>
        ) : (
          <>
            <SendIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            Envoyer le message
          </>
        )}
      </button>

      <p className="text-xs leading-relaxed text-dim">
        {sent
          ? "Votre logiciel de messagerie vient de s'ouvrir avec le message pré-rempli. S'il ne s'est pas ouvert, écrivez-nous directement à "
          : "L'envoi ouvre votre logiciel de messagerie avec le message pré-rempli. Vous pouvez aussi écrire directement à "}
        <a
          href={`mailto:${SITE.email}`}
          className="text-ink underline underline-offset-4 decoration-line-strong hover:decoration-white"
        >
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}

/** Configuration globale du site Velnex. */

export const SITE = {
  name: "Velnex",
  url: "https://velnex.fr",
  tagline: "Nous créons les logiciels qui font gagner du temps.",
  title: "Velnex | Créateur de solutions SaaS propulsées par l'IA",
  description:
    "Velnex développe des solutions SaaS, des plateformes IA et des outils sur mesure pour automatiser votre activité et accélérer votre croissance.",
  email: "contact.velnex@gmail.com",
  locale: "fr_FR",
} as const;

/** Liens de navigation principaux (navbar + footer). */
export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Produits", href: "/#produits" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Liens légaux (footer). */
export const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
] as const;

/** Réseaux sociaux. `href: null` = pas encore de compte (affiché désactivé). */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: null as string | null, icon: "linkedin" },
  { label: "Instagram", href: null as string | null, icon: "instagram" },
  { label: "Facebook", href: null as string | null, icon: "facebook" },
] as const;

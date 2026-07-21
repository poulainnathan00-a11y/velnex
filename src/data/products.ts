/**
 * Catalogue des produits Velnex.
 *
 * Pour ajouter un futur SaaS : ajouter une entrée dans `PRODUCTS`.
 * La section Produits s'adapte automatiquement (grande carte pour le produit
 * mis en avant, grille pour les suivants).
 */

export type ProductStatus = "development" | "live" | "soon";

export type Product = {
  /** Identifiant unique (sert de clé React et d'ancre). */
  slug: string;
  name: string;
  /** Phrase courte affichée sous le nom. */
  tagline: string;
  description: string;
  status: ProductStatus;
  /** Lien externe vers le produit (null si pas encore disponible). */
  href: string | null;
  /** Libellé du bouton d'action. */
  cta: string;
  /** Points clés affichés en pastilles. */
  features: string[];
  /** Mis en avant en grande carte premium. */
  featured: boolean;
};

export const STATUS_LABEL: Record<ProductStatus, string> = {
  development: "En développement",
  live: "Disponible",
  soon: "À venir",
};

export const PRODUCTS: Product[] = [
  {
    slug: "recrutia",
    name: "Recrutia",
    tagline: "Le recrutement assisté par intelligence artificielle",
    description:
      "Plateforme de recrutement assistée par IA permettant d'analyser automatiquement les CV, comparer les candidats à une offre d'emploi, générer des questions d'entretien et accélérer les recrutements.",
    status: "development",
    href: "https://recrutia.pro",
    cta: "Découvrir Recrutia",
    features: [
      "Analyse automatique des CV",
      "Score de compatibilité expliqué",
      "Comparaison de candidats",
      "Questions d'entretien générées",
    ],
    featured: true,
  },
];

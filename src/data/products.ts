/**
 * Catalogue des produits Velnex.
 *
 * Pour ajouter un futur SaaS : ajouter une entrée dans `PRODUCTS`.
 * Le produit `featured` obtient une vitrine complète (capacités + étapes) ;
 * les autres s'affichent en cartes dans une grille.
 */

export type ProductStatus = "development" | "live" | "soon";

export type Capability = {
  /** Nom de l'icône lucide utilisée (résolu dans le composant). */
  icon: "scan" | "target" | "scale" | "messages" | "mail" | "chart";
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** Le problème que le produit résout, en une phrase. */
  problem: string;
  description: string;
  status: ProductStatus;
  href: string | null;
  cta: string;
  /** Capacités détaillées (vitrine du produit mis en avant). */
  capabilities: Capability[];
  /** Fonctionnement en quelques étapes. */
  steps: Step[];
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
    name: "RecrutIA",
    tagline: "Le recrutement assisté par intelligence artificielle",
    problem:
      "Trier une pile de CV prend des heures, fatigue le jugement et laisse passer de bons profils.",
    description:
      "Plateforme de recrutement assistée par IA permettant d'analyser automatiquement les CV, comparer les candidats à une offre d'emploi, générer des questions d'entretien et accélérer les recrutements.",
    status: "development",
    href: "https://recrutia.pro",
    cta: "Découvrir RecrutIA",
    capabilities: [
      {
        icon: "scan",
        title: "Analyse automatique des CV",
        description:
          "Chaque CV est lu et structuré par l'IA : expérience, compétences, formation et coordonnées extraites automatiquement.",
      },
      {
        icon: "target",
        title: "Score de compatibilité",
        description:
          "Un score sur 100 face à l'offre, décomposé critère par critère et justifié — jamais une boîte noire.",
      },
      {
        icon: "scale",
        title: "Comparaison de candidats",
        description:
          "Deux profils côte à côte, avec une analyse expliquant qui est devant et pourquoi l'autre reste intéressant.",
      },
      {
        icon: "messages",
        title: "Questions d'entretien",
        description:
          "Des questions techniques et comportementales générées sur mesure pour chaque candidat.",
      },
      {
        icon: "chart",
        title: "Suivi des candidatures",
        description:
          "Un pipeline visuel pour suivre chaque candidat, de la réception à l'embauche.",
      },
      {
        icon: "mail",
        title: "Contact en un clic",
        description:
          "Les emails d'invitation ou de refus sont rédigés puis envoyés depuis la plateforme.",
      },
    ],
    steps: [
      {
        title: "Décrire le poste",
        description:
          "Le recruteur crée son offre et pondère ses critères : c'est sa grille de lecture.",
      },
      {
        title: "Importer les CV",
        description:
          "Plusieurs PDF d'un coup. Le texte et les coordonnées sont extraits automatiquement.",
      },
      {
        title: "Laisser l'IA analyser",
        description:
          "Chaque candidature est notée, justifiée et classée en quelques secondes.",
      },
      {
        title: "Décider et contacter",
        description:
          "La shortlist est prête, les questions d'entretien aussi. Il ne reste qu'à échanger.",
      },
    ],
    featured: true,
  },
];

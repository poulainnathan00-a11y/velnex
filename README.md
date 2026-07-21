# Velnex — site officiel

Site vitrine de **Velnex**, entreprise française qui développe des solutions
SaaS propulsées par l'intelligence artificielle. En ligne sur **velnex.fr**.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (tokens dans `src/app/globals.css`)
- **Motion** (Framer Motion) pour les animations
- **Lucide React** pour les icônes
- Thème sombre, SEO complet (metadata, Open Graph, Schema.org)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
src/
├─ app/
│  ├─ layout.tsx            # SEO global + données structurées Schema.org
│  ├─ page.tsx              # page d'accueil (assemble les sections)
│  ├─ globals.css           # palette, tokens Tailwind, utilitaires
│  ├─ mentions-legales/
│  └─ confidentialite/
├─ components/
│  ├─ navbar.tsx            # navigation + menu burger mobile
│  ├─ footer.tsx
│  ├─ logo.tsx
│  ├─ hero-visual.tsx       # illustration dashboards flottants
│  ├─ legal-page.tsx        # gabarit des pages légales
│  ├─ sections/             # hero, why-velnex, products, vision, stats, cta
│  └─ ui/                   # button, reveal (animations), section-heading
└─ data/
   ├─ site.ts               # nom, URL, liens de nav, réseaux sociaux
   └─ products.ts           # catalogue produits
```

## Ajouter un nouveau produit SaaS

Tout passe par `src/data/products.ts` — la section Produits s'adapte
automatiquement :

```ts
export const PRODUCTS: Product[] = [
  // …produits existants
  {
    slug: "mon-produit",
    name: "Mon Produit",
    tagline: "Phrase courte d'accroche",
    description: "Description complète du produit.",
    status: "soon",          // "live" | "development" | "soon"
    href: "https://…",       // ou null si pas encore en ligne
    cta: "Découvrir",
    features: ["Point clé 1", "Point clé 2"],
    featured: false,         // true = grande carte premium
  },
];
```

Le produit **featured** s'affiche en grande carte ; les autres en grille.

## Personnaliser

- **Palette / animations** : `src/app/globals.css` (bloc `@theme`)
- **Liens de navigation, e-mail, réseaux sociaux** : `src/data/site.ts`
  (mettre l'URL LinkedIn/Instagram/Facebook à la place de `null` pour activer
  les icônes du footer)

## Déployer sur Vercel

1. Pousser ce dépôt sur GitHub.
2. Vercel → **Add New Project** → importer le dépôt (Next.js détecté
   automatiquement, aucune configuration requise).
3. **Settings → Domains** → ajouter `velnex.fr` et `www.velnex.fr`.
4. Chez OVH, créer les enregistrements DNS indiqués par Vercel
   (A pour l'apex, CNAME pour `www`).

## À faire

- Activer la redirection de **contact@velnex.fr** vers une vraie boîte mail.
- Renseigner les URL des réseaux sociaux dans `src/data/site.ts`.

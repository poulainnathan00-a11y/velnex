import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Velnex.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="21 juillet 2026">
      <LegalSection heading="Éditeur du site">
        <p>
          Le site velnex.fr et les produits qui y sont présentés sont édités par
          Nathan Poulain, entrepreneur individuel exerçant sous le nom commercial
          Velnex.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Éditeur : Nathan Poulain (nom commercial : Velnex)</li>
          <li>Responsable de la publication : Nathan Poulain</li>
          <li>Forme juridique : Entreprise individuelle (micro-entreprise)</li>
          <li>SIRET : 107 779 316 00010</li>
          <li>Adresse : 3 rue Georges Bizet, 62219 Longuenesse, France</li>
          <li>TVA : non applicable, art. 293 B du CGI</li>
          <li>
            Contact : <a href="mailto:contact@velnex.fr">contact@velnex.fr</a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Hébergement">
        <p>
          Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
          CA 91789, États-Unis.
        </p>
      </LegalSection>

      <LegalSection heading="Propriété intellectuelle">
        <p>
          La marque Velnex, le logo, les textes et l&apos;ensemble des contenus de
          ce site sont protégés par le droit de la propriété intellectuelle.
          Toute reproduction sans autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection heading="Produits">
        <p>
          Velnex édite le produit Recrutia, accessible sur{" "}
          <a href="https://recrutia.pro" target="_blank" rel="noopener noreferrer">
            recrutia.pro
          </a>
          . L&apos;utilisation de ce produit est régie par ses propres conditions
          générales d&apos;utilisation et sa politique de confidentialité.
        </p>
      </LegalSection>

      <LegalSection heading="Responsabilité">
        <p>
          Velnex met tout en œuvre pour assurer l&apos;exactitude des informations
          diffusées sur ce site, sans pouvoir en garantir l&apos;exhaustivité.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

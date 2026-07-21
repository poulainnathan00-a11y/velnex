import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Velnex traite et protège les données personnelles sur velnex.fr.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="21 juillet 2026">
      <LegalSection heading="Responsable du traitement">
        <p>
          Le responsable du traitement des données collectées via ce site est
          Nathan Poulain, exerçant sous le nom commercial Velnex (voir les{" "}
          <a href="/mentions-legales">mentions légales</a>).
        </p>
      </LegalSection>

      <LegalSection heading="Données collectées sur ce site">
        <p>
          Le site velnex.fr est un site vitrine. Il ne propose pas de création de
          compte et ne collecte pas de données personnelles au-delà de ce que
          vous nous transmettez volontairement, par exemple lorsque vous nous
          écrivez à contact.velnex@gmail.com.
        </p>
      </LegalSection>

      <LegalSection heading="Utilisation des données">
        <p>
          Les informations que vous nous transmettez par e-mail sont utilisées
          uniquement pour répondre à votre demande. Elles ne sont ni vendues, ni
          cédées à des tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          Ce site ne dépose aucun cookie publicitaire ni traceur de mesure
          d&apos;audience.
        </p>
      </LegalSection>

      <LegalSection heading="Produit Recrutia">
        <p>
          Le traitement des données au sein du produit Recrutia (comptes, CV,
          analyses) est décrit dans sa propre{" "}
          <a
            href="https://recrutia.pro/confidentialite"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et de portabilité de vos données. Pour
          l&apos;exercer, écrivez à{" "}
          <a href="mailto:contact.velnex@gmail.com">contact.velnex@gmail.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

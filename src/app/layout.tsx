import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SITE } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Velnex",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Velnex",
    "SaaS",
    "intelligence artificielle",
    "IA",
    "logiciel",
    "recrutement",
    "automatisation",
    "cybersécurité",
    "France",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

/** Données structurées Schema.org (Organization) — statiques. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 rue Georges Bizet",
    postalCode: "62219",
    addressLocality: "Longuenesse",
    addressCountry: "FR",
  },
  areaServed: "FR",
  knowsAbout: [
    "Intelligence artificielle",
    "Logiciels SaaS",
    "Automatisation",
    "Recrutement",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: "Recrutia",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Plateforme de recrutement assistée par IA : analyse automatique des CV, comparaison de candidats et génération de questions d'entretien.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

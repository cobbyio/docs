import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import FeatureCardList from "../components/FeatureCardList";
import Header from "../components/Header";

const FeatureListDE = [
  {
    title: "Tutorials",
    Svg: require("../../static/img/rocket_stroke.svg").default,
    links: [
      {
        title: "Einführung in cobby",
        link: "/tutorials/getting-started/introduction-to-cobby",
      },
      {
        title: "Erste Schritte",
        link: "/tutorials/getting-started/first-steps",
      },
    ],
    link: "/tutorials",
  },
  {
    title: "Anleitungen",
    Svg: require("../../static/img/target_stroke.svg").default,
    links: [
      {
        title: "cobby für Magento 2 installieren",
        link: "/how-to/installation/install-cobby-magento-2",
      },
      {
        title: "Attribut-Optionen erstellen",
        link: "/how-to/attributes/create-attribute-options",
      },
      {
        title: "Kategorien nach Attribut hinzufügen",
        link: "/how-to/categories/add-categories-by-attribute",
      },
      {
        title: "Daten importieren",
        link: "/how-to/product-management/import-data",
      },
    ],
    link: "/how-to",
  },
  {
    title: "Referenz",
    Svg: require("../../static/img/books_stroke.svg").default,
    links: [
      {
        title: "API-Endpunkte",
        link: "/reference/api/endpoints-and-events",
      },
      {
        title: "Fehlercodes",
        link: "/reference/error-codes",
      },
      {
        title: "Filter",
        link: "/reference/features/filter",
      },
      {
        title: "Indexierung",
        link: "/reference/settings/indexing",
      },
    ],
    link: "/reference",
  },
  {
    title: "Erklärungen",
    Svg: require("../../static/img/gradcap_stroke.svg").default,
    links: [
      {
        title: "Wie cobby funktioniert",
        link: "/explanation/architecture/how-cobby-works",
      },
      {
        title: "Konfigurierbare Produkte",
        link: "/explanation/product-types/configurable-products",
      },
      {
        title: "Fehlerassistent",
        link: "/explanation/features/error-assistant",
      },
    ],
    link: "/explanation",
  },
];

const FeatureListEN = [
  {
    title: "Tutorials",
    Svg: require("../../static/img/rocket_stroke.svg").default,
    links: [
      {
        title: "Introduction to cobby",
        link: "/tutorials/getting-started/introduction-to-cobby",
      },
      {
        title: "First steps",
        link: "/tutorials/getting-started/first-steps",
      },
    ],
    link: "/tutorials",
  },
  {
    title: "How-to Guides",
    Svg: require("../../static/img/target_stroke.svg").default,
    links: [
      {
        title: "Install cobby for Magento 2",
        link: "/how-to/installation/install-cobby-magento-2",
      },
      {
        title: "Create attribute options",
        link: "/how-to/attributes/create-attribute-options",
      },
      {
        title: "Add categories by attribute",
        link: "/how-to/categories/add-categories-by-attribute",
      },
      {
        title: "Import data",
        link: "/how-to/product-management/import-data",
      },
    ],
    link: "/how-to",
  },
  {
    title: "Reference",
    Svg: require("../../static/img/books_stroke.svg").default,
    links: [
      {
        title: "API endpoints",
        link: "/reference/api/endpoints-and-events",
      },
      {
        title: "Error codes",
        link: "/reference/error-codes",
      },
      {
        title: "Filter",
        link: "/reference/features/filter",
      },
      {
        title: "Indexing",
        link: "/reference/settings/indexing",
      },
    ],
    link: "/reference",
  },
  {
    title: "Explanation",
    Svg: require("../../static/img/gradcap_stroke.svg").default,
    links: [
      {
        title: "How cobby works",
        link: "/explanation/architecture/how-cobby-works",
      },
      {
        title: "Configurable products",
        link: "/explanation/product-types/configurable-products",
      },
      {
        title: "Error assistant",
        link: "/explanation/features/error-assistant",
      },
    ],
    link: "/explanation",
  },
];

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { siteConfig } = useDocusaurusContext();
  const featureList = currentLocale === "de" ? FeatureListDE : FeatureListEN;
  return (
    <Layout title={`${siteConfig.title}`} description="cobby Help Docs">
      <Header title={siteConfig.title} />
      <main className="bg-gray-light md:px-36 px-8">
        <FeatureCardList featureList={featureList} />
      </main>
    </Layout>
  );
}

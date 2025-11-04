import React from 'react'
import Header from '../components/Header'
import Layout from '@theme/Layout';
import FeatureCardList from '../components/FeatureCardList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Breadcrumbs from '../components/Breadcrumbs';

const FeatureListDE = [
    {
        title: "Erste Schritte",
        Svg: require("../../static/img/rocket_stroke.svg").default,
        description: <>Erfahre wie du cobby installierst und einrichtest</>,
    },
    {
        title: "Arbeiten mit cobby",
        Svg: require("../../static/img/astronaut_stroke.svg").default,
        description: (
            <>Typische Anwendungsfälle, Tipps und Tricks für das Arbeiten mit cobby</>
        ),
    },
    {
        title: "Problembehebung",
        Svg: require("../../static/img/problem-stroke.svg").default,
        description: (
            <>Es läuft nicht rund? Hier findet sich bestimmt eine Lösung</>
        ),
    },
];

const FeatureListEN = [
    {
        title: "Useful excel formulas & use cases",
        Svg: require("../../static/img/formula.svg").default,
        links: [
            { title: 'Create texts depending on the values with the IF function', link: '/usecases/useful-excel-formulas-and-use-cases/build-texts-depending-on-values-with-the-IF-function' },
            { title: 'Search function', link: '/usecases/useful-excel-formulas-and-use-cases/excel-formula-search-and-share-right-left' },
            { title: 'How to move single Excel sheets into another document', link: '/usecases/useful-excel-formulas-and-use-cases/how-to-move-an-excel-page-into-another-document' },
        ],
        link: '/usecases/useful-excel-formulas-and-use-cases/build-texts-depending-on-values-with-the-IF-function'
    },
    {
        title: "Attributes",
        Svg: require("../../static/img/attribute.svg").default,
        links: [
            { title: 'Change the attribute set of a product', link: '/usecases/attributes/change-the-attribute-set-of-a-product' },
            { title: 'Creating new attribute options', link: '/usecases/attributes/creating-new-attribute-options' },
            { title: 'Determine double values in a column', link: '/usecases/attributes/determine-doubled-values-in-a-column' },
        ],
        link: '/usecases/attributes/change-the-attribute-set-of-a-product'
    },
    {
        title: "Categories",
        Svg: require("../../static/img/category.svg").default,
        links: [
            { title: 'Add categories depending on attributes', link: '/usecases/categories/add-categories-depending-on-attributes' },
            { title: 'Category match', link: '/usecases/categories/category-matching' },
        ],
        link: '/usecases/categories/add-categories-depending-on-attributes'
    },
    {
        title: "Images",
        Svg: require("../../static/img/images.svg").default,
        links: [
            { title: 'Configuring cobby to prevent image duplicates', link: '/usecases/images/configuring-cobby-to-prevent-image-duplicates' },
            { title: 'Image description', link: '/usecases/images/image-description' },
            { title: 'Image formulas: Usage examples', link: '/usecases/images/image-formulas-usage-examples' },
            { title: 'How to store Magento product images in Excel', link: '/usecases/images/store-magento-product-images-in-excel' },
        ],
        link: '/usecases/images/configuring-cobby-to-prevent-image-duplicates'
    },
    {
        title: "Import",
        Svg: require("../../static/img/import.svg").default,
        links: [
            { title: 'Import data', link: '/usecases/import/import-data' },
            { title: 'Import mode', link: '/usecases/import/the-import-mode' },
        ],
        link: '/usecases/import/import-data'
    },
    {
        title: "Macros and cobby",
        Svg: require("../../static/img/copy.svg").default,
        links: [
            { title: 'When do macros make sense?', link: '/usecases/makros-and-cobby#when-do-macros-make-sense' },
            { title: 'Advantages and disadvantages of formulas and macros', link: '/usecases/makros-and-cobby#advantages-and-disadvantages-of-formulas-and-macros' },
        ],
        link: '/usecases/makros-and-cobby'
    },
    {
        title: "Prices",
        Svg: require("../../static/img/price.svg").default,
        links: [
            { title: 'Automatic price calculation', link: '/usecases/prices/automatic-price-calculation' },
            { title: 'Determine net price based on gross price in Excel', link: '/usecases/prices/determine-net-price-based-on-gross-price-in-Excel' },
            { title: 'Price update', link: '/usecases/prices/price-update' },
        ],
        link: '/usecases/prices/automatic-price-calculation'
    },
];


export default function academy() {
    const { i18n } = useDocusaurusContext();
    const { currentLocale } = i18n;
    const featureList = currentLocale === "de" ? FeatureListDE : FeatureListEN;
    return (
        <Layout>
            <Header title={'Use Cases'} description={'Bring your product maintenance to the next level'} />
            <main className='bg-gray-light md:px-36 px-8'>
                <Breadcrumbs />
                <FeatureCardList featureList={featureList} />
            </main>
        </Layout>
    )
}

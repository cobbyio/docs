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
        title: "Import Errors",
        Svg: require("../../static/img/errors.svg").default,
        links: [
            { title: 'AdminWebsiteRemoved', link: '/features/error-codes/AdminWebsiteRemoved' },
            { title: 'CategoryNotFound', link: '/features/error-codes/CategoryNotFound' },
            { title: 'ConfigurableAssignment', link: '/features/error-codes/ConfigurableAssignment' },
            { title: 'DuplicateTierPrice', link: '/features/error-codes/DuplicateTierPrice' }
        ],
        link: '/features/error-codes/AdminWebsiteRemoved'

    },
    {
        title: "Presets",
        Svg: require("../../static/img/preset.svg").default,
        links: [
            { title: 'Presets in cobby', link: '/features/presets#presets-in-cobby' },
            { title: 'Why are cobby presets useful?', link: '/features/presets#why-are-cobby-presets-useful' },
            { title: 'Working with presets', link: '/features/presets#working-with-presets' },
            { title: 'FAQs', link: '/features/presets#faqs' }
        ],
        link: '/features/presets'

    },
    {
        title: "Prices",
        Svg: require("../../static/img/label.svg").default,
        links: [
            { title: 'What are prices?', link: '/features/prices#what-are-prices' },
            { title: 'Why is updating prices with cobby efficient?', link: '/features/prices#why-is-updating-prices-with-cobby-efficient' },
            { title: 'Working with prices', link: '/features/prices#working-with-prices' },
        ],
        link: '/features/prices'
    },
    {
        title: "Images",
        Svg: require("../../static/img/images.svg").default,
        links: [
            { title: 'Add images in cobby', link: '/features/images/add-images-in-cobby' },
            { title: 'Function BILD.ERSTELLEN (IMAGE.CREATE)', link: '/features/images/image-create' },
            { title: 'Image preview in cobby', link: '/features/images/image-preview-in-cobby' },
        ],
        link: '/features/images/add-images-in-cobby'
    },
    {
        title: "Troubleshooting & FAQs",
        Svg: require("../../static/img/troubleshoot.svg").default,
        links: [
            { title: 'Changes are not visible in the frontend', link: '/features/troubleshooting-faqs/changes-are-not-visible-in-the-frontend' },
            { title: 'cobby does not show up in Excel', link: '/features/troubleshooting-faqs/cobby-does-not-show-up-in-excel' },
            { title: 'High server load due to cobby', link: '/features/troubleshooting-faqs/high-server-load-due-to-cobby' },
        ],
        link: '/features/troubleshooting-faqs/changes-are-not-visible-in-the-frontend'
    },
    {
        title: "Product History",
        Svg: require("../../static/img/history.svg").default,
        links: [
            { title: 'What is the product history?', link: '/features/product-history#what-is-the-product-history' },
            { title: 'What is the product history?', link: '/features/product-history#working-with-the-product-history' },
        ],
        link: '/features/product-history'
    },
    {
        title: "Copy products",
        Svg: require("../../static/img/copy.svg").default,
        links: [
            { title: 'Copy one product', link: '/features/copy-products#copy-one-product' },
            { title: 'Copy several products', link: '/features/copy-products#copy-several-products' },
        ],
        link: '/features/copy-products'
    },
    {
        title: "Job History & Icons",
        Svg: require("../../static/img/icons.svg").default,
        links: [
            { title: 'What is the product history?', link: '/features/product-history#what-is-the-product-history' },
            { title: 'Working with the job history', link: '/features/job-history#working-with-the-job-history' },
            { title: 'Troubleshooting', link: '/features/job-history#troubleshooting' }
        ],
        link: '/features/job-history'
    },
];


export default function features() {
    const { i18n } = useDocusaurusContext();
    const { currentLocale } = i18n;
    const featureList = currentLocale === "de" ? FeatureListDE : FeatureListEN;
    return (
        <Layout>
            <Header title={'Features'} description={"Get to know cobby’s basic and advanced features"} />
            <main className='bg-gray-light md:px-36 px-8'>
                <Breadcrumbs />
                <FeatureCardList featureList={featureList} />
            </main>
        </Layout>
    )
}

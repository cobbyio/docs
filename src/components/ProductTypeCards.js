import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css';

const productTypes = [
  {
    emoji: '🎨',
    title: 'Configurable Products',
    description: 'Configurable products are parent products with multiple variations based on attributes like color, size, or material. Understanding how they work helps you manage complex product catalogs effectively.',
    link: './configurable-products',
  },
  {
    emoji: '📦',
    title: 'Simple Products',
    description: 'Simple products are the fundamental building blocks of any e-commerce catalog. They are standalone items with their own SKU, price, and inventory.',
    link: './simple-products',
  },
  {
    emoji: '📚',
    title: 'Grouped Products',
    description: 'Grouped products display multiple simple products together while maintaining product independence. Perfect for presenting related items as a collection.',
    link: './grouped-products',
  },
  {
    emoji: '🎁',
    title: 'Bundle Products',
    description: 'Bundle products enable controlled customization through structured product selections. Customers build their purchase from predefined options.',
    link: './bundle-products',
  },
  {
    emoji: '☁️',
    title: 'Virtual Products',
    description: 'Virtual products are non-physical items that bypass shipping workflows. Services, memberships, and warranties are typical examples.',
    link: './virtual-products',
  },
  {
    emoji: '📥',
    title: 'Downloadable Products',
    description: 'Downloadable products provide secure digital file delivery with access controls. eBooks, software, and digital content are managed through this product type.',
    link: './downloadable-products',
  },
];

export default function ProductTypeCards() {
  return (
    <section className="row">
      {productTypes.map((item, idx) => (
        <article key={idx} className="col col--6 margin-bottom--lg">
          <Link
            to={item.link}
            className={clsx('card padding--lg', styles.cardContainer)}
            style={{ height: '100%' }}
          >
            <h2 className={clsx('text--truncate', styles.cardTitle)} title={item.title}>
              <span style={{ marginRight: '0.5rem' }}>{item.emoji}</span>
              {item.title}
            </h2>
            <p className={clsx('text--truncate', styles.cardDescription)} title={item.description}>
              {item.description}
            </p>
          </Link>
        </article>
      ))}
    </section>
  );
}

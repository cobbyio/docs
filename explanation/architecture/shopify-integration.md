---
sidebar_position: 6
title: Shopify Integration
description: How cobby connects to Shopify and enables bulk product management through Excel with real-time synchronization
---

# Shopify Integration

Shopify is one of the world's leading e-commerce platforms, powering millions of online stores from small businesses to enterprise brands. cobby extends its PIM capabilities to Shopify, enabling merchants to manage their product catalogs in Excel while maintaining real-time synchronization with their Shopify store.

## Why Use cobby with Shopify?

Shopify's built-in admin interface works well for stores with a manageable number of products. However, as your catalog grows, maintaining product data through the web interface becomes increasingly time-consuming:

- **Bulk editing** hundreds or thousands of products one by one is impractical
- **Multi-language content** requires switching between locales for every single product
- **Price adjustments** across large catalogs demand a more efficient workflow
- **SEO optimization** of titles, descriptions, and meta fields at scale needs spreadsheet-level flexibility
- **Team collaboration** is limited when everyone edits through the same web interface

cobby solves these challenges by bringing your entire Shopify catalog into Excel — where your team already has the skills and tools for efficient bulk data management.

## How the Connection Works

cobby connects to Shopify through the **Shopify Admin API**, using a secure OAuth-based authentication flow. This connection enables bidirectional synchronization between your Excel workbook and your Shopify store.

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│  Shopify Store   │ ←─────→ │  cobby Service   │ ←─────→ │  Excel Add-in   │
│                  │  HTTPS  │  (Cloud)         │  HTTPS  │  (Your PC)      │
└─────────────────┘         └──────────────────┘         └─────────────────┘
     Shopify                     Central                      cobby
    Admin API                 Orchestrator                   Add-in
```

### Authentication & Security

The integration uses Shopify's standard app authentication:

1. **Install the cobby app** from the Shopify App Store or via a custom app link
2. **Grant permissions** — cobby requests access to products, inventory, collections, and metafields
3. **Secure token exchange** — all communication uses OAuth 2.0 tokens over HTTPS
4. **Scoped access** — cobby only accesses the data it needs, nothing more

Your credentials are never stored in Excel. The cobby service handles all authentication securely in the cloud.

## Supported Shopify Data

cobby maps Shopify's product data model into a familiar Excel structure:

### Products & Variants

| Shopify Field | Excel Column | Notes |
|---------------|-------------|-------|
| Title | Product Title | Main product name |
| Body HTML | Description | Rich text product description |
| Vendor | Vendor | Brand or manufacturer |
| Product Type | Product Type | Category classification |
| Tags | Tags | Comma-separated tags |
| Handle | URL Handle | SEO-friendly URL slug |
| Status | Status | Active, Draft, or Archived |
| Variant SKU | SKU | Unique identifier per variant |
| Variant Price | Price | Selling price |
| Compare at Price | Compare Price | Original/strikethrough price |
| Variant Inventory | Inventory Qty | Stock quantity per location |
| Variant Weight | Weight | Shipping weight |
| Option 1/2/3 | Option Values | Size, Color, Material, etc. |

### Collections

Shopify uses **collections** instead of traditional categories. cobby supports both:

- **Manual collections** — assign products to specific collections via Excel
- **Smart collections** — view which automated collections a product belongs to

### Metafields

Shopify metafields allow you to store custom data beyond the standard product fields. cobby supports reading and writing metafields, enabling you to manage:

- Custom product specifications
- Care instructions
- Material composition
- Any other structured data your store requires

### Multi-Location Inventory

For merchants using Shopify's multi-location inventory, cobby displays stock levels per location in separate columns — making it easy to update inventory across warehouses, retail stores, and fulfillment centers simultaneously.

## Key Differences from Magento & Shopware

If you're already familiar with cobby for Magento or Shopware, here are the key differences when working with Shopify:

| Aspect | Magento/Shopware | Shopify |
|--------|-----------------|---------|
| Categories | Hierarchical category tree | Collections (manual & smart) |
| Attributes | Attribute sets with types | Product options + metafields |
| Store Views | Multi-store views | Markets & languages |
| Pricing | Complex tier pricing | Simple price + compare price |
| Product Types | Simple, configurable, bundle, etc. | Products with variants |
| URL Structure | URL keys with rewrites | Handles (auto-generated) |

### What This Means in Practice

- **Simpler product model:** Shopify uses a flat product-with-variants model rather than complex product type hierarchies. This makes bulk editing more straightforward.
- **Collections vs. categories:** Instead of managing a deep category tree, you work with collections. cobby lets you assign products to multiple collections in a single column.
- **Metafields for custom data:** Where Magento uses custom attributes, Shopify relies on metafields. cobby maps these to regular Excel columns.

## Getting Started

To connect your Shopify store with cobby:

1. **Ensure you have a cobby subscription** that includes Shopify support
2. **Install the cobby Shopify connector** via the setup wizard in your cobby workspace
3. **Authorize the connection** by logging into your Shopify admin when prompted
4. **Import your catalog** — cobby will pull your entire product catalog into Excel

For detailed step-by-step instructions, see the [Shopify Installation Guide](/how-to/installation/install-cobby-shopify).

## Limitations & Considerations

- **API rate limits:** Shopify enforces API rate limits. cobby handles throttling automatically, but very large bulk operations may take longer than with self-hosted platforms.
- **Image management:** Shopify hosts all images on its CDN. cobby supports uploading new images via URL references.
- **Variant limit:** Shopify allows a maximum of 100 variants per product (3 options with up to 100 combinations). This is a Shopify platform limitation, not a cobby restriction.
- **Theme-specific fields:** Some data tied to specific Shopify themes may not be accessible via the API.

## Further Reading

- [How cobby Works](/explanation/architecture/how-cobby-works) — understand the three-tier architecture
- [Understanding Product Types](/explanation/product-types/simple-products) — compare product models across platforms

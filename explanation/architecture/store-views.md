---
sidebar_position: 4
title: Store Views
description: Understanding how Store Views enable multi-language and multi-region e-commerce through content localization and scope-based attribute management.
---

# Store Views

When you first load products into cobby, you might notice something unexpected: the same product appears multiple times in your spreadsheet—once for each Store View configured in your Magento or Shopware installation. This isn't a duplication error or a sync problem. It's a fundamental aspect of how modern e-commerce platforms enable multi-language, multi-region, and multi-brand operations.

Understanding Store Views is essential for anyone managing products in cobby, because it explains why products repeat, how changes affect different storefronts, and when to edit "All Store Views" versus specific views. This concept sits at the intersection of e-commerce platform architecture and practical product management, and grasping it transforms confusion into strategic capability.

## 🏗️ What Store Views Are

---

Store Views are part of a three-tier organizational hierarchy that Magento and Shopware use to structure multi-storefront operations:

```
Website
  └── Store (Store Group)
      └── Store View
          └── Store View
          └── Store View
```

At the top level, a **Website** represents a distinct domain or subdomain, which is essentially a separate e-commerce property within your Magento installation. Most merchants operate a single Website, but the architecture supports multiple independent sites sharing backend infrastructure.

Within each Website, **Stores** (sometimes called Store Groups) define the product catalog and category structure. Different Stores can offer different product assortments, though most merchants use a single Store per Website.

Finally, **Store Views** are the most granular level—they represent different presentations of the same catalog. Each Store View can have its own:

- **Language and localization:** English, German, French, Spanish, etc.
- **Currency and pricing:** USD, EUR, GBP with store-specific pricing rules
- **Content and descriptions:** Localized product descriptions, SEO metadata, labels
- **Visual presentation:** Different themes or layouts for different audiences
- **Regional customization:** Measurements, date formats, regulatory compliance text

The key insight is that Store Views share the same underlying product catalog but present it differently. When you create a product in Magento, it exists in the catalog once, but it can display differently across Store Views. A product named "Blue Shirt" in the English Store View might display as "Blaues Hemd" in the German Store View, with pricing shown in EUR instead of USD, and product descriptions translated accordingly.

This architecture enables sophisticated multi-market operations from a single Magento installation without maintaining separate product databases.

## 🎯 Why Store Views Exist

---

The Store View architecture solves several complex e-commerce challenges that would otherwise require maintaining separate, independent shop installations.

### Multi-Language E-Commerce

The most common use case is supporting multiple languages. A company selling throughout Europe needs the same product catalog presented in German, French, Italian, and English. Without Store Views, this would require:

- Four separate Magento installations with duplicated product data
- Manual synchronization to keep inventories aligned
- Complex order management across disconnected systems
- Multiplied maintenance overhead (updates, patches, extensions for each installation)

Store Views eliminate this complexity. You manage a single product catalog, but each language Store View presents localized content. When you update inventory or add a new product, it's immediately available across all language versions—no synchronization required.

### Regional Market Differentiation

Store Views aren't only for language translation—they enable regional differentiation within the same language. Consider a US retailer expanding to Canada and the UK. All three markets speak English, but they require different presentations:

- **Pricing and currency:** USD for US, CAD for Canada, GBP for UK
- **Regulatory compliance:** Different ingredient disclosure requirements, safety warnings, or labeling standards
- **Regional preferences:** Different product descriptions emphasizing features relevant to each market (winter gear descriptions differ for Canadian vs. UK climates)
- **Shipping and fulfillment messaging:** Different delivery timeframes, shipping costs, and warehouse locations

Store Views allow the same English product catalog to be adapted for each market's specific needs without maintaining separate installations.

### Multi-Brand Operations

Some merchants operate multiple brands from a single backend. A fashion company might manage both a premium brand and a value brand, each with distinct visual identity and messaging, but sharing much of the same inventory.

Store Views enable this by presenting the same products with different:

- **Brand voice and messaging:** Luxury-focused descriptions vs. value-focused descriptions
- **Pricing strategies:** Premium pricing in one Store View, competitive pricing in another
- **Visual presentation:** Different themes, logos, and styling
- **Product selection:** The same catalog filtered differently for each brand's positioning

This multi-brand capability allows merchants to address different market segments without maintaining separate product databases.

### Content Localization While Sharing Operational Data

Here's where Store Views reveal their architectural elegance: they separate **content** from **operational data**.

Attributes like product names, descriptions, and meta descriptions are **content**—they should differ by Store View to serve different audiences. But attributes like SKU, cost, weight, and attribute set are **operational data**—they're intrinsic to the product itself and shouldn't vary by presentation.

Store Views implement this separation through attribute **scope**:

- **Global scope:** Attributes that are the same everywhere (SKU, attribute set, tax class)
- **Website scope:** Attributes that can differ per Website (base prices in multi-Website setups)
- **Store View scope:** Attributes that can differ per Store View (names, descriptions, images, meta data)

This scoping architecture allows you to maintain a single source of truth for operational data while customizing presentation for each audience. Change a product's weight once, and it updates everywhere. Change a product's name in the German Store View, and only German customers see the change.

## ⚙️ How Store Views Work in cobby

---

cobby surfaces the Store View architecture directly in Excel, which is why understanding this concept is crucial for day-to-day product management.

### Why Products Appear Multiple Times

When you load products in cobby, each product appears once for every Store View configured in your Magento installation. If you have four Store Views (Default, German, French, Spanish), a catalog of 1,000 products displays as 4,000 rows in Excel.

This isn't data duplication—it's **perspective multiplication**. Each row represents the same product viewed through a different Store View lens. The row for "Product ABC - German Store View" shows how that product appears in the German storefront, while "Product ABC - French Store View" shows the French presentation.

cobby displays products this way because Store Views are the unit of content customization. To edit how a product appears in German, you work with the German Store View row. To edit how it appears in French, you work with the French row.

### The "All Store Views" Scope

In addition to specific Store View rows, cobby includes an "All Store Views" scope, which is a special row representing default values shared across all Store Views unless overridden.

Think of "All Store Views" as the foundation layer. When you set an attribute value in "All Store Views," that value appears in every Store View row unless specifically overridden. This cascade behavior enables efficient management:

**Example:** You load a product with four Store Views (All Store Views, English, German, French).

1. In "All Store Views," you set the product name to "Classic T-Shirt"
2. English, German, and French rows all inherit "Classic T-Shirt"
3. In the German row, you override the name to "Klassisches T-Shirt"
4. The German storefront displays "Klassisches T-Shirt"
5. English and French storefronts continue displaying "Classic T-Shirt" (inherited from "All Store Views")

This inheritance model means you don't need to enter the same information four times. Set it once in "All Store Views," then override only where necessary for localization.

### Override Logic: Specific Beats General

The relationship between "All Store Views" and specific Store Views follows a straightforward precedence rule: **specific Store View values override "All Store Views" values**.

When Magento renders a product page, it follows this logic:

1. Does this product have a value for this attribute in the current Store View?
   - **Yes:** Use that specific value
   - **No:** Fall back to "All Store Views" (default) value

This override architecture provides flexibility and efficiency. You can:

- Set common values once in "All Store Views"
- Override only what needs localization in specific views
- Remove overrides to revert to the default value (fall back to "All Store Views")

**Practical implication:** If you change a value in "All Store Views," that change propagates to all Store Views that **don't have their own override**. Store Views with existing overrides remain unchanged, they continue using their specific values.

### Which Attributes Are Scope-Dependent

Not every attribute behaves the same way across Store Views. cobby displays all attributes, but their behavior depends on the **scope** configured in Magento:

**Global scope attributes:**
- SKU (product identifier)
- Attribute Set
- Product Type (simple, configurable, bundle, etc.)
- Tax Class
- Weight

These attributes appear in all Store View rows but show the same value. Changing them in any row changes them everywhere—there are no Store View-specific versions of global attributes.

**Store View scope attributes:**
- Product Name
- Description
- Short Description
- Meta Title, Meta Keywords, Meta Description
- Images (in most configurations)
- URL Key (slug for product URLs)
- Custom attributes configured with Store View scope

These attributes can differ between Store Views. Changing them in one Store View row affects only that storefront.

**Website scope attributes:**
- Price (in some configurations—can be global or website-specific)
- Special Price
- Tier Pricing

Website scope is relevant primarily in multi-Website Magento installations. Most merchants operate a single Website, so Website scope behaves similarly to global scope for their purposes.

Understanding attribute scope helps you predict which changes are localized and which are universal. Changing a product's SKU affects all Store Views because SKU is global. Changing a product's description in the German Store View affects only German customers because description is Store View-scoped.

### Viewing and Filtering Store Views in cobby

cobby provides filtering controls to manage which Store Views appear in your spreadsheet. Loading all Store Views for large catalogs creates very large spreadsheets, so you often want to focus on specific views.

**In the cobby ribbon:**

The Store View filter lets you select which views to load:
- **All Store Views:** Loads every Store View (including the "All Store Views" scope)
- **Specific Store Views:** Load only selected views (e.g., "English" and "German" only)
- **All Store Views scope only:** Load just the default values without specific Store View rows

This filtering is purely presentational—it controls what cobby displays in Excel, not what exists in Magento. Filtering to show only the German Store View doesn't delete products from other views; it simply hides those rows from your current work session.

**Strategic filtering:**

Product management teams often develop filtering strategies:

- **Daily content work:** Load only the specific Store View being updated (e.g., German Store View for German content review)
- **New product creation:** Load "All Store Views" only to set default values without clutter
- **Multi-language campaigns:** Load all language Store Views to coordinate localized marketing content
- **Bulk operations:** Load only the relevant Store View to avoid accidentally changing other languages

Filtering makes large multi-Store View catalogs manageable by showing only what's relevant to your current task.

## 💡 Practical Implications

---

Understanding Store View architecture isn't just theoretical—it directly impacts daily product management decisions and explains behavior that might otherwise seem confusing.

### When to Use "All Store Views" vs. Specific Store Views

The choice between editing "All Store Views" and specific Store Views depends on whether you want universal or localized changes.

**Use "All Store Views" when:**

- Creating new products (set default values that apply everywhere)
- Updating operational data that shouldn't vary (weight, dimensions, SKU, tax class)
- Setting baseline content that most Store Views will inherit (default product name and description)
- Making universal changes across all storefronts simultaneously

**Use specific Store Views when:**

- Translating content (product names, descriptions for other languages)
- Localizing for regional preferences (emphasizing different features for different markets)
- Customizing for brand differentiation (different messaging for different brands)
- Overriding prices or promotional content for specific markets

**Example workflow for new product:**

1. Load "All Store Views" only
2. Create the product, set SKU, attributes, default name, and description
3. Save to Magento
4. Load specific Store Views (German, French)
5. Translate and localize content in those rows
6. Save changes

This approach minimizes repetition and makes clear which values are defaults and which are localizations.

### How Changes Cascade (or Don't)

One of the most common points of confusion is understanding when changes propagate across Store Views and when they don't.

**Changes in "All Store Views" propagate to Store Views that haven't overridden the attribute:**

- If German, French, and Spanish Store Views all inherit the product name from "All Store Views," changing the name in "All Store Views" updates all three
- If German has overridden the name with a translation, changing "All Store Views" updates French and Spanish but **not** German

**Changes in specific Store Views never propagate elsewhere:**

- Changing the product name in the German Store View affects only German customers
- Other Store Views (French, Spanish, English) are completely unaffected
- "All Store Views" remains unchanged

This one-way cascade (from "All Store Views" down to specific views, but never back up or sideways) prevents accidental overwrites. You can safely localize content in one Store View without worrying about affecting others.

### Why Understanding Scope Is Critical

For product management staff, especially those without deep Magento technical knowledge, scope determines the **blast radius** of changes.

**Low-risk changes (small blast radius):**

- Editing Store View-scoped attributes in a specific Store View
- Only affects that one storefront
- Safe for localization work by regional teams

**High-risk changes (large blast radius):**

- Editing global-scoped attributes (affects all storefronts simultaneously)
- Editing "All Store Views" for attributes widely inherited (affects all Store Views without overrides)
- Requires coordination across teams managing different Store Views

Understanding scope helps teams structure their workflows appropriately:

- Regional content teams can work independently in their specific Store Views without cross-team coordination
- Operations teams managing SKUs, inventory, and product structure understand their changes affect all storefronts
- Marketing teams coordinating multi-market campaigns understand which changes are universal and which need per-market customization

### Common Confusion Points

Several scenarios consistently confuse users unfamiliar with Store View architecture:

**"I changed the product name in Excel, but it didn't change on the German site"**

Likely cause: You edited the name in "All Store Views," but the German Store View has an existing override (translation). The override prevents the "All Store Views" change from cascading to German.

Solution: Edit the German Store View row directly if you want to change the German presentation.

**"The product appears four times in Excel—should I delete three of them?"**

No. Those aren't duplicates; they're different perspectives of the same product. Deleting one row deletes the product from that Store View (or removes override data, depending on implementation). You want all rows to manage how the product appears in different storefronts.

**"I updated descriptions in German, but now my Excel has a red status indicator"**

Red status means your Excel data is out of sync with Magento. This might happen if someone else modified the product, or if Magento's indexing process triggered change notifications. Reload products to synchronize—your German changes are saved; you just need to refresh your view.

**"Why does changing the SKU affect all Store Views, but changing the name only affects one?"**

Because SKU is global scope (the same everywhere), while name is Store View scope (can differ per view). Scope determines whether an attribute is shared or customizable per Store View. You're not doing anything wrong—this is how the attribute is configured in Magento.

---

## Related Topics

- [Product Attributes and Scopes](/explanation/architecture/product-attributes) - Deep dive into attribute scopes (global, website, store view) and how they enable multi-language e-commerce
- [How cobby Works](/explanation/architecture/how-cobby-works) - Understanding the overall architecture and why products are displayed in Excel rows
- [How to Reset Store View Values to Defaults](/how-to/product-management/reset-storeview-defaults) - Removing Store View-specific overrides and reverting to "All Store Views" values
- [How to Add Attribute Option Translations](/how-to/attributes/add-option-translations) - Translating dropdown/select attribute options across Store Views

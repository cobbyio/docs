---
sidebar_position: 2
title: Product Attributes and Scopes
description: Understanding product attributes, attribute sets, and attribute scopes in e-commerce platforms and how they shape product data management in cobby.
---

# Product Attributes and Scopes

When you first start managing products in cobby, you encounter a structured world of fields, columns, and data that might seem arbitrarily organized. Why does a product have exactly these attributes and not others? Why can you change some values independently for each store view while others change everywhere simultaneously? Why do different products display different columns in Excel?

The answers lie in the fundamental architecture of how e-commerce platforms structure product data. It's a system built around three interconnected concepts: **product attributes**, **attribute sets**, and **attribute scopes**. Understanding this architecture transforms cobby from a confusing spreadsheet into a logical, powerful product management interface.

This article explains the reasoning behind this structure, how it enables flexible product management at scale, and why cobby surfaces this architecture the way it does.

## 🏗️ What Product Attributes Are

---

At their most basic level, **product attributes** are the individual data fields that describe products. Every piece of information you manage about a product—its name, price, SKU, weight, color, description, images—exists as an attribute.

Think of attributes as the vocabulary of product data. Rather than storing product information as unstructured text, e-commerce platforms decompose it into discrete, typed attributes:

- **Name** (text attribute) — "Classic Cotton T-Shirt"
- **Price** (decimal attribute) — 24.99
- **SKU** (text attribute) — "TSH-BLU-001"
- **Color** (dropdown attribute) — "Blue"
- **Weight** (decimal attribute) — 0.3
- **Description** (rich text attribute) — Formatted HTML content
- **Images** (media attribute) — Multiple product photos

This attribute-based structure provides critical advantages over free-form data storage.

### Why Structured Attributes Matter

E-commerce platforms could store product information as unstructured text, but this creates insurmountable problems:

**Data validation:** Price attributes only accept numeric values, preventing errors like entering "twenty-five dollars" instead of 24.99.

**Multi-language support:** Structured attributes can be marked as translatable (Name, Description) while others remain universal (SKU, Weight), enabling efficient localization without duplicating operational data.

**Bulk operations:** With structured Price attributes, you can programmatically increase all prices by 10%. Unstructured data would require manual parsing.

This structure enables functionality impossible otherwise—from customer-facing features like filtering and search to operational capabilities like bulk updates and system integration.

### Attributes Have Types and Behaviors

E-commerce platforms define attributes with specific **data types** that determine what values they can hold:

- **Text field** — Simple text input (SKU, Meta Keywords)
- **Dropdown/Select** — Single choice from predefined options (Color, Manufacturer)
- **Yes/No** — Boolean toggle (Enable Product, Is Featured)
- **Decimal/Number** — Numeric values (Price, Weight)
- **Media/Image** — File upload and management (Product Images)

Each data type determines how users enter values, how values are validated, and how they're displayed to customers.

### The Attribute Definition vs. Attribute Value

The **attribute definition** specifies the attribute's name, data type, whether it's required, and which scope it uses. The **attribute value** is the actual data for a specific product.

cobby displays attribute definitions as **column headers** in Excel, and each product row contains the **values** for those attributes. When you load products in cobby, you're seeing the intersection of attribute definitions (which attributes exist and how they behave) and attribute values (the actual product data).

## 📦 Attribute Sets: Grouping Attributes by Product Type

---

If attributes define the vocabulary of product data, **attribute sets** define which vocabulary applies to which products.

Here's the fundamental insight: not every product needs the same attributes. A clothing item needs "Size" and "Material," but an electronics product needs "Wattage" and "Warranty Period." Attribute sets solve this variability by defining groups of attributes that apply to specific categories of products.

### How Attribute Sets Work

Think of an attribute set as a template that defines a product's data structure:

**Default Attribute Set:**
- Contains core attributes that virtually all products need
- Name, Price, SKU, Description, Short Description, Images, Weight, Status
- Used when you don't need specialized attributes

**Apparel Attribute Set:**
- Contains all Default attributes PLUS apparel-specific fields
- Size, Color, Material, Care Instructions, Fit Type, Season
- Used for clothing, shoes, accessories

When you assign a product to an attribute set, you're determining its **data structure**—which fields exist for that product and which fields appear when you edit it.

### Why Attribute Sets Are Essential

Without attribute sets, you would face two problematic alternatives:

**Option 1: All products have all attributes** — Your clothing would have useless "Wattage" fields, electronics would have pointless "Allergens" fields, and product forms would contain hundreds of mostly irrelevant fields.

**Option 2: Every product has a custom structure** — No standardization means you can't enforce consistent data collection or perform bulk operations across similar products.

Attribute sets provide the optimal middle ground: **products of similar types share a common structure**, while different product types can have appropriately different attributes.

Most attribute sets inherit from the Default attribute set, adding specialized attributes on top of core fields. This means attributes like Name, Price, and SKU exist in every attribute set—they're universal.

### Attribute Sets in cobby: Column Visibility

cobby surfaces the attribute set architecture through **column visibility**:

- Each product row displays columns corresponding to its attribute set
- Products in the Apparel attribute set show Size and Material columns
- Products in the Electronics attribute set show Wattage and Warranty columns
- If you load products from multiple attribute sets simultaneously, cobby displays the union of all columns—but individual products only have values in columns relevant to their attribute set

This is why you might see columns that appear empty or irrelevant for certain products—those columns belong to different attribute sets that you've loaded simultaneously.

**Practical implication:** When working with a specific product type in cobby, filter to load only products from that attribute set. This presents a clean, focused view with only relevant columns, making Excel management more efficient.

## 🌍 Attribute Scopes: The Three Levels of Data Sharing

---

Attribute sets determine **which attributes a product has**, but **attribute scopes** determine **how those attributes behave across store views**.

This is where the architecture reveals its elegance and where many users experience initial confusion. The same product appears multiple times in cobby (once per store view), and some attributes show identical values across all rows while others can differ. Scope is the explanation.

### The Three Scope Levels

Magento defines three scope levels that determine whether an attribute's value can vary across your multi-store hierarchy:

**Global Scope** — The attribute value is identical across all websites and store views
**Website Scope** — The attribute value can differ per website (relevant in multi-website setups)
**Store View Scope** — The attribute value can differ per store view (language/region)

Each attribute is configured with exactly one scope, and that scope determines whether the attribute represents universal operational data or localizable content.

### Global Scope: Universal Product Properties

Global scope attributes represent **intrinsic properties of the product itself**—characteristics that don't change based on where or to whom the product is being sold.

**Common global scope attributes:**
- **SKU** — The product's unique identifier
- **Attribute Set** — The product's structural template
- **Product Type** — Simple, configurable, bundle, grouped
- **Tax Class** — Which tax rules apply
- **Weight** — Physical weight for shipping
- **Status** — Enabled or disabled

These attributes are global because they represent fundamental facts about the product. A product's SKU doesn't change based on language or region—it's the unique identifier that your inventory system, warehouse, and ERP use to track the item.

**Practical implication:** When you change a global attribute in cobby, that change affects **every store view row simultaneously**. If you load a product with four store views and change the SKU in the German row, all four rows update with the new SKU. You're not changing the "German SKU"—you're changing the product's SKU, which is universal.

This behavior can be initially confusing: "Why did changing the SKU in one row change it everywhere?" The answer is scope—SKU is global, so there's only one value that appears in all rows.

### Why Global Scope Exists

Global scope prevents operational data fragmentation. Imagine if SKU were store view-scoped and could differ per language—your German store uses "TSH-001" while French uses "TSH-FR-001" for the same physical product. Your warehouse receives orders with different SKUs for the same item and can't track inventory correctly.

Global scope enforces a single source of truth for operational attributes. Your warehouse, inventory system, and fulfillment partners all reference the same SKU, regardless of which storefront the order originated from.

### Store View Scope: Localizable Content

Store view scope attributes represent **content that should adapt to different audiences**—translations, localized descriptions, market-specific messaging.

**Common store view scope attributes:**
- **Name** — Product name translated to different languages
- **Description** — Full product description localized for each market
- **Short Description** — Brief product summary translated
- **Meta Title, Meta Keywords, Meta Description** — SEO metadata localized
- **URL Key** — Product page slug (e.g., "blue-shirt" in English, "chemise-bleue" in French)
- **Images** — In many configurations, allowing different images per market

These attributes are store view-scoped because their purpose is communication with customers, and effective communication requires adaptation to language, culture, and market context.

**Practical implication:** When you change a store view scope attribute, that change affects **only that specific store view**. If you load a product with four store views and change the Name in the German row, only the German storefront displays the new name. English, French, and Default store views are unaffected.

This localization capability is what enables multi-language e-commerce from a single Magento installation.

### Website Scope: The Middle Ground

Website scope sits between global and store view scope, allowing attributes to differ per website while remaining consistent across store views within that website. Common website-scoped attributes include Price, Special Price, and Tier Pricing.

Website scope is less commonly encountered because most merchants operate a single website with multiple store views. In single-website setups, website scope effectively behaves like global scope—values are the same everywhere because there's only one website.

### The Scope Cascade: Inheritance and Overrides

Store view scope attributes implement an **inheritance and override mechanism** that enables efficient data management:

When you set an attribute value in the "All Store Views" scope, that value serves as the **default** for all specific store views. Each specific store view can then **override** the default with its own value.

**Example cascade:**

1. Product: Classic T-Shirt
2. In "All Store Views," you set Name = "Classic Cotton T-Shirt"
3. German Store View overrides: Name = "Klassisches Baumwoll-T-Shirt"
4. French Store View inherits: "Classic Cotton T-Shirt" (no override)

Result:
- German customers see "Klassisches Baumwoll-T-Shirt" (override)
- French customers see "Classic Cotton T-Shirt" (inherited from default)

This cascade minimizes repetitive data entry. You set the default value once, and only override where localization is necessary.

**When you change the "All Store Views" value:**
- Store views with **no override** see the change (they continue inheriting)
- Store views with **existing overrides** remain unchanged (their specific value takes precedence)

This one-way cascade ensures that localization work is isolated. You can safely customize German content without accidentally affecting French or English.

### Why Scope Architecture Exists

The scope system solves the fundamental challenge of multi-market e-commerce: **how do you share operational data while localizing content?**

Scopes provide the optimal balance: **operational attributes remain globally consistent** (enabling reliable inventory, fulfillment, and integration) while **content attributes localize per market** (enabling effective communication and customer experience).

## 💡 Practical Implications in cobby

---

Understanding attributes, attribute sets, and scopes isn't just theoretical—it directly shapes how you work in cobby and explains behavior that might otherwise seem confusing.

### Why Products Appear Multiple Times

When you load products in cobby, each product appears once per store view. If you have four store views configured, a catalog of 1,000 products displays as 4,000 rows.

This repetition exists because store views are the unit of content localization. The architecture requires that you can edit how each product appears in each market independently. The row labeled "Product ABC - German Store View" shows how that product presents to German customers. The row labeled "Product ABC - French Store View" shows the French presentation.

### Understanding Scope Behavior

**Global scope attributes** show identical values in all rows:
- SKU column shows "TSH-001" in all rows
- Attribute Set shows "Apparel" in all rows
- Weight shows "0.3" in all rows

**If you change one, you change all:** Edit the SKU in any row, and all rows for that product update simultaneously when you save. You're not editing the "German SKU"—you're editing the product's SKU.

**Store view scope attributes** show different values in different rows:
- Name column shows "Classic T-Shirt" in English row, "Klassisches T-Shirt" in German row
- Description column shows English text in one row, German text in another

**Changes are isolated:** Edit the Name in the German row, and only the German storefront changes. English, French, and other store views remain unaffected.

### How to Know What Scope an Attribute Has

cobby doesn't explicitly label attribute scope, but you can observe scope behavior:

**Observation method:**
1. Load a product that exists in multiple store views
2. Change an attribute value in one store view row
3. Save products
4. Reload products
5. Check if the change appears in all rows (global) or only the edited row (store view)

**Documentation method:**
- Refer to Magento admin: **Stores → Attributes → Product**
- Find the attribute and check its **Scope** setting
- This configuration determines how the attribute behaves in cobby

### Column Visibility and Attribute Sets

When you load products from multiple attribute sets simultaneously, cobby displays the union of all columns. Individual products only have values in columns relevant to their attribute set—empty columns simply represent attributes that don't apply to that product's attribute set.

**To reduce clutter:** Filter cobby to load only one attribute set at a time. This shows only relevant columns for the products you're working with, making Excel more manageable.

### The "All Store Views" Row and Inheritance

When you load products with "All Store Views" selected, cobby includes a special row representing **default values** shared across store views.

Think of "All Store Views" as the foundation layer:
- Values set in "All Store Views" become defaults for all specific store views
- Specific store views can override these defaults with their own values
- Store views without overrides continue inheriting from "All Store Views"

**Practical workflow:**

1. Load "All Store Views" for a new product
2. Set Name = "Classic T-Shirt" (this becomes the default)
3. Save and load specific store views (German, French)
4. German row inherits "Classic T-Shirt" initially
5. Override German Name to "Klassisches T-Shirt"
6. French row continues inheriting "Classic T-Shirt" (no override needed)
7. Save

This inheritance model minimizes repetitive data entry and clearly distinguishes between defaults and localized customizations.

## 🔍 Common Confusion Points

---

Several scenarios consistently confuse users unfamiliar with attribute and scope architecture. Let's address the most common misunderstandings.

### "Why can't I change this attribute just for the German store view?"

**Symptom:** You change an attribute in the German row, and the change appears in all rows (English, French, Default).

**Explanation:** The attribute is **global scope**. There's only one value for the entire product, shared across all store views.

**Examples:**
- Changing SKU in German row changes it everywhere (SKU is global)
- Changing Weight in French row changes it everywhere (Weight is global)
- Changing Attribute Set in any row changes it everywhere (Attribute Set is global)

**Solution:** This isn't a bug—it's how the attribute is configured. If you need store view-specific values, you would need to use a different attribute or reconfigure the attribute's scope in Magento (requires admin access).

### "Why don't I see certain columns?"

**Symptom:** Documentation mentions an attribute (e.g., "Material"), but you don't see that column in your Excel view.

**Explanation:** The attribute doesn't exist in the **attribute set** of the products you've loaded.

**Examples:**
- Loading Default attribute set products → Material column doesn't appear (Material is Apparel-specific)
- Loading Electronics attribute set products → Size column doesn't appear (Size is Apparel-specific)
- Loading Apparel attribute set products → Wattage column doesn't appear (Wattage is Electronics-specific)

**Solution:** Verify which attribute set your products belong to. If you need additional attributes, either:
- Switch products to an attribute set that includes those attributes (complex operation)
- Add the needed attributes to the existing attribute set (requires Magento admin access)
- Create a new attribute set with the desired combination of attributes

### "I changed a description, but now I have a red status indicator"

**Symptom:** You edit the Description in the German row and save. After saving, the row shows a red status indicator.

**Explanation:** Red status means your Excel data is **out of sync** with Magento's current state. This typically indicates:

- Magento processed your save successfully, but additional changes occurred (indexing, automatic processing)
- Another user or system modified the product while you were editing
- Magento's response included updated data that doesn't match what you currently see

**Solution:** Reload products in cobby. This refreshes your Excel view to match Magento's current state. Your saved changes are preserved—the red status simply means you need to synchronize your view with the latest data.

Red status is a protective mechanism: it alerts you that continuing to work with out-of-sync data could lead to overwriting changes. Always reload when you see red status to ensure you're working with current data.

---

Understanding this architecture transforms your perception of cobby. Rather than a confusing spreadsheet with mysterious behavior, it becomes a logical interface to a sophisticated data structure designed for flexible, scalable, multi-market product management.

## Related Topics

- [Store Views](/explanation/architecture/store-views) - Understanding how Store Views enable multi-language and multi-region e-commerce through scope-based attribute management
- [How cobby Works](/explanation/architecture/how-cobby-works) - The three-tier architecture that brings this attribute structure into Excel
- [How to Reset Store View Values to Defaults](/how-to/product-management/reset-storeview-defaults) - Removing store view-specific overrides to revert to default values

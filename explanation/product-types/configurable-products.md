---
sidebar_position: 1
title: Understanding Configurable Products
---

# Understanding Configurable Products

Configurable products are one of the most powerful yet complex product types in e-commerce. They represent a parent product that has multiple variations (simple products) based on attributes like color, size, or material. Understanding how cobby handles configurable products helps you manage product catalogs more effectively.

## What Are Configurable Products?

A configurable product is a parent product that doesn't have inventory itself but represents a collection of simple products (called "child products" or "variants"). When a customer selects options like "Red" and "Large", they're actually choosing a specific simple product that belongs to the configurable parent.

**Example Structure:**
- **Configurable Product:** T-Shirt (parent)
  - **Simple Product 1:** T-Shirt - Red - Small
  - **Simple Product 2:** T-Shirt - Red - Large
  - **Simple Product 3:** T-Shirt - Blue - Small
  - **Simple Product 4:** T-Shirt - Blue - Large

## Why Configurable Products Work This Way

### The Relationship Hierarchy

The parent-child relationship exists because of a fundamental e-commerce principle: customers browse by product concept (a "T-Shirt") but purchase specific items (a "Red Large T-Shirt"). This structure allows you to:

- Display one product page with selectable options
- Manage inventory at the variant level
- Set different prices for different variants
- Track sales by specific variant

### The Correct Creation Order

When creating configurable products, the order matters:

1. **First:** Create the configurable (parent) product
2. **Second:** Create the simple (child) products
3. **Third:** Assign the simples to the configurable

**Why This Order Matters:** The parent product defines what attributes will be configurable (color, size, etc.). The simple products must then have values for those attributes. Creating them in this order ensures consistency and prevents orphaned products.

## How Pricing Works for Configurable Products

Configurable product pricing follows a specific logic that differs from Magento's default behavior. Understanding this helps you avoid confusion when prices seem to change automatically.

### Price Attribution Model

Configurable products use an **attribute option pricing model**. This means:

- The configurable product has a base price
- Each attribute option (e.g., "Red", "Large") can have a price modifier
- The final price is: Base Price + Option 1 Price + Option 2 Price

**Example:**
- Base Price: €10.00
- Color "Red": +€0.00
- Size "Large": +€2.00
- **Final Price:** €12.00

### Why cobby Shows Price Determination Warnings

When you save changes to configurable products, you may see a yellow job status with an exclamation mark (!). **This is not an error** - it's cobby's way of alerting you to pricing inconsistencies that need attention.

![](/img/configurable-products/pic2.png)

**Why This Happens:** If you change a simple product's price without updating the attribute option prices in the configurable product, there's a mismatch. The customer would see one price on the product page (from the configurable) but a different price when they select options (from the simple).

## Automatic Price Determination

cobby includes an automatic price determination feature that resolves pricing conflicts by calculating the correct attribute option prices based on your simple product prices.

### How It Works

The automatic price determination follows this logic:

1. **Find the Lowest Price:** cobby identifies the cheapest simple product associated with the configurable
2. **Set This as Base:** The lowest price becomes the configurable product's base price
3. **Calculate Differences:** For each simple product, cobby calculates the difference from the base price
4. **Update Options:** These differences are entered into the respective attribute options

**Example:**

*Before automatic price determination:*

![](/img/configurable-products/pic3.png)

If a configurable contains:
- Simple Product A: €14.00
- Simple Product B: €7.00

The automatic determination sets the base price to €7.00 (the lowest).

*After adjustment:*

![](/img/configurable-products/pic4.png)

The price difference (€7.00) is then assigned to the appropriate attribute options:

![](/img/configurable-products/pic5.png)

![](/img/configurable-products/pic6.png)

### When Automatic Determination Cannot Work

**Important Limitation:** If your configurable product has more than one super attribute (e.g., both Color AND Size), automatic price determination cannot calculate which attribute option should receive which price difference.

**Why:** With multiple attributes, cobby cannot determine if the €7.00 difference should be attributed to "Red" or to "Large" or split between them. Manual intervention is required in these cases.

## Understanding Grouped Attributes

In Magento, grouped attributes cannot typically be deselected once applied. cobby provides more flexibility here.

**Why This Flexibility Matters:** You might need to temporarily remove an attribute from a configurable product during restructuring or when consolidating products. cobby's checkbox for "Grouped Attributes" allows you to manage these relationships more dynamically.

![](/img/configurable-products/pic1.png)

This gives you control over which attributes are active on a configurable product without having to recreate the entire product structure.

## Why This Architecture Matters

Understanding configurable products' architecture helps you:

- **Avoid pricing errors** by knowing when to update attribute options vs. simple products
- **Structure catalogs efficiently** by creating products in the correct order
- **Manage inventory accurately** by understanding that stock is tracked at the simple product level
- **Debug issues faster** by recognizing what yellow job statuses mean
- **Make informed decisions** about when to use configurable products vs. other product types

## Related How-To Guides

For step-by-step instructions on working with configurable products, see:
- How to Create Configurable Products (coming soon)
- How to Update Configurable Product Prices (coming soon)
- How to Assign Simple Products to Configurables (coming soon)
- How to Use Automatic Price Determination (coming soon)

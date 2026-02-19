---
sidebar_position: 2
title: Simple Products
---

# Simple Products

Simple products are the fundamental building blocks of any e-commerce catalog. While the name suggests they're basic or limited, simple products are actually the most versatile and essential product type in systems like Magento and Shopware. Understanding how simple products work and why they're designed this way helps you build efficient, well-structured product catalogs in cobby.

## 🏗️ What Are Simple Products?
---

A simple product is a standalone item with its own SKU, price, and inventory. It has no variations and represents a single, specific product that can be purchased. When a customer adds a simple product to their cart, they're buying exactly what they see—no options to select, no configurations to choose.

**Examples of Simple Products:**
- A specific book (ISBN 978-3-16-148410-0)
- A desk lamp in white
- A downloadable software license
- A gift card with a fixed value
- A blue t-shirt in size large (when used as a variant)

## 🧱 Why Simple Products Are the Foundation
---

Every product type in e-commerce systems ultimately depends on simple products. This isn't a technical limitation but a deliberate architectural choice that provides flexibility and consistency.

### The Building Block Principle

Simple products serve as the atomic units of your catalog:

- **Configurable products** don't hold inventory themselves; they rely on simple products as their variants
- **Grouped products** bundle multiple simple products together for display purposes
- **Bundle products** offer simple products as selectable components
- **Standalone products** are simple products that exist independently

This architecture means you can reuse the same simple product in multiple contexts. A "Red Large T-Shirt" simple product could be:
- A variant within a "T-Shirt" configurable product
- Part of a "Summer Outfit" grouped product
- A component in a "Custom Apparel Bundle"
- A standalone product sold independently

### Why This Flexibility Matters

The building block approach allows you to restructure your catalog without duplicating products. If you create a simple product once, you can reference it in multiple parent products without maintaining separate inventory or pricing for each context. This reduces errors and simplifies management when working with thousands of products in cobby.

## 🎯 When to Use Simple Products
---

Understanding when to use simple products versus other product types is crucial for catalog structure.

### Products Without Variations

If an item has no selectable options (no size, color, material choices), it should be a simple product. Examples include:
- Books, movies, music
- Unique handcrafted items
- Digital products with no variations
- Services with fixed parameters

### As Child Products for Configurables

When you need to create a configurable product with options, each specific variant must be a simple product. If you're selling a t-shirt in multiple colors and sizes, you'll create:
- One configurable parent ("T-Shirt")
- Multiple simple children ("T-Shirt - Red - Small", "T-Shirt - Red - Large", etc.)

The simple products handle the actual inventory and specific pricing, while the configurable provides the customer-facing browsing experience.

### Items with Unique Characteristics

Even if products seem related, they should be individual simple products if they have different SKUs, separate inventory, or independent pricing. A "Winter 2024 Catalog" and "Spring 2025 Catalog" are separate simple products, not variations of a "Catalog" configurable product.

## 🔗 How Simple Products Work with Other Product Types
---

The relationships between simple products and other product types follow predictable patterns that cobby manages for you.

### Relationship to Configurable Products

Simple products become **child variants** of configurable products. The configurable product acts as a container that groups related simple products and provides the customer-facing selection interface.

**Key Characteristic:** When a simple product is assigned to a configurable, the simple product's inventory and price determine what the customer can actually purchase. The configurable product's price serves as a base or reference point, but the simple product's data takes precedence at checkout.

### Relationship to Grouped Products

Simple products become **members** of grouped products. Unlike configurables where customers select options, grouped products display multiple simple products together, and customers choose quantities of each.

**Key Characteristic:** Simple products in a grouped product remain completely independent. They maintain their own visibility, pricing, and inventory. The grouped product is purely presentational.

### Relationship to Bundle Products

Simple products serve as **selectable options** within bundle products. Customers build their purchase by selecting from available simple products in different bundle sections.

**Key Characteristic:** The bundle product controls pricing rules (fixed or dynamic), but the simple products still provide the base prices and inventory constraints.

### Independent Existence

A simple product can exist in your catalog without being part of any other product type. This is the most straightforward use case—a standalone item that customers can find, view, and purchase directly.

## 💰 Inventory and Pricing for Simple Products
---

Simple products handle inventory and pricing differently than other product types, which is why they're reliable and predictable.

### Direct Inventory Management

Unlike configurable products (which don't hold inventory) or grouped products (which aggregate inventory from children), simple products have direct stock quantities. When you set a simple product's quantity to 100 in cobby, that's exactly how many units are available for purchase.

**Why This Matters:** Inventory management is straightforward. There are no cascading calculations, no parent-child synchronization issues, and no ambiguity about stock levels. What you see in cobby for a simple product is what your customers see on the storefront.

### Straightforward Pricing

Simple products have a single price (or tier prices for quantity-based discounts). There are no option modifiers, no attribute-based price calculations, and no complex pricing hierarchies.

**Why This Simplicity Is Valuable:** When you update a simple product's price in cobby, the change is immediate and unambiguous. You don't need to worry about how attribute options affect the final price or whether parent-child price synchronization will cause conflicts.

### Reliability in Complex Scenarios

Because simple products manage their own inventory and pricing directly, they serve as the source of truth for your catalog. Even when they're part of configurable or grouped products, the simple product's data determines what actually happens at checkout.

## ❌ Common Misconceptions About Simple Products
---

Several misconceptions about simple products can lead to catalog structure problems.

### "Simple" Doesn't Mean "Limited"

The name "simple product" refers to the lack of configurable options, not the product's capabilities. A simple product can have:
- Hundreds of custom attributes
- Complex tier pricing
- Multiple images and videos
- Detailed descriptions
- Custom options (like text fields for personalization)
- Advanced inventory settings

The "simple" designation only means the product doesn't have parent-child relationships for variations.

### Simple Products Can Have Many Attributes

A simple product can have as many attributes as your system supports. You might have attributes for material, manufacturer, country of origin, care instructions, certifications, and more. These attributes describe the product; they just aren't used to create variations.

### Simple Products Can Be Standalone OR Part of Other Products

A simple product's role isn't fixed. Today it might be a standalone product; tomorrow you might add it to a grouped product or make it a variant in a newly created configurable. This flexibility is a feature, not a limitation.

## 💡 Why Understanding Simple Products Matters
---

Simple products are the foundation of catalog management in cobby. Understanding them helps you:

### Structure Products Correctly

Knowing when to use simple products versus creating configurables prevents common mistakes like creating separate products for what should be variants, or trying to create variants for products that should be independent.

### Prevent Errors When Creating Configurables

Configurable products require simple products as children. If you don't understand how simple products work—their pricing, inventory, and attribute requirements—you'll encounter errors when trying to assign them to configurables.

### Manage Inventory Accurately

Understanding that simple products are the actual inventory holders (even when they're part of configurables) helps you manage stock levels correctly. When you're out of stock on a "Red Large T-Shirt", you need to update the simple product, not the configurable parent.

### Debug Catalog Issues

When prices don't match expectations or inventory shows incorrectly, understanding the role of simple products helps you trace the problem. If a configurable shows the wrong price, the issue is often in the relationship between the configurable's attribute options and the simple products' actual prices.

### Build Scalable Catalogs

As your catalog grows to thousands or tens of thousands of products, the simple product architecture becomes increasingly valuable. Reusable simple products that can participate in multiple product relationships reduce duplication and simplify bulk updates in cobby.

## ⚙️ The Role of Simple Products in Your Workflow
---

When working in cobby, simple products are often your starting point and your ending point. You create them first when building configurable products, and you return to them when managing inventory, updating prices, or troubleshooting issues.

Their straightforward nature (one product, one SKU, one price, one inventory count) makes them the most reliable element of your catalog. Everything else builds on this foundation.

## Related Topics

- [Configurable Products](/explanation/product-types/configurable-products) - Understanding how simple products become variants in configurable products

---
sidebar_position: 3
title: Grouped Products
description: Understanding how grouped products display related items together while maintaining product independence
---

## 🎯 What Grouped Products Are

A grouped product is a **presentational product type** that displays multiple simple products together on a single product page. Unlike configurable products, there is no true parent-child relationship—the grouped product simply acts as a showcase or container for organizing related items.

When customers view a grouped product, they see all the associated simple products listed together with individual prices and stock levels. Customers can add any combination of these products to their cart, selecting quantities for each item independently. Each simple product maintains its own pricing, inventory, and product data completely separate from the group.

Think of a grouped product like a display shelf in a physical store: it holds multiple distinct products together for convenience, but each item on the shelf has its own price tag and stock count.

**Example**: A "Home Office Setup" grouped product might display:
- Desk (€299)
- Office Chair (€189)
- Desk Lamp (€45)
- Monitor Stand (€39)

Each item is a separate simple product that customers can purchase individually or together in any combination they choose.

## 💡 Why Grouped Products Exist
---

Grouped products solve a specific merchandising challenge: **how to present related products together without forcing them into an artificial parent-child relationship**.

In many scenarios, you want to suggest complementary products to customers, but these products aren't variations of each other (which would require a configurable product), nor are they sold as a fixed package (which would require a bundle product). They're simply related items that customers might want to buy together.

### Key Advantages

**Product Independence**: Each simple product in the group maintains complete autonomy. It has its own:
- Price (no synchronization needed)
- Inventory tracking
- Product visibility settings
- Attributes and descriptions
- URL and SEO properties

**Merchandising Flexibility**: The same simple product can belong to multiple grouped products simultaneously. A "Wireless Mouse" could appear in both a "Computer Accessories" group and a "Home Office Essentials" group without any conflicts or data duplication.

**Customer Choice**: Unlike bundle products where you define a fixed set, customers viewing a grouped product can select any quantity of any item—or none at all. This gives them maximum flexibility while still benefiting from your curated product suggestions.

## ⚙️ How Grouped Products Work
---

A grouped product functions as a **non-inventory container**. It doesn't hold its own stock or have a price of its own—it simply references other simple products and displays them in an organized way.

### The Display Mechanism

When a customer views a grouped product page, the e-commerce platform:
1. Retrieves the list of associated simple products
2. Displays each simple product with its individual price and stock status
3. Provides quantity selectors for each item
4. Allows customers to add selected items to cart with their chosen quantities

### Independence from Members

The grouped product itself has minimal data:
- Basic product information (name, description, images)
- A list of references to simple products
- Display order for the associated products

Each member simple product maintains its own complete product data. Changes to a simple product's price, inventory, or attributes automatically reflect wherever that product appears—whether in a grouped product, on its own product page, or in category listings.

### No Hierarchical Constraints

Unlike configurable products, there's no parent-child dependency. Deleting a grouped product doesn't affect its member simple products—they continue to exist independently. Conversely, removing a simple product from inventory will cause it to disappear from any grouped products that reference it, but won't break the grouped product itself.

## 🔄 When to Use Grouped Products vs Other Types
---

Understanding when to use grouped products requires distinguishing them from similar product types:

### Grouped Products vs Configurable Products

**Use configurable products** when you have variations of the same base product:
- T-shirt available in Small, Medium, Large (same shirt, different sizes)
- Laptop with 256GB, 512GB, 1TB storage options (same model, different configurations)

**Use grouped products** when you have related but distinct products:
- Computer setup showing separate CPU, monitor, keyboard, mouse
- Furniture collection with sofa, loveseat, and chair as individual pieces

### Grouped Products vs Bundle Products

**Use bundle products** when you're selling a pre-packaged set with fixed options:
- Gift basket with predefined items and a single total price
- Software suite sold as a complete package

**Use grouped products** when customers should choose individual items freely:
- Kitchen starter set where customers pick which pots and pans they want
- Photography kit displaying camera, lenses, and accessories separately

### Practical Use Cases

Grouped products excel for:
- **Accessory collections**: Display related accessories without forcing purchases
- **Modular furniture**: Show pieces that work together but are sold separately
- **Component-based products**: Computer parts, audio systems, or tool sets
- **Gift suggestions**: Curated selections where recipients choose their preferences

## Why This Design Matters
---

The grouped product design reflects a fundamental principle in e-commerce architecture: **separation of concerns**.

By keeping the presentation layer (the grouped product) separate from the actual product data (the simple products), the system gains several architectural advantages:

**Reusability**: Simple products can participate in multiple contexts without data duplication or synchronization complexity. Update a product once, and the change propagates everywhere it appears.

**Maintainability**: Price changes, inventory updates, and attribute modifications happen at the simple product level, where they belong. You never need to worry about keeping grouped product data in sync with member product data because the grouped product doesn't duplicate that data.

**Flexibility**: Store owners can quickly create new merchandising displays by grouping existing products in different combinations, without creating new product variations or managing complex dependencies.

In cobby, managing grouped products means working primarily with the association lists—defining which simple products belong to which groups. The actual product data management happens at the simple product level, keeping your workflow straightforward and your data architecture clean.

---

This presentational approach makes grouped products a powerful merchandising tool when you need to suggest related products while maintaining complete product independence.

## Related Topics

- [Simple Products](/explanation/product-types/simple-products) - Understanding the product building blocks that make up grouped products

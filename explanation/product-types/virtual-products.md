---
sidebar_position: 5
title: Virtual Products
description: Understanding virtual products as non-physical items that exist only in the digital realm without shipping requirements
---

Virtual products represent items that have no physical form—services, memberships, warranties, and other non-tangible offerings that customers purchase but never receive in a box. While technically a variant of simple products, virtual products play a distinct role in e-commerce by signaling to the system that shipping, weight, and physical handling are irrelevant.

---

## 📦 What Makes a Product Virtual

A virtual product is essentially a simple product with its physical nature stripped away. It has no weight, requires no shipping, and will never sit in a warehouse waiting to be packed. Examples include consulting hours, gym memberships, extended warranties, training sessions, and subscription renewals.

From a technical perspective, a virtual product inherits all the capabilities of a simple product—it has a SKU, a price, inventory tracking (useful for limiting availability of services), and can be configured with attributes. The key difference lies in what's **disabled**: the weight attribute becomes meaningless, and shipping settings automatically default to "not applicable."

This isn't just a cosmetic distinction. The virtual flag fundamentally changes how the e-commerce system treats the product throughout the customer journey.

---

## 🚫 Why Shipping Logic Matters

The primary reason virtual products exist as a separate type is to inform the shipping subsystem that it can be ignored entirely. When a customer adds only virtual products to their cart, the checkout flow knows not to request a shipping address, not to calculate shipping costs, and not to integrate with carrier APIs.

This creates a cleaner customer experience—why ask someone buying a consulting session where they want it shipped? It also streamlines order fulfillment, as these products never enter the warehouse management workflow. There's no picking, packing, or tracking number to generate.

For businesses offering both physical and virtual products, the distinction becomes even more important. When a cart contains both types, the system can intelligently separate the fulfillment paths: physical items go to the warehouse, virtual items trigger digital delivery or service activation.

---

## 💡 Virtual vs Downloadable Products

A common point of confusion arises between virtual and downloadable products, since both are non-physical. The distinction centers on **file delivery**.

Virtual products are for services and memberships that don't involve downloading a file. A customer purchasing a 3-year warranty extension or a gym membership receives confirmation and access, but no downloadable asset.

Downloadable products, by contrast, are specifically designed for digital files—ebooks, software, music, videos. The system manages file storage, download links, and access limits.

If your product involves delivering a file to the customer, it's downloadable. If it's purely a service or access right without file transfer, it's virtual.

---

## 🎯 When Virtual Products Make Sense

Virtual products shine in several scenarios:

**Service-based businesses** selling consulting, training, or professional services benefit from the shipping-free checkout experience. There's no pretense of physicality.

**Mixed catalogs** containing both physical goods and services need the distinction to route orders correctly. A customer buying a printer (physical) and a setup service (virtual) experiences a checkout flow that requests shipping only for the printer.

**Warranty and protection plans** are classic virtual products—they extend coverage but have no physical manifestation.

**Subscription renewals** for memberships, access rights, or recurring services are virtual by nature, as they grant ongoing access rather than delivering a tangible item.

---

## 💰 Business Impact of the Virtual Flag

Designating a product as virtual has real operational consequences. The checkout experience becomes faster and simpler when customers aren't prompted for unnecessary shipping information. Order processing becomes more efficient as fulfillment teams don't waste time looking for non-existent inventory.

Cost savings emerge from not calculating shipping costs or integrating with carrier systems for products that never ship. Reporting becomes more nuanced, as businesses can track revenue from physical products separately from services and digital offerings.

In cobby, managing virtual products follows the same workflow as simple products—the product type attribute simply needs to be set to "virtual" rather than "simple." The Excel interface treats them identically in terms of data entry, but the underlying e-commerce platform recognizes the shipping implications and adjusts behavior accordingly.

The virtual product type exists not because these items are complex, but because treating services like shippable goods creates friction, confusion, and wasted effort. By explicitly marking products as virtual, the entire system—from checkout to fulfillment to reporting—can optimize around the reality of what's being sold.

## Related Topics

- [Downloadable Products](/explanation/product-types/downloadable-products) - Understanding digital products with file delivery

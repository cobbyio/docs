---
sidebar_position: 3
title: How to Automate Price Calculations for Configurable Products
---

# How to Automate Price Calculations for Configurable Products

Learn how to automatically calculate and assign prices to configurable products based on their associated simple products. cobby can automatically determine the base price and price differences for product variations.

## Goal

Automatically calculate prices for configurable products based on their linked simple products, saving time and ensuring price consistency.

## Prerequisites

- Configurable product with assigned simple products
- Simple products with prices already set
- Changes saved to trigger the price calculation option

## When to Use Automatic Price Calculation

After changing the price of a simple product that's assigned to a configurable product, a notification will appear when you save. This indicates that automatic price calculation is available.

## Steps

### Scenario 1: Single Grouped Attribute

When your configurable product has only one grouped attribute (e.g., size or color):

1. **Save your price changes** to the simple product
2. **Click the eye icon** next to the notification to display the "Grouped attributes" cell
3. The Task Pane for configurable attributes will open
4. **Click the "Automatic price entry" button**

![](/img/automatic-price-calculation/pic1.png)

**What happens:**
- cobby determines the lowest price among all linked simple products
- This lowest price becomes the base price for the configurable product
- Price differences for the variations are entered automatically

### Scenario 2: Multiple Grouped Attributes

When your configurable product has more than one grouped attribute (e.g., both size and color):

If you try automatic price entry with multiple attributes, you'll see the message: "Automatic price determination not possible."

Follow these steps instead:

1. **Click the eye symbol** next to the error message
   - This selects the "Grouped attributes" field of the configurable product

2. **Click "Enter price"** in the Task Pane

![](/img/automatic-price-calculation/pic2.png)

3. **Click the dollar signs** near each attribute individually
   - This runs automatic pricing for each attribute separately

![](/img/automatic-price-calculation/pic3.png)

4. **Save your changes** by clicking "Save products"

## Example

**Simple Products:**
- T-Shirt Red Small: $20.00
- T-Shirt Red Medium: $20.00
- T-Shirt Red Large: $22.00
- T-Shirt Blue Small: $21.00
- T-Shirt Blue Medium: $21.00
- T-Shirt Blue Large: $23.00

**Automatic Calculation Result:**
- Base price: $20.00 (lowest price)
- Size Large: +$2.00
- Color Blue: +$1.00

## Troubleshooting

**Automatic price button not showing:** Make sure you've saved changes to at least one simple product first.

**"Not possible" message for single attribute:** Verify that all simple products have prices set and are properly linked to the configurable product.

**Prices not calculating correctly:** Check that all simple products in the configuration have valid price values.

**Changes not saving:** Always click "Save products" after completing the automatic price calculation to sync changes to your store.

---
sidebar_position: 1
title: How to Copy Products
---

# How to Copy Products

Use product copying to create new products based on existing ones, including all translations and attribute values. This is useful when adding variants to configurable products or creating similar products.

## Prerequisites

- Products loaded in cobby
- Access to the Tools tab in cobby

## Copy a Single Product

1. Click on any cell of the product you want to copy.

2. Navigate to the cobby "Tools" tab.

3. Click the "Copy products" button.

4. Enter a new SKU for the copied product in the empty SKU field.

   The Product Key will be generated automatically when you save.

5. Update any attribute values that should differ from the original product.

6. Click "Save products".

## Copy Multiple Products

1. Load the products and desired storeviews using the cobby filter.

2. Select the products you want to copy:
   - For adjacent products: Click and drag
   - For non-adjacent products: Hold Ctrl and click each product

3. Navigate to the cobby "Tools" tab.

4. Click the "Copy products" button.

5. Enter a new SKU for each copied product.

   Use the same SKU across storeviews to transfer translations.

6. Update any attribute values that should differ (color, size, etc.).

7. Click "Save products".

## Important Considerations

### SKU and Product Key
When copying, cobby automatically empties the SKU and Product Key fields because these must be unique identifiers in Magento. You must enter a new SKU manually before saving.

### Configurable Products
Links to associated products remain unchanged when copying. Update these links if creating a new configurable product.

### URL Keys
The existing URL key is copied. Change it to avoid duplicate URLs in your store.

### Storeview Behavior
- **Copying from All Storeviews**: The product is created for all websites and storeviews
- **Copying from a specific website**: The product is created only in that website's storeviews and in All Storeviews

**Example with two websites:**
- test shop end consumer (Storeview English, Storeview German)
- test shop retailer (Storeview English, Storeview German)

If you copy from All Storeviews, the product appears in:
- All Storeviews
- test shop end consumer-English
- test shop end consumer-German
- test shop retailer-English
- test shop retailer-German

If you copy from test shop end consumer-English, the product appears in:
- All Storeviews
- test shop end consumer-English
- test shop end consumer-German

---
sidebar_position: 7
title: How to Work with Swatches in Magento 2
---

# How to Work with Swatches in Magento 2

Understand how cobby handles Magento 2 swatch attributes (text and color swatches) for product management.

## What Are Swatches?

Swatches are visual attribute options displayed in Magento 2:
- **Text Swatches**: Display as clickable text buttons
- **Color Swatches**: Display as colored boxes or pattern images

These are commonly used for:
- Color selections
- Size options
- Material choices
- Style variations

## Prerequisites

- Magento 2 store
- cobby Excel add-in installed
- Swatch attributes configured in Magento

---

## What cobby Supports

### Product-Level Operations

cobby fully supports assigning swatch options to products:

- View swatch attributes in Excel
- Assign swatch options to products
- Update product swatch values
- Bulk assign swatches to multiple products

![Magento 2 Product with Swatches](/img/text-button-and-color-swatch-in-M2/pic1.png)
*Swatch attributes in Magento 2 product edit screen*

### Using Swatches in cobby

1. Load products in Excel via cobby
2. Navigate to the swatch attribute column (e.g., "Color", "Size")
3. Select products you want to update
4. Choose the swatch option from the cobby task pane
5. Save products

The assignment works identically to the Magento backend product form.

---

## What cobby Does Not Support

### Master Data Configuration

cobby does not provide maintenance for swatch master data:
- Swatch colors (hex codes, RGB values)
- Swatch images
- Option thumbnails
- Display settings

![Magento 2 Attribute Configuration](/img/text-button-and-color-swatch-in-M2/pic2.png)
*Swatch configuration in Magento 2 attribute settings*

### Why Not?

Swatch master data is typically:
- Set up once during initial configuration
- Rarely changed after initial setup
- Visual in nature (requires image uploads)
- Better managed through Magento's visual interface

This is similar to how cobby handles category management - master data is maintained in Magento, while product assignments are managed in cobby.

---

## How to Configure Swatches

### In Magento Admin

For initial swatch setup and configuration:

1. Navigate to **Stores → Attributes → Product**
2. Find or create your swatch attribute
3. Set **Catalog Input Type for Store Owner** to:
   - "Visual Swatch" for color/image swatches
   - "Text Swatch" for text buttons
4. In **Manage Swatch** section:
   - Add option labels
   - Set colors (hex codes) for visual swatches
   - Upload swatch images if needed
   - Configure option sort order
5. Save the attribute

### Assign to Attribute Set

1. Go to **Stores → Attributes → Attribute Set**
2. Select your attribute set
3. Drag the swatch attribute to the appropriate group
4. Save the attribute set

### In cobby

Once configured in Magento:

1. Resync cobby (System → Configuration → Services/cobby → Save Configuration)
2. Load products in Excel
3. The swatch attribute appears as a regular selection attribute
4. Assign values to products as needed

---

## Working with Swatch Products

### Creating Configurable Products

For configurable products with swatches:

1. Create the parent configurable product
2. Create simple products for each swatch option
3. Assign appropriate swatch values to simple products
4. Link simple products to the configurable parent

### Bulk Assigning Swatches

To assign swatches to multiple products:

1. Load products in cobby
2. Filter or sort to group similar products
3. Select all products that need the same swatch value (Ctrl+Click)
4. Choose the swatch option from the cobby task pane
5. Save products

### Using Formulas for Swatches

Assign swatches based on other data using formulas:

```excel
=INDEX(ColorMapping[Magento Swatch],MATCH([@[Supplier Color]],ColorMapping[Supplier Name],0))
```

This maps supplier color names to your Magento swatch options.

---

## Troubleshooting

**Problem:** Swatch attribute doesn't appear in cobby

**Solution:**
1. Verify the attribute is assigned to the correct attribute set in Magento
2. Resync cobby via System → Configuration → Services/cobby → Save Configuration
3. Reload products in Excel

**Problem:** Swatch colors don't display on frontend

**Solution:** This is a Magento configuration issue. Check in Magento admin:
- Attribute is set to "Visible on Catalog Pages on Storefront"
- Attribute is used in "Layered Navigation"
- Swatch colors are properly configured with valid hex codes
- Cache is cleared

**Problem:** Need to add new swatch option

**Solution:**
- Simple options: Type the new option name in cobby, save products
- Visual swatches with colors: Must add the option in Magento admin to configure the color, then use it in cobby

**Problem:** Want to change swatch color

**Solution:** This must be done in Magento admin:
1. Go to Stores → Attributes → Product
2. Edit the swatch attribute
3. Update the color for the option
4. Save changes

---

## Best Practices

### Keep Master Data in Magento

- Configure all swatch colors and images in Magento
- Use descriptive option names that are clear in Excel
- Set up swatches completely before bulk product assignments

### Use cobby for Product Assignments

- Bulk assign swatches to products in Excel
- Use formulas to map supplier data to swatch options
- Leverage Excel filtering to group products needing the same swatch

### Maintain Consistency

- Create a reference sheet matching supplier values to your swatches
- Use data validation to prevent typos
- Document your swatch naming conventions

---

## Related Articles

- How to Maintain Attribute Options (coming soon)
- Configurable Products Guide (coming soon)

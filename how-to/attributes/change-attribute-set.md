---
sidebar_position: 2
title: How to Change Product Attribute Set
---

# How to Change Product Attribute Set

Change the attribute set assigned to existing products when your product categorization needs evolve.

## Important Warning

**Create a complete backup of your store before proceeding.** Changing attribute sets is a complex operation not natively supported by Magento. This guide provides advanced workarounds - use at your own risk.

## Prerequisites

- Full store backup completed
- cobby Excel add-in installed
- Advanced Excel knowledge
- Understanding of attribute sets and product structure

## When to Use This

Use this process when:
- Products were assigned to the wrong attribute set initially
- Your product classification system changes
- You need to reorganize product attributes

## Choose Your Method

You have two options for changing attribute sets:

### Method A: Manual Migration (Recommended)

Use this method for full control over the migration process. Best for important products or when you need to verify each step.

### Method B: Extension-Based (Advanced)

Use a third-party extension for faster processing. Has risks including orphaned data and potential integrity issues.

---

## Method A: Manual Migration with cobby

This method creates a local copy of product data, deletes products, then recreates them in the new attribute set.

### Step 1: Load Products

1. Open Excel with the cobby add-in
2. Load your products via the cobby ribbon
3. Identify which products need attribute set changes

### Step 2: Create Local Backup

1. Create a new Excel sheet
2. Copy the table headers from the old attribute set
3. Use **Paste Special → Values** to paste headers into the new sheet
4. Copy the complete rows of all affected products
5. Use **Paste Special → Values** again to paste product data
6. Save this sheet as a separate local workbook for safekeeping

### Step 3: Prepare for Migration

1. In your local backup sheet, delete the product key column for all affected products
2. Note down all SKUs of products you'll be migrating

### Step 4: Delete Products from Magento

1. Open the Magento admin panel
2. Navigate to **Catalog → Products**
3. Delete all affected products from Magento
4. **Important:** If you need to keep the same SKUs, you must delete the products. Otherwise, use new SKUs and update all references in:
   - Up-Selling products
   - Cross-Selling products
   - Associated Products (for configurable/grouped products)

### Step 5: Close and Reopen

1. Close Excel completely
2. Open the local workbook you saved in Step 2

### Step 6: Load Target Attribute Set

1. In cobby, set the template to "Standard"
2. Load products
3. Navigate to the attribute set where you want to migrate the products

### Step 7: Map and Paste Data

1. Review the table headers in the new attribute set
2. **Important:** Column order will likely differ from your old attribute set
3. Copy data from your local workbook block by block
4. Paste data at the end of the product table
5. Carefully align data with the correct columns - match headers precisely

### Step 8: Save Products

1. Review all mapped data carefully
2. Click **Save Products** in the cobby ribbon
3. Verify products were created successfully in Magento

---

## Method B: Extension-Based Migration

### Install Extension

Install the [ChangeAttributeSet extension](https://github.com/Flagbit/Magento-ChangeAttributeSet) from GitHub.

### Use Extension

Follow the extension's documentation to change attribute sets directly in Magento.

### Known Risks

This method is faster but has important limitations:
- **Orphaned Data:** Products will contain attribute data that no longer applies to their new attribute set
- **Data Integrity:** Unexpected values may cause issues with third-party integrations
- **Limited Control:** Less visibility into what data is being modified

---

## Troubleshooting

**Problem:** Products don't appear after migration

**Solution:** Verify products were successfully created in Magento admin. Check that all required attributes for the new attribute set have values.

**Problem:** Data appears in wrong columns

**Solution:** Double-check column header alignment between your source data and target attribute set. Redo the paste operation with correct mapping.

**Problem:** Associated products links are broken

**Solution:** You'll need to manually recreate product relationships for up-sells, cross-sells, and associated products either in Magento or after migration in cobby.

## Alternative Approach

**Consider if you really need to change the attribute set.** In many cases, you can:
- Add missing attributes to the existing attribute set
- Use product types or categories for organization instead
- Create a new attribute set for future products

This avoids the complexity and risks of migrating existing products.

## Related Topics

- [Product Attributes and Scopes](/explanation/architecture/product-attributes) - Understanding what attribute sets are and why they determine product structure

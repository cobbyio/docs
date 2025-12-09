---
sidebar_position: 5
title: How to Use Import Mode
---

# How to Use Import Mode

Learn how to use cobby's import mode to efficiently create new products or update existing products with external data from manufacturers, suppliers, or other systems.

## Goal

Import and update product data from external sources (like manufacturer price lists or staging environments) without loading all store products, improving performance and focusing on data import.

## When to Use Import Mode

Use import mode when you need to:
- Update existing products with new manufacturer data
- Create new products from external data sources
- Transfer products from staging to live environment
- Import supplier product information

## How Import Mode Works

In import mode:
1. **No store products are loaded** - only attribute sets and attributes are displayed
2. cobby **identifies products by SKU** and compares each attribute value
3. **Matching logic:**
   - If store value = Excel value → No change
   - If store value ≠ Excel value → Store value is overwritten with Excel data
4. **Hidden columns are ignored** - data in hidden columns remains unchanged in the store

**Important:** All visible attribute values in Excel will overwrite store values. Hide any columns you don't want to update.

## Prerequisites

- External data source (Excel file with product data)
- SKU column to identify products
- For new products: all mandatory fields must be filled

## Steps for Creating and Updating Products

### Step 1: Load External Data into Excel

1. Open the external data (manufacturer list, supplier data, etc.) in Excel
2. Format the data as a table: **Ctrl + A** → **Ctrl + L**
3. Close all other Excel workbooks

### Step 2: Start Import Mode

1. In cobby, go to "Load products" menu
2. Select the standard template
3. Click **Start import mode**

![](/img/the-import-mode/pic1.png)

### Step 3: Select Attribute Set

Select an attribute set that contains all columns you need to import.

**For updating existing products:** Since import mode matches products by SKU regardless of attribute set, you can choose any attribute set that has the required columns.

**For creating new products:** You must select the exact attribute set where the products should be created.

### Step 4: Hide Columns You Don't Want to Import

**Critical step:** Hide all columns where you have no new data or where store data is correct.

1. Move columns you want to keep to the front (behind Website and SKU):
   - Select columns
   - Right-click on column header
   - Click "Cut Column"
   - Click "Paste Cut Columns" at the desired position

2. Select all remaining columns
3. Right-click on the column header
4. Click "Hide"

**Warning:** If you forget to hide unused columns, empty or outdated data will overwrite correct store data.

### Step 5: Keep Website and SKU Columns Visible

**Always keep visible:**
- **Website** column
- **SKU** column

These two columns are required for product identification and matching during import.

**For new products:** Also keep all mandatory fields visible and filled.

### Step 6: Sort Columns and Copy Data

1. Arrange columns in your cobby sheet to match your external data layout
2. Select and copy the data from your external source
3. Paste at the correct position in the cobby sheet

**Important:** Don't copy column headers from the external data.

**For new products:** After pasting, use the "Split to Attributeset" function to assign products to their correct attribute set.

### Step 7: Save to Start Import

1. Click **Save products** to start the import
2. Monitor progress via the **job log**
3. The job log turns **green** when finished
4. Product statuses remain **yellow** after import (this is normal)

![](/img/the-import-mode/pic2.png)

### Step 8: Close and Reopen Excel

After working in import mode:
1. Close Excel completely
2. Open a new Excel workbook
3. You can now continue with regular cobby operations

## Examples

### Example 1: Updating Prices from Manufacturer

**Scenario:** You received a new manufacturer price list with updated prices.

**Steps:**
1. Open manufacturer price list in Excel
2. Start import mode in cobby
3. Hide all columns except: Website, SKU, Price, Manufacturer Price
4. Copy data from manufacturer list
5. Paste into cobby sheet
6. Save products

### Example 2: Creating New Products

**Scenario:** Adding a new product line from a supplier.

**Steps:**
1. Prepare supplier data with all mandatory fields filled
2. Start import mode
3. Select the correct attribute set for the new products
4. Keep all mandatory fields visible
5. Copy and paste data
6. Use "Split to Attributeset" function
7. Save products

## Troubleshooting

<details>
<summary>**Products not found**</summary>

Verify that the SKU in your import data exactly matches the SKU in your store (including case and spaces).

</details>

<details>
<summary>**Data not updating**</summary>

Check that the columns you want to update are visible, not hidden.

</details>

<details>
<summary>**Store data being overwritten unexpectedly**</summary>

You likely forgot to hide columns. Always hide columns with empty or outdated data.

</details>

<details>
<summary>**New products in wrong attribute set**</summary>

For new products, you must select the exact target attribute set before importing.

</details>

<details>
<summary>**Job log shows errors**</summary>

Check the job log details for specific error messages. Common issues:
- Missing mandatory fields
- Invalid attribute values
- Duplicate SKUs

</details>

<details>
<summary>**Excel crashes or becomes slow**</summary>

Make sure to close all other Excel workbooks before starting import mode.

</details>

## Best Practices

1. **Always hide unused columns** - this prevents accidental data overwrites
2. **Create import templates** - save your column configurations for recurring imports
3. **Test with a few products first** - verify the import works correctly before processing large datasets
4. **Keep backups** - export your current product data before large imports
5. **Monitor the job log** - always check that the import completed successfully

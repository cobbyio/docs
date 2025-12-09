---
sidebar_position: 1
title: How to Import Product Data
---

# How to Import Product Data

Learn how to import product data from an Excel file into cobby using the Import Mode feature.

## Prerequisites

- cobby installed and connected to your shop
- An Excel file with the data you want to import
- Access to multiple licenses (if importing to a different shop)

## Steps

### 1. Prepare Your Data File

1. Open a new Excel workbook.
2. Structure your data with columns matching cobby attribute names.
3. Example structure:

![](/img/import-data/picture-1.png)

4. Save this file and close it.

:::tip
Keep your import file simple - only include the fields you actually need to import. You can hide unnecessary columns later.
:::

### 2. Load Existing Products

1. Open cobby with your current license.
2. Click **"Load Products"**.
3. Use the **Reduced** preset.
4. Open the **Filter** options.
5. **Remove the tick** from "only active products".
6. Click **Load**.

:::info Why load all products?
Loading with "only active products" unchecked ensures you can import data for both active and inactive products.
:::

### 3. Switch License (If Needed)

If you're importing to a different shop than your current one:

1. Change to the license for the target shop.
2. Wait for the license change to complete.

:::note
Skip this step if you're importing to your current shop.
:::

### 4. Start Import Mode

1. Open your saved import data file (from Step 1).
2. In the cobby ribbon, click **"Load Products"** dropdown.
3. Select **"Start Import Mode"**.

![](/img/import-data/picture-2.png)

**What happens:** cobby creates a new sheet optimized for importing data.

### 5. Clean Up the Import Sheet

The import sheet shows all available columns. To make it easier to work with:

1. Look at the new import sheet.
2. Right-click on column headers you don't need.
3. Select **"Hide"** for each unnecessary column.
4. Keep only the columns that match your import data.

![](/img/import-data/picture-3.png)

### 6. Copy Your Data

1. Switch to your import data sheet (e.g., "Table 1").
2. Copy each column's values **one at a time**.
3. Paste into the corresponding column in the import sheet.

:::warning Important
**Manually type** values into the "Website Storeview" field - **do not copy-paste**. Copy-pasted values in this field won't be saved correctly.
:::

### 7. Save the Import

1. Click **"Save products"** in the cobby ribbon.
2. Watch the job log indicator.
3. Wait until the job log turns **green**.

![](/img/import-data/picture-4.png)

**Note:** The status bar (far left column) may remain yellow - this is normal for imports.

### 8. Handle Errors (If Any)

If you receive error messages during save:

1. Identify the problematic attribute column.
2. Right-click on that column header.
3. Select **"Hide"**.
4. Click **"Save products"** again.

:::tip
Check our [error codes reference](/reference/error-codes) to understand what went wrong. You may need to fix data in those columns before importing them.
:::

## Troubleshooting

<details>
<summary>**Products aren't being created**</summary>

- Verify that you're using Import Mode (not normal mode)
- Ensure required fields like SKU are filled.

</details>

<details>
<summary>**Website Storeview not saving**</summary>

- Remember: type this value manually, don't copy-paste

</details>

<details>
<summary>**Getting validation errors**</summary>

- Hide problematic columns and save
- Review the error code documentation for specific errors
- Fix data issues and try again

</details>


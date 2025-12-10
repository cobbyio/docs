---
title: How to Work with cobby Offline
description: Learn how to use saved workbooks to work with cobby data offline, including price calculations, team collaboration, and delayed publishing.
---

import Storylane from '@site/src/components/Storylane'

# How to Work with cobby Offline

Learn how to use saved workbooks and Excel formulas to work with cobby data offline, enabling flexible workflows for price updates, team collaboration, and promotional planning.

## When to Use This Approach

Working with cobby offline through saved workbooks offers several practical advantages:

- **Delayed publishing**: Make changes over several days without publishing incomplete data to your shop
- **Promotional flexibility**: Save pricing from past campaigns and reapply them for seasonal promotions
- **Team collaboration**: Enable team members without cobby access to edit product lists offline, which you can review and upload later
- **Complex calculations**: Build elaborate pricing formulas or transformations outside cobby, then transfer the results back

## Interactive Demo

Watch this interactive demo to see the offline workflow in action:

<Storylane src="https://app.storylane.io/share/zeknwim6dmrp" />

## Step-by-Step Guide

### Step 1: Prepare Your Workspace

Create a custom product view showing only the attributes you need to work with offline.

1. In cobby, configure a view with your required attributes (e.g., SKU, Price, Product Key)
2. Apply filters to show only relevant products
3. Save this as a reusable template for future offline work

**Why this matters**: Working with fewer columns makes your offline workbook more manageable and reduces the risk of accidentally overwriting unrelated data.

### Step 2: Copy Base Data to a New Workbook

Transfer the data you need from your main cobby workbook to a separate offline workbook.

1. Select the columns you need (at minimum, include SKU for matching)
2. Copy the data
3. In a new Excel workbook, use **Paste Special > Values** to insert the data
4. Save this new workbook with a descriptive name (e.g., "Summer_Sale_Prices_2025.xlsx")

**Important**: Using "Paste Special > Values" ensures the data remains independent from cobby and won't cause formula conflicts later.

### Step 3: Add Your New Values

Work in your offline workbook to create the changes you want to apply.

**Option A - Formulas**: Create calculated columns using Excel formulas. For example:
- Multiply existing prices by 1.1 for a 10% increase
- Apply tiered pricing based on product categories
- Calculate promotional discounts

```excel
=B2*1.1
```

**Option B - Manual entry**: Enter new values directly for each product as needed.

**Option C - Import from elsewhere**: Paste data from other sources (supplier lists, marketing plans, etc.) and use VLOOKUP or XLOOKUP to match against your SKUs.

### Step 4: Transfer Changes Back Using Auxiliary Columns

When you're ready to apply your offline changes, use lookup formulas to transfer values safely.

1. In cobby, load fresh products (click **Load Products**)
2. Create a new auxiliary column (e.g., "New_Price")
3. Use XLOOKUP or VLOOKUP to match SKUs and return values from your offline workbook:

```excel
=XLOOKUP([@SKU],'[Summer_Sale_Prices_2025.xlsx]Sheet1'!$A:$A,'[Summer_Sale_Prices_2025.xlsx]Sheet1'!$C:$C,"Not Found")
```

4. Review the transferred values in the auxiliary column
5. Copy the auxiliary column and paste as values into the actual Price column
6. Delete the auxiliary column
7. Save products to your shop

**Why use auxiliary columns?**: This approach prevents formula conflicts during product reloads. Formulas disappear when you reload products in cobby, so working through a temporary column gives you control over when to commit changes.

---

## Important Considerations

### Duplicate SKU Warning

If your offline workbook contains duplicate SKUs, be aware:

**"The price will always be taken from the cell that is found first"**

When using lookup formulas, the top-listed value takes priority. If you have the same SKU multiple times with different values, only the first match will be returned. Always clean up duplicates before transferring data.

### Formula Conflicts During Product Reloads

Working without auxiliary columns requires extra caution:

- If you place formulas directly in cobby columns and then click **Load Products**, the formulas will disappear
- You would need to manually refresh your data after every product reload
- This workflow is more error-prone and not recommended

**Best practice**: Always use the auxiliary column method described in Step 4.

### Data Freshness and Status Indicators

cobby shows data status with color indicators:

- **Green**: Data matches your shop (up to date)
- **Yellow**: You have unsaved changes
- **Red**: Data is outdated (changed in shop or by another user)

Saved workbooks are disconnected from your shop and won't show these indicators. They contain a snapshot of data from when they were created.

---

## Critical Warning: Avoiding Data Overwrites

:::warning
**You must understand the risks when working with saved workbooks**
:::

### The Problem

When you work with saved workbooks, there's a significant risk of overwriting recent changes made in your shop system.

**Scenario**:
1. You load products into cobby and save the workbook on Monday
2. On Tuesday, someone changes a product name in your shop
3. On Wednesday, you reopen your saved workbook
4. You change a price in the saved file
5. You click **Save products**

**What happens**: cobby uploads **all** data from your workbook, including the outdated product name, overwriting the recent shop changes.

**Result**: You accidentally revert the product name to Monday's value.

### Why This Happens

Saved workbooks contain a snapshot of data from when they were created. They don't sync with live shop data automatically.

When you save products from a saved workbook:
- cobby uploads all values in the workbook
- It doesn't know which values are outdated
- Recent changes in your shop get overwritten

### How to Stay Safe

**The auxiliary column method (Step 4) protects you** because:

1. You load fresh products first (current shop data)
2. You only transfer specific values via formulas
3. You control exactly which columns get updated
4. Other attributes remain untouched with current shop values

**Never**:
- Open an old saved workbook and click "Save products" directly
- Assume saved data is still current after days or weeks
- Work with saved files in multi-user scenarios without coordination
- Upload critical data (product names, SKUs, categories) from old saved files

**Always**:
- Load fresh products before making changes
- Use saved files as reference data only (via formulas)
- Verify no one else has edited the products you're updating
- Test with a small batch before bulk updates

---

## Best Practices for Working Offline

### Use Templates for Repeated Workflows

Rather than saving workbooks with data:
- Save cobby templates with formulas and column configurations
- Load fresh products each time you start work
- Apply the template to current data

This ensures you're always working with up-to-date information.

### Document Your Process

When using saved data:
1. Note which columns come from the saved file
2. Record the date of the saved data
3. Verify no changes occurred in your shop for those products
4. Use the auxiliary column method to selectively update

### Test Before Bulk Updates

1. Start with a small batch of products (5-10)
2. Verify the formulas return correct values
3. Save to your shop and check the results
4. Only then proceed with larger batches

---

## Troubleshooting

<details>
<summary>**I accidentally overwrote changes**</summary>

1. Don't save products again
2. Load fresh products from your shop
3. Restore the correct values
4. Save products
5. Going forward, always use the auxiliary column method

</details>

<details>
<summary>**My formulas show #N/A errors**</summary>

Check that:
- The SKUs match exactly between workbooks (no extra spaces)
- The offline workbook is open or the file path is correct
- You're using absolute references ($A:$A) in your lookup formulas

</details>

<details>
<summary>**I need to share offline work with team members**</summary>

1. Create the offline workbook with instructions
2. Have team members work only in the designated columns
3. When you receive it back, follow Step 4 to transfer changes
4. Review all changes before saving to your shop

</details>

---

## Related Topics

- [How to Create Custom Product Views](./create-custom-product-views.md) - Set up optimized workspaces
- [How to Import Data](./import-data.md) - Import product data from external sources


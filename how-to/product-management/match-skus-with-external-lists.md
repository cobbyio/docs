---
title: "How to Match SKUs with External Manufacturer Lists"
description: "Learn how to efficiently match product SKUs from external manufacturer lists with your shop products to quickly activate or deactivate products in bulk"
---

import Storylane from '@site/src/components/Storylane';

# How to Match SKUs with External Manufacturer Lists

This guide shows you how to match product SKUs from external manufacturer lists (such as discontinued products, current product ranges, or availability status) with your shop products and update product statuses accordingly.

Manufacturers often send spreadsheets listing discontinued products, current product ranges, or availability status. Instead of manually searching for each product in your shop, you can use cobby to efficiently match SKUs and update hundreds or thousands of products in bulk.

## Prerequisites

Before you begin, ensure you have:

- Products loaded in cobby
- An external manufacturer list in Excel or CSV format containing SKUs
- Basic familiarity with Excel formulas (for the XLOOKUP method)
- Understanding of cobby's filter functionality and auxiliary columns

## Interactive Demo

<Storylane
  src="https://app.storylane.io/share/mmvfegpouorl"
  title="SKU Matching with External Lists - Interactive Demo"
/>

## When to Use Which Method

Choose the appropriate method based on your scenario:

**cobby Filter Method:**
- Best for small to medium lists (up to approximately 100 SKUs)
- Simple discontinued product scenarios
- Quick one-time updates
- No formula knowledge required

**XLOOKUP Formula Method:**
- Best for large lists (hundreds or thousands of SKUs)
- Complex scenarios with additional status information
- Reusable approach for recurring updates
- More control over matching logic

## Method 1: Using cobby Filter

This method is ideal when you have a straightforward list of SKUs to match, such as discontinued products from a manufacturer.

### Step 1: Prepare the External List

1. Open the external manufacturer list in Excel
2. Ensure the SKUs are in a single column
3. Select the column containing the SKUs

### Step 2: Copy SKUs for cobby Filter

1. With the SKU column selected, right-click and choose **Copy** (or press Ctrl+C)
2. In cobby, click **Tools** in the Excel ribbon
3. Select **Copy selection for filter**
4. The SKUs are now formatted and ready for the cobby filter

:::tip
The "Copy selection for filter" tool automatically formats your SKUs correctly for cobby's filter function, handling line breaks and delimiters.
:::

### Step 3: Apply Filter in cobby

1. Go to the **AllProducts** worksheet in your cobby workbook
2. Click **Load Products** in the cobby ribbon
3. Select **Filter** from the dropdown
4. In the filter dialog, paste the SKUs into the **Article Number** field
5. **Important**: Uncheck **only active products** if you need to load both active and inactive products
6. Click **Apply Filter**

:::warning
Always uncheck "only active products" when filtering if you want to see all products matching your SKUs, regardless of their current status. Otherwise, you might miss products that are already inactive.
:::

### Step 4: Update Product Status

1. After the filtered products load, select all rows you want to update
2. In the **Enable Product** column, change the value to **Disabled** (for discontinued products)
3. Click **Save products** in the cobby ribbon
4. Wait for the save operation to complete

### Step 5: Verify the Changes

1. Check the save confirmation message
2. Verify the product count matches your expectations
3. Optionally, check your shop admin to confirm the products are now disabled

## Method 2: Using XLOOKUP Formula

The XLOOKUP method provides more flexibility and is better suited for large datasets or scenarios where you need to match SKUs and retrieve additional information.

### Step 1: Prepare Your Workspace

1. Switch to the **AllProducts** worksheet in cobby
2. Load your products (click **Load Products** > **Load All Products**)
3. Create a custom view by hiding unnecessary columns to focus on relevant data
4. Add an auxiliary column for the XLOOKUP formula:
   - Right-click any column header and select **Insert**
   - Name the new column (e.g., "Match Status" or "Availability")

:::tip
Creating a custom view helps you focus on the columns you need. For more information, see [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views).
:::

### Step 2: Remove Data Validation from Auxiliary Column

1. Select the entire auxiliary column
2. Go to Excel's **Data** tab
3. Click **Data Validation** > **Clear All**
4. This allows you to enter formulas and see results like #N/A

### Step 3: Set Up the XLOOKUP Formula

1. Click in the first cell of your auxiliary column (e.g., below the header)
2. Type `=xlookup` and press Tab to activate the formula
3. Alternatively, type `=xlookup(` and click the **fx** (Insert Function) button for guided entry

### Step 4: Configure XLOOKUP Parameters

The XLOOKUP formula requires three main parameters:

```excel
=XLOOKUP(search_criterion, search_matrix, return_matrix)
```

**Parameter 1: Search Criterion**
- Click on the SKU cell in the current row (e.g., if you're in row 3, click cell C3)
- This is the SKU you're searching for

**Parameter 2: Search Matrix**
- Switch to the sheet/workbook containing your external manufacturer list
- Select the entire column containing the manufacturer SKUs (e.g., column A)
- Press F4 to make the reference absolute (adds $ signs)

**Parameter 3: Return Matrix**
- This determines what value XLOOKUP returns when a match is found
- **For simple matching**: Select the same column as the search matrix (column A)
- **For status/availability**: Select the column containing status information (e.g., column B)
- Press F4 to make the reference absolute

### Step 5: Apply the Formula

1. Press Enter to confirm the formula
2. The formula will return either:
   - The matched SKU or status value (if found in the external list)
   - #N/A (if not found in the external list)
3. Copy the formula down to all product rows:
   - Select the cell with the formula
   - Double-click the fill handle (small square at bottom-right of cell)
   - Or copy and paste to all rows

:::tip
Double-clicking the fill handle automatically copies the formula down to all rows with data in adjacent columns, saving time when working with thousands of products.
:::

### Step 6: Interpret Results

Understanding what XLOOKUP returns:

- **SKU value displayed**: The SKU was found in the external list
- **#N/A**: The SKU was NOT found in the external list
- **Availability status** (if using column B): Shows the status from the manufacturer list

The interpretation of #N/A depends on your scenario:
- **Discontinued products list**: #N/A means the product is still current (keep active)
- **Current product range list**: #N/A means the product is not in the current range (deactivate)
- **Availability list**: #N/A means no availability information is available

### Step 7: Filter and Update Products

1. Select your auxiliary column header
2. Click the filter dropdown arrow
3. Filter based on your scenario (see scenarios below)
4. Update the **Enable Product** column for the filtered products
5. Click **Save products** in the cobby ribbon

## XLOOKUP Scenario Examples

### Scenario A: Deactivate Discontinued Products

**Use case**: You received a list of discontinued SKUs from FusionCobby, your manufacturer, and need to deactivate all matching products.

1. Configure XLOOKUP to return the SKU from the discontinued list
2. Apply filter to auxiliary column: uncheck #N/A, show only SKU values
3. This shows only products that ARE on the discontinued list
4. Select all filtered products
5. Set **Enable Product** to **Disabled**
6. Click **Save products**

```excel
=XLOOKUP(C3, Discontinued!$A$2:$A$1000, Discontinued!$A$2:$A$1000)
```

:::warning
Before deactivating products, verify that the manufacturer list is current and complete. If in doubt, contact your manufacturer to confirm.
:::

### Scenario B: Deactivate Products NOT in Current Range

**Use case**: CobbyCraft sent you their current product range. You want to deactivate all products that are no longer in their catalog.

1. Configure XLOOKUP to return the SKU from the current range list
2. Apply filter to auxiliary column: show only #N/A values
3. This shows products that are NOT in the current product range
4. Select all filtered products
5. Set **Enable Product** to **Disabled**
6. Click **Save products**

```excel
=XLOOKUP(C3, CurrentRange!$A$2:$A$5000, CurrentRange!$A$2:$A$5000)
```

### Scenario C: Update Based on Availability Status

**Use case**: Your manufacturer FusionCobby provided a list with SKUs and their availability status (Available/Not Available), and you need to enable/disable products accordingly.

1. Configure XLOOKUP to return availability status from column B of the external list
2. Apply filter to auxiliary column: filter for "Not Available"
3. Select all filtered products with "Not Available" status
4. Set **Enable Product** to **Disabled**
5. Click **Save products**
6. Clear the filter and filter for "Available"
7. Verify these products have **Enable Product** set to **Enabled**
8. Click **Save products** if needed

```excel
=XLOOKUP(C3, Availability!$A$2:$A$3000, Availability!$B$2:$B$3000)
```

:::tip
If the external list uses different terminology (e.g., "In Stock" vs "Available"), adjust your filter criteria accordingly. You can also use Excel's Find & Replace to standardize values before filtering.
:::

## Tips and Best Practices

### Before You Begin

- **Save your workbook**: Always save your cobby workbook before making bulk changes. This allows you to revert if something goes wrong.
- **Test on a small sample**: If you're new to XLOOKUP, test the formula on a few rows before applying it to all products.
- **Load all products**: When using the filter method, uncheck "only active products" to ensure you capture all matching SKUs.

### During the Process

- **Use auxiliary columns**: Test formulas in auxiliary columns before applying changes to core product data.
- **Double-check filter results**: Before bulk updating, verify the filtered product list matches your expectations.
- **Check product counts**: Note the number of products before and after filtering to catch any discrepancies.

### After Making Changes

- **Verify in shop admin**: Log into your shop's admin panel to confirm product status changes.
- **Test shop frontend**: Check your storefront to ensure products are properly hidden or displayed.
- **Document your process**: Keep notes about which manufacturer lists you've processed and when.

### When to Delete vs. Deactivate

Not all discontinued products should be deactivated. Consider these factors:

**Deactivate when:**
- The product might return to stock in the future
- The product has SEO value (rankings, backlinks)
- The product has order history you want to preserve
- The product is referenced in customer wishlists

**Delete when:**
- Products were incorrectly set up and never sold
- Products have no SEO value or history
- You're optimizing shop performance by reducing database size
- The product will never be available again and has no historical value

For more information, see [How to Delete Products in cobby](/how-to/product-management/delete-products).

### Handling Missing Products

If you notice products from your inventory are missing from the manufacturer's list:

- Contact your manufacturer to verify if the list is complete
- Check if the manufacturer uses different SKU formats
- Verify that your shop SKUs match the manufacturer's SKU format exactly
- Consider SKU variations (e.g., with/without hyphens, leading zeros)

## Verification Checklist

After completing your SKU matching and updates, verify:

- [ ] Product count matches expectations (e.g., if you had 50 discontinued SKUs, 50 products should be deactivated)
- [ ] XLOOKUP formulas return expected values (SKUs or #N/A in appropriate cases)
- [ ] Filter shows correct products based on criteria
- [ ] **Enable Product** status is updated correctly
- [ ] Save operation completed successfully without errors
- [ ] Changes are reflected in shop admin panel
- [ ] Shop frontend displays/hides products correctly
- [ ] Auxiliary columns can be deleted or hidden after process is complete

## Related Documentation

Learn more about related cobby features:

- [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views) - Optimize your workspace by showing only relevant columns
- [How to Create Auxiliary Columns](/how-to/product-management/create-auxiliary-columns) - Use temporary columns for calculations and testing
- [How to Filter Product Data](/how-to/product-management/filter-product-data) - Master cobby's filter functionality
- [How to Delete Products in cobby](/how-to/product-management/delete-products) - Permanently remove products when deactivation isn't enough
- [How to Show Hidden Columns](/how-to/product-management/show-hidden-columns) - Find and work with hidden data columns


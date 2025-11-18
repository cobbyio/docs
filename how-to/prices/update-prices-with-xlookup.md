---
title: "How to Update Product Prices from Manufacturer Price Lists Using XLOOKUP"
description: "Learn how to efficiently match and update product prices from manufacturer price lists using cobby and Excel's XLOOKUP formula"
---

import Storylane from '@site/src/components/Storylane';

# How to Update Product Prices from Manufacturer Price Lists Using XLOOKUP

This guide shows you how to match product SKUs from manufacturer price lists with your shop products and efficiently update prices in bulk using Excel's XLOOKUP formula.

When you receive manufacturer price lists with updated prices for some (but not all) products, you need to identify which products are included and update only those prices. This guide demonstrates how to match the manufacturer supplier list with your shop data in cobby using the XLOOKUP formula, keeping all your data in one workbook for easy cross-checking.

## Goal

Match product SKUs from manufacturer price lists with your shop products and update prices efficiently without manually searching for each product or accidentally overwriting products that shouldn't be changed.

## Prerequisites

Before you begin, ensure you have:

- A manufacturer price list in Excel format containing SKUs and new prices
- Access to cobby with your products loaded
- Basic familiarity with Excel formulas, specifically XLOOKUP
- Understanding of cobby's custom views and auxiliary columns

## Interactive Demo

<Storylane
  src="https://app.storylane.io/share/rxkbc2q1eigc"
  title="Update Prices with XLOOKUP - Interactive Demo"
/>

## Steps

### 1. Open the Manufacturer Price List in Excel

Open the manufacturer price list containing the new prices in Excel. The list typically includes columns such as:

- SKUs (manufacturer article numbers)
- Cost prices
- Minimum margins
- New prices (the values you need to transfer)

Keep this file open for the next step.

### 2. Load Your Products into the Same Workbook

1. In the workbook containing the manufacturer price list, click the **cobby** tab in the Excel ribbon
2. Click the **Load Products** button
3. Choose your preferred load method (All Products or specific filter)
4. Your products will load into a new worksheet within the same workbook

:::tip
Keeping the manufacturer list and cobby data in one workbook provides a significant advantage: you can quickly cross-check data between worksheets without switching between files, and the XLOOKUP formula can easily reference both datasets.
:::

### 3. Create a Custom Product View

For better clarity and focus, create a custom product view:

1. Navigate to the worksheet containing your products (e.g., "AllProducts")
2. Hide unnecessary columns that aren't relevant to price updates
3. Move columns you need for the price update to the beginning of the worksheet
4. Arrange columns in a logical order (e.g., SKU, current price, new price)

For detailed instructions, see [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views).

### 4. Create an Auxiliary Column for New Prices

Create an auxiliary column next to the "Price" attribute to serve as a temporary holding field where new prices can be entered:

1. Right-click on any column header in your product worksheet
2. Select **Insert** to add a new column
3. Name the column "New Price" or similar
4. This column will hold the XLOOKUP formula results

For more information, see [How to Create Auxiliary Columns](/how-to/product-management/create-auxiliary-columns).

### 5. Start Matching SKUs with Prices Using XLOOKUP

Begin matching SKUs with prices to identify which products should receive new prices:

1. Click in the first cell of your "New Price" auxiliary column (below the header)
2. Type `=xlookup` (lowercase is fine)
3. Double-click on **XLOOKUP** in the formula autocomplete suggestion
4. Alternatively, click the **fx** (Insert Function) button in the top left to open the function field for guided entry

### 6. Enter the Search Criterion Parameter

The XLOOKUP formula requires three parameters: search value, search matrix, and return matrix. Start with the search criterion:

1. In the function field, locate the first parameter: **lookup_value**
2. Click on the SKU cell in the current row of your "AllProducts" worksheet
3. For example, if you're in row 3, click on the cell containing the SKU (e.g., cell C3)
4. This tells XLOOKUP which value to search for

```excel
=XLOOKUP(C3, ...
```

:::tip
Use the structured reference format for cleaner formulas. If your data is in an Excel table, the formula will automatically use `[@[SKU]]` instead of a cell reference like `C3`. This makes the formula more readable and easier to copy.
:::

### 7. Enter the Search Matrix Parameter

Define where XLOOKUP should search for matching SKUs:

1. Click in the parameter field for **lookup_array** (the search matrix)
2. Switch to the worksheet containing your manufacturer price list
3. Select the entire column containing the manufacturer SKUs (e.g., column A)
4. Press **F4** to make the reference absolute (adds $ signs like `$A$2:$A$1000`)
5. This ensures the search range doesn't shift when you copy the formula down

```excel
=XLOOKUP(C3, ManufacturerPrices!$A$2:$A$1000, ...
```

### 8. Enter the Return Matrix Parameter

Define what value XLOOKUP should return when a match is found:

1. Click in the parameter field for **return_array** (the return matrix)
2. In the same manufacturer price list worksheet, select the column containing the new prices (e.g., column D)
3. Press **F4** to make the reference absolute (e.g., `$D$2:$D$1000`)
4. Click **OK** or press Enter to confirm the formula

```excel
=XLOOKUP(C3, ManufacturerPrices!$A$2:$A$1000, ManufacturerPrices!$D$2:$D$1000)
```

When the formula executes, it will display the new price for the SKU if found, or #N/A if the SKU doesn't exist in the manufacturer price list.

### 9. Apply the Formula to All Products

After confirming the formula works for the first row, apply it to all other SKUs:

1. Select the cell containing your XLOOKUP formula
2. Locate the fill handle (small square at the bottom-right corner of the cell)
3. Double-click the fill handle to automatically fill the formula down to all rows with data
4. Alternatively, click and drag the fill handle down to the last row

The formula will now execute for all SKUs, displaying new prices where matches are found and #N/A where no match exists.

:::tip
Double-clicking the fill handle is faster than dragging, especially when working with thousands of products. Excel automatically detects where your data ends and fills the formula accordingly.
:::

### 10. Filter to Show Only Products with New Prices

Since you only want to update products that have new prices, filter out the #N/A values:

1. Click the filter dropdown arrow in the "New Price" column header
2. In the filter menu, uncheck the box for **#N/A** at the bottom
3. Click **OK**

Now only SKUs with new prices from the manufacturer list are displayed, making it easy to see exactly which products need updating.

### 11. Transfer Prices from Auxiliary Column to Price Column

Transfer the new prices from your "New Price" auxiliary column to the actual "Price" column. There are two recommended methods:

**Method 1: Manual Entry (Safest)**
1. Click into the corresponding "Price" cell for each product
2. Type the new price value from the "New Price" column
3. Press Enter and move to the next row

**Method 2: Formula Reference (Semi-Automatic)**
1. Click into the "Price" cell for the product you want to update
2. In the formula bar, type `=` followed by selecting the corresponding cell in the "New Price" column
   - Example: `=(select cell F3)` or type `=F3` directly
3. Alternatively, use the structured reference: `=[@[New Price]]`
4. Press Enter
5. The price will display as a formula-driven value
6. Copy the value and paste as values only if you want to replace the formula with static numbers

:::warning Critical: Avoid Copy & Paste for Price Transfer
DO NOT use copy and paste directly from the "New Price" column to the "Price" column. When you paste in a filtered view, Excel also pastes values into hidden rows that should NOT be updated. This can overwrite prices for products that weren't part of the manufacturer price list. Always use manual entry or the formula method described above.
:::

:::tip
The formula method `=[@[New Price]]` is efficient and safe because it only updates visible (filtered) rows. After verifying the prices are correct, you can copy the cells and paste as values to remove the formulas.
:::

As you transfer prices, the product status indicator in cobby will change to yellow, showing that the product has been modified and is ready to save.

### 12. Save Your Changes

After transferring all new prices to the "Price" column:

1. Click **Save Products** in the cobby ribbon
2. Wait for the save operation to complete
3. cobby will immediately sync the price changes to your shop

The yellow status indicators will disappear once the save is successful.

### 13. Bonus: Work with cobby Offline for Multi-Day Projects

Sometimes calculating and verifying new prices takes several days, and you don't want incomplete changes to go live immediately. cobby offers an offline mode that prevents changes from syncing until you're ready:

1. Click the **cobby** tab in the Excel ribbon
2. Select **Work Offline** mode
3. Make all your price updates across multiple sessions
4. When all changes are complete and verified, switch back to **Online** mode
5. Click **Save Products** to push all changes to your shop at once

For detailed instructions, see [How to Work with cobby Offline](/how-to/product-management/work-with-cobby-offline).

:::tip
Offline mode is especially useful when you need to cross-reference multiple manufacturer lists, perform complex calculations, or wait for approval before publishing price changes.
:::

## Tips and Best Practices

### Before You Begin

- **Verify manufacturer list format**: Ensure the manufacturer price list has clear column headers and consistent data formatting
- **Check SKU consistency**: Verify that SKUs in the manufacturer list match the format used in your shop (e.g., same use of hyphens, leading zeros, uppercase/lowercase)
- **Back up your workbook**: Save your cobby workbook before making bulk price changes so you can revert if needed

### During the Process

- **Test on a few rows first**: Before applying the XLOOKUP formula to all products, test it on a few rows to verify it returns correct results
- **Use auxiliary columns for testing**: Never apply formulas directly to the "Price" column until you've verified they work correctly in an auxiliary column
- **Double-check filtered results**: Before transferring prices, review the filtered product list to ensure all expected products are included

### After Making Changes

- **Verify in shop admin**: Log into your shop's admin panel to confirm price changes are reflected correctly
- **Check product count**: Note how many products were updated and verify it matches the number in the manufacturer price list
- **Test shop frontend**: Visit your storefront to ensure updated prices display correctly

### Understanding XLOOKUP Results

- **New price displays**: The SKU was found in the manufacturer list and has a new price
- **#N/A displays**: The SKU was NOT found in the manufacturer list (no price update needed)
- **Product turns yellow**: The product has been modified in cobby and will be saved on the next save operation

## Result and Verification

After completing this process, you should have:

- Only products from the manufacturer price list updated with new prices
- All other products unchanged and at their original prices
- A clear record in your workbook of which products were updated (visible in the "New Price" auxiliary column)
- Changes successfully saved and synced to your shop

To verify success:

1. Check that the number of updated products matches the number of unique SKUs in the manufacturer price list
2. Verify that products not in the manufacturer list retained their original prices
3. Confirm that all yellow status indicators have cleared after saving
4. Log into your shop admin and spot-check a few updated prices

## Related Documentation

Learn more about related cobby features and techniques:

- [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views) - Optimize your workspace by showing only relevant columns
- [How to Create Auxiliary Columns](/how-to/product-management/create-auxiliary-columns) - Use temporary columns for formulas and testing
- [How to Work with cobby Offline](/how-to/product-management/work-with-cobby-offline) - Prevent changes from syncing until you're ready
- [How to Match SKUs with External Manufacturer Lists](/how-to/product-management/match-skus-with-external-lists) - Use similar techniques for product activation/deactivation
- [Excel XLOOKUP Function (Microsoft)](https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929) - Official Microsoft documentation for XLOOKUP

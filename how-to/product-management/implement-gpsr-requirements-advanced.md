---
sidebar_position: 7
title: How to Implement GPSR Requirements for Multiple Manufacturers
description: Automate GPSR compliance for multiple manufacturers using XLOOKUP formulas in cobby for efficient, scalable product safety regulation management
---

# How to Implement GPSR Requirements for Multiple Manufacturers

If you manage products from multiple manufacturers, manually entering GPSR (General Product Safety Regulation) compliance information for each product becomes time-consuming and error-prone. This guide shows you how to automate GPSR data retrieval using Excel's XLOOKUP formula, allowing you to manage compliance information for hundreds or thousands of products in seconds.

:::info Prerequisites
This guide assumes you have:
- Advanced Excel knowledge, particularly familiarity with XLOOKUP formulas
- Multiple manufacturers whose products need GPSR compliance information
- A prepared manufacturer reference list with GPSR data (manufacturer details, responsible person information, safety warnings)
- Products already loaded in cobby
- Basic understanding of GPSR requirements
:::

:::tip For Beginners
If you're new to GPSR implementation or prefer a simpler approach, start with [How to Implement GPSR Requirements Quickly](/how-to/product-management/implement-gpsr-requirements). This guide covers advanced automation techniques.
:::

## What You'll Accomplish

By following this guide, you'll:
- Automatically populate GPSR compliance data across all products from the same manufacturer
- Save hours of manual data entry by using formula-driven automation
- Create a scalable system that works for any number of manufacturers
- Enable instant updates when manufacturer information changes
- Maintain consistency across your entire product catalog

## Interactive Demo

See the XLOOKUP formula workflow in action:

import Storylane from '@site/src/components/Storylane';

<Storylane
  src="https://app.storylane.io/share/elxyyjbgllti"
  title="GPSR Advanced Implementation Demo"
/>

## Steps

### 1. Prepare Your Manufacturer Reference Sheet

Before loading products, create a reference worksheet containing your manufacturer GPSR data:

1. In Excel, create a new worksheet named "GPSR by Manufacturer" (or similar)
2. Structure your data with two columns:
   - **Column A**: Manufacturer name (exactly as it appears in your product data)
   - **Column B**: Complete GPSR compliance text (manufacturer details, responsible person, safety information)

3. Fill in the GPSR information for each manufacturer

:::warning Product Type Specificity
This XLOOKUP approach works best when products are homogeneous within each manufacturer (e.g., all products from Manufacturer A are headphones). If a manufacturer produces diverse product types requiring different safety information, consider using a different attribute (like product category or SKU prefix) as your lookup criterion.
:::

### 2. Load Your Products

Load the products that need GPSR information:

1. Click **Load Products** in the cobby Excel toolbar
2. Select your product range or filter criteria
3. Wait for products to load into the worksheet

:::tip
Your manufacturer reference sheet will automatically be pushed to the background. You can switch between sheets using Excel's worksheet tabs at the bottom of the window.
:::

### 3. Create a Custom Product View (Optional)

For better clarity when working with formulas, create a focused view:

1. Hide columns that aren't relevant to GPSR implementation
2. Keep visible:
   - Manufacturer column
   - GPSR compliance column
   - Any product identifiers (SKU, name) for reference

For detailed instructions, see [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views).

### 4. Apply the XLOOKUP Formula

Now you'll use XLOOKUP to automatically retrieve GPSR data based on the manufacturer:

1. **Navigate to the first product row** in your GPSR compliance column
2. **Type the formula start**: Enter `=xlookup` (Excel will show formula suggestions)
3. **Select XLOOKUP**: Double-click the blue-highlighted `XLOOKUP` function in the autocomplete list
4. **Open the Function Arguments window**: Click the **fx** button in the formula bar

5. **Fill in the function parameters** in the dialog that appears:

   - **Lookup_value**: Click the manufacturer cell in the first product row (e.g., if manufacturer is in column F, click F2)
     - This tells Excel which manufacturer to look up

   - **Lookup_array**: Switch to your "GPSR by Manufacturer" worksheet and select the entire Column A (all manufacturer names)
     - This is where Excel will search for the manufacturer

   - **Return_array**: Still in the "GPSR by Manufacturer" worksheet, select the entire Column B (all GPSR texts)
     - This is what Excel will return when it finds a match

6. **Confirm the formula**: Click **OK**

The formula should look similar to this:
```excel
=XLOOKUP([@Manufacturer], 'GPSR by Manufacturer'!$A:$A, 'GPSR by Manufacturer'!$B:$B)
```

:::tip Formula Explanation
- `[@Manufacturer]` references the manufacturer value in the current row
- `'GPSR by Manufacturer'!$A:$A` is the lookup array (where to search)
- `'GPSR by Manufacturer'!$B:$B` is the return array (what to retrieve)
- The `$` symbols lock the column references when copying the formula
:::

### 5. Apply Formula to All Products

Extend the formula to all product rows:

**Option 1 - Quick fill:**
1. Select the cell with your XLOOKUP formula
2. Click the small green square in the bottom-right corner of the cell
3. The formula automatically fills down to all rows with data

**Option 2 - Manual drag:**
1. Select the cell with your XLOOKUP formula
2. Drag the green square downward to cover all product rows
3. Release to apply the formula

All products from the same manufacturer will now automatically display the same GPSR compliance information.

:::tip Verify Results
Quickly scan the GPSR column to ensure:
- Products from the same manufacturer show identical GPSR text
- No cells show `#N/A` errors (which indicate the manufacturer wasn't found in your reference sheet)
- The retrieved information is correct and complete
:::

### 6. Save Your Changes

Push the GPSR data to your shop system:

1. Click **Save Products** in the cobby Excel toolbar
2. Watch the cobby task pane as the save operation processes
3. Monitor the job log (yellow indicates processing, green indicates completion)
4. Wait for confirmation that all products saved successfully

:::warning Error Handling
If you encounter errors during save:
- Check for any `#N/A` errors in your GPSR column (missing manufacturers in reference sheet)
- Verify that required fields in cobby are properly filled
- Review the cobby task pane for specific error messages
:::

## Verification

After saving, confirm your GPSR implementation:

1. **Check your shop system**: View several product pages to verify GPSR information appears correctly
2. **Test different manufacturers**: Check products from various manufacturers to confirm each shows appropriate data
3. **Verify completeness**: Ensure all required GPSR elements are visible to customers
4. **Test links**: If your GPSR text includes documentation URLs, verify they work correctly

## Updating GPSR Information

One major advantage of the XLOOKUP approach is easy updates:

### To Update One Manufacturer's GPSR Data:

1. Switch to your "GPSR by Manufacturer" worksheet
2. Edit the GPSR text in Column B for that manufacturer
3. Return to your products worksheet
4. Excel automatically updates all products using that manufacturer
5. Click **Save Products** to push changes to your shop system

### To Add a New Manufacturer:

1. Switch to your "GPSR by Manufacturer" worksheet
2. Add a new row with:
   - Column A: New manufacturer name (exactly as it appears in product data)
   - Column B: GPSR compliance text for that manufacturer
3. Return to your products worksheet
4. The XLOOKUP formula automatically recognizes the new manufacturer
5. Products with that manufacturer will now display the GPSR data

:::tip Efficiency Gain
Updating GPSR information for 100 products from one manufacturer requires changing just one cell in your reference sheet instead of manually editing 100 individual product records.
:::

## Optional Enhancement: Using the HTML Editor

For making visual adjustments to GPSR text formatting:

1. In the cobby products worksheet, click any cell containing GPSR compliance text
2. Look for the **Html Editor** button in the cobby task pane (bottom-right area)
3. Click the button to open the HTML editor
4. Make formatting adjustments (bold text, line breaks, links, etc.)
5. Save your changes

:::info When to Use the HTML Editor
The HTML editor is useful for:
- Adding formatting like bold, italic, or bullet points
- Adjusting line breaks for better readability
- Adding or modifying hyperlinks
- Fine-tuning the visual presentation

**Note**: Changes made in the HTML editor apply only to the specific product. For consistent changes across all products from a manufacturer, update your reference sheet instead.
:::

## Best Practices

### Maintain Your Reference Sheet

- **Consistent naming**: Ensure manufacturer names in Column A exactly match those in your product data (including capitalization and spacing)
- **Complete information**: Include all required GPSR elements in Column B (manufacturer details, responsible person, safety warnings)
- **Regular reviews**: Periodically review your reference sheet to ensure information remains current
- **Version control**: Consider maintaining backups of your reference sheet as GPSR requirements evolve

### Optimize for Scale

- **Standardize formats**: Use consistent HTML formatting in your GPSR texts for professional appearance
- **Document your structure**: Keep notes about which attributes you're using for lookups and why
- **Test incrementally**: When adding many new manufacturers, test with a small batch first
- **Plan for exceptions**: For manufacturers with product-specific requirements, consider additional lookup columns or conditional logic

### Handle Edge Cases

- **Missing manufacturers**: If XLOOKUP shows `#N/A`, add the missing manufacturer to your reference sheet
- **Manufacturer name variations**: If one manufacturer appears with different names (e.g., "ABC Corp" vs "ABC Corporation"), standardize names in either the reference sheet or product data
- **Multi-language requirements**: For shops in multiple languages, create separate reference sheets per language or include multilingual text in your GPSR column

## Related Information

- **[How to Implement GPSR Requirements Quickly](/how-to/product-management/implement-gpsr-requirements)** — Basic GPSR implementation guide for beginners
- **[Understanding GPSR Requirements](/explanation/regulatory-compliance/understanding-gpsr-requirements)** — Deep dive into the General Product Safety Regulation and why it matters
- **[How to Create Auxiliary Columns](/how-to/product-management/create-auxiliary-columns)** — Using helper columns for complex data management scenarios
- **[How to Show Hidden Columns](/how-to/product-management/show-hidden-columns)** — Revealing columns needed for GPSR implementation

---

:::tip Scalability Achievement
With this XLOOKUP approach, you've transformed GPSR compliance from a manual, product-by-product task into an automated, manufacturer-level process. This system scales effortlessly whether you have 10 products or 10,000, and updates that once took hours now take seconds.
:::

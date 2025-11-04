---
sidebar_position: 3
title: How to Split Products to Attribute Sets
---

# How to Split Products to Attribute Sets

Distribute imported product data from a single spreadsheet to multiple attribute sets automatically using cobby's "Split to Attribute Set" function.

![Split to Attribute Sets](/img/spliting-attributsets/pic1.png)

## Prerequisites

- cobby Excel add-in installed
- Product data with attribute set assignments
- Basic Excel formula knowledge
- Understanding of your store's attribute sets

## When to Use This

Use this process when:
- Importing products from suppliers that belong to different attribute sets
- Bulk creating products across multiple categories
- Processing product feeds that contain mixed product types

---

## Method 1: Without Template (First-Time Import)

Use this method when importing data from a new source for the first time.

### Step 1: Prepare Product Data

1. Open the Excel file containing your new product data
2. Format the data as a table: Press **Ctrl+A** then **Ctrl+L**
3. Confirm the table creation dialog

### Step 2: Add Column Prefixes

Add prefixes to distinguish your import columns from Magento columns:

1. Insert a new row above your column headers
2. In the first cell of the new row, enter the formula: `="prefix-"&[Column Name]`
   - Example: `="her-"&TableElectronics[[#Headers],[Article Number]]`
3. Drag the formula across all column headers
4. Copy the new row and use **Paste Special → Values** to replace the original headers
5. Delete the formula row

### Step 3: Add Attribute Set Column

1. Add a new column named "Attribute Set" to your table
2. For each product row, enter the name of the target attribute set
3. You can use Excel formulas to automate this assignment based on product characteristics

### Step 4: Load Import Mode

1. In cobby, load the import mode
2. Select the "Default" template
3. Click **Load Products**

### Step 5: Split to Attribute Sets

1. Click the **Split to Attributeset** button in the cobby ribbon
2. cobby will distribute your data to the appropriate attribute set sheets
3. Yellow columns will appear in each attribute set containing your import data

![Yellow import columns](/img/spliting-attributsets/pic2.png)

### Step 6: Map Data with Formulas

Map your import data (yellow columns) to Magento attributes using Excel formulas:

**Direct assignment:**
```excel
=[@[prefix-Article Number]]
```

**Combine multiple columns:**
```excel
=[@[prefix-Name]]&" "&[@[prefix-Height]]&" "&[@[prefix-Width]]&" "&[@[prefix-Depth]]
```
Result: "Madison LX2200 67.5 mm 48.85 mm 26.25 mm"

**Lookup with translation table:**

Create a reference table matching your values to Magento values:

![Color translation table](/img/spliting-attributsets/pic3.png)

```excel
=INDEX(Colors[Own Color],MATCH([@[prefix-Color]],Colors[Manufacturer Color],0))
```

### Step 7: Save Products

1. Review all formula mappings to ensure data is correctly assigned
2. Click **Save Products** in the cobby ribbon
3. New products/data will be imported to your store

### Step 8: Save as Template (Optional)

To reuse these mappings for future imports:

1. Clear the contents of all yellow columns in each attribute set
2. Keep the formulas in the Magento attribute columns
3. Click the dropdown arrow on **Load Products → Template → Save**
4. Enter a template name and save

---

## Method 2: With Existing Template (Recurring Imports)

Use this method when you have a saved template from previous imports.

### Step 1: Open Supplier Data

1. Open your supplier's Excel file
2. Ensure the data is formatted as a table

### Step 2: Load Template

1. In cobby, click **Load Products → Template**
2. Select your saved template from the list
3. Click **Load**

### Step 3: Verify Column Headers Match

**Critical:** The yellow column headers in the template must exactly match your supplier data:
- Same spelling
- Same capitalization
- Same spaces
- No extra characters

**Tip:** Use Power Query to transform supplier data to match your template format automatically.

### Step 4: Split to Attribute Sets

1. Click **Split to Attribute Set**
2. Your data will automatically populate the yellow columns
3. Existing formulas will map data to Magento attributes automatically

### Step 5: Verify and Save

1. Review the mapped data in each attribute set
2. Verify formulas executed correctly
3. Check that values appear in the correct Magento attribute columns
4. Click **Save Products**

---

## Tips for Success

### Using Power Query

For recurring imports with varying formats, use Excel's Power Query to:
- Standardize column names
- Transform data to your template format
- Clean and validate data before import

### Formula Best Practices

- Test formulas on a small dataset first
- Use absolute references ($) for lookup tables
- Add error handling with IFERROR() to catch missing data
- Document complex formulas for future reference

### Template Management

- Create separate templates for each supplier
- Name templates descriptively (e.g., "Supplier-Electronics-Import")
- Regularly update templates as attribute structures change
- Keep a backup of working templates

## Troubleshooting

**Problem:** Split to Attribute Set button does nothing

**Solution:** Verify you have an "Attribute Set" column with valid attribute set names. Check spelling matches exactly with Magento attribute set names.

**Problem:** Formulas return errors after splitting

**Solution:** Check that yellow column headers exactly match your formula references. Look for extra spaces or capitalization differences.

**Problem:** Data appears in wrong attribute sets

**Solution:** Review your "Attribute Set" column values. Ensure they match Magento attribute set names precisely (case-sensitive).

**Problem:** Some products don't import

**Solution:** Check that all required attributes for each attribute set have values. Missing required attributes will prevent product creation.

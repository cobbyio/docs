---
sidebar_position: 4
title: How to Remove Spaces from SKUs
---

# How to Remove Spaces from SKUs

Clean up SKUs that contain leading, trailing, or unnecessary spaces using Excel's TRIM function.

## Why This Matters

SKUs with spaces can cause:
- Duplicate product errors
- Import/export issues
- Integration problems with third-party systems
- Order processing failures

## Prerequisites

- cobby Excel add-in installed
- Products loaded in Excel
- Basic Excel formula knowledge

## When to Use This

Use this process if:
- You received an email notification about SKUs with spaces
- Products are failing to import or sync
- You're cleaning up legacy product data

---

## Steps

### Step 1: Create Helper Columns

1. Right-click on a column header (above the SKU column)
2. Select **Insert** from the context menu
3. Repeat to create two new columns

![Insert columns](/img/remove-unnecessary-spaces-from-all-SKUs/pic1.png)

### Step 2: Name the Columns

Give the columns descriptive names:
- First column: "Trim 1"
- Second column: "Trim 2"

![Name columns](/img/remove-unnecessary-spaces-from-all-SKUs/pic2.png)

### Step 3: Add TRIM Formula (Column 1)

1. Click on the first cell in the "Trim 1" column
2. Enter the formula: `=TRIM([@SKU])`
3. Press Enter

This formula removes leading and trailing spaces from the SKU.

![TRIM formula](/img/remove-unnecessary-spaces-from-all-SKUs/pic3.png)

### Step 4: Add Comparison Formula (Column 2)

1. Click on the first cell in the "Trim 2" column
2. Enter the formula: `=[@[Trim 1]]=[@SKU]`
3. Press Enter

This formula compares the cleaned SKU with the original:
- **TRUE** = No spaces found, SKU is clean
- **FALSE** = Spaces detected, SKU needs cleaning

![Comparison formula](/img/remove-unnecessary-spaces-from-all-SKUs/pic4.png)

### Step 5: Save Formula as Template

Save these formulas for future use:

1. Click the dropdown arrow on **Load Products**
2. Select **Template → Save**
3. Enter a name like "SKU Cleanup"
4. Click Save

![Save template](/img/remove-unnecessary-spaces-from-all-SKUs/pic5.png)

### Step 6: Apply to All Products

1. Select both formula cells (Trim 1 and Trim 2)
2. Move your cursor to the bottom-right corner of the selection
3. Double-click the fill handle (small square) to auto-fill down to all rows

![Apply formulas](/img/remove-unnecessary-spaces-from-all-SKUs/pic6.png)

### Step 7: Check for Duplicates

After removing spaces, verify you don't have duplicate SKUs:

1. Click the column header of "Trim 1" to select the entire column
2. Go to the **Data** tab in Excel
3. Click **Remove Duplicates**

![Remove duplicates](/img/remove-unnecessary-spaces-from-all-SKUs/pic7.png)

4. In the dialog, ensure only "Trim 1" is selected
5. Click OK

![Duplicate dialog](/img/remove-unnecessary-spaces-from-all-SKUs/pic8.png)

**If duplicates are found:**
- Excel will show how many duplicates were detected
- You'll need to resolve the duplicate SKUs before proceeding
- Either modify one of the duplicate SKUs or delete one of the products

**If no duplicates are found:**
- Continue to the next step

### Step 8: Copy Cleaned SKUs

1. Select the entire "Trim 1" column (click the column header)
2. Right-click and select **Copy**
3. Click on the SKU column header
4. Right-click and select **Paste Special → Values**

![Copy cleaned values](/img/remove-unnecessary-spaces-from-all-SKUs/pic9.png)

![Paste values](/img/remove-unnecessary-spaces-from-all-SKUs/pic10.png)

This replaces the old SKUs with the cleaned versions.

### Step 9: Save Products

1. Click **Save Products** in the cobby ribbon
2. Wait for the save to complete
3. Verify success in the status message

![Save products](/img/remove-unnecessary-spaces-from-all-SKUs/pic11.png)

---

## Troubleshooting

**Problem:** Duplicate SKUs found after removing spaces

**Solution:** This means multiple products had different variations of the same SKU (e.g., "ABC123" and " ABC123"). You need to:
- Identify which products are duplicates
- Decide which to keep
- Modify or delete the duplicate products

**Problem:** Formula shows #REF! error

**Solution:** Make sure you're using structured table references. Convert your data range to a table (Ctrl+L) if you haven't already.

**Problem:** TRIM function doesn't remove all spaces

**Solution:** TRIM only removes leading/trailing spaces and reduces multiple spaces to single spaces. If you have special characters that look like spaces, use the CLEAN function in addition: `=CLEAN(TRIM([@SKU]))`

## Alternative: Prevent Spaces in the Future

To prevent SKU space issues from occurring:

1. Add data validation in Excel to prevent spaces in SKU entry
2. Use automated import processes that clean data before import
3. Train team members on proper SKU formatting
4. Implement SKU generation rules that don't allow spaces

## Related Articles

- How to Find Duplicate Values (coming soon)
- Data Validation Best Practices (coming soon)

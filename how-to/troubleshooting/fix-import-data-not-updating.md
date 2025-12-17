---
sidebar_position: 7
title: How to Fix Import Data Not Updating
---

# How to Fix Import Data Not Updating

This guide helps you diagnose and fix issues when cobby's import mode completes without errors, but your product data doesn't update in the store.

## The Problem

You've run an import in cobby:
- The import completes successfully (job log shows green)
- No error messages appear
- But when you check your store, the data hasn't changed

This is almost always caused by **hidden columns** in your attribute set.

## Why This Happens

:::danger[Key Concept]
**cobby only imports data from visible columns.** Hidden columns are completely ignored during import, regardless of the data in your Excel sheet.
:::

The import matching logic works like this:

| Column State | Import Behavior |
|--------------|-----------------|
| **Visible** with data | Data is imported and overwrites store values |
| **Visible** but empty | Empty value overwrites store values (data deleted!) |
| **Hidden** | Column is ignored, store values remain unchanged |

## Common Scenarios

### Scenario 1: Column Hidden in Attribute Set

**Symptom:** Specific attributes don't update, while others work fine.

**Example:** You're importing shoe products into the "Shoes" attribute set. The "Color" column was previously hidden because you didn't need it. Now you want to import color data, but it's not updating.

**Solution:**
1. Open the "Shoes" attribute set
2. Find the hidden "Color" column
3. Unhide it
4. Re-run the import

### Scenario 2: Using Wrong Attribute Set

**Symptom:** All or most attributes don't update.

**Example:** You're importing data thinking you're in "Clothing" attribute set, but you actually selected "Electronics". The columns you need might be hidden or not exist in "Electronics".

**Solution:**
1. Verify which attribute set you selected
2. Switch to the correct attribute set
3. Verify column visibility
4. Re-run the import

### Scenario 3: Column Hidden in All Attribute Sets

**Symptom:** An attribute never updates, regardless of which attribute set you use.

**Example:** Your company rarely updates "Meta Description", so it was hidden across all attribute sets. Now you want to import SEO data, but it doesn't work.

**Solution:**
1. Check the column visibility in your selected attribute set
2. Unhide the column
3. Consider whether other attribute sets also need this column visible

## Step-by-Step Diagnosis

### Step 1: Identify the Problem Columns

List which specific attributes are not updating:
- [ ] Which columns should have been updated?
- [ ] Are some columns updating correctly while others aren't?

### Step 2: Check Column Visibility

1. Load products in normal mode (not import mode)
2. Select the same attribute set you used for import
3. Look for the columns that should have been updated
4. Check if they are hidden (not visible in the sheet)

:::tip[Quick Check]
If you can't see a column in your attribute set view, it's hidden and won't be imported.
:::

### Step 3: Unhide Required Columns

1. Right-click on any column header
2. Select "Unhide" or access column visibility settings
3. Enable visibility for the columns you need to import
4. Verify the columns now appear in your sheet

### Step 4: Verify SKU Matching

Even with visible columns, data won't update if SKUs don't match:

```
Your Excel: SKU-001
Store:      SKU-001  ✓ Match - data will update

Your Excel: sku-001
Store:      SKU-001  ✗ No match - data ignored (case sensitive)

Your Excel: SKU-001
Store:      SKU-001  ✗ No match - trailing space
```

**Check for:**
- [ ] Exact case matching (uppercase/lowercase)
- [ ] No leading or trailing spaces
- [ ] No special characters or hidden characters

### Step 5: Re-run the Import

After fixing visibility:
1. Close Excel completely
2. Reopen Excel
3. Start import mode fresh
4. Verify columns are visible
5. Run the import again

## Prevention Checklist

Before every import, verify:

:::tip[Pre-Import Verification]
1. ✅ All target columns are **visible** in the attribute set
2. ✅ You're using the **correct attribute set**
3. ✅ **SKUs match exactly** (case-sensitive)
4. ✅ **Website column** is filled and visible
5. ✅ Columns you DON'T want to update are **hidden**
:::

## Related Guides

- [How to Use Import Mode](/how-to/product-management/use-import-mode) - Complete import mode guide
- [Fix Missing Attributes](/how-to/troubleshooting/fix-missing-attributes) - When attributes don't appear at all

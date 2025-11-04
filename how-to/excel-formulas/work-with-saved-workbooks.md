---
sidebar_position: 17
title: How to Work with Saved Workbooks
---

import Storylane from '@site/src/components/Storylane'

# How to Work with Saved Workbooks

Learn how to safely use saved cobby workbooks and avoid overwriting recent changes.

## Critical Warning

In general, **you must not work with saved workbooks** as cobby will not recognize any changes from the shop.

## The Problem

### Scenario

1. You load products into cobby and save the workbook
2. Someone changes product data in Magento (e.g., product name)
3. You reopen your saved workbook
4. You change a price
5. You click "Save products"

### What Happens

cobby uploads **all** data from your workbook, including the outdated product name, overwriting the recent Magento changes.

**Result**: You accidentally revert the product name to the old value.

## Why This Happens

Saved workbooks contain a snapshot of data from when they were created. They don't sync with live Magento data automatically.

When you save products:
- cobby uploads all values in the workbook
- It doesn't know which values are outdated
- Recent changes in Magento get overwritten

## Safe Ways to Use Saved Workbooks

### 1. As Reference Data (Recommended)

Use saved workbooks as a data source for formulas, not for direct uploads.

**Example**: Price updates from an old export

1. Save a workbook with product data
2. Later, load fresh products in cobby
3. Use VLOOKUP or INDEX-MATCH to pull specific values from the saved workbook
4. Only update the columns you intend to change

```excel
=VLOOKUP([@SKU];SavedWorkbook.xlsx!Products!$A$2:$E$1000;3;FALSE)
```

**Benefits**:
- Fresh data from Magento
- Selective updates only
- No risk of overwriting other changes

### 2. Offline Work with Formulas

The saved workbook acts as a simple Excel file that you reference.

**Process**:

1. **Save a workbook** with product info as reference
2. **Load fresh products** in a new cobby session
3. **Use Excel formulas** (VLOOKUP, XLOOKUP, INDEX-MATCH) to pull data from the saved file
4. **Update specific columns** only
5. **Save to Magento**

This approach gives you:
- Current Magento data as the base
- Ability to reference saved calculations or imports
- Control over which attributes change

## When NOT to Use Saved Workbooks

Never use saved workbooks for:

- **Direct uploads**: Opening an old file and clicking "Save products"
- **Multi-user scenarios**: When others may have edited products
- **Long time periods**: The longer the file is saved, the more likely changes occurred
- **Critical data**: Product names, SKUs, categories, or other core attributes

## cobby's Status Indicators

cobby shows the data status with colors:

- **Green**: Data matches Magento (up to date)
- **Yellow**: You have unsaved changes
- **Red**: Data is outdated (changed in Magento or by another user)

**Important**: Saved workbooks don't show these indicators because they're disconnected from Magento.

## Best Practices

### Always Load Fresh Data

1. Open cobby
2. Click **Load products**
3. Apply any filters needed
4. Work with the fresh data

Don't reopen old saved files.

### Use Templates Instead

Rather than saving workbooks with data:
- **Save cobby templates** with formulas and settings
- **Load fresh products** each time
- **Apply the template** to current data

This ensures you're always working with up-to-date information.

### Document Your Process

If you must use saved data:
1. Document which columns come from the saved file
2. Note the date of the saved data
3. Verify no changes occurred in Magento for those products
4. Use formulas to selectively update

## Demo: Using cobby Offline

Watch this interactive demo to learn more about working with saved workbooks safely:

<Storylane src="https://app.storylane.io/share/zeknwim6dmrp" />

## Troubleshooting

**I accidentally overwrote changes**

1. Don't save products again
2. Load fresh products from Magento
3. Restore the correct values
4. Save products
5. Going forward, always load fresh data

**I need to work offline**

Use the reference data approach:
1. Save a workbook before going offline
2. Document what you change offline
3. When online, load fresh products
4. Use formulas to pull your offline changes
5. Save to Magento

**Can I use saved files for backup?**

Yes, saved files are good for:
- Backup/archive purposes
- Historical reference
- Analysis and reporting
- Template storage (without data)

But not for uploading back to Magento.

## Alternative: Export/Import Pattern

For complex updates:

1. **Export**: Load and save a cobby workbook (reference only)
2. **Transform**: Process data in another tool or file
3. **Import**: Load fresh products in cobby
4. **Apply**: Use formulas to bring in the transformed data
5. **Save**: Upload only the changed columns to Magento

## Summary

Do:
- Load fresh products before making changes
- Use saved files as reference data with formulas
- Work with cobby templates
- Check data status indicators

Don't:
- Open old saved workbooks and upload directly
- Assume saved data is still current
- Work offline without a safe update strategy
- Ignore yellow/red status indicators

## Related Topics

- **VLOOKUP**: Reference data from other files (coming soon)
- **INDEX-MATCH**: Flexible data lookups (coming soon)
- **Templates**: Save configurations without data (coming soon)
- **Status indicators**: Understanding cobby's color codes

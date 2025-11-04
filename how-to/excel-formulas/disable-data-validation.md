---
sidebar_position: 13
title: How to Disable Data Validation for Formulas
---

# How to Disable Data Validation for Formulas

Learn how to disable data validation so you can enter formulas in cells that normally only accept specific values.

## The Problem

Some cobby cells only accept certain values (like "In Stock" or "Out of Stock" for Availability). When you try to enter a formula, you get an error:

![](/img/disablling-data-validation-for-excel-cells/pic2.png)

## When to Use This

Disable data validation when you need to:
- Use formulas in restricted cells
- Calculate values dynamically
- Import data from other sources
- Apply custom logic to dropdown fields

## Step-by-Step: Disable Validation

### Step 1: Select the Cell

Click the cell where you want to enter a formula (e.g., Availability column).

![](/img/disablling-data-validation-for-excel-cells/pic1.png)

### Step 2: Open Data Validation

Go to the **Data** tab and click **Data Validation**.

![](/img/disablling-data-validation-for-excel-cells/pic3.png)

### Step 3: Disable Error Messages

In the Data Validation dialog:

1. Go to the **Error Alert** tab
2. **Uncheck** "Show error alert after invalid data is entered"
3. Click **OK**

Now you can enter formulas without getting error messages.

## Optional: Apply to All Similar Cells

If you want to disable validation for all cells with the same rules:

### Step 1: Open Settings Tab

In the Data Validation dialog, go to the **Settings** tab.

### Step 2: Apply to All

**Check** the box: "Apply these changes to all other cells with the same settings"

### Step 3: Confirm

Click **OK** to apply to all similar cells in the workbook.

## Example: Dynamic Availability

Set availability based on stock level:

```excel
=IF([@Stock]>0;"In Stock";"Out of Stock")
```

With validation disabled, this formula works and returns the correct dropdown value.

## Common Use Cases

### Calculate Visibility

```excel
=IF([@Price]>0;"Catalog, Search";"Not Visible Individually")
```

Sets visibility based on whether a price exists.

### Set Status

```excel
=IF([@Stock]>0;"Enabled";"Disabled")
```

Automatically enables/disables products based on stock.

### Tax Class

```excel
=IF([@Category]="Books";"Zero Rate";"Standard Rate")
```

Assigns tax class based on category.

### Conditional Dropdowns

```excel
=IF([@Type]="simple";[@[Simple Value]];[@[Configurable Value]])
```

Uses different values for different product types.

## What Data Validation Does

Data validation:
- Restricts input to specific values
- Shows dropdown lists
- Prevents typos and errors
- Ensures data consistency

**When disabled:**
- You can enter any value (including formulas)
- Dropdowns still appear and work
- No error messages for non-standard values
- More flexibility but less protection

## Re-enabling Data Validation

To restore validation:

### Step 1: Open Data Validation

Select the cell and go to **Data** > **Data Validation**.

### Step 2: Enable Error Alert

1. Go to the **Error Alert** tab
2. **Check** "Show error alert after invalid data is entered"
3. Set error style (Stop, Warning, or Information)
4. Click **OK**

## Tips

- **Disable only when needed**: Keep validation active for data quality
- **Document changes**: Note which cells have disabled validation
- **Test formulas**: Ensure formula results match allowed values
- **Use with IF**: Create formulas that return valid dropdown values
- **Apply to all**: Use "Apply to all" option to save time

## Troubleshooting

**Still getting error?**
- Make sure you unchecked "Show error alert"
- Click OK to save changes
- Try closing and reopening the data validation dialog

**Formula returns invalid value?**
- Even with validation disabled, cobby may reject invalid values when saving
- Ensure your formula returns values that Magento accepts
- Use dropdown values like "In Stock", "Enabled", etc.

**Can't find Data Validation?**
- Look in the **Data** ribbon tab
- Make sure the cell is selected
- Not all cells have validation

**Applied to wrong cells?**
- Undo with Ctrl+Z
- Reapply validation to restore original rules
- Be careful with "Apply to all" option

## Best Practices

### Return Valid Values

Even with validation disabled, return values that match the dropdown options:

**Good**:
```excel
=IF([@Stock]>0;"In Stock";"Out of Stock")
```

**Bad**:
```excel
=IF([@Stock]>0;"Available";"Not Available")
```

### Use Dropdown Values

Check what values the dropdown expects:
1. Click the cell without formulas
2. Open the dropdown
3. Note the exact values
4. Use these in your formulas

### Test Before Saving

1. Apply formula to a few products
2. Verify the results
3. Click "Save products"
4. Check in your store that values are correct

## Alternative: Paste Values

If you only need to disable validation temporarily:

1. Calculate values in a helper column
2. Copy the results
3. Paste as values into the validated column
4. Delete the helper column

This bypasses validation without disabling it.

## Related Topics

- **Formulas in cobby**: Enable formula calculations (coming soon)
- **Data validation**: Understanding Excel's validation feature
- **IF function**: Create conditional logic (coming soon)

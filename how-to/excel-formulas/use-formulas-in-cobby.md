---
sidebar_position: 1
title: How to Use Formulas in cobby
---

# How to Use Formulas in cobby

Learn how to enable and use Excel formulas in cobby workbooks for dynamic product data management.

## Important: Set Cell Format First

In cobby, all cells are formatted as **Text** by default. Formulas won't calculate in text-formatted cells.

**You must change the format to "Standard" before entering formulas.**

## Step-by-Step: Enable Formulas

### Step 1: Select the Cell

Click the cell where you want to enter a formula.

### Step 2: Open Format Cells

Right-click the cell and select **Format cells...**

![](/img/how-to-use-formulas-in-cobby/pic1.png)

### Step 3: Set to Standard

In the dialog:
1. Select **Standard** from the Category list
2. Click **OK**

![](/img/how-to-use-formulas-in-cobby/pic2.png)

## Example: Create Special Prices

This example shows how to automatically calculate a 10% discount for Christmas.

### Step 1: Format the Special Price Column

Set the Special Price cell format to Standard (as shown above).

### Step 2: Enter the Formula

In the formula bar, enter:

```excel
=ROUND([@Price]*0.9;4)
```

**What this does:**
- Takes the regular Price
- Multiplies by 0.9 (90% = 10% discount)
- Rounds to 4 decimal places

![](/img/how-to-use-formulas-in-cobby/pic3.png)

### Step 3: Apply to All Products

1. Copy the cell with the formula
2. Select all cells in the Special Price column
3. Paste

### Step 4: Save Products

Click **Save products** to transfer the special prices to your store.

**Note**: Magento automatically uses the Special Price when set. No additional configuration needed.

## Common Formula Examples

### Percentage Discount

```excel
=ROUND([@Price]*0.85;2)
```

15% discount, rounded to 2 decimals.

### Fixed Amount Off

```excel
=[@Price]-10
```

Subtract 10 from the price.

### Margin-Based Pricing

```excel
=ROUND([@Cost]*1.4;2)
```

40% markup on cost.

### Conditional Pricing

```excel
=IF([@Stock]>100;[@Price]*0.9;[@Price])
```

10% discount only if stock > 100.

### Copy from Another Column

```excel
=[@[Short Description]]
```

Copy short description to another field.

## Applying Formulas to Multiple Cells

### Method 1: Copy and Paste

1. Create formula in first cell
2. Copy the cell (Ctrl+C)
3. Select destination cells
4. Paste (Ctrl+V)

### Method 2: Double-Click Fill Handle

1. Create formula in first cell
2. Double-click the small square at bottom-right of cell
3. Formula applies to all cells below with data

### Method 3: Drag Fill Handle

1. Create formula in first cell
2. Click and drag the small square at bottom-right
3. Drag down to fill cells

## Working with cobby Columns

### Reference Current Row

Use the [@ColumnName] syntax:

```excel
=[@Price]*1.2
```

### Reference Other Rows

Standard Excel references work:

```excel
=A2*1.2
```

### Reference Other Sheets

```excel
=Sheet2![@Price]
```

## cobby-Specific Functions

### IFISEMPTY

Handles empty values better than standard IF:

```excel
=IFISEMPTY([@Cost];"")
```

Returns empty if Cost is empty (instead of 0).

## Tips

- **Always set format to Standard first**: This is the most common issue
- **Test on one cell**: Verify the formula works before applying to all
- **Use ROUND for prices**: Keep decimals consistent (2 or 4 places)
- **Save frequently**: Formula changes can affect many products
- **Check results**: Review a few products before saving to store

## Formula Best Practices

### Use Descriptive Formulas

```excel
' Good: Clear intent
=ROUND([@Cost]*1.4;2)

' Better: With IFISEMPTY
=IFISEMPTY([@Cost];"";ROUND([@Cost]*1.4;2))
```

### Handle Edge Cases

Always consider:
- Empty values (use IFISEMPTY)
- Zero values (use IF to check)
- Text in number fields (use VALUE)
- Errors (use IFERROR)

### Keep Formulas Simple

Break complex formulas into steps:

```excel
' Instead of one complex formula
=IF([@Type]="simple";ROUND(IF([@Stock]>100;[@Cost]*1.3;[@Cost]*1.5);2);"")

' Use multiple columns
' Column A: =IF([@Stock]>100;1.3;1.5)
' Column B: =ROUND([@Cost]*[@[Column A]];2)
```

## Troubleshooting

<details>
<summary>**Formula showing as text?**</summary>

- Cell format is still "Text"
- Change to "Standard": Right-click > Format Cells > Standard

</details>

<details>
<summary>**Getting 0 for empty cells?**</summary>

- Use IFISEMPTY instead of direct reference
- Example: `=IFISEMPTY([@Cost];"")`

</details>

<details>
<summary>**Formula not copying correctly?**</summary>

- Check if you're using absolute ($) references when needed
- Use [@ColumnName] for relative column references

</details>

<details>
<summary>**Changes not saving?**</summary>

- Formula cells turn yellow when changed
- Click "Save products" to transfer to store
- Check for errors before saving

</details>

<details>
<summary>**Getting #NAME! error?**</summary>

- Function name misspelled
- Column name doesn't exist
- Missing brackets around column name

</details>

## Performance Considerations

### Formula Recalculation

- Formulas recalculate when referenced cells change
- Large datasets with many formulas can slow down Excel
- Consider using "Ignore formula relations" in cobby Settings

### When to Use Formulas

**Good uses:**
- Dynamic pricing based on cost or margin
- Copying data between columns
- Building text from attributes
- Conditional values

**Alternative approaches:**
- One-time calculations: Calculate, then paste values
- External processing: Use Power Query or other tools
- Macros: For complex repetitive tasks


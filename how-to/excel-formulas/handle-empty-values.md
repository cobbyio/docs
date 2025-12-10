---
sidebar_position: 7
title: How to Handle Empty Values with IFISEMPTY
---

# How to Handle Empty Values with IFISEMPTY

Learn how to prevent unwanted zeros and handle empty cells properly using the IFISEMPTY function in cobby.

## The Problem

When you reference an empty cell in Excel, it typically displays as 0. This can cause issues when:
- Setting special prices (0 means free)
- Copying data from empty cells
- Building formulas that should remain blank
- Working with optional product attributes

## The Solution: IFISEMPTY

IFISEMPTY is a custom function available in cobby that checks if a value is empty and returns a specified value instead.

### Syntax

```excel
=IFISEMPTY(value; value_if_empty)
```

### Parameters

- **value**: The cell or value to check
- **value_if_empty**: What to return if the value is empty

## Why Use IFISEMPTY Instead of IF?

### Standard IF Approach (Not Recommended)

```excel
=IF(ISEMPTY(A1); ""; A1)
```

This works but requires two calculations, which slows down large workbooks.

### IFISEMPTY Approach (Recommended)

```excel
=IFISEMPTY(A1;"")
```

This performs only one calculation, significantly improving performance with large datasets.

## Step-by-Step: Set Special Prices from Cost Column

This example shows how to copy costs to special price without accidentally setting products to free.

### Step 1: Load Products

Load your product data into cobby.

### Step 2: Reference the Cost Column

In the Special Price column, enter:

```excel
=[@Cost]
```

**Problem**: Products without a cost value show 0 in Special Price, making them free.

### Step 3: Add IFISEMPTY

Replace the formula with:

```excel
=IFISEMPTY([@Cost];"")
```

**Result**:
- Products with costs: Special Price is set to the cost value
- Products without costs: Special Price remains empty (not 0)

### Step 4: Save Products

Click "Save products" to transfer the special prices to your store.

## Common Use Cases

### Copy Optional Attributes

```excel
=IFISEMPTY([@[Special Price]];"")
```

Copies the special price only if it exists, otherwise leaves it blank.

### Default Values

```excel
=IFISEMPTY([@[Meta Description]];[@[Short Description]])
```

Uses short description if meta description is empty.

### Conditional Calculations

```excel
=IFISEMPTY([@Cost];[@Price]*0.5;[@Cost]*1.2)
```

Uses cost markup if available, otherwise calculates from price.

## Benefits

### Performance

- Reduces calculation time in large workbooks
- Single calculation instead of double
- Faster product saves with many formulas

### Accuracy

- Prevents unwanted zeros
- Avoids accidentally setting prices to 0
- Maintains data integrity

### Simplicity

- Cleaner formula syntax
- Easier to read and maintain
- Less prone to errors

## Tips

- Always use IFISEMPTY when referencing optional attributes
- Test your formula on a few products before applying to all
- Use "" for empty text or 0 for empty numbers as needed
- Combine with other functions for complex logic

## Troubleshooting

<details>
<summary>**Still seeing zeros?**</summary>

- Check that you're using IFISEMPTY, not IF(ISEMPTY())
- Verify the cell format is set to "Standard"
- Make sure you have the latest cobby version

</details>

<details>
<summary>**Formula not recognized?**</summary>

- IFISEMPTY is a cobby-specific function
- It only works in cobby workbooks, not regular Excel files
- Use the fx button to browse available functions

</details>

## Related Functions

- **IF**: Standard conditional function (coming soon)
- **ISEMPTY**: Checks if a value is empty (returns TRUE/FALSE)
- **CONCATENATE**: Combine text values (coming soon)

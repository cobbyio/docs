---
sidebar_position: 11
title: How to Use INDEX-MATCH for Flexible Data Lookups
---

# How to Use INDEX-MATCH for Flexible Data Lookups

Learn how to use INDEX and MATCH functions together for more powerful and flexible data lookups than VLOOKUP.

## When to Use INDEX-MATCH

Use INDEX-MATCH instead of VLOOKUP when:
- The lookup column is not the first column
- You can't sort your source data
- You need to look up values to the left
- You want more flexibility in your formulas

## Why INDEX-MATCH is Better Than VLOOKUP

**VLOOKUP limitations:**
- Requires the search column to be first
- Must be sorted by search column
- Can only look to the right
- Harder to maintain when columns change

**INDEX-MATCH advantages:**
- Search any column in any position
- No sorting required
- Can look in any direction
- More flexible and maintainable

## Understanding the Functions

### INDEX Function

Returns a value from a specific position in a column or range.

```excel
=INDEX(matrix; row; [column])
```

![](/img/the-index(match)-formula/pic1.png)

### MATCH Function

Finds the position of a value in a range.

```excel
=MATCH(search_criterion; matrix; match_type)
```

![](/img/the-index(match)-formula/pic2.png)

## Combined Formula

```excel
=INDEX(column_to_return; MATCH(search_value; column_to_search; 0))
```

**In plain language:**
- Find the position of search_value in column_to_search
- Return the value at that position from column_to_return

## Step-by-Step: Assign Prices from Supplier List

This example shows the same task as the VLOOKUP tutorial, but with more flexibility.

### Step 1: Open Supplier List and Load Products

1. Open your supplier's Excel file
2. Switch to cobby
3. Click "Load products"

### Step 2: Start the INDEX Formula

Click on the Price column and enter in the formula bar:

```excel
=INDEX(
```

![](/img/the-index(match)-formula/pic3.png)

### Step 3: Select the Return Column

Switch to the supplier list and click the column header containing the prices:

```excel
=INDEX(SupplierSheet!C:C;
```

![](/img/the-index(match)-formula/pic4.png)

### Step 4: Add MATCH Function

Continue the formula with MATCH and select your search criterion (e.g., Model):

```excel
=INDEX(SupplierSheet!C:C;MATCH([@Model];
```

![](/img/the-index(match)-formula/pic5.png)

### Step 5: Select the Search Column

Switch to the supplier list and select the Model column:

```excel
=INDEX(SupplierSheet!C:C;MATCH([@Model];SupplierSheet!B:B;
```

![](/img/the-index(match)-formula/pic6.png)

### Step 6: Set Match Type to Exact

Add 0 for exact match and close the parentheses:

```excel
=INDEX(SupplierSheet!C:C;MATCH([@Model];SupplierSheet!B:B;0))
```

![](/img/the-index(match)-formula/pic7.png)

### Step 7: Apply to All Products

Double-click the small square at the bottom-right of the cell to apply the formula to the entire column.

![](/img/the-index(match)-formula/pic8.png)

## Common Use Cases

### Look Up by EAN

```excel
=INDEX(PriceColumn;MATCH([@EAN];EANColumn;0))
```

### Match Mixed Data Types

Use with VALUE or TEXT functions:

```excel
=INDEX(NameColumn;MATCH(VALUE([@[SKU]]);SupplierSKU;0))
```

### Multiple Lookups

```excel
' Get price
=INDEX(SupplierData!C:C;MATCH([@SKU];SupplierData!A:A;0))

' Get stock
=INDEX(SupplierData!D:D;MATCH([@SKU];SupplierData!A:A;0))

' Get description
=INDEX(SupplierData!E:E;MATCH([@SKU];SupplierData!A:A;0))
```

## Formula Breakdown

Let's understand each part:

```excel
=INDEX(column_from_which_we_want_to_return_a_value;
       MATCH(current_table[search_criterion];
             linked_table[search_criterion];
             0))
```

**Parameters:**
- **First INDEX parameter**: The column containing the data you want
- **First MATCH parameter**: The value you're searching for (from your cobby table)
- **Second MATCH parameter**: The column to search in (from supplier table)
- **Third MATCH parameter**: 0 = exact match

## Tips

- **No sorting required**: Unlike VLOOKUP, your data doesn't need to be sorted
- **Use whole columns**: Reference entire columns (C:C) for simplicity
- **0 means exact match**: Always use 0 for the match_type parameter
- **Column order doesn't matter**: Return and search columns can be in any order
- **More maintainable**: If columns are added/removed, formula still works

## Advanced Techniques

### Handle Missing Matches

```excel
=IFERROR(INDEX(PriceColumn;MATCH([@SKU];SupplierSKU;0));"Not Found")
```

### Two-Way Lookup (Like VLOOKUP and HLOOKUP Combined)

```excel
=INDEX(DataRange;MATCH(RowValue;RowRange;0);MATCH(ColValue;ColRange;0))
```

### Approximate Match (Sorted Data)

```excel
=INDEX(PriceColumn;MATCH([@Quantity];QuantityBreaks;1))
```

Use 1 instead of 0 for the largest value less than or equal to search value.

## Troubleshooting

<details>
<summary>**Getting #N/A error?**</summary>

- The search value wasn't found in the search column
- Check for exact match (extra spaces, different formats)
- Use TRIM to clean spaces: `MATCH(TRIM([@SKU]);...)`

</details>

<details>
<summary>**Getting #REF! error?**</summary>

- The matched position is outside the INDEX range
- Ensure both ranges have the same number of rows

</details>

<details>
<summary>**Getting #VALUE! error?**</summary>

- Data type mismatch (text vs numbers)
- Use VALUE or TEXT to convert formats (coming soon)

</details>

<details>
<summary>**Formula not calculating?**</summary>

- Set cell format to "Standard" instead of "Text"
- Right-click > Format Cells > Standard

</details>

## Performance Considerations

**Speed:**
- INDEX-MATCH is faster than VLOOKUP on large datasets
- Both functions recalculate when data changes
- Consider using absolute references to reduce calculations

**Best practices:**
- Reference only the columns you need, not entire sheets
- Use named ranges for clarity
- Combine with IFERROR for robust formulas

## INDEX-MATCH vs VLOOKUP

| Feature | VLOOKUP | INDEX-MATCH |
|---------|---------|-------------|
| Lookup direction | Right only | Any direction |
| Column position | Must be first | Any position |
| Sorting required | Yes | No |
| Speed | Slower | Faster |
| Flexibility | Limited | High |
| Maintenance | Harder | Easier |

## Related Functions

- **VLOOKUP**: Basic lookup function (coming soon)
- **VALUE/TEXT**: Convert data types (coming soon)
- **IFERROR**: Handle errors (coming soon)
- **XLOOKUP**: Modern Excel lookup (not available in older versions)

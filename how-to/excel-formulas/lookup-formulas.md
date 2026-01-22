---
sidebar_position: 10
title: How to Use VLOOKUP to Assign Data
---

# How to Use VLOOKUP (SVERWEIS) to Assign Data

Learn how to automatically assign data from supplier lists to your products using Excel's VLOOKUP function.

## When to Use This

Use VLOOKUP when you need to:
- Import prices from supplier updates
- Match data between two spreadsheets
- Assign values based on SKU, EAN, or Model
- Update product information from external sources

## Understanding VLOOKUP

VLOOKUP searches the first column of a table and returns a value from the same row in a different column.

### Syntax

```excel
=VLOOKUP(search_criterion; matrix; column_index; range_reference)
```

### Parameters

- **search_criterion**: The value to search for (e.g., SKU or EAN)
- **matrix**: The table range to search in
- **column_index**: Which column number to return data from
- **range_reference**: FALSE for exact match, TRUE for approximate match

## Step-by-Step: Assign Prices from Supplier List

This example shows how to update product prices from a supplier's Excel file.

### Step 1: Open Supplier List

Open the Excel file from your supplier that contains the updated prices.

![](/img/using-the-sverweis-to-assign-data/pic1.png)

### Step 2: Sort the Supplier List

VLOOKUP requires the data to be sorted by the first column.

1. Select the first row of the supplier data
2. Go to the **Data** ribbon
3. Click **Sort from A to Z**

![](/img/using-the-sverweis-to-assign-data/pic2.png)

### Step 3: Load Products in cobby

Switch to cobby and click "Load products" to load your product data.

![](/img/using-the-sverweis-to-assign-data/pic3.png)

### Step 4: Enter VLOOKUP Formula

1. Click on the Price column (or whichever column you want to update)
2. Set the cell format to **Standard** (right-click > Format Cells > Standard)
3. In the formula bar, start typing the VLOOKUP formula:

```excel
=VLOOKUP([@Model];
```

The search criterion is the Model column (or EAN, depending on your supplier data).

![](/img/using-the-sverweis-to-assign-data/pic4.png)

### Step 5: Select the Supplier Data Range

1. Switch to the supplier list worksheet
2. Select the entire data range including headers
3. This becomes your matrix parameter

![](/img/using-the-sverweis-to-assign-data/pic5.png)

### Step 6: Complete the Formula

Add the column index and range reference:

```excel
=VLOOKUP([@Model];SupplierSheet!$B$3:$D$7;3;FALSE)
```

- **3**: The price is in the 3rd column of the selected range
- **FALSE**: We want an exact match

![](/img/using-the-sverweis-to-assign-data/pic6.png)

### Step 7: Make Matrix Reference Absolute

Add dollar signs ($) before each cell reference in the matrix to make it absolute:

```excel
=VLOOKUP([@Model];SupplierSheet!$B$3:$D$7;3;FALSE)
```

This ensures the range doesn't change when you copy the formula down.

![](/img/using-the-sverweis-to-assign-data/pic7.png)

### Step 8: Apply to All Products

1. Copy the cell with the formula
2. Select the entire column
3. Paste the formula
4. Or double-click the small square at the bottom-right of the cell

### Step 9: Save Products

Click "Save products" in cobby to transfer the updated prices to your store.

## Common Use Cases

### Match by EAN

```excel
=VLOOKUP([@EAN];SupplierData!$A$2:$D$100;2;FALSE)
```

### Import Multiple Columns

Create separate VLOOKUP formulas for each column:

```excel
=VLOOKUP([@SKU];SupplierData!$A$2:$F$100;3;FALSE)  ' Price
=VLOOKUP([@SKU];SupplierData!$A$2:$F$100;4;FALSE)  ' Stock
=VLOOKUP([@SKU];SupplierData!$A$2:$F$100;5;FALSE)  ' Description
```

### Handle Missing Matches

Wrap in IFERROR to handle products not in supplier list:

```excel
=IFERROR(VLOOKUP([@Model];SupplierData!$A$2:$D$100;3;FALSE);"")
```

## Tips

- **Always use FALSE** for range_reference to find exact matches
- **Sort your data** by the first column of the matrix
- **Use absolute references** ($ signs) for the matrix range
- **Check column numbers** carefully (1 = first column, 2 = second, etc.)
- **Test with one cell** before applying to all products

## Troubleshooting

<details>
<summary>**Getting #N/A error?**</summary>

- The search value wasn't found in the first column
- Check that your search criterion matches exactly (no extra spaces)
- Verify the supplier list is sorted correctly

</details>

<details>
<summary>**Getting #REF! error?**</summary>

- The column_index is larger than the number of columns in your matrix
- Check that you're referencing the correct column number

</details>

<details>
<summary>**Wrong values returned?**</summary>

- The matrix may not be sorted correctly
- The column_index may be wrong
- Check that you're using FALSE for exact match

</details>

<details>
<summary>**Formula not calculating?**</summary>

- Set the cell format to "Standard" instead of "Text"
- Right-click > Format Cells > Category: Standard

</details>

## Advanced: Use INDEX-MATCH Instead

For more flexibility, consider using [INDEX-MATCH](/how-to/excel-formulas/index-match-formula) instead of VLOOKUP. INDEX-MATCH doesn't require sorted data and can look in any column direction.

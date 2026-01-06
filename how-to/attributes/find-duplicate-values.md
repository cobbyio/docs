---
sidebar_position: 6
title: How to Find Duplicate Values in a Column
---

# How to Find Duplicate Values in a Column

Identify duplicate values in any product attribute column using Excel's COUNTIF function.

## Why This Matters

Finding duplicates helps you:
- Identify products with duplicate EANs, SKUs, or other unique identifiers
- Clean up data quality issues
- Prevent order fulfillment errors
- Maintain data integrity

## Prerequisites

- cobby Excel add-in installed
- Products loaded in Excel
- Basic Excel formula knowledge

## When to Use This

Use this process when:
- Verifying uniqueness of EAN codes, SKUs, or model numbers
- Cleaning up imported data
- Auditing product data quality
- Investigating sync or order issues

---

## Steps

### Step 1: Create Helper Column

1. Right-click on the column header next to the column you want to check (e.g., EAN)
2. Select **Insert** from the context menu
3. Name the new column (e.g., "Duplicate Check")

### Step 2: Add COUNTIF Formula

1. Click on the first data cell in your new helper column
2. Set the cell format to **Standard** (not Text)
   - Right-click the cell → Format Cells → General
3. Enter the COUNTIF formula in the formula bar:

```excel
=COUNTIF([Column Range], [Search Criterion])
```

**Example for EAN column:**
```excel
=COUNTIF(D:D, D2)
```

Where:
- `D:D` is the entire EAN column
- `D2` is the current row's EAN value

![COUNTIF formula](/img/determine-doubled-values-in-a-column/pic1.png)

### Step 3: Make Range Absolute

Before copying the formula, make the range absolute using dollar signs:

```excel
=COUNTIF($D:$D, D2)
```

The `$` symbols ensure the column range stays fixed when copying the formula down.

### Step 4: Apply Formula to All Rows

1. Select the cell with the formula
2. Click and drag the fill handle (small square at bottom-right corner) down
3. Or double-click the fill handle to auto-fill to the last row with data

### Step 5: Interpret Results

The formula returns a count of how many times each value appears:

- **1** = Value is unique (no duplicates)
- **2** = Value appears twice (duplicate found)
- **3+** = Value appears three or more times

In the example, an EAN that appears twice will show "2" in both rows where it occurs.

---

## Advanced: Filter and Sort Duplicates

### Filter for Duplicates Only

1. Click on the helper column header
2. Click the filter dropdown arrow
3. Uncheck "1" to hide unique values
4. Click OK

Now you'll see only rows with duplicate values.

### Sort by Duplicate Count

1. Select any cell in your data
2. Go to **Data → Sort**
3. Sort by your helper column in descending order
4. Click OK

This groups all duplicates together, making them easier to review.

---

## Resolving Duplicates

Once you've identified duplicates, you have several options:

### Option 1: Correct Data Entry Errors

If duplicates are mistakes:
1. Verify which product has the correct value
2. Update the incorrect product(s) with unique values
3. Save products

### Option 2: Identify Duplicate Products

If you have true duplicate products:
1. Review both products to determine which to keep
2. Consider merging product data
3. Delete the duplicate product in Magento
4. Update any references (related products, etc.)

### Option 3: Generate New Unique Values

For missing or incorrect unique identifiers:
1. Generate new unique values (EANs, internal SKUs, etc.)
2. Update the affected products
3. Re-run the duplicate check to verify

---

## Alternative: Use Excel's Remove Duplicates

For a quick duplicate count without detailed analysis:

1. Select the column you want to check
2. Copy it to a new sheet
3. Go to **Data → Remove Duplicates**
4. Click OK

Excel will tell you how many duplicates were found and removed, giving you a quick count.

**Note:** This method removes duplicates but doesn't identify which products are affected. Use the COUNTIF method above for detailed analysis.

---

## Checking Multiple Columns

To find products that are duplicates based on multiple criteria (e.g., SKU AND Name):

### Method 1: Concatenated Column

1. Create a helper column that combines values:
```excel
=[@SKU]&"-"&[@Name]
```

2. Use COUNTIF on this combined column:
```excel
=COUNTIF($E:$E, E2)
```

### Method 2: COUNTIFS for Multiple Criteria

```excel
=COUNTIFS($A:$A, A2, $B:$B, B2)
```

This counts rows where both column A and column B match the current row.

---

## Troubleshooting

<details>
<summary>**Formula returns #VALUE! error**</summary>

Ensure the cell format is set to Standard or General, not Text. Also verify your column references are correct.

</details>

<details>
<summary>**All values show "1" even though duplicates exist**</summary>

Check that your formula range covers all rows. Use entire column reference (e.g., $D:$D) instead of a limited range.

</details>

<details>
<summary>**Formula slows down Excel significantly**</summary>

If you have many products, use a limited range instead of entire columns:
```excel
=COUNTIF($D$2:$D$10000, D2)
```

</details>

<details>
<summary>**Duplicates appear but values look different**</summary>

You may have invisible spaces or formatting differences. Use the TRIM function first:
```excel
=COUNTIF($D:$D, TRIM(D2))
```

</details>

---


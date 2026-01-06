---
sidebar_position: 2
title: How to Add Categories Based on Attribute Values
---

# How to Add Categories Based on Attribute Values

**Goal:** Automatically assign products to categories based on their attribute values (e.g., assign all products with a special price to a "Sale" category).

## Prerequisites

- Excel with cobby installed
- Products loaded in Excel
- Target category already exists in your store

## Steps

### 1. Create Helper Columns

1. Locate your **Categories** column in Excel
2. Insert two new columns to the right of the Categories column
3. Name the columns:
   - First column: "Current Categories"
   - Second column: "Conditional Category"

### 2. Preserve Current Categories

1. Select the entire **Categories** column
2. Copy all entries
3. Paste into the **Current Categories** helper column
4. This preserves existing category assignments

### 3. Create Conditional Formula

1. Click the first cell in the **Conditional Category** column
2. Create an IF formula to check your condition

**Example:** Add "Sale" category when Special Price is set:

```
=IF([@[Special Price]]>0;"|Root/Sale";"")
```

**Formula breakdown:**
- `[@[Special Price]]>0` - Checks if Special Price is greater than 0
- `"|Root/Sale"` - Category path to add if condition is TRUE
- `""` - Empty string if condition is FALSE

### 4. Find the Correct Category Path

To get the exact category path:

1. Manually assign the desired category to any test product
2. Click on that product's category cell
3. Copy the category value from the formula bar
4. Use this exact format in your formula

### 5. Apply Formula to All Products

1. Select the cell with your formula
2. Double-click the fill handle (small square at bottom-right of cell)
3. Or drag the fill handle down to apply to all rows
4. The formula will apply to all products in the table

### 6. Merge Categories

1. Click the first cell in the **Categories** column
2. Use the CONCATENATE function to merge both helper columns:

```
=CONCATENATE([@[Current Categories]];[@[Conditional Category]])
```

3. Change the cell format to **Standard** (not Text):
   - Select the cell
   - Go to **Home** tab
   - Set format dropdown to "Standard"

### 7. Apply and Save

1. Double-click the fill handle to apply the merge formula to all products
2. Verify categories appear correctly
3. Click **Save products** in cobby to sync to your store

## Examples

### Add Category Based on Manufacturer

```
=IF([@Manufacturer]="Nike";"|Root/Brands/Nike";"")
```

### Add Multiple Categories Based on Price Range

```
=IF([@Price]>100;"|Root/Premium";IF([@Price]<20;"|Root/Budget";""))
```

### Add Category Based on Stock Status

```
=IF([@Qty]<5;"|Root/Low Stock";"")
```

## Troubleshooting

<details>
<summary>**Categories not appearing after save**</summary>

- Verify category path format matches exactly (use formula bar method)
- Check that categories exist in your store
- Ensure cell format is "Standard" not "Text"

</details>

<details>
<summary>**Existing categories are lost**</summary>

- Make sure you copied current categories to helper column first
- Verify CONCATENATE formula references the correct helper column

</details>

<details>
<summary>**Formula shows as text**</summary>

- Change cell format from "Text" to "Standard"
- Re-enter the formula after changing format

</details>

<details>
<summary>**Condition not working as expected**</summary>

- Test your IF condition on a single product first
- Check attribute column names match exactly
- Verify data types (numbers vs text)

</details>

## Advanced Tips

**Multiple conditions:** Use nested IF or AND/OR functions:

```
=IF(AND([@[Special Price]]>0;[@Qty]>10);"|Root/Sale";"")
```

**Category combinations:** Add multiple categories:

```
=IF([@Brand]="Nike";"|Root/Brands/Nike|Root/Athletic";"")
```

**Remove categories:** Use empty string to skip assignment:

```
=IF([@Status]="Disabled";"";"")
```

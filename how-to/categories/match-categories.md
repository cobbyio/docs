---
sidebar_position: 1
title: How to Match Categories Between Systems
---

# How to Match Categories Between Systems

**Goal:** Create a category matching table to map old categories to new categories when migrating between stores or updating category structures.

## Prerequisites

- Excel with cobby installed
- Access to both old and new category structures
- Source data containing categories to be matched

## Steps

### 1. Prepare Your Category List

1. Open your source data and locate the categories you want to match
2. Select and copy all categories
3. Paste them into a new empty Excel sheet
4. Add two column headers:
   - First column: Name for old categories (e.g., "Old Categories")
   - Second column: Name for new categories (e.g., "New Categories")

![](/img/category-matching/pic1.png)

### 2. Convert to Excel Table

1. Select all rows and columns for your category data

![](/img/category-matching/pic2.png)

2. Navigate to **Home** tab and click **Format as Table**
3. Choose a table design

![](/img/category-matching/pic3.png)

4. In the dialog box that appears, verify the range and click **OK**

![](/img/category-matching/pic4.png)

### 3. Remove Duplicate Categories

1. Navigate to **Data** tab and click **Remove Duplicates**

![](/img/category-matching/pic5.png)

2. In the Remove Duplicates window, uncheck the empty second category column
3. Click **OK**

![](/img/category-matching/pic6.png)

4. A message box will confirm the number of duplicates removed

![](/img/category-matching/pic7.png)

### 4. Clean Up Empty Rows

If Excel leaves empty rows in the table:

1. Click **Data** and then click the **Sort A-Z** button to group empty rows together

![](/img/category-matching/pic8.png)

2. Select all empty rows
3. Right-click on the row number and click **Delete**

![](/img/category-matching/pic9.png)

![](/img/category-matching/pic10.png)

### 5. Load Products in cobby

1. In the same Excel workbook, click **Load products** to load your store products

![](/img/category-matching/pic11.png)

2. Select a product from the store view that matches your category structure
3. If unsure, select a product from "All StoreViews"

![](/img/category-matching/pic12.png)

### 6. Assign New Categories

1. Click on the **Images** column cell for your selected product
2. The cobby Task Pane will open on the right side

![](/img/category-matching/pic13.png)

3. For each row in your matching table:
   - Select the matching categories in the Task Pane
   - Copy the category cell
   - Navigate to your matching table
   - Paste into the "New Categories" column
   - Return to the product and select the category cell again
   - Delete the cell content
   - Repeat until all rows are filled

4. After completing all matches, select the category cell again
5. Click **Reset Product** to restore the original state

![](/img/category-matching/pic14.png)

### 7. Use the Matching Table with Formulas

Apply the matching table using the INDEX and MATCH formula:

```
=INDEX(CategoryMatchingTable[New Categories]; MATCH([Old Category]; CategoryMatchingTable[Old Categories]; 0))
```

Replace:
- `CategoryMatchingTable` with your table name
- `[New Categories]` with your new category column name
- `[Old Categories]` with your old category column name
- `[Old Category]` with the cell reference containing the old category

## Troubleshooting

<details>
<summary>**Empty rows remain after removing duplicates**</summary>

Manually select and delete empty rows using the steps in section 4

</details>

<details>
<summary>**Categories not appearing in Task Pane**</summary>

- Verify you selected a product from the correct store view
- Try selecting a product from "All StoreViews"

</details>

<details>
<summary>**Formula returns error**</summary>

- Verify table name matches your Excel table name
- Check that column names are spelled correctly
- Ensure the old category value exists in your matching table

</details>

## Next Steps

Once your matching table is complete, you can:
- Apply the formula to all products requiring category updates
- Use the matching table across multiple workbooks
- Update the table as your category structure evolves

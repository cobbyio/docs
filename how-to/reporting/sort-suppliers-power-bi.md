---
sidebar_position: 2
title: How to Sort and Transform Supplier Data with Power Query
---

# How to Sort and Transform Supplier Data with Power Query

Learn how to use Excel's Power Query to automatically sort and reformat supplier lists so columns match your cobby setup. This enables quick copy-and-paste imports without manual column rearrangement.

## Goal

Create a reusable Power Query transformation that automatically reformats supplier price lists to match your cobby column order, making imports faster and less error-prone.

## Prerequisites

- Excel with Power Query (Excel 2016 or later, or Excel 365)
- Supplier price list file
- Knowledge of your cobby column order

## What is Power Query?

Power Query is Excel's built-in data transformation tool that allows you to:
- Connect to external data sources
- Reorder, rename, and filter columns
- Apply transformations that refresh automatically when source data changes
- Save time on repetitive data preparation tasks

## Steps

### Step 1: Get Your Supplier List

Locate the supplier price list file you want to import into cobby.

![](/img/powerquery-cobby/picture-1.png)

### Step 2: Create and Name a New Excel File

1. Open a new Excel workbook
2. Save it with a descriptive name (e.g., **PQ_price_import.xlsx**)

This file will contain your Power Query connection and serve as your import preparation workspace.

### Step 3: Connect to the Supplier List

1. In your new Excel file, go to the **Data** tab
2. Click **Get Data** → **From File** → **From Workbook**
3. Browse and select your supplier list file

![](/img/powerquery-cobby/picture-2.png)

### Step 4: Transform the Data

After selecting the supplier list, the Navigator window opens:

1. Click on the table name in the Navigator
2. Click **Transform Data** (not "Load")

![](/img/powerquery-cobby/picture-3.png)

This opens the Power Query Editor where you'll configure the transformations.

### Step 5: Sort and Reorder Columns

In the Power Query Editor:

1. **Reorder columns** to match your cobby layout:
   - Drag column headers to rearrange them
   - Place columns in the exact order they appear in cobby

2. **Remove unnecessary columns:**
   - Right-click column headers you don't need
   - Select "Remove"

3. **Rename columns** if needed:
   - Double-click column header
   - Type the exact name used in cobby

**Important:** Column names and order must exactly match your cobby setup for copy-and-paste to work correctly.

![](/img/powerquery-cobby/picture-4.gif)

4. When finished, click **Close & Load**

![](/img/powerquery-cobby/picture-4.gif)

The transformed data appears as a table in your Excel workbook.

### Step 6: Refresh When Supplier Updates Data

When your supplier provides an updated price list:

1. Replace the old supplier file with the new one (keep the same filename and location)
2. Open your PQ_price_import.xlsx file
3. Go to **Data** tab → **Refresh All**

![](/img/powerquery-cobby/picture-5.png)

The Power Query automatically applies all your transformations to the new data. In the screenshot example, you can see the SKU has changed automatically.

### Step 7: Start Import Mode in cobby

Now you're ready to import into cobby:

1. Open Excel with cobby add-in
2. Go to **cobby** → **Load products**
3. Select **Start import mode**

**Important:** When creating new products, all mandatory fields (Website, SKU, plus any required attributes) must be filled in and visible.

![](/img/powerquery-cobby/picture-6.gif)

### Step 8: Transfer Values to cobby

1. In your PQ_price_import.xlsx file, **select and copy** the transformed data
2. Switch to your cobby workbook
3. **Paste** the values into the appropriate location

**Important:** Do NOT copy the "All Storeview" header row. This must be entered manually in cobby.

![](/img/powerquery-cobby/picture-7.png)

### Step 9: Save and Verify

1. Click **Save products** in cobby
2. Wait for the job log to show a **green checkmark**
3. A green checkmark indicates successful import

![](/img/powerquery-cobby/picture-6.gif)

## Advanced Power Query Transformations

Once you're comfortable with basic column reordering, try these advanced transformations:

### Filter Rows
Remove products that shouldn't be imported:
- Click column header drop-down
- Uncheck values to exclude

### Replace Values
Standardize data (e.g., replace "Y" with "Yes"):
- Right-click column → **Replace Values**
- Enter old value and new value

### Split Columns
Split combined data into separate columns:
- Right-click column → **Split Column** → **By Delimiter**

### Merge Columns
Combine data from multiple columns:
- Select columns → Right-click → **Merge Columns**

### Add Calculated Columns
Create new columns with formulas:
- **Add Column** tab → **Custom Column**
- Write formula using Power Query M language

### Handle Different File Formats
Power Query can connect to:
- CSV files
- Text files
- Excel files from different locations
- Online data sources
- Databases

## Example Use Case

**Scenario:** Your supplier sends weekly price updates with columns in this order:
- Product Code, Description, Price, Stock, EAN

Your cobby needs:
- SKU, Price, Quantity, EAN, Name

**Power Query Solution:**
1. Rename "Product Code" → "SKU"
2. Rename "Description" → "Name"
3. Rename "Stock" → "Quantity"
4. Reorder to: SKU, Price, Quantity, EAN, Name
5. Save and refresh weekly with one click

## Troubleshooting

<details>
<summary>**Navigator doesn't show table**</summary>

Make sure your supplier file has data formatted as an Excel table or named range.

</details>

<details>
<summary>**Columns not reordering**</summary>

Drag from the column header area, not the cells.

</details>

<details>
<summary>**Refresh doesn't update data**</summary>

Verify the supplier file is in the same location with the same name. If the path changed, edit the query: Data → Queries & Connections → Right-click query → Edit.

</details>

<details>
<summary>**Copy-paste to cobby fails**</summary>

Double-check that column order and names exactly match cobby's expected layout.

</details>

<details>
<summary>**"All Storeview" row disappears**</summary>

This is normal - you must manually add this row in cobby. Don't copy it from your Power Query file.

</details>

<details>
<summary>**Query takes too long to refresh**</summary>

Large files may take time. Consider filtering unnecessary rows in Power Query to reduce data size.

</details>

<details>
<summary>**Error messages in Power Query Editor**</summary>

Check that:
- Source file is not open in another program
- Source file is not corrupted
- Column data types are appropriate (text, number, date, etc.)

</details>

## Best Practices

1. **Keep source file location consistent** - Don't move or rename your supplier files, or update the connection if you do
2. **Test with sample data first** - Verify your transformations work correctly before processing full datasets
3. **Document your transformations** - Add comments in Power Query to explain what each step does
4. **Create separate queries for different suppliers** - If you work with multiple suppliers, create a dedicated Power Query file for each
5. **Backup your PQ files** - These files save you time; keep backups of your configured queries
6. **Use descriptive names** - Name queries and columns clearly so future you (or colleagues) understand the setup

## Benefits of Using Power Query

- **Save time:** What used to take 30 minutes of manual column sorting now takes seconds
- **Reduce errors:** Automated transformations eliminate manual copy-paste mistakes
- **Stay flexible:** Easy to adjust if supplier changes their format
- **Reusable:** Set up once, use repeatedly
- **Scalable:** Works with small lists and large datasets equally well

## Next Steps

- Set up Power Query transformations for all your regular suppliers
- Explore advanced Power Query features like merging data from multiple sources
- Create automated workflows that combine Power Query with cobby imports
- Share your PQ template files with team members for consistent data processing

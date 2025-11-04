---
sidebar_position: 1
title: How to Update Prices from Manufacturer Price Lists
---

# How to Update Prices from Manufacturer Price Lists

Learn how to quickly update your product prices when you receive new manufacturer price lists. This process becomes a routine task with the help of templates and can be completed in just a few minutes.

## Goal

Update your store prices based on new manufacturer pricing data as quickly and efficiently as possible.

## Prerequisites

- New manufacturer price list (in Excel format)
- Access to cobby and your product data
- Basic understanding of Excel formulas

## Steps

### 1. Open the Manufacturer Price Data in Excel

Open the newly received manufacturer price list in Excel.

### 2. Load Your Store's Manufacturer Data

Load only the manufacturer's store data into the same Excel workbook using cobby.

### 3. Add Helper Columns

Add three helper columns in the respective attribute set where prices should be updated (or in _All Products_ if updating across all attribute sets):

![](/img/price-update/pic1.png)

#### Helper Column 1: Manufacturer Price

This column retrieves the current manufacturer price from the new price list.

**Formula:** `=IFERROR(INDEX(new_prices[Manufacturer price];EVALUATION([@Manufacturer article number];new_prices[Manufacturer article number];0));"")`

#### Helper Column 2: Calculated Manufacturer Price (Optional)

Use this column if you have a standard markup rule. For example, if your prices are always 20% higher than the manufacturer price.

**Formula:** `=1.2*[@Manufacturer price]`

**Note:** If you don't have a consistent markup percentage, you can skip this column.

#### Helper Column 3: Price Update

This column identifies which prices need updating by comparing your current price with the calculated manufacturer price.

**Formula:** `=[@Price]\[@[Calculated manufacturer price]]`

### 4. Filter Products That Need Updates

1. Filter the "Price update" column by the value "True"
2. These filtered products require price updates
3. Update the prices as needed

After updating each product, the "Price update" column will show "False" for that product. When all products show "False", your price update is complete.

### 5. Save Products

Click "Save products" to finish the price update process and sync changes to your store.

## Optional: Create a Template

Since price updates are recurring tasks, save time by creating a reusable template:

1. Include only these columns:
   - website
   - SKU
   - manufacturer article number
   - price
   - your 3 helper columns

2. Hide unnecessary columns:
   - Move all other columns to the end (Shift + click multiple columns → right-click → "Cut")
   - Select the moved columns, right-click, and select "Hide"

3. Save the template:
   - Go to **Load products** dropdown
   - Select **Template**
   - Click **Save**

This template will be ready for your next price update.

## Troubleshooting

**Formula returns errors:** Make sure your manufacturer price list is formatted as an Excel table and named "new_prices".

**Prices not updating:** Verify that the "Manufacturer article number" column matches between your store data and the manufacturer price list.

**All products show "True":** Check that your markup formula in the "Calculated manufacturer price" column is correct.

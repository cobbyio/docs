---
sidebar_position: 1
title: How to Set Availability Based on Stock Level
---

# How to Set Availability Based on Stock Level

Automatically update product availability in Magento based on stock levels using Excel formulas. This solves the issue where Magento sets products to "out of stock" at 0 quantity but doesn't automatically restore them to "in stock" when restocked.

## Prerequisites

- Products loaded in cobby
- Stock level data loaded
- Basic Excel formula knowledge
- **Advanced Excel and cobby experience recommended**

## Understanding the Problem

Magento automatically sets availability to "out of stock" when stock reaches 0, but does not reverse this when stock is replenished. This requires manual updates to set products back to "in stock".

## Steps

### 1. Disable Data Validation

1. Select the "Availability" column in Excel.

2. Navigate to Data > Data Validation.

   ![](/img/determine-the-availability-in-magento-depending-on-the-stock-level/pic2.png)

3. Change the validation setting from "List" to "Any value".

   ![](/img/determine-the-availability-in-magento-depending-on-the-stock-level/pic3.png)

4. Click OK to save.

**Important**: This step removes Excel's protection that normally restricts the Availability field to only valid values. Only proceed if you are experienced with Excel and cobby.

### 2. Note Valid Values

The Availability field accepts only two values:
- "in stock"
- "out of stock"

### 3. Create the IF Formula

1. Click on the first cell in the Availability column (after the header).

2. Enter this formula: `=IF(VALUE([@stock])>0;"in stock";"out of stock")`

3. Ensure the cell formatting is set to "Standard" (not "List").

   ![](/img/determine-the-availability-in-magento-depending-on-the-stock-level/pic4.png)

### 4. Apply to All Products

1. Copy the formula down the entire Availability column.

2. Verify the formula results show correct availability for each product.

### 5. Save Changes

Click "Save products" to sync the availability changes to Magento.

## How the Formula Works

The formula `=IF(VALUE([@stock])>0;"in stock";"out of stock")` checks:
- If stock is greater than 0, set availability to "in stock"
- If stock is 0 or less, set availability to "out of stock"

The `VALUE()` function converts the stock text to a number for comparison.

## Advanced Options

### Set Minimum Stock Threshold

Modify the formula to require a minimum stock level before marking as "in stock":

`=IF(VALUE([@stock])>5;"in stock";"out of stock")`

This sets products to "in stock" only when stock exceeds 5 units.

### Handle Empty Stock Values

Add error handling for products without stock data:

`=IF(ISEMPTY([@stock]);"out of stock";IF(VALUE([@stock])>0;"in stock";"out of stock"))`

## Troubleshooting

<details>
<summary>**Formula Returns Error**</summary>

Ensure the stock column contains numeric values. Non-numeric values will cause the VALUE() function to fail.

</details>

<details>
<summary>**Changes Not Saved to Magento**</summary>

Verify you clicked "Save products" after applying the formula. The changes only sync to Magento after saving.

</details>

<details>
<summary>**Availability Not Updating in Formula**</summary>

Check that the cell formatting is "Standard" not "List". List formatting can prevent formulas from executing.

</details>

## Important Warning

Disabling data validation removes safeguards that prevent invalid data entry. Only use this technique if you:
- Understand Excel formulas
- Are experienced with cobby
- Can verify formula results before saving
- Know how to restore validation if needed

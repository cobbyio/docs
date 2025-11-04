---
sidebar_position: 2
title: How to Calculate Net Price from Gross Price
---

# How to Calculate Net Price from Gross Price

Learn how to calculate net prices from gross prices in Excel using a simple formula. This is useful when working with prices that include VAT and you need to determine the base price.

## Goal

Convert gross prices (including VAT) to net prices (excluding VAT) for accurate pricing calculations and reporting.

## Prerequisites

- Product data with gross prices loaded in cobby
- Basic understanding of Excel formulas
- VAT rate (this guide uses 19% as an example)

## Formula

The net price formula divides the gross price by 119 (representing 100% + 19% VAT) and multiplies by 100, rounded to 4 decimal places:

```excel
=ROUND([@Price]/119*100;4)
```

## Steps

### 1. Create a Net Price Column

Create a new column next to the price column and name it "Net price".

### 2. Set the Cell Format

Click on the first cell in the "Net price" column where you want to enter the formula.

**Important:** Set the cell format to "Standard" or "Number" so the formula calculates correctly (not "Text").

### 3. Enter the Formula

Using the formula bar, enter the formula:

```excel
=ROUND([@Price]/119*100;4)
```

### 4. Copy the Formula Down

Copy the formula to all cells in the column to calculate net prices for all products.

You will immediately see the corresponding net price for each gross price.

## Example

**Gross Price:** 119.00
**Net Price Calculation:** `=ROUND(119/119*100;4)` = **100.00**

**Gross Price:** 59.50
**Net Price Calculation:** `=ROUND(59.50/119*100;4)` = **50.00**

## Adjusting for Different VAT Rates

If your VAT rate is different from 19%, adjust the formula:

- **7% VAT:** `=ROUND([@Price]/107*100;4)`
- **10% VAT:** `=ROUND([@Price]/110*100;4)`
- **20% VAT:** `=ROUND([@Price]/120*100;4)`
- **25% VAT:** `=ROUND([@Price]/125*100;4)`

The formula is: `100 + VAT rate = divisor`

## Troubleshooting

**Formula shows as text:** Make sure the cell format is set to "Standard" or "Number", not "Text".

**Results are incorrect:** Verify that you're using the correct VAT rate for your region and that the original price column contains gross prices.

**Too many decimal places:** Adjust the second parameter in the ROUND function (4) to show fewer decimal places.

---
sidebar_position: 4
title: How to Perform Quality Checks with Formulas
---

# How to Perform Quality Checks with Formulas

Use Excel formulas in cobby to automatically check product data quality and identify missing or incomplete information before products go live.

## Prerequisites

- Products loaded in cobby
- Basic Excel formula knowledge
- Custom columns created in cobby

## Create Quality Check Columns

1. In cobby, create new columns for each quality check you want to perform.

2. Add formulas to these columns to validate product data.

3. Apply the formulas to the entire column to check all products.

4. Review the results to identify products with missing data.

## Common Quality Checks

### Check if Manufacturer is Listed

**Formula**: `=NOT(ISEMPTY([@Manufacturer]))`

Returns TRUE if manufacturer is filled, FALSE if empty.

### Check if Dimensions are Entered (Simple Products Only)

**Formula**: `=IF([@Type]="simple";NOT(ISEMPTY([@Dimensions]));"")`

Returns TRUE for simple products with dimensions, FALSE if missing, blank for other product types.

### Check if Required Number of Images Exist

**Formula**: `=(LEN([@Images])-LEN(SUBSTITUTE([@Images];"file";"")))/LEN("file")>=3`

Returns TRUE if at least 3 images are uploaded.

### Check if Image Attributes are Assigned

**Formula**: `=AND(IFERROR(FIND("image";[@Images]);0)>=1;IFERROR(FIND("small_image";[@Images]);0)>=1;IFERROR(FIND("thumbnail";[@Images]);0)>=1)`

Returns TRUE if all three image role attributes (image, small_image, thumbnail) are assigned.

### Check if Product has Required Categories

**Formula**: `=(LEN([@Categories])-LEN(SUBSTITUTE([@Categories]);"/";"")))/LEN("/")>=3`

Returns TRUE if product is assigned to at least 3 categories.

## Steps to Apply Quality Checks

1. Create a new column in cobby for your quality check.

2. Enter the appropriate formula in the first cell of the column.

3. Copy the formula down the entire column or use Excel's "Fill Down" feature.

4. Filter or sort by the quality check column to identify products that fail validation.

5. Fix the missing data in the identified products.

6. Re-run the quality check to verify corrections.

## Tips for Effective Quality Checks

### Build Progressive Checks
Start with basic checks (manufacturer, name) before moving to complex validations (image counts, category depth).

### Use Color Formatting
Apply conditional formatting to quality check columns to visually highlight failed checks in red and passed checks in green.

### Document Your Formulas
Add comments or create a reference sheet explaining what each quality check validates and the expected results.

### Automate Regular Reviews
Run quality checks before major catalog updates, seasonal launches, or regular intervals (weekly, monthly).

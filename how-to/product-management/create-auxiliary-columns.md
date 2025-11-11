---
sidebar_position: 9
title: How to Create Auxiliary Columns in cobby
description: Learn how to create and use auxiliary columns in cobby for temporary calculations, translations, and workflow organization without affecting product data.
---

import Storylane from '@site/src/components/Storylane';

# How to Create Auxiliary Columns in cobby

Learn how to create auxiliary columns for temporary calculations, translations, and data organization. Auxiliary columns exist only in Excel and don't affect product data sent to your shop.

## What are Auxiliary Columns?

Auxiliary columns are supplementary columns in cobby that help you organize workflows without modifying actual product data. They're perfect for:

- Storing translation texts before finalizing
- Creating temporary calculations with formulas
- Organizing notes and workflow data
- Quality control checks

**Key characteristics:**
- Always displayed with a **yellow background** in cobby
- Never synchronized to your shop system
- Disappear when Excel closes (unless saved in a preset)
- Support Excel formulas after disabling data validation

## Interactive Demo

See how to create and use auxiliary columns in this interactive walkthrough:

<Storylane id="dh9hbi37vlm6" title="Create Auxiliary Columns Demo" />

## Prerequisites

- cobby installed and connected to your shop
- Basic familiarity with Excel columns and cell operations
- A product workbook open in cobby

## Step-by-Step: Create an Auxiliary Column

### Step 1: Customize Your View

Hide unnecessary columns to focus on the data you need to edit.

1. Select columns you don't need
2. Right-click and choose **Hide**

This creates a cleaner workspace for your auxiliary column workflow.

### Step 2: Insert the Auxiliary Column

1. Right-click on the column letter where you want to insert the auxiliary column
2. Select **Insert cells** from the context menu

A new column appears with a yellow background, indicating it's an auxiliary column.

### Step 3: Rename the Column

Give your auxiliary column a descriptive name:

1. Click on the column header cell
2. Type a meaningful name (e.g., "New price", "Translation draft", "Price calculation")
3. Press Enter

**Tip**: Use clear names that indicate the column's purpose, especially when working with multiple auxiliary columns.

### Step 4: Reposition the Column (Optional)

Move your auxiliary column next to related data columns for better organization:

1. Select the auxiliary column by clicking its letter
2. Hold Shift and select any related columns you want to move together
3. Right-click and choose **Cut**
4. Right-click the target column letter where you want to insert
5. Select **Insert cut characters**

**Note**: Auxiliary columns always insert to the left of the selected column.

### Step 5: Enable Formulas (If Needed)

By default, auxiliary columns have data validation enabled. To use formulas:

1. Right-click the auxiliary column letter
2. Go to the **Data** tab in the ribbon
3. Click the **Data Validation** icon
4. Select **Delete all**
5. Click **Ok**

You can now enter Excel formulas in the auxiliary column.

### Step 6: Use the Auxiliary Column

Enter your calculations, translations, or temporary data:

**For formulas:**
```excel
=ROUND([@Price]*0.9,2)
```

**For translations:**
Just type text directly into cells.

**For notes:**
Add workflow comments or quality control flags.

### Step 7: Organize Your Workspace

Hide additional columns you don't need:

1. Select unwanted columns (click column letters while holding Ctrl)
2. Right-click
3. Choose **Hide**

This keeps your focus on the auxiliary column and relevant data.

## Verify Your Auxiliary Column Works

After creating your auxiliary column:

1. **Check the background**: Yellow background confirms it's auxiliary
2. **Enter test data**: Add sample data or formulas
3. **Save products**: Your auxiliary column data won't transfer to the shop
4. **Check shop data**: Verify that only regular columns synchronized

## Common Use Cases

### Price Calculations

Create an auxiliary column for new pricing formulas before committing to the actual price column:

```excel
=IF([@Stock]>100, [@Price]*0.9, [@Price])
```

Test your pricing logic, then copy results to the real Price column when ready.

### Translation Workflow

1. Create auxiliary columns for each language (e.g., "DE_translation", "FR_translation")
2. Paste translations from your translation service
3. Review and edit in the auxiliary columns
4. Copy finalized translations to actual attribute columns

### Data Quality Checks

Create formula-based validation columns:

```excel
=IF(LEN([@Description])<50, "Too short", "OK")
```

Review products with issues, then hide the auxiliary column when done.

### Temporary Calculations

Perform multi-step calculations using multiple auxiliary columns:

1. Column 1: `=[@Cost]*1.4` (calculate markup)
2. Column 2: `=ROUND([Column 1], 2)` (round result)
3. Copy final values to actual price column

## Persistence and Presets

**Important**: Auxiliary columns and their data disappear when you close Excel unless you save them in a preset.

### To preserve auxiliary columns:

1. Create your auxiliary column setup
2. Save the workbook as a preset
3. The preset includes auxiliary column definitions and positions
4. Load the preset in future sessions to restore your auxiliary columns

**Note**: Auxiliary column *data* is not saved in presets, only the column structure.

## Tips

- **Yellow = Auxiliary**: The yellow background is your visual indicator that data won't sync
- **Test formulas safely**: Use auxiliary columns to test complex formulas before applying to real columns
- **Translation staging**: Keep translations in auxiliary columns until reviewed
- **Clean workspace**: Hide unused columns to focus on auxiliary column workflows
- **Save presets**: Create presets for frequently used auxiliary column setups
- **No sync risk**: You can never accidentally sync auxiliary column data to your shop

## Troubleshooting

**Formulas showing as text?**
- Data validation is still enabled
- Follow Step 5 to remove data validation

**Column not yellow?**
- You may have inserted a regular column instead
- Auxiliary columns are automatically yellow when created via "Insert cells"

**Auxiliary column disappeared?**
- Auxiliary columns aren't saved between Excel sessions
- Save as a preset to preserve the column structure

**Can't move auxiliary column?**
- Use Cut and "Insert cut characters" method
- Regular copy/paste won't work for moving columns

## Related Topics

- [How to Use Formulas in cobby](/how-to/excel-formulas/use-formulas-in-cobby) - Learn formula basics
- [How to Disable Data Validation](/how-to/excel-formulas/disable-data-validation) - Enable formulas in protected columns
- [How to Show Hidden Columns](/how-to/product-management/show-hidden-columns) - Manage column visibility
- [How to Work with cobby Offline](/how-to/product-management/work-with-cobby-offline) - Work with saved workbooks offline

---
sidebar_position: 9
title: How to Manage Presets
description: Switch between presets, manage them in the web portal, delete unwanted presets, and transfer presets between workspaces
---

# How to Manage Presets

Manage your saved presets to keep your workspace organized and efficient. This guide covers switching between presets, using the web-based management interface, deleting presets you no longer need, and transferring presets between workspaces.

## Prerequisites

- At least one custom preset created and saved in cobby
- Basic understanding of what presets are and how they work
- Access to the cobby portal

:::tip
If you need to create your first custom preset, see [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views).
:::

## Switch Between Presets

Load a different preset to change your current column configuration and view.

1. Click the arrow on the **Load Products** button in the cobby Excel ribbon.

2. Navigate to **Presets** in the dropdown menu.

3. Select the preset you want to load from the list.

4. cobby reloads your products with the selected preset's configuration applied.

**Result**: Excel displays your products with the column arrangement, visibility settings, and help columns defined in the selected preset. Any active filters remain applied.

:::info
The reduced preset is loaded by default when you first open products in cobby. All your custom presets appear in the preset menu alongside the default and reduced presets.
:::

## Manage Presets in the Web Portal

Use the cobby portal's web-based interface to modify presets without working in Excel's spreadsheet view. This is especially helpful when dealing with many columns.

### Access the Preset Management Interface

1. Open your browser and navigate to the cobby portal.

2. Log in to your workspace.

3. Click **Presets** in the navigation menu.

4. Select the preset you want to edit from the list.

**Result**: The preset detail view opens, showing all columns in that preset with visibility indicators and ordering controls.

:::info
System presets (Default and Reduced) do not appear in the portal's preset management interface. Only your custom presets are displayed here.
:::

### Show or Hide Columns

Control which columns appear when the preset is loaded by toggling their visibility.

1. In the preset detail view, locate the column you want to show or hide.

2. Look for the circle icon next to the column name:
   - **White circle**: Column is currently hidden
   - **Blue circle with checkmark**: Column is currently visible

3. Click the circle to toggle the visibility state.

4. Repeat for any other columns you want to change.

5. Click **Save** or **Apply** to store your changes.

**Result**: The column visibility changes are saved in the preset. The next time you load this preset in Excel (after restarting Excel), the columns will appear or be hidden according to your settings.

:::tip
The web interface makes it easy to see all your columns at once without scrolling through wide Excel tables. Use this when you need to show or hide many columns quickly.
:::

### Reorder Columns

Change the sequence in which columns appear by dragging them to new positions.

1. In the preset detail view, locate the three-bar handle icon (≡) next to the column you want to move.

2. Click and hold the handle icon.

3. Drag the column to its new position in the list.

4. Release the mouse button to drop the column in place.

5. Repeat for any other columns you want to reorder.

6. Click **Save** or **Apply** to store your changes.

**Result**: The column order changes are saved in the preset. The next time you load this preset in Excel (after restarting Excel), the columns will appear in the new sequence.

### Sync Changes to Excel

Changes made in the cobby portal require Excel to be restarted before they take effect.

1. After making changes in the cobby portal, click **Save** or **Apply**.

2. Close Excel completely (not just the workbook, but the Excel application).

3. Reopen Excel and the cobby workbook.

4. Load the modified preset by clicking the arrow under **Load Products** > **Presets** > Select your preset.

**Result**: Your preset now displays with the changes you made in the cobby portal.

:::warning
Presets are stored in the cobby workspace (cloud), not in local Excel files. You must restart Excel and reload the preset to see changes made in the portal. Simply reloading products without restarting Excel will not apply the changes.
:::

## Delete Unwanted Presets

Remove custom presets you no longer need to keep your workspace organized.

1. Open the cobby portal in your browser.

2. Navigate to **Presets** in the menu.

3. Click **Manage** to access the preset management view.

4. Locate the preset you want to delete in the list.

5. Click the **X** button next to the preset name.

6. Confirm the deletion when prompted.

7. Click **Apply** to finalize the deletion.

**Result**: The preset is permanently removed from your cobby workspace. It no longer appears in the preset selection menu in Excel.

:::warning
Deleting a preset is permanent and cannot be undone. The preset configuration is removed, but your product data in Magento remains intact. Consider exporting the preset as a backup before deleting if you might need it later.
:::

:::info
You cannot delete the system presets (Default and Reduced). Only custom presets you've created can be deleted.
:::

## Export and Import Presets

Transfer presets between cobby workspaces, share them with team members, or create backups.

### Export a Preset

Create a portable file containing your preset configuration.

1. Open the cobby portal in your browser.

2. Navigate to **Presets** in the menu.

3. Select the preset you want to export from the list.

4. Click **Export** in the preset detail view.

5. Save the downloaded preset file to your computer.

**Result**: You now have a preset configuration file that can be imported into another cobby workspace or saved as a backup.

:::tip
Export presets regularly as backups before making significant changes. This allows you to restore previous configurations if needed.
:::

### Import a Preset

Add a preset from an exported file to your current workspace.

1. Open the cobby portal in your browser.

2. Navigate to **Presets** in the menu.

3. Click **Import** or **Upload** (the exact button label may vary).

4. Select the preset file from your computer.

5. Click **Upload** or **Import** to add the preset to your workspace.

**Result**: The imported preset appears in your preset list and can be loaded in Excel like any other custom preset.

:::info
Presets can be imported between workspaces connected to different Magento installations. However, if the target Magento installation is missing attributes that exist in the preset, those columns will not appear when the preset is loaded.
:::

**Common use cases for exporting and importing presets**:
- **Environment consistency**: Configure presets in staging, then import them to production
- **Team collaboration**: Share optimized presets with team members
- **Multi-store management**: Use the same preset configuration across multiple stores
- **Backup and recovery**: Export presets before making changes, allowing you to restore them if needed

## Create Product Templates with Presets

Save formulas in the first row of a preset to automatically populate data when creating new products.

1. Load an existing preset or create a new one by arranging columns as needed.

2. In the first row of the product table, enter formulas in the columns you want to auto-populate.

   **Example**: To automatically generate URL keys from product names:
   - In the URL Key column's first row, enter: `=LOWER(SUBSTITUTE(B2," ","-"))`
   - This converts the product name to lowercase and replaces spaces with hyphens

3. Test your formulas to ensure they work correctly.

4. Save the preset using **Load Products** > **Presets** > **Save**.

5. Give the preset a descriptive name (e.g., "New Product Template - Electronics").

**Result**: When you load this preset and add a new product row, the formulas in the first row can be quickly applied to new products by copying the formula down or using Excel's fill handle.

:::tip
Product creation presets work best when formulas reference other columns in the same row. This allows the formula to automatically adjust based on data you enter in other fields.
:::

:::warning
When creating presets for new products, ensure all mandatory Magento fields remain visible:
- SKU
- Product name
- Attribute set
- Product type
- Price
- Weight (if shipping is enabled)

Hiding these fields will cause Magento to reject the product import.
:::

## Related Documentation

**Conceptual Understanding**:
- [Understanding Presets](/explanation/features/presets) - Learn why presets improve workflows and their strategic value

**How-To Guides**:
- [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views) - Create your first preset with custom column arrangements
- [How to Create Auxiliary Columns in cobby](/how-to/product-management/create-auxiliary-columns) - Add help columns to presets for workflow guidance
- [How to Show Hidden Columns](/how-to/product-management/show-hidden-columns) - Temporarily reveal hidden columns without modifying the preset

**Reference Documentation**:
- [Presets Reference](/reference/features/presets) - Technical specifications, preset types, and components
- [Excel Toolbar Reference](/reference/features/excel-toolbar) - Complete toolbar documentation including Load Products button
- [Filtering Capabilities](/reference/features/filtering-capabilities) - Use filters with presets for targeted product selection

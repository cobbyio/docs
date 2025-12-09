---
sidebar_position: 8
title: How to Create Custom Product Views
description: Customize product views in Excel to focus on specific data areas and improve productivity
---

import Storylane from '@site/src/components/Storylane';

# How to Create Custom Product Views

Create customized product views in Excel that show only the data relevant to your workflow. This allows you to focus on specific product information, reduce scrolling, and improve productivity when managing products with cobby.

## Prerequisites

- Products loaded in cobby
- Basic familiarity with Excel column operations
- Understanding of cobby's filter and preset features

## Interactive Demo

Try it yourself with this interactive walkthrough:

<Storylane id="6fikhcoruux3" title="Create Custom Product View Demo" />

## Steps to Create a Custom View

### 1. Arrange Your Columns

Move the columns you need for your workflow to the front of the spreadsheet:

1. Right-click on a column header you want to include in your view.

2. Select **Cut** from the context menu.

3. Right-click on the column where you want to place the cut column (typically at the front of your data).

4. Select **Insert Cut Cells**.

5. Repeat this process for all columns you need in your custom view.

### 2. Hide Unnecessary Columns

Remove visual clutter by hiding columns you don't need:

1. Select multiple columns to hide by clicking the first column header, then holding Ctrl and clicking additional column headers.

2. Right-click on any selected column header.

3. Select **Hide** from the context menu.

:::tip
Hidden columns remain in the spreadsheet and can be unhidden later. Your data stays intact and accessible.
:::

### 3. Apply Product Filters

Narrow down which products appear in your view:

1. Click the arrow under the **Load Products** button in the cobby ribbon.

2. Select **Filter** from the dropdown menu.

3. Choose the attribute you want to filter by (for example, "Manufacturer").

4. Select the specific values to display (for example, "CobbyCraft").

5. Click **Apply** or **OK** to activate the filter.

### 4. Save Your Custom View

Preserve your customized layout as a preset for future use:

1. Click the arrow under the **Load products** button in the cobby ribbon.

2. Navigate to **Presets** in the dropdown menu.

3. Select **Save**.

4. Enter a descriptive name for your preset (for example, "CobbyCraft Products - Basic Info").

5. Click **Save** or **OK** to store the preset.

## Using Your Saved View

Access your custom view anytime by:

1. Clicking the arrow under **Load products**.
2. Selecting **Presets**.
3. Choosing your saved preset from the list.

cobby will automatically load products with your custom column arrangement and filters applied.

## Benefits

Custom product views help you:

- **Focus on relevant data**: See only the information you need for specific tasks
- **Increase productivity**: Spend less time scrolling through unnecessary columns
- **Standardize workflows**: Share presets with team members for consistent data views
- **Reduce errors**: Minimize confusion by hiding irrelevant information

## Related Topics

- [Reference: Filters](/reference/features/filtering-capabilities) - Complete filter options and advanced filtering
- [How to Use Autofilter](/how-to/excel-formulas/use-autofilter) - Excel's built-in filtering capabilities

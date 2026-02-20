---
title: Excel Toolbar
description: Complete reference documentation for all cobby Excel toolbar elements, buttons, and functions.
---

import Storylane from '@site/src/components/Storylane';

# Excel Toolbar

The cobby Excel toolbar provides the primary interface for managing product data synchronization between Excel and your e-commerce platform. The toolbar consists of 12 distinct elements, each serving specific data management functions.

## Interactive Demo
---

<Storylane id="um3edarr12li" title="cobby Excel Toolbar Interactive Demo" />

## Toolbar Overview
---

![cobby Excel Toolbar](/img/excel-toolbar/toolbar-overview.jpg)

## Toolbar Elements
---

<details>
<summary><strong>1. Job Log</strong></summary>

**Type:** Status Display Panel

**Function:** Displays real-time status updates during save operations.

**Behavior:**
- Shows current state of data synchronization
- Updates dynamically as modifications are committed
- Reflects job progress and completion status

As soon as you have saved, the "Job Log" function will also change here, depending on the status of your changes.

</details>

<details>
<summary><strong>2. Load Products</strong></summary>

**Type:** Data Import Button

**Function:** Downloads product data from the connected shop into Excel spreadsheets.

With "Load Products," you can download all your product data from your shop into Excel so that you can edit it there.

**Available Options:**

**2.1 Filter:** To load only selected products, e.g., those from a specific manufacturer or a specific SKU, you can filter them beforehand. Learn more about the [Filter](/reference/features/filtering-capabilities).

**2.2 Preset:** In this selection, you can see presets you've created. A preset is an Excel view that you can create and save yourself.

**2.3 Start Import Mode:** With the import mode, you can import product data in various ways.

**Data Flow:** Shop → Excel

</details>

<details>
<summary><strong>3. Save Products</strong></summary>

**Type:** Data Export Button

**Function:** Commits Excel modifications directly to the shop database.

With "Save products," you save your changes. With one click, your changes from Excel are in the shop.

**Behavior:**
- Single-click operation
- Batch processing of all pending changes
- Triggers validation before commit

**Data Flow:** Excel → Shop

</details>

<details>
<summary><strong>4. Reset Product</strong></summary>

**Type:** Revert Function

**Function:** Reverts recent modifications to original values.

With "Reset product," you revert the changes you just made.

**Available Options:**

**4.1 Reset Product:** Undoes all changes to selected product(s)

**4.2 Set Default Value:** If you want to reset a value of a store view to the default value, you can easily do this with a click on "Set Default Value". See [How to Reset Store View Values to Defaults](/how-to/product-management/reset-storeview-defaults) for step-by-step instructions.

**Scope:** Operates on selected rows/products

</details>

<details>
<summary><strong>5. Switch Sheet</strong></summary>

**Type:** Navigation Function

**Function:** Navigates to the corresponding attribute set spreadsheet for the currently selected product.

"Switch sheet" allows you to jump to the attribute set spreadsheet, depending on which product you are in.

**Behavior:**
- Context-sensitive based on product selection
- Direct navigation to relevant attribute set sheet
- Single-click operation

**Use Case:** Quick access to attribute set data matching selected product type

</details>

<details>
<summary><strong>6. Show Changes</strong></summary>

**Type:** Change Tracking Display

**Function:** Displays visual summary of all modifications made in the current session.

With "Show changes," your changes will be displayed to you.

**Output:**
- Lists modified fields
- Shows original vs. new values
- Highlights pending changes awaiting save

**Visibility:** Read-only display

</details>

<details>
<summary><strong>7. Open Admin Panel</strong></summary>

**Type:** External Navigation

**Function:** Provides direct access to the Magento backend administration interface.

With "Open Admin Panel," you can access your Magento backend with a single click.

**Available Options:**

**7.1 Open Admin Panel:** Opens Magento backend

**7.2 Open Storefront:** Here you can access your Magento frontend.

**Behavior:** Opens in default web browser

**Authentication:** Uses configured shop credentials

</details>

<details>
<summary><strong>8. Tools</strong></summary>

**Type:** Utility Menu

**Function:** Provides access to data manipulation utilities.

**Sub-functions:**

**8.1 Copy Product:** With "Copy product," you can duplicate existing products. Great for creating new products.

**8.2 Copy Selection for Filter:** With this function, you can copy a large amount of data from your table, which you can then paste into the filter. Here, we have taken advantage of Excel's powerful filter function. Learn more about the [Filter](/reference/features/filtering-capabilities).

**8.3 Convert Text to HTML:** With this, you can convert text into HTML code at the push of a button.

**Target:** Selected data or filtered dataset

</details>

<details>
<summary><strong>9. Split Attribute Sets</strong></summary>

**Type:** Data Organization Function

**Function:** Enables faster editing of external product lists with direct attribute set assignment.

This powerful function allows you to edit external lists faster, directly assign them to the respective attribute sets, and much more.

**Behavior:**
- Separates products by attribute set
- Creates attribute set-specific worksheets
- Facilitates bulk assignment of attribute sets
- Enables efficient processing of mixed attribute set data

**Use Case:** Importing external data with mixed attribute sets

</details>

<details>
<summary><strong>10. Feedback</strong></summary>

**Type:** Communication Channel

**Function:** Allows submission of suggestions or comments to the cobby development team.

Feel free to send us feedback via this button (which is always appreciated)!

**Behavior:** Opens feedback submission interface

**Data Transmission:** Sends to cobby support system

</details>

<details>
<summary><strong>11. Settings</strong></summary>

**Type:** Configuration Panel

**Function:** Manages license configuration and multi-license support.

In the settings, if you want to work with two licenses (e.g., a live shop and a test shop), you can change the license number here.

**Capabilities:**
- License key management
- Multiple shop connections
- Simultaneous license handling
- Connection configuration

**Access Level:** Administrative

</details>

<details>
<summary><strong>12. cobby Task Pane</strong></summary>

**Type:** Advanced Editing Panel

**Function:** Provides specialized editing interfaces for complex data types.

The cobby Task Pane offers many more editing options when you edit categories or images, for example.

**Supported Data Types:**
- Category assignments and hierarchy
- Image management and ordering
- Multi-select and complex attributes

**Display:** Side panel interface

**Interaction:** Context-sensitive based on selected cell/column

**See also:** Learn more about the [Task Pane](/reference/features/taskpane).

</details>


---
title: Presets
description: Technical reference for cobby preset types, features, operations, and specifications
---

# Presets

Presets are saved configurations in cobby that define which product attributes are visible in Excel, their display order, and additional helper columns. Each preset represents a customized view of your Magento product data that can be loaded, modified, and reused for specific workflows.

:::info
For conceptual understanding of how presets improve your workflow, see [Understanding Presets](/explanation/features/presets).
:::

## Preset Types

cobby provides two built-in presets and allows you to create unlimited custom presets for your specific workflows.

### 📋 Default Preset

The default preset is a predefined, system-provided preset with the following characteristics:

- **Visibility**: Displays all attributes without filtering
- **Attribute scope**: Includes all Magento system attributes and all custom attributes
- **Population status**: Shows both populated and unpopulated attributes
- **Modification**: Cannot be deleted or renamed
- **Portal visibility**: Not displayed in the cobby portal preset management interface
- **Use case**: Required when adding new attributes or accessing previously unused attributes in your Magento installation

### ⚡ Reduced Preset

The reduced preset is a predefined, system-provided preset with the following characteristics:

- **Visibility**: Displays only attributes that contain data in at least one product
- **Attribute scope**: Includes all Magento system attributes and only populated custom attributes
- **Default selection**: Selected automatically when loading products in cobby Excel
- **Modification**: Cannot be deleted or renamed
- **Portal visibility**: Not displayed in the cobby portal preset management interface
- **Performance**: Faster loading and recalculation compared to default preset due to fewer columns
- **Limitation**: Does not display custom attributes that have no values in any product in your catalog

### 🎨 Custom Presets

Custom presets are user-created presets with the following characteristics:

- **Creation method**: Created by modifying a default or reduced preset in cobby Excel and saving with a unique name
- **Modification**: Can be overwritten, renamed, or deleted via cobby portal or Excel
- **Portal visibility**: Displayed in the cobby portal preset management interface
- **Composition**: Can contain column visibility settings, column ordering, help columns, and pre-filled formulas
- **Scope**: Can be configured globally for all attribute sets or per individual attribute set in your Magento installation
- **Inheritance**: Can be created by loading an existing preset, modifying it, and saving under a new name
- **Portability**: Can be exported and imported between cobby workspaces

---

## Preset Components

Each cobby preset can contain multiple configuration elements that together define your custom view.

### Column Visibility Settings

Each preset stores a visibility state for every attribute column in your Magento product data:

- **Visible**: Column is displayed when preset is loaded
- **Hidden**: Column is not displayed when preset is loaded
- **Toggle mechanism**: Visibility can be changed via cobby portal (web-based) or Excel interface

:::tip
Learn how to manage column visibility: [How to Show Hidden Columns](/how-to/product-management/show-hidden-columns)
:::

### Column Ordering

Presets store the sequence in which columns appear in cobby Excel:

- **Persistence**: Column order is saved with the preset
- **Modification**: Order can be changed via drag-and-drop in cobby portal or cut-paste in Excel
- **Independence**: Each preset maintains its own column order independently
- **Flexibility**: Arrange columns to match your workflow (e.g., group pricing columns together)

### Help Columns

Help columns (also called auxiliary columns) are supplementary columns added to cobby presets that do not correspond to Magento product attributes:

- **Data persistence**: Exist only in the preset and loaded Excel workbook; not saved to Magento
- **Visual distinction**: Column headers are highlighted in **yellow** color in cobby Excel
- **Content types**: Can contain text, formulas, or data validation rules
- **Purpose**: Used for workflow instructions, intermediate calculations, or task guidance
- **Formula behavior**: Formulas in help columns are not automatically applied to all rows
- **Preset storage**: Saved within the preset and reappear when preset is loaded

:::info
Detailed guide: [How to Create Auxiliary Columns in cobby](/how-to/product-management/create-auxiliary-columns)
:::

#### Help Column Formula Application

For existing products:

1. Formulas must be created in the first row of the table
2. Formula extension to all products requires double-clicking the fill handle (lower-right corner of cell)
3. Cursor displays as ➕ when positioned correctly on the fill handle

#### Help Column Data Validation

When a help column is created:

- **Type inheritance**: Column type is copied from the immediately adjacent column to the right
- **Validation copying**: Data validation rules from the adjacent column are copied to the help column
- **Deactivation methods**:
  1. Manually disable data validation for the help column after creation
  2. Change Excel settings: File > Options > Advanced > Uncheck "Expand data range formats and formulas"

---

## Preset Operations

All preset operations in cobby are performed through the Excel toolbar or the cobby portal interface.

### 📥 Loading Presets

**Function**: Applies a saved preset configuration to the current cobby Excel workbook

**Interface location**: Load Products button in cobby Excel toolbar (lower section provides preset selection menu)

**Behavior**:
- Reloads all products from Magento with the selected preset configuration
- Replaces current column visibility and ordering with preset settings
- Applies help columns if present in preset
- Maintains any active [filters](/reference/features/filtering-capabilities)

**Syntax**: Click lower portion of Load Products button, select preset from menu

:::tip
Learn more about the toolbar: [Excel Toolbar Reference](/reference/features/excel-toolbar)
:::

### 💾 Saving Presets

**Function**: Stores current column configuration as a named preset in cobby

**Interface location**: Load Products button > Preset menu > Save option in cobby Excel

**Requirements**:
- Preset name must be unique within the cobby workspace
- Preset name cannot match system preset names (Default, Reduced)

**Behavior**:
- Captures current column visibility settings
- Captures current column order
- Captures help columns with their formulas and formatting
- Stores configuration in cobby workspace (synced to cobby portal)

**Syntax**: Load Products button (lower section) > Preset > Save > Enter name > Confirm

### ✏️ Modifying Presets

**Function**: Updates an existing preset with new configuration

**Methods**:
1. **Overwrite in Excel**: Load preset, make changes, save with same name
2. **Web-based editing**: Modify via cobby portal preset management interface

**Behavior**:
- Replaces existing preset configuration
- Preserves preset name
- Requires Excel restart for portal changes to take effect

**Excel-Portal Sync**: Changes made in cobby portal require Excel restart to apply

### 🗑️ Deleting Presets

**Function**: Removes a custom preset from the cobby workspace

**Interface location**: cobby portal > Presets > Manage menu

**Requirements**:
- Only custom presets can be deleted
- System presets (Default, Reduced) cannot be deleted

**Behavior**:
- Removes preset from cobby workspace
- Action is permanent and requires confirmation
- Does not affect products or data in Magento, only the preset configuration

**Syntax**: Navigate to Manage > Click X next to preset name > Confirm deletion with Apply

### 📤 Exporting Presets

**Function**: Creates a portable file containing preset configuration for backup or transfer

**Process**:
1. Navigate to cobby portal > Presets
2. Select preset to export
3. Click Export in preset detail view
4. Download generated preset file

**Output**: Preset configuration file (format proprietary to cobby)

**Use cases**:
- Backup of preset configurations
- Sharing presets between team members
- Transferring presets between cobby workspaces (e.g., staging to production)

### 📥 Importing Presets

**Function**: Adds a preset from an exported file to the current cobby workspace

**Process**:
1. Navigate to cobby portal > Presets in target workspace
2. Upload preset file(s)

**Behavior**:
- Adds preset to cobby workspace
- Preset appears in preset selection menu in Excel
- Imported preset can be loaded, modified, or deleted like any custom preset

**Requirements**: Preset file must be in valid cobby preset format

**Cross-Installation Compatibility**: Presets can be imported between workspaces connected to different Magento installations (column availability may vary based on attributes)

---

## Preset Management Interface

cobby provides a web-based interface in the cobby portal for managing presets, eliminating the need to work within Excel's spreadsheet interface.

### Web-Based Portal

**Location**: cobby portal > Presets menu item

**Visibility**: Displays only custom presets; system presets (Default, Reduced) are not shown

**Synchronization**: Changes made in portal require Excel restart to take effect

**Advantages**: Easier column management compared to scrolling through wide Excel tables

### Column Visibility Controls

**Visual indicators**:
- **⚪ White circle**: Column is currently hidden in the preset
- **🔵 Blue circle with checkmark**: Column is currently visible in the preset

**Interaction**: Click circle to toggle visibility state

**Behavior**: Toggle is immediate in cobby portal; requires preset reload in Excel to apply

### Column Ordering Controls

**Visual element**: Three-bar handle icon (≡) next to visibility indicator

**Interaction**: Click and drag handle to reposition column

**Behavior**: Drag-and-drop reorders columns; order saved immediately in cobby portal; requires preset reload in Excel to apply

### Portal-Excel Synchronization

**Direction**: Changes flow from cobby portal to Excel

**Timing**:
- Portal changes are saved immediately in cobby
- Excel must be restarted to detect changes
- Preset must be reloaded to apply changes

**Workflow**:
1. Make changes in cobby portal
2. Save changes in portal
3. Restart Excel application
4. Load preset in cobby Excel to see applied changes

**Important**: Presets are stored in the cobby workspace (cloud), not in local Excel files

---

## Preset Scope

cobby presets can be configured to apply globally or vary per Magento attribute set.

### Global Scope (All Products)

**Definition**: Preset configuration applies identically to all attribute set sheets in cobby Excel

**Configuration**: Modifications made to "All Products" sheet or without attribute set selection

**Behavior**: All attribute sets in your Magento installation inherit the same column visibility and ordering

**Attribute Visibility in All Products**: The "All Products" view displays only attributes that exist in **all** attribute sets. If an attribute is missing from even one attribute set, it will not appear in the "All Products" view.

**Use case**: Simple product catalogs or when all product types need the same view

:::info
**Important**: When working in the "All Products" sheet, you will only see the common attributes shared across all your Magento attribute sets. So if an attribute is missing in one attribute set, it will not appear in "All Products". To view attributes specific to a particular attribute set, switch to that attribute set's individual sheet.
:::

### Per-Attribute-Set Scope

**Definition**: Preset configuration varies by Magento attribute set

**Configuration**: Modifications made to individual attribute set sheets in cobby Excel

**Behavior**: Each attribute set can have different column visibility and ordering within the same preset

**Independence**: Changes to one attribute set's configuration do not affect other attribute sets

**Attribute Visibility**: Each attribute set sheet displays all attributes assigned to that specific attribute set in Magento, including attributes unique to that set

**Use case**: Complex catalogs where different product types (e.g., apparel vs. electronics) require different column configurations

## Technical Constraints

### Mandatory Fields for Product Creation

When a preset is used for creating new products in cobby, the following Magento-required fields must remain visible:

- **SKU** (unique product identifier)
- **Product name**
- **Attribute set** (product template)
- **Product type** (simple, configurable, etc.)
- **Price** (required for most product types)
- **Weight** (required if shipping is enabled in Magento)

**Behavior**: Hiding mandatory fields in product creation presets causes Magento to reject product import

**Recommendation**: Create separate presets for product creation (with mandatory fields visible) and product editing (where mandatory fields can be hidden if not being modified)

### Performance Characteristics

**Column count impact on cobby Excel**:
- **Fewer columns**: Faster Excel loading and recalculation
- **More columns**: Slower Excel loading and recalculation

**Magnitude**: For large Magento catalogs (10,000+ products), difference can be substantial (seconds versus minutes)

**Optimization strategy**: Create narrowly focused presets for routine tasks to minimize column count

**Best practice**: Use the Reduced preset as starting point to exclude empty attributes

### Excel Workbook Behavior

**Preset persistence**: Presets exist in cobby workspace (cloud), not in local Excel workbooks

**Workbook independence**: Excel workbook does not store preset information

**Loading requirement**: Preset must be explicitly loaded each time you open cobby Excel

**Synchronization**: Presets are synced across all devices where cobby is installed with the same workspace

---

## Related Documentation

**Understanding Presets**:
- [Understanding Presets](/explanation/features/presets) - Conceptual guide explaining why and how presets improve workflows

**How-To Guides**:
- [How to Create Auxiliary Columns in cobby](/how-to/product-management/create-auxiliary-columns) - Step-by-step guide for help columns
- [How to Show Hidden Columns](/how-to/product-management/show-hidden-columns) - Managing column visibility

**Related Features**:
- [Excel Toolbar Reference](/reference/features/excel-toolbar) - Complete toolbar documentation including Load Products button
- [Filtering Capabilities](/reference/features/filtering-capabilities) - Using filters with presets for targeted product selection

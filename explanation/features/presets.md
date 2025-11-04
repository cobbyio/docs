---
sidebar_position: 3
title: Presets
---

# Understanding Presets

Presets are one of cobby's most powerful features for customizing your product management workflow. They transform the Excel interface from a generic data grid into a personalized workspace tailored to your specific tasks. Understanding how presets work helps you leverage them for maximum efficiency.

## What Presets Really Are

At their core, presets are saved views of your product data. But they're more than just visual preferences—they're workflow templates that encapsulate:

- **Column visibility**: Which attributes to show or hide
- **Column order**: How to arrange data for your workflow
- **Column customizations**: Help columns with formulas or guidance
- **Product templates**: Pre-filled formulas for creating new products

Think of presets as different "modes" for Excel—each optimized for a specific task or role.

## The Built-In Presets

cobby provides two foundational presets that serve different purposes:

### Default Preset

The default preset shows everything—every attribute that exists in your Magento installation, including:
- All Magento system attributes
- All custom attributes you've created
- Both populated and empty attributes

**When to use it**: When you need complete visibility into all available attributes, especially when adding new attributes or exploring what's available.

**The tradeoff**: Completeness comes at the cost of performance and clarity. With potentially hundreds of columns, Excel loads slower and navigation becomes challenging.

### Reduced Preset

The reduced preset is cobby's intelligent default. It automatically shows:
- All Magento system attributes (always needed)
- Only the custom attributes that actually contain data

**Why this matters**: If you've defined 50 custom attributes but only 15 have values, the reduced preset shows just those 15. This creates a dramatically cleaner workspace.

**The performance benefit**: Fewer columns mean faster Excel loading and recalculation. For large product catalogs, this difference can be substantial—seconds versus minutes.

**The limitation**: If you need to populate a previously unused attribute, you must switch to the default preset to see it.

## Why Presets Transform Productivity

### Task-Specific Optimization

Different tasks require different data views. Presets let you optimize for each task:

**Price Updates**: Create a preset showing only pricing-related columns
- Base price
- Special price
- Tier pricing
- Customer group prices

**Content Management**: Show only content columns
- Product name
- Description
- Short description
- Meta information

**Inventory Management**: Focus on stock data
- SKU
- Stock quantity
- Stock status
- Warehouse assignments

**Image Management**: Isolate image-related fields
- Base image
- Small image
- Thumbnail
- Gallery images

Each preset eliminates irrelevant data, letting you focus entirely on the task at hand.

### Workflow Repeatability

E-commerce product management involves repetitive tasks. Presets eliminate repetitive setup:

**Without Presets**: Each time you need to update prices, you:
1. Load all products
2. Hide irrelevant columns
3. Rearrange columns to a logical order
4. Find the columns you need
5. Finally begin actual work

**With Presets**: You load your "Price Update" preset and immediately begin working with exactly the view you need.

The time saved compounds—what seems like 2-3 minutes of setup becomes hours per month for regular tasks.

### Web-Based Preset Management

cobby's preset management interface represents a significant workflow improvement. Previously, customizing presets required working within Excel—scrolling through potentially hundreds of columns, cutting and pasting, hiding and showing.

Now, preset customization happens in the cobby portal with a clean, web-based interface. This matters because:

**Visual Clarity**: See all columns in an organized list, not spread across a wide Excel sheet

**Efficient Toggling**: Click to show/hide columns instantly, rather than selecting and right-clicking in Excel

**Drag-and-Drop Ordering**: Rearrange columns by dragging, not cutting and pasting

**Immediate Preview**: Changes sync to Excel on reload, letting you iterate quickly

**No Excel Navigation**: Avoid the frustration of scrolling through massive Excel tables to find and manage columns

The web interface transforms preset management from a tedious task into a quick configuration step.

## Understanding Preset Composition

Presets can build on each other, creating a hierarchy of customizations:

```
Default Preset (everything)
  └─> Reduced Preset (populated attributes only)
      └─> Price Management Preset (reduced + price focus)
          └─> Seasonal Price Update Preset (price management + seasonal columns)
```

This composition means you don't start from scratch each time. You load an existing preset, make modifications, and save it as a new preset. This incremental approach is faster and maintains consistency.

## How Presets Enable Collaboration

In team environments, presets standardize workflows:

**Scenario**: Your team includes a pricing manager, content writer, and inventory manager. Each person needs different data.

**Solution**: Create role-based presets:
- "Pricing Management" preset for the pricing manager
- "Content Editing" preset for the writer
- "Inventory Control" preset for the inventory manager

Each person loads their preset and sees exactly what they need. This:
- Reduces training time (people see only relevant data)
- Prevents mistakes (irrelevant columns are hidden, reducing confusion)
- Speeds up work (no time spent hiding/showing columns)
- Creates consistency (everyone uses the same view for the same task)

## The Role of Help Columns

Help columns extend presets beyond just showing/hiding existing data. They let you add custom columns that:

- Provide workflow instructions (e.g., a "START" and "STOP" column marking which fields to edit)
- Calculate derived values using formulas
- Show intermediate steps in complex calculations
- Add notes or guidelines

**Important distinction**: Help columns exist only in the preset—they're not product attributes and won't be saved to Magento. They're workflow tools, not data fields.

This distinction enables powerful customizations without polluting your Magento data model.

### Why Help Columns Matter

**Scenario**: You need to create URL-friendly product names by converting regular names to lowercase and replacing spaces with hyphens.

**Without help columns**: You do this manually or outside Excel, then paste results.

**With help columns**: Add a help column with a formula:
```
=LOWER(SUBSTITUTE(B2, " ", "-"))
```

Now every product automatically generates the URL-friendly version. Copy the results to the actual field when ready.

Help columns transform Excel from a data entry tool into a data transformation tool.

## Presets for Product Creation

Presets can include pre-filled formulas that automatically populate data for new products:

**Example**: Your products always follow a pattern:
- Description combines name + category + features
- Meta title is name + category
- URL key is name converted to lowercase with hyphens

Create a preset with formulas in these fields. When you add a new row (new product), the formulas automatically generate these values based on other columns you fill in.

This ensures consistency across products and eliminates repetitive typing.

## Understanding Preset Scope

Presets can be configured at different scopes:

**Global**: Apply the same customizations to all attribute sets
**Per-Attribute Set**: Customize differently for each attribute set (e.g., apparel vs. electronics)

This flexibility lets you optimize for different product types. Apparel might need size/color columns prominent, while electronics need technical specification columns.

## The Performance Impact of Presets

Understanding the relationship between presets and performance helps you design efficient workflows:

**More columns = longer load times**: Excel must fetch, render, and calculate each column

**More columns = slower editing**: Excel recalculates formulas across all visible columns

**Fewer columns = faster everything**: Hiding unused columns provides tangible performance improvements

For catalogs with 10,000+ products, the difference between showing 100 columns vs. 20 columns can be substantial—minutes of load time saved.

**Best practice**: Create narrowly focused presets for routine tasks, even if you occasionally need the default preset for comprehensive work.

## Import and Export: Sharing Presets

Presets can be exported and imported between cobby workspaces. This enables:

**Consistency across environments**: Configure presets in staging, export, import to production

**Team standardization**: One person creates optimized presets, shares with the team

**Backup and recovery**: Export presets as backups before making changes

**Cross-workspace workflows**: Use the same preset configuration across multiple stores

The export/import feature treats presets as portable configuration files, allowing you to manage them like code.

## Why Mandatory Fields Matter

When creating presets for product creation, understanding mandatory fields is critical:

Magento requires certain fields for products to be valid:
- SKU
- Name
- Attribute set
- Product type
- Price (for most product types)
- Weight (if shipping is enabled)

**Important**: These mandatory fields cannot be hidden in presets used for creating new products. Hiding them causes import failures because Magento rejects incomplete products.

This constraint guides preset design—create separate presets for:
- **Product creation**: Show all mandatory fields
- **Product editing**: Hide fields that won't change

## The Strategic Value of Presets

Beyond day-to-day efficiency, presets provide strategic value:

### Process Documentation

Presets embody workflows. A well-named preset like "Monthly Price Review" documents that this is a regular process and shows which data it involves.

### Onboarding Tool

New team members can load task-specific presets and immediately see what's relevant, rather than being overwhelmed by hundreds of columns.

### Quality Control

By showing only relevant fields, presets reduce errors. If you're updating prices and only price columns are visible, you can't accidentally edit the wrong column.

### Workflow Evolution

As your business evolves, presets evolve too. Add columns for new attributes, create new presets for new workflows, retire old ones. The preset library becomes a history of how your business has changed.

## Related Topics

For step-by-step instructions on working with presets, see:
- How-To: Create and save a preset (coming soon)
- How-To: Hide columns in a preset (coming soon)
- How-To: Rearrange columns in a preset (coming soon)
- How-To: Create help columns (coming soon)
- How-To: Create product creation templates (coming soon)
- How-To: Import and export presets (coming soon)
- How-To: Manage presets in the cobby portal (coming soon)

For reference information on preset file formats and specifications, see the Reference documentation.

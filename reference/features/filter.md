---
sidebar_position: 1
title: Product Filter
---

# Product Filter

## Overview

The product filter is a pre-load filtering mechanism that restricts which products are transferred from Magento to Excel. Filtering occurs before data transfer, reducing load time and improving performance compared to Excel's native table filtering.

## Default Behavior

- Automatically applied when "Load products" button is clicked
- Loads default storeview values only
- Filters for active products only (inactive products excluded)

## Filter Components

### Store Scope Selection

| Component | Type | Description |
|-----------|------|-------------|
| Storeview selector | Multi-select | Enables multiple storeviews for simultaneous editing |
| Store hierarchy | Tree view | Displays websites, stores, and storeviews |

When multiple storeviews are selected, columns for each storeview appear in Excel with inherited or storeview-specific values.

### Product Status Filter

| Option | Default | Description |
|--------|---------|-------------|
| Active products only | Enabled | Filters visible products only |
| All products | Disabled | Includes both active and inactive products |

**Note:** Status changes made in Magento backend require closing and reopening Excel to reflect in the worksheet.

### Attribute Filters

#### Selection/Multiple Selection Attributes

- Applies to attributes with predefined value lists
- Uses checkbox selection interface
- Supports multiple value selection
- Examples: Manufacturer, Color, Size

**Filter Logic:** Products must match at least one selected value (OR logic).

#### Text Attributes

| Attribute Type | Filter Syntax | Example | Result |
|----------------|---------------|---------|--------|
| SKU | Starts with | `00123` | All SKUs beginning with "00123" |
| Name | Starts with | `Adidas` | All product names starting with "Adidas" |
| Multiple values | Comma-separated | `Adidas, Nike` | Products starting with "Adidas" OR "Nike" |

**Filter Position:** Text search operates on exact attribute matches from the attribute dropdown selection.

### Attribute Set Options

| Option | Description | Impact |
|--------|-------------|--------|
| Hide empty AttributeSets | Excludes attribute sets with no matching products | Reduces Excel columns and improves load performance |
| Show all AttributeSets | Displays all attribute sets regardless of product count | Complete attribute set visibility |

## Filter Access

**Location:** "Load products" button dropdown menu → "Filter..."

**Interface:** Modal dialog with three sections:
1. Storeview selection (top)
2. Text attribute filtering (middle)
3. Selection attribute filtering (bottom)

## Copy Selection for Filter

**Feature:** Transfers selected Excel cell values into filter criteria.

**Supported Attributes:**
- SKU
- Any text-based attribute displayed in Excel

**Input Method:**
- Copy from Excel selection (Tools → Copy selection for filter)
- Paste into filter dialog attribute field (Ctrl+V or right-click paste)
- Supports multiple values (newline or comma-separated)

## Performance Characteristics

| Scenario | Filter Impact | Excel Filter Impact |
|----------|---------------|---------------------|
| 10,000 products, filter to 100 | Loads 100 rows | Loads 10,000 rows (9,900 hidden) |
| Multiple storeviews | Only selected storeviews loaded | Not applicable |
| Attribute sets | Can exclude entire attribute groups | All columns loaded |

**Optimization:** Pre-load filtering reduces memory usage and initial load time by transferring only matching products.

## Related Resources

- **How-To Guides:**
  - How to Use the Product Filter *(coming soon)*
  - How to Filter by Multiple Storeviews *(coming soon)*
  - How to Use Copy Selection for Filter *(coming soon)*

## Technical Notes

- Filter state persists across Excel sessions
- Changes to filter require clicking "Apply filter" then "Load products"
- Inactive products require explicit checkbox change before reload
- Storeview changes appear immediately after "Load products"
- Database-level changes (imports) may require resynchronization

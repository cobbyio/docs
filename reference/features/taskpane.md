---
title: Task Pane
description: Complete reference documentation for the cobby Task Pane panel for advanced attribute management and data handling.
---

import Storylane from '@site/src/components/Storylane';

# Task Pane

The cobby Task Pane is a right-side panel that provides advanced editing capabilities for complex data types and attributes. The panel enables management of product data that goes beyond standard table editing.

## Interactive Demo

<Storylane id="4ywhfebvoxhd" title="cobby Task Pane Demo" />

## Feature Set

The Task Pane comprises nine specialized functional areas for product data management.

<details>
<summary><strong>1. Store View Management</strong></summary>

**Type:** Multi-Store Management

**Function:** Enables moving and adding products to store views.

**Operations:**
- Add products to store views
- Move products between store views
- Single-click operations for quick assignments

**Mass Processing:** Supported

**Use Case:** Multi-store environments with product assignments across different store views

</details>

<details>
<summary><strong>2. Category Management</strong></summary>

**Type:** Category Assignment

**Function:** Manages product category assignments through selection and assignment.

**Operations:**
- Add categories
- Remove categories
- Modify categories
- Multi-selection supported

**Mass Processing:** Supported

**Interaction:** Selection-based category assignment

</details>

<details>
<summary><strong>3. Tier Pricing</strong></summary>

**Type:** Price Management

**Function:** Edits tier pricing structures for quantity-based pricing.

**Operations:**
- Define price tiers
- Set quantity-dependent prices
- Adjust price tiers

**Mass Processing:** Supported

**Use Case:** Particularly suitable for processing external price lists with tiered prices

</details>

<details>
<summary><strong>4. Date Attributes</strong></summary>

**Type:** Date Field Management

**Function:** Manages date-based product attributes.

**Supported Date Fields:**
- Created Date
- Update Timestamps
- Special Price Dates
- Activation Dates
- Additional date-based attributes

**Mass Processing:** Supported

**Input Format:** Date selection via integrated date fields

</details>

<details>
<summary><strong>5. Product Relationships</strong></summary>

**Type:** Relationship Management

**Function:** Controls product links and relationships.

**Managed Relationship Types:**
- Cross-Sell Products
- Assigned Products
- Configurable Products
- Simple Products

**Operations:**
- Link products
- Change order
- Disconnect links
- Reorganize relationships

**Mass Processing:** Supported

</details>

<details>
<summary><strong>6. Image Management</strong></summary>

**Type:** Media Management

**Function:** Manages product images and their properties.

**Operations:**
- Add images
- Change image order
- Label images
- Delete images

**Advanced Features:**
- Formula-based optimization for streamlined management
- Batch processing of image attributes

**Mass Processing:** Supported

**Supported Attributes:** Image labels, alt texts, image roles, visibility

</details>

<details>
<summary><strong>7. HTML Content Editor</strong></summary>

**Type:** Rich-Text Editor

**Function:** Edits HTML-formatted content in product attributes.

**Operations:**
- Add HTML code
- Edit HTML code
- Delete HTML code

**Editor Integration:** Embedded HTML editor in the Task Pane

**Use Case:** Product descriptions, short descriptions, custom HTML attributes

**Mass Processing:** Limited (editor-specific)

</details>

<details>
<summary><strong>8. Dropdown Fields</strong></summary>

**Type:** Attribute Value Management

**Function:** Displays Magento dropdown options with inline editing capabilities.

**Supported Dropdown Types:**
- Manufacturer
- Origin
- Delivery Time
- Custom Dropdown Attributes

**Inline Functionality:**
- Rename option values
- Add new options
- Manage options directly in the Task Pane

**Synchronization:** Changes are applied directly to Magento

</details>

<details>
<summary><strong>9. Error Assistant</strong></summary>

**Type:** Validation Tool

**Function:** Validates data entries and provides correction guidance.

**Functionality:**
- Automatic validation on data entry
- Identification of incorrect entries
- Display correction recommendations
- Inline error hints

**Validation Types:**
- Data format validation
- Required field validation
- Value range control
- Referential integrity

**Output:** Error messages with specific correction hints

</details>

## Task Pane Activation

**Access:** cobby Excel Toolbar → Task Pane Button (Element 12)

**Display Position:** Right-side panel

**Behavior:** Context-sensitive based on:
- Selected cell
- Selected column
- Attribute type
- Data type

**Persistence:** Remains open until manually closed

## Mass Processing

The Task Pane supports mass operations for most functional areas.

**Supported Functions:**
- Store View Management
- Category Management
- Tier Pricing
- Date Attributes
- Product Relationships
- Image Management

**Not Supported:**
- HTML Content Editor (editor-specific)
- Individual Dropdown Operations (context-dependent)

**Selection Method:**
- Select multiple rows in Excel
- Call Task Pane function
- Changes are applied to all selected products

## Technical Specifications

**Integration:** cobby Excel Add-in

**Display Technology:** Custom Task Pane (Office-native)

**Update Behavior:** Real-time synchronization with Excel data

**Data Persistence:** Changes are committed on "Save Products"

**Undo Function:** Available via "Reset Product" until save

**Required Components:**
- cobby Excel Add-in installed
- Active shop connection
- Valid cobby license

## Data Flow

```
Excel Row (Selection) → Task Pane (Editing) → Excel Data (Update) → Save Products → Shop Database
```

**Update Model:** On-demand (user-initiated)

**Validation Timing:** On input (Error Assistant) and before save

**Conflict Handling:** Last-write-wins with validation

## Usage Patterns

### Context-Sensitive Activation

The Task Pane displays different functions based on the selected context:

| Selected Context | Available Task Pane Functions |
|------------------|-------------------------------|
| Category Column | Category Management |
| Image Column | Image Management |
| Date Column | Date Attributes |
| Dropdown Column | Dropdown Fields |
| HTML Column | HTML Content Editor |
| Price Column | Tier Pricing (context-dependent) |
| Multiple Rows | Mass Processing Functions |

### Workflow Integration

**Typical Workflow:**
1. Load products in Excel
2. Select row(s)
3. Open Task Pane
4. Use desired function
5. Make changes in Task Pane
6. Close Task Pane
7. Save products

---
sidebar_position: 8
title: How to Create New Attribute Options
---

# How to Create New Attribute Options

Create new dropdown/selection attribute options directly in Excel and automatically sync them to Magento.

## Why Use This Method

Creating attribute options in cobby is significantly faster than using Magento admin when:
- Adding many new options at once
- Importing options from supplier data
- Creating options while updating products

## Prerequisites

- cobby Excel add-in installed
- Products loaded in Excel
- Selection/dropdown attributes configured in Magento

## When to Use This

Use this process when:
- New color, size, or manufacturer values need to be added
- Importing products with new attribute values
- Bulk creating options from external data sources

---

## Basic Method: Manual Entry

### Example Scenario

The color "turquoise" is missing from your Color attribute and needs to be added.

### Steps

#### Step 1: Navigate to Attribute

1. Load products in Excel via the cobby ribbon
2. Find the attribute column where you need to add an option (e.g., "Color")
3. Locate a product that should have the new value

#### Step 2: Enter New Value

1. Click on the attribute cell for the product
2. Type the new option value (e.g., "turquoise")
3. Press Enter

![Enter new attribute value](/img/creating-new-attribute-options/pic1.png)

The value is entered but not yet created in Magento.

#### Step 3: Save Products

1. Click **Save Products** in the cobby ribbon
2. Wait for the save operation to complete
3. cobby automatically creates the new option in Magento

#### Step 4: Handle Translations (Optional)

After saving, you may see a yellow job status with an exclamation mark:

![Translation prompt](/img/creating-new-attribute-options/pic1.png)

This indicates new attribute options were created and offers to translate them for other store views:

1. Click **Yes** to open the translation dialog
2. Enter translations for each store view
3. Click **Save**

**If you have multiple new options:** Each appears as a tab in the translation window. Click through tabs to translate all options.

**Skip translations:** Click **No** or close the dialog. You can add translations later using the cobby task pane.

#### Step 5: Verify Option Created

1. Check the cobby task pane on the right
2. The new option now appears in the attribute dropdown list
3. The option is available for assignment to other products

---

## Advanced Method: Using Formulas

Create options automatically based on external data sources.

### Example: Import Colors from Supplier Data

#### Step 1: Create Reference Table

Create a lookup table matching supplier values to your Magento values:

| Supplier Color | Magento Color |
|----------------|---------------|
| Azure          | Blue          |
| Crimson        | Red           |
| Turquoise      | Turquoise     |

#### Step 2: Use INDEX-MATCH Formula

In the Color attribute column, use a formula to map values:

```excel
=INDEX(ColorMap[Magento Color],MATCH([@[Supplier Color]],ColorMap[Supplier Color],0))
```

This formula:
- Looks up the supplier's color name
- Returns the corresponding Magento color
- Creates the Magento color option if it doesn't exist

#### Step 3: Apply Formula to All Products

1. Enter the formula in the first product row
2. Double-click the fill handle to apply to all products
3. Review the mapped values

#### Step 4: Save Products

1. Click **Save Products**
2. All new unique color values will be created as options
3. Products will be assigned the appropriate colors

---

## Bulk Creating Multiple Options

### From Paste

To add many options at once:

1. Prepare your list of new values in a separate column or file
2. Copy the values
3. Paste into the appropriate attribute cells for products
4. Save products

All unique new values will become options.

### From Import Data

When importing products with new attribute values:

1. Load your import template
2. Map supplier attribute columns to Magento attributes
3. Save products
4. cobby automatically creates any new options found in the data

---

## Important Limitations

### What You Can Do:
- Create new attribute options
- Assign options to products
- Create options in bulk

### What You Cannot Do:
- **Delete options** - Must be done in Magento admin
- **Rename options** - Must be done in Magento admin
- **Reorder options** - Must be done in Magento admin
- **Delete products** - Not supported in cobby

To manage existing options:
1. Log into Magento backend
2. Navigate to **Stores → Attributes → Product**
3. Edit the attribute
4. Modify the options as needed
5. Save changes

---

## Troubleshooting

<details>
<summary>**New option not appearing in task pane**</summary>

**Problem:** A newly created option doesn't show up in the task pane.

**Solution:** Reload products in Excel. The task pane refreshes when products are loaded.

</details>

<details>
<summary>**Accidentally created options with typos**</summary>

**Problem:** Options were created with incorrect spelling or formatting.

**Solution:**
1. In Magento admin, go to Stores → Attributes → Product
2. Edit the attribute and delete incorrect options
3. In Excel, use Find & Replace to update products to use correct option
4. Save products

</details>

<details>
<summary>**Translation dialog doesn't appear**</summary>

**Problem:** After saving, no translation prompt is shown.

**Solution:** You may have dismissed it. You can add translations later:
1. Click the option in the cobby task pane
2. Click the pen/edit icon
3. Enter store view values
4. Save

</details>

<details>
<summary>**Formula creates too many similar options**</summary>

**Problem:** Multiple near-duplicate options are being created (e.g., "Blue", "blue", " Blue").

**Solution:** Your data needs cleaning. Use TRIM to remove spaces, and standardize capitalization:
```excel
=PROPER(TRIM([@[Supplier Value]]))
```

</details>

---

## Best Practices

### Plan Your Options

Before bulk creating:
- Review supplier data for variations and typos
- Standardize naming conventions
- Create a mapping table for automated imports

### Clean Your Data

Prevent duplicate or messy options:
- Remove leading/trailing spaces with TRIM()
- Standardize capitalization with PROPER() or UPPER()
- Use data validation to enforce standards

### Use Reference Tables

For recurring imports:
- Maintain a master list of approved options
- Create Excel lookup tables for mapping
- Use INDEX-MATCH formulas for automated mapping

### Document New Options

When creating specialized options:
- Document what each option means
- Note any special handling requirements
- Keep a changelog of option additions

---

## Related Articles

- How to Maintain Attribute Options (coming soon)
- How to Add Option Translations (coming soon)
- Using INDEX-MATCH Formulas (coming soon)

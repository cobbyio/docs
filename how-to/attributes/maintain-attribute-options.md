---
sidebar_position: 5
title: How to Maintain Attribute Options in Excel
---

# How to Maintain Attribute Options in Excel

Create and manage attribute options (dropdown values) directly in Excel instead of using the Magento admin panel.

## Why Use This Method

Managing attribute options in cobby is faster than Magento for:
- Adding multiple options at once
- Bulk assigning options to products
- Importing option values from external sources

## Prerequisites

- cobby Excel add-in installed
- Products loaded in Excel
- Selection/dropdown attributes configured in Magento

## When to Use This

Use this process when:
- Adding new manufacturers, colors, sizes, or other attribute options
- Bulk creating options from a supplier list
- Assigning attributes to many products simultaneously

---

## Example Scenario

You have many products from various manufacturers in your store, but the manufacturer attribute options haven't been created yet. You need to add all manufacturers and assign them to products.

---

## Steps

### Step 1: Create Attribute in Magento (If Needed)

If the attribute doesn't exist yet:

1. Navigate to **Catalog → Attributes → Manage Attributes** in Magento
2. Click **Add New Attribute**
3. Configure the attribute (e.g., "Manufacturer")
4. Set catalog input type to "Dropdown" or "Multiple Select"
5. Assign to the appropriate attribute sets
6. Save the attribute

![Create attribute](/img/maintain-magento-attribute-options-directly-in-excel/pic1.png)

### Step 2: Assign Options to Products in Excel

#### For Existing Options:

1. Load your products in Excel via cobby
2. Navigate to the attribute column (e.g., "Manufacturer")
3. Select one or more products
4. In the cobby task pane on the right, select the attribute value from the dropdown

![Bulk assign attribute](/img/maintain-magento-attribute-options-directly-in-excel/pic2.png)

#### For Multiple Products:

1. Select all products from the same manufacturer (use Ctrl+Click or Shift+Click)
2. Choose the manufacturer from the cobby task pane
3. The value will be applied to all selected products

![Select multiple products](/img/maintain-magento-attribute-options-directly-in-excel/pic3.png)

### Step 3: Create New Options Directly

If an option doesn't exist yet, simply type it into the cell:

1. Click on the attribute cell for a product
2. Type the new option value (e.g., "Acme Corporation")
3. Press Enter

![Create new option](/img/maintain-magento-attribute-options-directly-in-excel/pic4.png)

### Step 4: Save Products

1. Click **Save Products** in the cobby ribbon
2. cobby will automatically:
   - Create new options in Magento
   - Assign options to products
   - Add new options to the dropdown list in the task pane

### Step 5: Verify in Magento

The new option is now available:
- In the cobby task pane dropdown
- In Magento's attribute option list
- For selection on other products

---

## Bulk Creating Options

For creating many options at once:

### Method 1: Paste Values

1. Prepare a list of option values in a separate Excel column
2. Copy the values
3. Select the appropriate product cells in the attribute column
4. Paste the values
5. Save products

### Method 2: Using Formulas

Use formulas to automatically assign options based on other data:

```excel
=INDEX(Manufacturers[Magento Name],MATCH([@[Supplier Manufacturer]],Manufacturers[Supplier Name],0))
```

This looks up the Magento manufacturer name based on the supplier's manufacturer designation.

---

## Important Limitations

### What You Can Do:
- Create new attribute options
- Assign options to products
- Update option assignments

### What You Cannot Do:
- **Delete options** - Must be done in Magento admin
- **Rename options** - Must be done in Magento admin
- **Change option sort order** - Must be done in Magento admin
- **Modify option settings** (swatch colors, etc.) - Must be done in Magento admin

To delete or modify existing options, log into the Magento backend:
1. Go to **Catalog → Attributes → Manage Attributes**
2. Find and edit your attribute
3. Modify the options list
4. Save changes

---

## Tips for Success

### Option Naming Consistency

Maintain consistent naming:
- Use proper capitalization (e.g., "Nike" not "nike" or "NIKE")
- Avoid extra spaces
- Use standard abbreviations
- Consider creating a master list of accepted option names

### Avoiding Duplicates

Prevent creating similar options by:
- Using data validation in Excel
- Creating a reference list of approved options
- Using VLOOKUP or INDEX-MATCH to ensure consistency

### Translation Considerations

When creating options, remember:
- Initial creation uses the default store view language
- You can add translations later using the cobby task pane
- See: How to Add Option Translations (coming soon)

---

## Troubleshooting

**Problem:** New option doesn't appear in task pane after saving

**Solution:** Reload products in Excel. The task pane dropdown refreshes on product load.

**Problem:** Accidentally created duplicate options with slight differences

**Solution:** In Magento admin, delete the incorrect option, then use Excel find/replace to update products to use the correct option.

**Problem:** Option appears in cobby but not in Magento frontend

**Solution:** Check the attribute configuration in Magento. Ensure "Visible on Catalog Pages on Storefront" is set to "Yes" if needed.

**Problem:** Cannot delete option that's no longer needed

**Solution:** Options must be deleted from Magento admin. Go to Catalog → Attributes → Manage Attributes, edit the attribute, and remove the option.

---

## Related Articles

- How to Create Attribute Options (coming soon)
- How to Add Option Translations (coming soon)

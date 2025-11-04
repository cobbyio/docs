---
sidebar_position: 1
title: How to Convert Text Attribute to Selection Attribute
---

# How to Convert Text Attribute to Selection Attribute

Convert an existing text attribute to a selection (dropdown) attribute to enable features like layered navigation and filtering.

## Prerequisites

- Access to Magento admin panel
- cobby Excel add-in installed
- Basic understanding of attribute sets

## When to Use This

Use this process when you need to:
- Enable filter search for an attribute
- Connect third-party systems that require selection attributes
- Standardize product data entry with predefined options

## Steps

### 1. Create Selection Attribute in Magento

1. Navigate to **Catalog → Attributes → Manage Attributes** in the Magento admin backend
2. Click **Add New Attribute**
3. Configure the new selection attribute with your desired settings
4. Set the input type to "Dropdown" or "Multiple Select"
5. Save the attribute

### 2. Assign Attribute to Attribute Set

1. Go to **Catalog → Attributes → Manage Attribute Sets**
2. Select the desired attribute set from the list
3. Drag the new attribute from the "Unassigned Attributes" list on the right
4. Drop it in the desired position in the attribute tree on the left
5. Save the attribute set

### 3. Resync cobby

1. In Magento, navigate to **System → Configuration**
2. Switch to the **Services/cobby** tab on the left side
3. Click **Save Configuration** to trigger a resync
4. Wait for the resync to complete

### 4. Migrate Data in Excel

1. Open Excel and load your products via the cobby ribbon
2. Select the entire column containing the current text values
3. Copy the content (Ctrl+C)
4. Paste the values into the new selection attribute column (Ctrl+V)
5. Click **Save Products** in the cobby ribbon

cobby will automatically:
- Create all unique values as selection options in Magento
- Assign the appropriate options to each product

## Important Notes

- Magento does not allow changing attribute types directly - you must create a new attribute
- All unique values from the text field will become selection options
- Existing products will retain their values during migration
- This process does not delete the old text attribute - you can remove it later if needed

## Troubleshooting

**Problem:** New attribute doesn't appear in Excel after resync

**Solution:** Try clearing the cobby cache and reloading products. If the issue persists, verify the attribute is assigned to the correct attribute set.

**Problem:** Duplicate values create multiple similar options

**Solution:** Clean your text data first using the TRIM function to remove extra spaces, then check for variations in spelling or capitalization.

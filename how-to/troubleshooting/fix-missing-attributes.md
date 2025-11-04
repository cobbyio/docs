---
sidebar_position: 5
title: How to Fix Missing Attributes
---

# How to Fix Missing Attributes

This guide helps you troubleshoot when product attributes that exist in Magento don't appear in cobby.

## Symptoms

- Attributes exist in Magento but are not visible in cobby
- Expected columns are missing from cobby Excel sheets
- Attributes appear in some worksheets but not in "AllProducts"
- Newly created attributes don't show up in cobby

## Prerequisites

- cobby is properly connected to your Magento store
- You have access to Magento admin panel
- The attributes exist and are configured in Magento
- You have basic understanding of Magento attribute sets

## Step-by-Step Solutions

### Solution 1: Rebuild cobby's Index

The cobby index may be outdated after creating new attributes.

**For Magento 1:**

1. Log into your Magento admin panel
2. Navigate to **System** > **Index Management**
3. Find "cobby" in the list of indexes
4. Click **Reindex Data** in the right column for the cobby index
5. Wait for the reindexing to complete
6. Open cobby in Excel and load products

**Expected result:** The new attributes should now appear in cobby.

**For Magento 2:**

1. Navigate to [https://app.cobby.io/](https://app.cobby.io/)
2. Go to **License Profile** > **Shop URL**
3. Click **Resync**
4. Wait for the synchronization to complete
5. Open cobby in Excel and load products

**Expected result:** The new attributes should now appear in cobby.

**If this doesn't work:** Continue to Solution 2.

### Solution 2: Assign Attribute to Attribute Set

Attributes must be assigned to at least one attribute set to appear in cobby:

1. Log into your Magento admin panel
2. Find a product that should display the missing attribute
3. Open the product for editing
4. Check if the attribute appears on the product edit page

**If the attribute is missing from the product:**

1. Navigate to **Catalog** > **Attributes** > **Manage Attribute Sets**
2. Select the appropriate attribute set
3. Find your missing attribute in the "Unassigned Attributes" section
4. Drag the attribute into the appropriate attribute group
5. Click **Save Attribute Set**
6. Rebuild cobby's index (follow Solution 1)
7. Open cobby in Excel and load products

**Expected result:** The attribute should now appear in cobby after reindexing.

Learn more about [Magento attribute sets](http://docs.magento.com/m1/ce/user_guide/catalog/attribute-set.html).

**If this doesn't work:** Continue to Solution 3.

### Solution 3: Check the Blacklist

Some attributes cannot be processed by cobby and are blacklisted:

1. Check your email for a message titled "Sync Errors" (sent after indexing)
2. **Important:** Check your spam/junk folder if you don't see this email
3. Look for this text in the email:
   > "The following attributes use a custom renderer. cobby cannot process these attributes this way, so they have been added to the blacklist."
4. Check if your missing attribute is listed below this message

**If the attribute is blacklisted:**
- cobby cannot process this attribute due to its custom renderer
- You must manage this attribute directly in Magento backend
- The attribute will remain functional in Magento, just not editable in cobby

**Expected result:** Blacklisted attributes cannot be added to cobby. Manage them in Magento instead.

**If this doesn't work:** Continue to Solution 4.

### Solution 4: Check Template Settings

The reduced template hides certain attributes:

1. Open cobby in Excel
2. Look at the current template setting (displayed near the "Load Products" button)
3. Check if you're using the "Reduced" template

**The reduced template hides attributes that:**
- Have no values set for any product
- Always contain the same value across all products

**To switch templates:**

1. Click the lower part of the **Load Products** button (the dropdown arrow)
2. Navigate to **Template: Reduced**
3. Select **Standard**

![Template selection](/img/missing-attributes-in-cobby/pic1.png)

4. Click the upper part of the **Load Products** button
5. Check if the attribute now appears

**Expected result:** The attribute should appear in the standard template.

**Additional check:**

The "AllProducts" worksheet only shows attributes common to all attribute sets. Check attribute-set-specific worksheets:

1. Look for a worksheet named after your product's attribute set
2. Check if the attribute appears in that worksheet
3. Attributes unique to one attribute set only appear in that set's worksheet

**If this doesn't work:** Continue to Solution 5.

### Solution 5: Check if Using a Saved Workbook

Working from locally saved Excel files can cause outdated template issues:

1. Close your current Excel workbook
2. **Do not save** if prompted (to avoid overwriting issues)
3. Open a new, empty Excel workbook
4. Load cobby products fresh into the new workbook
5. Check if the missing attribute appears

**Important:** cobby does **not** support working from saved copies. Template changes and new attributes are not updated in saved files.

**Expected result:** The attribute should appear when loading products into a fresh workbook.

**Best practice:** Always work from new workbooks, not saved copies.

## Troubleshooting

**Attribute still missing?**

- Verify the attribute scope (Store View, Website, or Global)
- Check attribute frontend input type - some types may not be supported
- Ensure the attribute is set to "Visible" in Magento
- Confirm the attribute is not set to "Not Visible" in product editing

**Check attribute configuration:**
- Navigate to **Catalog** > **Attributes** > **Manage Attributes** in Magento
- Open your attribute
- Review all configuration settings
- Look for any restrictions that might prevent display

## Still Having Issues?

If the attribute remains missing after trying all solutions:

- Email cobby support at info@cobby.io with:
  - Attribute code and label
  - Attribute type and input type from Magento
  - Which attribute set(s) it's assigned to
  - Screenshot of the attribute in Magento
  - cobby version and Magento version
- Include the "Sync Errors" email if you received one
- Specify which template you're using in cobby

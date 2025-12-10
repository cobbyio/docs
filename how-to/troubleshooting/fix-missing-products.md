---
sidebar_position: 4
title: How to Fix Missing Products
---

# How to Fix Missing Products

This guide helps you troubleshoot when products that exist in Magento don't appear in cobby.

## Symptoms

- Products exist in Magento but are not visible in cobby
- Product count in cobby is lower than in Magento
- Specific products cannot be found in cobby Excel sheets
- Recently added products don't sync to cobby

## Prerequisites

- cobby is properly connected to your Magento store
- You have verified the products exist in Magento admin panel
- You have access to cobby product filters and settings

## Step-by-Step Solutions

### Solution 1: Check Product Filter Settings

cobby's product filter may be hiding disabled products:

1. Open cobby in Excel
2. Look at the current filter settings in the cobby task pane
3. Check if the filter is set to "Active products only"
4. If the missing product is disabled in Magento, it won't appear with this filter

**To change the filter:**

1. In the cobby task pane, locate the product filter dropdown
2. Change the filter to show all products (including disabled ones)
3. Click **Load Products**
4. Search for your missing product

**Expected result:** Disabled products should now be visible in cobby.

For detailed filter instructions, see [The Product Filter](/reference/features/filtering-capabilities).

**If this doesn't work:** Continue to Solution 2.

### Solution 2: Check Product Type Compatibility

cobby doesn't support all Magento product types:

1. Open the missing product in Magento admin panel
2. Check the product type at the top of the product page
3. Verify if the product type is supported by cobby

**Unsupported product types:**
- Downloadable products
- Custom product types created by extensions

**What to do:**
- If the product is Downloadable, you must manage it directly in Magento
- If it's a custom type, contact the extension developer about cobby compatibility
- Consider converting the product to a supported type (Simple, Configurable, Bundle, Grouped, Virtual)

**Expected result:** Only supported product types will appear in cobby.

Learn more about [Magento product types](http://docs.magento.com/m1/ce/user_guide/catalog/product-types.html).

**If this doesn't work:** Continue to Solution 3.

### Solution 3: Resynchronize the Product Database

Your product database may be out of sync with cobby:

**When this happens:**
- Extensions modify products without using the Magento model
- Manual database changes were made directly
- cobby didn't receive change notifications

**For cobby version 1.38 and later:**

cobby only transfers products that changed since the last sync. If changes weren't detected, products won't sync.

**Solution steps:**

1. Contact cobby support at info@cobby.io
2. Request a product database reset for your store
3. Wait for confirmation from the cobby team
4. Perform a full synchronization:
   - Open cobby in Excel
   - Click the synchronization button
   - Wait for the complete sync (this will take longer than usual)

**Expected result:** All products, including previously missing ones, should now appear in cobby.

**Note:** This is a one-time fix. The next section explains how to prevent this issue.

### Solution 4: Enable Change Notifications (Long-term Fix)

Ensure extensions notify cobby of product changes:

**For developers or agencies:**

1. Review your custom extensions that modify products
2. Implement cobby event notifications in your code
3. Follow the guidelines in [API Endpoints and Events](/reference/api/endpoints-and-events)
4. Test that product changes trigger cobby synchronization

**Expected result:** Future product changes will automatically sync to cobby, preventing missing product issues.

## Troubleshooting

<details>
<summary>**Product still missing after all solutions?**</summary>

- Verify the product actually exists in Magento (check SKU and ID)
- Confirm the product is assigned to a website and store view
- Check if the product has a valid attribute set
- Review Magento logs for product-related errors

</details>

<details>
<summary>**Check product visibility settings**</summary>

- Ensure the product visibility is not set to "Not Visible Individually" if you expect to edit it in cobby
- Verify the product status is set correctly in Magento

</details>

## Still Having Issues?

If products remain missing after trying these solutions:

- Email cobby support at info@cobby.io with:
  - Product SKU(s) that are missing
  - Product type from Magento
  - cobby version and Magento version
  - Screenshot of the product in Magento admin
  - Current filter settings in cobby
- Check if other products of the same type are visible in cobby
- Verify your cobby license includes the expected number of products

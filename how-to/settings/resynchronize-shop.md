---
title: "How to Resynchronize Your Shop"
description: "Learn how to perform a resync to update cobby's structure cache after making configuration changes in Magento"
---

# How to Resynchronize Your Shop

This guide shows you how to resynchronize your shop in the cobby portal. Perform a resync after making structural changes to your Magento configuration, such as adding attributes, modifying attribute sets, or changing store structure.

## Prerequisites

- Access to the cobby portal at [app.cobby.io](https://app.cobby.io/)
- cobby portal login credentials

## Steps

1. Open your web browser and navigate to [app.cobby.io](https://app.cobby.io/)

2. Log in with your cobby portal credentials

3. Click on **Settings** in the navigation menu

4. Select **Manage shop** from the settings options

5. Click the **Resync** button on the right side of the page

6. Wait for the resynchronization to complete
   - Small shops: 10-30 seconds
   - Medium shops: 30-90 seconds
   - Large shops: 1-5 minutes

## Verify Success

After the resync completes, verify the changes in Excel:

1. Close Excel if it's currently open

2. Reopen Excel and load your cobby workbook

3. Check that your structural changes appear:
   - New attributes show as columns
   - New storeviews appear in column headers
   - Attribute sets reflect current Magento configuration

## Related Information

For detailed information about when resynchronization is required and what triggers it, see the [Resynchronization reference documentation](/reference/settings/indexing).

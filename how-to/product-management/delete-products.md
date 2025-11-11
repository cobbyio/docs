---
sidebar_position: 2
title: How to Delete Products in cobby
description: Learn how to safely delete products using cobby's two-stage deletion process with Magento
---

# How to Delete Products in cobby

This guide shows you how to safely delete products from your Magento store using cobby's two-stage deletion process. You'll mark products for deletion in cobby, then complete the deletion in Magento.

## Prerequisites

- Products loaded in cobby
- Access to your Magento backend
- Basic familiarity with cobby's Excel interface

import Storylane from '@site/src/components/Storylane';

<Storylane
  src="https://app.storylane.io/share/bpzizqprdbuy"
  title="Delete Products in cobby - Interactive Demo"
/>

## Steps

### In cobby

1. Locate the products you want to delete in your cobby workbook.

2. In the **Name** column, change the value for each product to **"Delete me"** (or any unique identifier you choose).

3. Click **Save products** in the cobby toolbar to sync the changes to Magento.

### In Magento

4. Log in to your Magento backend.

5. Navigate to **Catalog > Products**.

6. In the product search field, filter by name **"Delete me"**.

7. Click **Select all** to select all products with this name.

8. Open the **Actions** dropdown menu and select **Delete**.

9. Click **Submit** to permanently delete all selected products.

## Verification

After completing step 9, the selected products will be permanently removed from your Magento catalog. You can verify the deletion by:
- Checking the product count in Magento's product grid
- Refreshing your cobby workbook to confirm products are no longer listed

:::tip Why the Two-Stage Process?
This deliberate two-stage process (cobby + Magento) provides a safety checkpoint before permanently deleting products. It ensures you make conscious decisions and prevents accidental deletions by requiring manual confirmation in Magento.
:::

## Using Custom Identifiers

Instead of "Delete me", you can use any unique identifier that suits your workflow:
- Date-based: **"DELETE-2024-11-04"**
- Category-based: **"REMOVE-discontinued"**
- Batch-based: **"CLEANUP-Q4-2024"**

The key is choosing a value that won't accidentally match other products in your catalog.

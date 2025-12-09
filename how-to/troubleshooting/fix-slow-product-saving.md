---
sidebar_position: 3
title: How to Fix Slow Product Saving
---

# How to Fix Slow Product Saving

This guide helps you identify and resolve issues when saving products takes unusually long in cobby.

## Symptoms

- Product uploads are extremely slow
- Saving changes to products takes many minutes or hours
- cobby appears to freeze or hang during save operations
- Progress bar moves very slowly during product synchronization

## Prerequisites

- cobby is properly connected to your Magento store
- You have access to Magento admin panel
- For advanced solutions, you may need developer access to Magento configuration

## Understanding the Issue

Slow product saving is usually not caused by cobby itself, but by how Magento processes changes. Several factors can affect performance:

## Step-by-Step Solutions

### Solution 1: Allow Time for Large Changes

When making major updates to your product data:

1. Understand that extensive changes require more processing time
2. Be patient - Magento needs time to process large batches of product updates
3. Consider breaking very large updates into smaller batches

**What qualifies as major changes:**
- Updating hundreds or thousands of products at once
- Changing multiple attributes per product
- Bulk price updates across many products
- Mass category reassignments

**Expected result:** Processing time is proportional to the number of changes. Large batches will naturally take longer.

**Best practice:** For very large updates, split them into batches of 100-500 products.

### Solution 2: Check Index Settings (cobby version 1.46 and earlier)

If you're using cobby version 1.46 or earlier, index triggering can slow down saves:

1. Log into your Magento admin panel
2. Navigate to **System** > **Index Management**
3. Identify which indexes are set to "Update on Save"
4. Before your import, change affected indexes to "Manual" mode:
   - Select the index
   - Choose "Manual" from the actions dropdown
   - Click **Submit**
5. Run your product import in cobby
6. After import completes, switch indexes back to "Update on Save"
7. Manually reindex:
   - Select all indexes
   - Choose "Reindex Data" from the actions dropdown
   - Click **Submit**

**Expected result:** Saves complete much faster with manual indexing, and you maintain data consistency by reindexing afterward.

**Note:** This issue was resolved in cobby version 1.47 and later.

### Solution 3: Configure Varnish Cache Settings

If your store uses Varnish cache, it can delay product changes:

1. Verify if your store uses [Varnish](https://www.varnish-software.com/)
2. Understand that Varnish caching can delay product changes by up to 20 minutes
3. Apply the cobby Varnish configuration:
   - Log into your Magento admin panel
   - Navigate to cobby settings (**System > Configuration > Services > cobby**)
   - Configure Varnish to properly clear cache when products are updated
   - Ensure your Varnish configuration allows cobby to bypass or clear the cache for updated products
4. Test product saving again

**Expected result:** Product changes should complete faster and synchronize more quickly.

## Troubleshooting

<details>
<summary>**Still experiencing slow saves?**</summary>

- Check your server resources (CPU, memory, disk space)
- Review Magento logs for errors during save operations
- Check for conflicting extensions that might slow down product saves
- Monitor database performance during save operations

</details>

<details>
<summary>**Verify performance**</summary>

- Test saving a small batch (5-10 products) to establish a baseline
- Compare performance with and without cobby to isolate the issue
- Check if the slowness occurs only with certain product types or attributes

</details>

## Still Having Issues?

If product saving remains slow after trying these solutions:

- Contact cobby support at info@cobby.io with:
  - Your cobby version
  - Magento version
  - Number of products being updated
  - Approximate time it takes to save
  - Any error messages from Magento logs
- Consider consulting with a Magento developer to optimize your server and database configuration

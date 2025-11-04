---
sidebar_position: 5
title: How to Fix Frontend Sync Issues
---

# How to Fix Frontend Sync Issues

This guide helps you resolve issues when product changes made in cobby are not visible in your Magento store frontend.

## Problem

You've made product changes in cobby and saved them successfully, but these changes are not appearing on your Magento store's frontend (website).

## Solution

Follow these steps in order to identify and resolve the sync issue.

### Step 1: Check Index Settings

Magento indexes may be set to manual mode, preventing automatic updates.

1. Log in to your Magento backend.
2. Navigate to **System > Index Management**.
3. Check the **Mode** column for each index.
4. Look for indexes set to **Manual** (especially the Catalog index).
5. If any indexes are manual, select them.
6. In the **Actions** dropdown, select **Change Index Mode**.
7. Set them to **Update on Save** or **Update by Schedule**.
8. Click **Submit**.
9. Select the same indexes again.
10. In the **Actions** dropdown, select **Reindex Data**.
11. Click **Submit**.
12. Wait for reindexing to complete.
13. Check your frontend again.

**Check the Job Log:**

1. Navigate to [https://app.cobby.io](https://app.cobby.io).
2. Go to your workspace.
3. Check the job history log.
4. Verify which indexers were triggered during your last save.
5. Ensure the relevant indexes (like Catalog) were reindexed.

### Step 2: Clear External Cache

External caching systems like Varnish may be displaying cached content.

**Test if cache is the issue:**

1. Open your product or category page in the frontend.
2. Add a parameter to the URL, for example: `?test=1`
   - Example: `https://yourstore.com/product-page?test=1`
3. If the changes appear with the parameter, cache is the issue.

**Solution:**

1. Log in to your Magento backend.
2. Navigate to **System > Cache Management**.
3. Click **Flush Magento Cache**.
4. If using Varnish or other external cache:
   - Access your server or hosting control panel.
   - Flush the external cache (consult your hosting provider if needed).
   - Or contact your system administrator.

**For Varnish users:**

If auto-flush is enabled in cobby settings, it may slow down save operations for large catalogs:

1. Navigate to **Stores > Configuration** in Magento backend.
2. Find cobby settings.
3. Consider disabling automatic Varnish cache flushing.
4. Flush cache manually after batch updates instead.

### Step 3: Check Custom Search Extensions

Custom search solutions may not be synchronized with cobby's changes.

**Common custom search systems:**

- SOLR
- ElasticSearch
- Algolia
- Other third-party search extensions

**Solution:**

1. Identify which search extension you're using.
2. Check if the search extension responds to Magento events.
3. Verify the extension is compatible with cobby.
4. For SOLR by integer-net, use the [compatibility module](https://github.com/integer-net/Solr_Compatibility_Cobby).

**For developers:**

Ensure your custom search extension listens to cobby API events. See the cobby API requests and events documentation.

### Step 4: Check for Store View Data Issues

Corrupt or inconsistent data across store views can cause display issues.

**Symptoms:**

- Changes visible in Magento backend but not frontend
- Inconsistent display across different store views
- Issues persist after cache clearing

**Check for orphaned data:**

1. Access your Magento database (via phpMyAdmin or SQL client).
2. Check the EAV tables (e.g., `catalog_product_entity_varchar`, `catalog_product_entity_int`).
3. Look for records with store view IDs that no longer exist.
4. Records should have `store_id = 0` for default values.

**Solution:**

1. Back up your database before making changes.
2. Identify orphaned records (records with invalid store_id values).
3. Clean up these records manually via SQL.
4. Or use a database cleanup extension.
5. Test your products in the backend after cleanup.

**Prevention:**

- When removing store views, clean up associated attribute values.
- Use Magento's proper store view deletion process.
- Avoid direct database modifications.

## Troubleshooting

### Changes visible in backend but not frontend

- Clear all caches (Magento, Varnish, CDN, browser).
- Check if the product is enabled and assigned to the correct websites.
- Verify the product is in stock and visible in catalog/search.
- Check visibility settings for each store view.

### Changes visible in some store views but not others

- Check store view-specific values in the backend.
- Verify "Use Default Value" is not checked if you want custom values.
- Clear store view-specific cache.
- Reindex specifically for the affected store view.

### Changes appear after a long delay

- Set indexes to "Update on Save" instead of "Update by Schedule".
- Check if external cache has a long TTL (time to live).
- Reduce cache lifetime in your cache configuration.
- Consider using cache tags for more granular invalidation.

### Only specific attributes don't sync

- Check if the attribute is included in the search index.
- Verify the attribute is set to be used in frontend.
- Check attribute scope (global vs. store view).
- Ensure the attribute is part of the product's attribute set.

## Related Resources

- cobby API Requests and Events (coming soon)
- Working with the Job History (coming soon)
- [SOLR Compatibility Module](https://github.com/integer-net/Solr_Compatibility_Cobby)

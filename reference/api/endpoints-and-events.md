---
sidebar_position: 1
title: API Endpoints and Events
---

# API Endpoints and Events

Complete technical reference for cobby's API endpoints and events. This reference is intended for developers creating custom Magento extensions based on cobby.

## Version History
---

Starting with cobby version 1.38.1.1, many requests changed to a leaner naming scheme. Custom extensions from previous versions should check for both old and new formats.

## Custom Change Notification Event
---

Use this event to notify cobby when your extension writes directly to Magento's database:

**Event Name:** `cobby_handle_changes`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| entity | string | Yes | Entity type (e.g., 'product') |
| action | string | Yes | Action type (e.g., 'save') |
| ids | array | Yes | Array of entity IDs (e.g., [1,2,3]) |
| context | string | Yes | Context identifier (e.g., 'custom') |
| username | string | Yes | Username performing the action |

**Example (Magento 1):**
```php
Mage::dispatchEvent('cobby_handle_changes', array(
    'entity' => 'product',
    'action' => 'save',
    'ids' => array(1,2,3),
    'context' => 'custom',
    'username' => 'Bob'
));
```

## Event Types
---

### Import Events

**Before Events** (`cobby_import_...._import_before`)
- Triggered before import operation
- Use to manipulate data before import

**After Events** (`cobby_import_...._import_after`)
- Triggered after import operation
- Use to manipulate returned data rendered in cobby

## Attribute Set
---

### Export Attribute Sets

**Magento 1:** `cobby_catalog_product_attribute_set.export`

**Magento 2:** `GET cobby/products/attribute/sets`

**Events:** None

## Category
---

### Export Category Tree

**Magento 1:** `cobby_catalog_category.export`

**Magento 2:** `GET cobby/categories`

**Events:** None

## Attributes
---

### Attribute Info

**Magento 1:** `cobby_catalog_product_attribute.info`

**Magento 2:** None

**Events:** None

### Export Attributes

**Magento 1:** `cobby_catalog_product_attribute.export`

**Magento 2:** `GET cobby/product/attributes`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_catalog_product_attribute_export_after | Triggered after exporting attribute. Use to change attribute type (e.g., text to dropdown) |
| cobby_catalog_product_attribute_option_export_after | Triggered for attributes with options. Use to modify or remove options |

**Trigger Sequence:** For attributes with options (e.g., select attributes), both events trigger after export.

## Attribute Options
---

### Export Attribute Options

**Magento 1:** `cobby_catalog_product_attribute_option.export`

**Magento 2:** `GET cobby/product/attribute/options`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_catalog_product_attribute_option_export_after | Use to modify or remove options |

### Import Attribute Options

**Magento 1:** `cobby_catalog_product_attribute_option.import`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_catalog_product_attribute_option_export_after | Use to modify or remove options |

## Configurable Product
---

### Assign Configurable Product

**Magento 1:** `cobby_catalog_product_type_configurable.assign`

**Magento 2:** None

**Events:** None

## Website
---

### Export Websites

**Magento 1:** `cobby_core_website.export`

**Magento 2:** `GET cobby/store/websites`

**Events:** None

## Stores
---

### Export Store Views

**Magento 1:** `cobby_core_store.export`

**Magento 2:** `GET cobby/store/storeViews`

**Events:** None

## Store Group
---

### Export Store Groups

**Magento 1:** `cobby_storegroup.export`

**Magento 2:** `GET cobby/store/storeGroups`

**Events:** None

## Config
---

### Export Configuration

**Magento 1:** `cobby_core_config.export`

**Magento 2:** `GET cobby/configs`

**Events:** None

## ACL
---

### Export ACL

**Magento 1:** `cobby_core_acl.export`

**Magento 2:** None

**Events:** None

## Customer Group
---

### Export Customer Groups

**Magento 1:** `cobby_customer_group.export`

**Magento 2:** `GET cobby/customer/groups`

**Events:** None

## Product
---

### Update Product SKUs

**Magento 1:** `cobby_catalog_product.updateSkus`

**Magento 2:** `POST cobby/product/skus`

**Events:** None

### Get All Product IDs

**Magento 1:** `cobby_catalog_product.getAllIds`

**Magento 2:** `GET cobby/product/ids`

**Events:** None

### Update Product Websites

**Magento 1:** `cobby_catalog_product.updateWebsites`

**Magento 2:** `POST /cobby/product/website`

**Events:** None

### Export Products

**Magento 1:** `cobby_export.exportProducts`

**Magento 2:** `POST cobby/export/products`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_catalog_product_export_after | Remove products before export or manipulate product type seen by cobby |

### Update Category Associations

**Magento 1:** `cobby_import_product.updateCategoryAssociations`

**Magento 2:** `POST cobby/import/products/categories`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_category_import_before | Triggered before category association import |
| cobby_import_product_category_import_after | Triggered after category association import |

### Import Products

**Magento 1:** `cobby_import_product.importProducts`

**Magento 2:** `POST cobby/import/products`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_import_before | Triggered before product import |
| cobby_import_product_import_after | Triggered after product import |

### Update Stock

**Magento 1:** `cobby_import_product.updateStock`

**Magento 2:** `POST cobby/import/products/stocks`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_stock_import_before | Triggered before stock update |
| cobby_import_product_stock_import_after | Triggered after stock update |

### Update Links

**Magento 1:** `cobby_import_product.updateLink`

**Magento 2:** `POST cobby/import/products/links`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_link_import_before | Triggered before link update |
| cobby_import_product_link_import_after | Triggered after link update |

### Update Grouped Product Associations

**Magento 1:** `cobby_import_product.updateGroupedProductAssociations`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_grouped_import_before | Triggered before grouped product association update |
| cobby_import_product_grouped_import_after | Triggered after grouped product association update |

### Update Configurable Products

**Magento 1:** `cobby_import_product.updateConfigurableProducts`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_configurable_import_before | Triggered before configurable product update |
| cobby_import_product_configurable_import_after | Triggered after configurable product update |

### Update Media

**Magento 1:** `cobby_import_product.updateMedia`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_media_import_before | Triggered before media update |
| cobby_import_product_media_import_after | Triggered after media update |

### Update Tier Prices

**Magento 1:** `cobby_import_product.updateTierPrices`

**Magento 2:** `POST cobby/import/products/tierPrices`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_tierprice_import_before | Triggered before tier price update |
| cobby_import_product_tierprice_import_after | Triggered after tier price update |

### Update Group Prices

**Magento 1:** `cobby_import_product.updateGroupPrices`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_groupprice_import_before | Triggered before group price update |
| cobby_import_product_groupprice_import_after | Triggered after group price update |

### Delete Duplicate Images

**Magento 1:** `cobby_import_product.deleteDuplicateImages`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_url_import_before | Triggered before URL update |
| cobby_import_product_url_import_after | Triggered after URL update |

### Update URL

**Magento 1:** `cobby_import_product.updateUrl`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_url_import_before | Triggered before URL update |
| cobby_import_product_url_import_after | Triggered after URL update |

### Update Custom Options

**Magento 1:** `cobby_import_product.updateCustomOptions`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_customoption_import_before | Triggered before custom option update |
| cobby_import_product_customoption_import_after | Triggered after custom option update |

### Update Bundle Options

**Magento 1:** `cobby_import_product.updateBundleOptions`

**Magento 2:** None

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_bundleoption_import_before | Triggered before bundle option update |
| cobby_import_product_bundleoption_import_after | Triggered after bundle option update |

### Import Start

**Available:** cobby 1.41+

**Magento 1:** `cobby_import_product.start`

**Magento 2:** `cobby/import/products/start`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_started | Triggered before cobby starts import |

### Import Finish

**Available:** cobby 1.41+

**Magento 1:** `cobby_import_product.finish`

**Magento 2:** `cobby/import/products/finish`

**Events:**

| Event | Description |
|-------|-------------|
| cobby_import_product_finished | Triggered after cobby finishes import |

## Indexer
---

### Change Indexer Status

**Magento 1:** `cobby_indexer.changeStatus`

**Magento 2:** None

**Events:** None

### Get Indexer Info

**Magento 1:** `cobby_indexer.info`

**Magento 2:** None

**Events:** None

### Export Indexer

**Magento 1:** `cobby_indexer.export`

**Magento 2:** None

**Events:** None

### Reindex Products

**Magento 1:** `cobby_indexer.reindexProducts`

**Magento 2:** None

**Events:** None

## Queue
---

### Export Queue

**Magento 1:** `cobby_queue.export`

**Magento 2:** None

**Events:** None

### Get Max Queue ID

**Magento 1:** `cobby_queue.getMaxQueueId`

**Magento 2:** None

**Events:** None

### Reset Queue

**Magento 1:** `cobby_queue.reset`

**Magento 2:** None

**Events:** None

## Translation
---

### Get Translation

**Magento 1:** `cobby_core_translate.getTranslation`

**Magento 2:** None

**Events:** None

### Get Locales

**Magento 1:** `cobby_core_translate.getLocales`

**Magento 2:** None

**Events:** None

## Debug
---

### Export Debug Info

**Magento 1:** `cobby_core_debug.export`

**Magento 2:** None

**Events:** None

## Related How-To Guides
---

- [Troubleshoot with Postman](/how-to/developers/troubleshoot-with-postman) - Test API requests and debug integration issues
- [Use API Events](/how-to/developers/use-api-events) - Implement event notifications for custom extensions

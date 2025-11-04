---
sidebar_position: 3
title: How to Use cobby API Events and Observers
---

# How to Use cobby API Events and Observers

Learn how to extend cobby functionality by hooking into API events and creating custom observers for your Magento extensions.

## Prerequisites

- Magento 1.x or Magento 2.x
- cobby extension installed (version 1.38.1.1 or higher recommended)
- PHP knowledge for observer development
- Understanding of Magento event/observer pattern

## Overview

cobby provides API events that you can hook into to:
- Manipulate data before import
- Modify export behavior
- Notify cobby of database changes made by third-party extensions
- Customize product type handling

## Steps

### 1. Set Up Your Extension Structure

Create a custom Magento extension to contain your observers.

**For Magento 1:**
```
app/code/local/YourCompany/CobbyExtended/
├── etc/
│   └── config.xml
└── Model/
    └── Observer.php
```

**For Magento 2:**
```
app/code/YourCompany/CobbyExtended/
├── etc/
│   └── events.xml
└── Observer/
    └── YourObserver.php
```

### 2. Review Example Extensions

Download and study the official example extensions:

**Magento 1:**
```bash
git clone https://github.com/mash2/cobby-magento1-extended
```

**Magento 2:**
```bash
git clone https://github.com/mash2/cobby-magento2-extended
```

### 3. Notify cobby of Database Changes

If your extension writes directly to the Magento database, notify cobby of changes.

**Code Example (Magento 1):**
```php
<?php
// After your extension modifies products
Mage::dispatchEvent('cobby_handle_changes', array(
    'entity' => 'product',
    'action' => 'save',
    'ids' => array(1, 2, 3), // Product IDs that changed
    'context' => 'custom',
    'username' => 'Bob'
));
```

**Code Example (Magento 2):**
```php
<?php
namespace YourCompany\Extension\Observer;

use Magento\Framework\Event\ObserverInterface;

class NotifyCobby implements ObserverInterface
{
    protected $eventManager;

    public function __construct(
        \Magento\Framework\Event\ManagerInterface $eventManager
    ) {
        $this->eventManager = $eventManager;
    }

    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $productIds = [1, 2, 3]; // IDs of modified products

        $this->eventManager->dispatch('cobby_handle_changes', [
            'entity' => 'product',
            'action' => 'save',
            'ids' => $productIds,
            'context' => 'custom',
            'username' => 'System'
        ]);
    }
}
```

**Expected result:** cobby is notified of changes and updates its product data accordingly.

### 4. Hook Into Import Events

Manipulate data before or after import operations.

**Example: Modify Data Before Import**

```php
<?php
// Magento 1 Observer
class YourCompany_CobbyExtended_Model_Observer
{
    public function beforeProductImport(Varien_Event_Observer $observer)
    {
        $products = $observer->getEvent()->getProducts();

        foreach ($products as &$product) {
            // Modify product data before import
            if (isset($product['custom_field'])) {
                $product['custom_field'] = strtoupper($product['custom_field']);
            }
        }

        $observer->getEvent()->setProducts($products);
        return $this;
    }
}
```

**Register in config.xml:**
```xml
<config>
    <global>
        <events>
            <cobby_import_product_import_before>
                <observers>
                    <yourcompany_cobbyextended>
                        <class>yourcompany_cobbyextended/observer</class>
                        <method>beforeProductImport</method>
                    </yourcompany_cobbyextended>
                </observers>
            </cobby_import_product_import_before>
        </events>
    </global>
</config>
```

**Expected result:** Product data is modified according to your custom logic before cobby processes it.

### 5. Hook Into Export Events

Customize how data is exported to cobby.

**Example: Change Attribute Type on Export**

```php
<?php
// Magento 2 Observer
namespace YourCompany\CobbyExtended\Observer;

use Magento\Framework\Event\ObserverInterface;

class ModifyAttributeExport implements ObserverInterface
{
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $attributes = $observer->getEvent()->getAttributes();

        foreach ($attributes as &$attribute) {
            // Change text attribute to dropdown in cobby
            if ($attribute['attribute_code'] == 'custom_field') {
                $attribute['frontend_input'] = 'select';
            }
        }

        $observer->getEvent()->setAttributes($attributes);
    }
}
```

**Register in events.xml:**
```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <event name="cobby_catalog_product_attribute_export_after">
        <observer name="yourcompany_modify_attribute_export"
                  instance="YourCompany\CobbyExtended\Observer\ModifyAttributeExport"/>
    </event>
</config>
```

**Expected result:** Attributes appear with modified properties in cobby.

### 6. Test Your Implementation

1. Install your custom extension
2. Clear all caches
3. Test the specific cobby operation that triggers your event
4. Verify your custom logic executes correctly
5. Check cobby logs and Magento logs for any errors

## Common API Events Reference

### Product Events

**Import Events:**
- `cobby_import_product_import_before` - Before product data import
- `cobby_import_product_import_after` - After product data import
- `cobby_import_product_stock_import_before` - Before stock update
- `cobby_import_product_stock_import_after` - After stock update
- `cobby_import_product_category_import_before` - Before category assignment
- `cobby_import_product_category_import_after` - After category assignment
- `cobby_import_product_media_import_before` - Before media import
- `cobby_import_product_media_import_after` - After media import
- `cobby_import_product_link_import_before` - Before related products import
- `cobby_import_product_link_import_after` - After related products import
- `cobby_import_product_tierprice_import_before` - Before tier price import
- `cobby_import_product_tierprice_import_after` - After tier price import
- `cobby_import_product_started` - Import process started (cobby 1.41+)
- `cobby_import_product_finished` - Import process finished (cobby 1.41+)

**Export Events:**
- `cobby_catalog_product_export_after` - After product export

**Corresponding API Requests:**

| Magento 1 API | Magento 2 API | Purpose |
|---------------|---------------|---------|
| cobby_import_product.importProducts | POST cobby/import/products | Import product data |
| cobby_import_product.updateStock | POST cobby/import/products/stocks | Update stock levels |
| cobby_import_product.updateCategoryAssociations | POST cobby/import/products/categories | Assign categories |
| cobby_import_product.updateMedia | POST cobby/import/products/media | Import media files |
| cobby_import_product.updateTierPrices | POST cobby/import/products/tierPrices | Import tier prices |

### Attribute Events

- `cobby_catalog_product_attribute_export_after` - Modify attribute properties
- `cobby_catalog_product_attribute_option_export_after` - Modify attribute options

**Corresponding API Requests:**

| Magento 1 API | Magento 2 API | Purpose |
|---------------|---------------|---------|
| cobby_catalog_product_attribute.export | GET cobby/product/attributes | Export attributes |
| cobby_catalog_product_attribute_option.export | GET cobby/product/attribute/options | Export attribute options |

### Configuration Events

**Note:** Most configuration exports do not trigger events.

| Magento 1 API | Magento 2 API | Purpose |
|---------------|---------------|---------|
| cobby_core_website.export | GET cobby/store/websites | Export websites |
| cobby_core_store.export | GET cobby/store/storeViews | Export store views |
| cobby_catalog_category.export | GET cobby/categories | Export category tree |

## Event Pattern Naming

Events follow this pattern:
- `cobby_import_[entity]_[operation]_import_before` - Before data manipulation
- `cobby_import_[entity]_[operation]_import_after` - After data rendered

Where:
- `[entity]` = product, category, attribute, etc.
- `[operation]` = stock, category, media, link, etc.

## Troubleshooting

**Observer not executing?**
- Clear Magento cache: `rm -rf var/cache/*`
- Verify event name matches exactly (case-sensitive)
- Check observer is registered in `config.xml` or `events.xml`
- Add logging to confirm event fires: `Mage::log('Observer executed', null, 'cobby.log')`

**Data modifications not appearing in cobby?**
- Ensure you modify the reference, not a copy of the data
- Use `setData()` or reference modification (`&$variable`)
- Check event fires at correct time (before vs after)

**Compatibility issues after cobby update?**
- cobby 1.38.1.1+ uses different API naming
- Update observers to check for both old and new event names
- Review changelog for breaking changes

**Changes not persisting in Magento?**
- Verify `_after` events save changes correctly
- Check for conflicting observers from other extensions
- Review Magento logs: `var/log/system.log`

## Code Examples

### Complete Extension Example

**Magento 2 Custom Extension:**

```php
<?php
// app/code/YourCompany/CobbyExtended/Observer/CustomProductHandler.php

namespace YourCompany\CobbyExtended\Observer;

use Magento\Framework\Event\ObserverInterface;
use Psr\Log\LoggerInterface;

class CustomProductHandler implements ObserverInterface
{
    protected $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $this->logger->info('cobby import started');

        $products = $observer->getEvent()->getProducts();

        foreach ($products as $key => &$product) {
            // Custom logic: Set default value if missing
            if (!isset($product['custom_attribute'])) {
                $product['custom_attribute'] = 'default_value';
            }

            // Custom logic: Validate SKU format
            if (isset($product['sku']) && !$this->isValidSku($product['sku'])) {
                $this->logger->error('Invalid SKU: ' . $product['sku']);
                unset($products[$key]); // Skip invalid products
            }
        }

        $observer->getEvent()->setProducts($products);
    }

    protected function isValidSku($sku)
    {
        return preg_match('/^[A-Z]{2}-[0-9]{6}$/', $sku);
    }
}
```

**events.xml:**
```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <event name="cobby_import_product_import_before">
        <observer name="yourcompany_custom_product_handler"
                  instance="YourCompany\CobbyExtended\Observer\CustomProductHandler"/>
    </event>
</config>
```

## Related Documentation

- [How to Handle Custom Product Types](/how-to/developers/handle-custom-product-types)
- [How to Troubleshoot with Postman](/how-to/developers/troubleshoot-with-postman)
- [Third Party Extension Compatibility](/explanation/for-developers/third-party-extensions)
- [Magento 2 Event List](https://developer.adobe.com/commerce/php/development/components/events-and-observers/)

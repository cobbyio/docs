---
sidebar_position: 1
title: How to Handle Custom Product Types
---

# How to Handle Custom Product Types

Learn how to integrate custom product types with cobby by converting them to standard Magento types during import and reverting them during export.

## Prerequisites

- Magento 1 or Magento 2 installed
- cobby extension installed and configured
- PHP knowledge for extension customization
- Access to your Magento codebase

## Overview

Custom product types need special handling in cobby. This guide shows you how to create an extension that:
- Converts custom product types to standard Magento types during import
- Reverts to custom types during export
- Maintains product data integrity throughout the process

## Steps

### 1. Download the Example Extension

Choose the extension matching your Magento version:

**For Magento 1:**
```bash
git clone https://github.com/mash2/cobby-magento1-custom-product-type
```

**For Magento 2:**
```bash
git clone https://github.com/mash2/cobby-magento2-custom-product-type
```

### 2. Configure Your Custom Product Types

Open the extension files and locate the commented configuration sections. Update these parameters:

```php
// Define your custom product type
const CUSTOM_PRODUCT_TYPE = 'your_custom_type';

// Map to standard Magento type
const MAGENTO_PRODUCT_TYPE = 'simple'; // or 'configurable', 'virtual', etc.

// Set recognition triggers
const TYPE_ATTRIBUTE = 'your_trigger_attribute';
```

### 3. Install the Extension

**For Magento 1:**
1. Copy the extension to `app/code/local/` or `app/code/community/`
2. Copy the XML file to `app/etc/modules/`
3. Clear cache: `rm -rf var/cache/*`

**For Magento 2:**
```bash
composer require your-vendor/custom-product-type-extension
php bin/magento setup:upgrade
php bin/magento cache:clean
```

### 4. Test the Integration

1. Create or edit a product with your custom product type in Magento
2. Open cobby and verify the product appears with the mapped Magento type
3. Make changes in cobby and save
4. Verify the product retains its custom type in Magento after import

**Expected result:** Products with custom types are visible and editable in cobby, with type conversions happening transparently.

## Code Example

Here's a simplified example of the type conversion logic:

```php
<?php
namespace YourVendor\CustomType\Observer;

class ConvertProductType implements ObserverInterface
{
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $product = $observer->getEvent()->getProduct();

        // During export to cobby
        if ($product->getTypeId() == 'your_custom_type') {
            $product->setTypeId('simple');
        }

        return $this;
    }
}
```

## Troubleshooting

**Custom products not appearing in cobby?**
- Verify the extension is installed: Check `System > Configuration > Advanced`
- Clear all caches in both Magento and cobby
- Check error logs: `var/log/system.log` and `var/log/exception.log`

**Product type changes not persisting?**
- Ensure the revert logic is implemented for imports
- Verify your trigger attributes are set correctly
- Check that the observer events are properly registered

**Type conflicts after import?**
- Review the mapping configuration
- Ensure custom attributes are preserved during conversion
- Check for conflicting type-specific attributes

## Related Documentation

- [cobby API Requests and Events](/how-to/developers/use-api-events)
- [Third Party Extension Compatibility](/explanation/for-developers/third-party-extensions)
- Extend cobby Functionality (coming soon)

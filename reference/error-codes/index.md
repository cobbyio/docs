---
sidebar_position: 0
title: Error Codes Overview
---

# Error Codes Reference

This reference lists all error codes you may encounter when working with cobby. Error codes are grouped by topic to help you find the right solution quickly. Alternatively, browse the complete alphabetical list of error codes in the sidebar, or use the search function to find specific errors.

:::tip
cobby's Error Assistant can automatically guide you to the right error code documentation when errors occur.
:::

## Error Categories

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2rem'}}>

<div style={{backgroundColor: '#e3f2fd', borderRadius: '8px', padding: '1.25rem', border: '1px solid #bbdefb'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Configurable Products</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with configurable products, assignments, and super attributes</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/ConfigurableAssignment">ConfigurableAssignment</a></li>
<li><a href="/reference/error-codes/ConfigurableProductAssignedAttributeSetTypeNotSupported">ConfigurableProductAssignedAttributeSetTypeNotSupported</a></li>
<li><a href="/reference/error-codes/ConfigurableProductAssignedDuplicates">ConfigurableProductAssignedDuplicates</a></li>
<li><a href="/reference/error-codes/ConfigurableProductAssignedProductAttributeIsEmpty">ConfigurableProductAssignedProductAttributeIsEmpty</a></li>
<li><a href="/reference/error-codes/ConfigurableProductAssignedProductNotFound">ConfigurableProductAssignedProductNotFound</a></li>
<li><a href="/reference/error-codes/ConfigurableProductAssignedProductTypeNotSupported">ConfigurableProductAssignedProductTypeNotSupported</a></li>
<li><a href="/reference/error-codes/ConfigurableProductPriceAdjustmentNeeded">ConfigurableProductPriceAdjustmentNeeded</a></li>
<li><a href="/reference/error-codes/SuperAttributeCodesRequired">SuperAttributeCodesRequired</a></li>
<li><a href="/reference/error-codes/UnsupportedSuperAttributeCodes">UnsupportedSuperAttributeCodes</a></li>
</ul>
</div>

<div style={{backgroundColor: '#e8f5e9', borderRadius: '8px', padding: '1.25rem', border: '1px solid #c8e6c9'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Prices & Tier Prices</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with pricing, tier prices, and group prices</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/DuplicateTierPrice">DuplicateTierPrice</a></li>
<li><a href="/reference/error-codes/GroupPriceLower1">GroupPriceLower1</a></li>
<li><a href="/reference/error-codes/StaffelmengeKleiner1">StaffelmengeKleiner1</a></li>
<li><a href="/reference/error-codes/TierPrice0">TierPrice0</a></li>
<li><a href="/reference/error-codes/TierPriceIsToHigh">TierPriceIsToHigh</a></li>
</ul>
</div>

<div style={{backgroundColor: '#fff3e0', borderRadius: '8px', padding: '1.25rem', border: '1px solid #ffe0b2'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Media & Images</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with uploads, imports, and image paths</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/BildpfadUng%C3%BCltig">BildpfadUngültig</a></li>
<li><a href="/reference/error-codes/FileNotDownloaded">FileNotDownloaded</a></li>
<li><a href="/reference/error-codes/FileNotFoundInMediaImportFolder">FileNotFoundInMediaImportFolder</a></li>
<li><a href="/reference/error-codes/MediaCatalogProductFolderIsNotWritable">MediaCatalogProductFolderIsNotWritable</a></li>
<li><a href="/reference/error-codes/MediaImportFolderIsNotWritable">MediaImportFolderIsNotWritable</a></li>
<li><a href="/reference/error-codes/MissingMediaImportFolder">MissingMediaImportFolder</a></li>
</ul>
</div>

<div style={{backgroundColor: '#ffebee', borderRadius: '8px', padding: '1.25rem', border: '1px solid #ffcdd2'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Duplicates & Uniqueness</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with duplicate values that must be unique</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/DuplicateAttributeOption">DuplicateAttributeOption</a></li>
<li><a href="/reference/error-codes/DuplicateCustomerGroupEntry">DuplicateCustomerGroupEntry</a></li>
<li><a href="/reference/error-codes/DuplicateSKU">DuplicateSKU</a></li>
<li><a href="/reference/error-codes/DuplicateUrlKey">DuplicateUrlKey</a></li>
</ul>
</div>

<div style={{backgroundColor: '#f3e5f5', borderRadius: '8px', padding: '1.25rem', border: '1px solid #e1bee7'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Attributes & Options</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with attributes, dropdown options, and text fields</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/AttributeIsNotSupportedInProductType">AttributeIsNotSupportedInProductType</a></li>
<li><a href="/reference/error-codes/DropdownOptionMissing">DropdownOptionMissing</a></li>
<li><a href="/reference/error-codes/NewOptionAdded">NewOptionAdded</a></li>
<li><a href="/reference/error-codes/NewOptionHasSpaces">NewOptionHasSpaces</a></li>
<li><a href="/reference/error-codes/TextAttributeToLong">TextAttributeToLong</a></li>
</ul>
</div>

<div style={{backgroundColor: '#e0f7fa', borderRadius: '8px', padding: '1.25rem', border: '1px solid #b2ebf2'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Validation & Format</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with required fields, formats, and data types</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/IsRequired">IsRequired</a></li>
<li><a href="/reference/error-codes/MagentoValidation">MagentoValidation</a></li>
<li><a href="/reference/error-codes/SkuIsToLong">SkuIsToLong</a></li>
<li><a href="/reference/error-codes/WrongDate">WrongDate</a></li>
<li><a href="/reference/error-codes/WrongNumber">WrongNumber</a></li>
<li><a href="/reference/error-codes/WrongWeight">WrongWeight</a></li>
<li><a href="/reference/error-codes/Neues%20Produkt%20zu%20validierende%20Spalte%20ausgeblendet">Neues Produkt zu validierende Spalte ausgeblendet</a></li>
</ul>
</div>

<div style={{backgroundColor: '#fffde7', borderRadius: '8px', padding: '1.25rem', border: '1px solid #fff9c4'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Products & Categories</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with product types, categories, and product operations</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/CategoryNotFound">CategoryNotFound</a></li>
<li><a href="/reference/error-codes/ChangeProductTypeIsNotSupported">ChangeProductTypeIsNotSupported</a></li>
<li><a href="/reference/error-codes/ProductDeleted">ProductDeleted</a></li>
<li><a href="/reference/error-codes/ProductTypeNotSupported">ProductTypeNotSupported</a></li>
<li><a href="/reference/error-codes/Product%20Group%20ein%20nicht%20simple%20hinzugef%C3%BCgt">Product Group ein nicht simple hinzugefügt</a></li>
</ul>
</div>

<div style={{backgroundColor: '#eceff1', borderRadius: '8px', padding: '1.25rem', border: '1px solid #cfd8dc'}}>
<h3 style={{marginTop: 0, color: '#000'}}>Website & Store</h3>
<p style={{fontSize: '0.9rem', color: '#555'}}>Errors with websites, store views, and inventory</p>
<ul style={{paddingLeft: '1.25rem', marginBottom: 0}}>
<li><a href="/reference/error-codes/AdminWebsiteRemoved">AdminWebsiteRemoved</a></li>
<li><a href="/reference/error-codes/DeletedWebsiteAssignedOrRemoved">DeletedWebsiteAssignedOrRemoved</a></li>
<li><a href="/reference/error-codes/InventorySkipped">InventorySkipped</a></li>
<li><a href="/reference/error-codes/UseDefaultNotSupported">UseDefaultNotSupported</a></li>
</ul>
</div>

</div>

---

## Related Resources

- [Error Assistant](/explanation/features/error-assistant) - Understand how cobby helps you resolve errors
- [Job History](/explanation/features/job-history) - Track and review all save operations
- [Troubleshooting Guides](/how-to/troubleshooting) - Step-by-step solutions for common issues

---

:::info Need More Help?
If you can't resolve an error using this reference, check our [troubleshooting guides](/how-to/troubleshooting) or contact cobby support.
:::

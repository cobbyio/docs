---
sidebar_position: 3
title: Custom Product Types
---

# Custom Product Types

Magento/Adobe Commerce supports multiple product types out of the box (simple, configurable, grouped, bundle, virtual, downloadable). Some stores extend this with custom product types to handle specialized business requirements. Understanding how cobby handles these custom types is essential for maintaining data integrity during synchronization.

## The Product Type Challenge
---

Custom product types present a unique architectural challenge for cobby because:

- cobby operates outside of Magento's runtime environment (in Excel)
- Custom product types may have special logic or validation rules
- Product type determines available attributes and behavior
- Type transformations must be reversible (import and export)

## Type Transformation Architecture
---

When working with custom product types, cobby uses a transformation pattern:

1. **During Export** (Magento → cobby): Custom types may be transformed into standard Magento types that cobby understands
2. **During Import** (cobby → Magento): Transformed types are reverted back to their original custom types

This transformation preserves data integrity while enabling cobby to work with products it wouldn't otherwise recognize.

## Why Transformation Is Necessary
---

cobby needs to transform custom product types because:

- **Attribute availability**: Product type determines which attributes are editable
- **Validation rules**: Different types have different validation requirements
- **UI behavior**: Excel templates are generated based on known product types
- **Data structure**: Custom types might have non-standard data relationships

By temporarily mapping custom types to standard types, cobby can:
- Present appropriate attributes for editing
- Apply correct validation logic
- Generate proper Excel templates
- Maintain relationships correctly

## Type Detection and Recognition
---

The transformation system needs to:

1. **Identify** custom product types during export
2. **Map** them to appropriate standard types for cobby processing
3. **Track** the original type for restoration
4. **Restore** the original custom type during import

This tracking mechanism ensures that products maintain their custom types even after being edited in cobby.

## Architectural Trade-offs
---

### Advantages of Transformation

- Enables cobby to work with custom types without hardcoding support for every possible custom type
- Maintains standard cobby features (filtering, validation, templates)
- Doesn't require cobby code changes for each custom type
- Preserves all standard product data

### Limitations to Consider

- Custom type-specific business logic may not execute during cobby edits
- Type-specific validation may be bypassed
- Custom attributes unique to the type may not be editable in cobby
- Complex type-dependent relationships might need special handling

## Implementation Approaches
---

There are two primary approaches to custom product type support:

### Extension-Based Transformation

Create a Magento extension that:
- Observes cobby export events to transform types
- Observes cobby import events to restore types
- Defines mapping rules (custom type ↔ standard type)
- Implements detection logic

This approach is modular and maintainable, with clear separation of concerns.

### Direct Integration

For highly specialized custom types, direct integration into cobby might be more appropriate when:
- The custom type requires unique UI elements
- Type-specific validation is critical
- Complex workflows depend on the type
- Multiple stores use the same custom type

## Example: Custom Type Mapping
---

Consider a hypothetical "Rental" product type:

```
Custom Type: "rental"
Mapped Type: "simple" (for cobby processing)
Detection Trigger: Product has rental-specific attributes or categories
```

During export:
- cobby sees "simple" type products
- Can edit all standard simple product attributes
- Rental-specific logic doesn't interfere

During import:
- Extension detects products that were originally "rental"
- Converts type back to "rental"
- Magento's rental type logic takes over

## Technical Considerations

### Type Persistence

The system must reliably:
- Remember which products were originally custom types
- Handle partial exports/imports correctly
- Avoid type mismatches on re-export
- Clean up tracking data appropriately

### Attribute Management

Consider:
- Which attributes should be editable in cobby?
- Do custom type attributes conflict with standard attributes?
- How do required attributes differ between types?
- What happens if type-specific validation fails?

### Performance Impact

Type transformation adds minimal overhead because:
- It operates only during export/import
- Uses Magento's event system efficiently
- Doesn't affect cobby's core processing
- Scales with the number of affected products, not total catalog size

## When to Use Type Transformation

Use type transformation when:
- You have custom product types not natively supported by cobby
- The custom type is similar enough to a standard type for attribute compatibility
- You want to enable bulk editing of products with custom types
- Type-specific business logic can be deferred until after cobby import

Consider direct integration when:
- Custom type has fundamentally different attributes or structure
- Real-time validation is critical
- UI requirements differ substantially from standard types
- Multiple stores share the same custom type implementation

## Extension Resources

Reference implementations are available for:
- [Magento 1 custom product type support](https://github.com/mash2/cobby-magento1-custom-product-type)
- [Magento 2 custom product type support](https://github.com/mash2/cobby-magento2-custom-product-type)

These extensions demonstrate the transformation pattern and provide a foundation for your own custom type support.

## Related Topics

To understand how standard product types work in cobby:

- [Configurable Products](/explanation/product-types/configurable-products) - Understanding parent-child product relationships
- [Simple Products](/explanation/product-types/simple-products) - The foundation of all product types
- [Grouped Products](/explanation/product-types/grouped-products) - Presentational product collections
- [Bundle Products](/explanation/product-types/bundle-products) - Customer-customizable product sets
- [Virtual Products](/explanation/product-types/virtual-products) - Non-physical products without shipping
- [Downloadable Products](/explanation/product-types/downloadable-products) - Digital products with file delivery


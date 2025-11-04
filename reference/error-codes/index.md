---
sidebar_position: 0
title: Error Codes Overview
---

# Error Codes Reference

This reference lists all error codes you may encounter when working with cobby. Each error code includes the error message, a description of what causes it, and how to resolve it.

## How to Use This Reference

When cobby displays an error:

1. **Note the error code** or error message
2. **Find the error** in the list below or use the search function
3. **Read the description** to understand what went wrong
4. **Follow the solution** to fix the problem

:::tip
cobby's Error Assistant can automatically guide you to the right error code documentation when errors occur.
:::

## Error Categories

### Product Errors
Errors related to product data validation and conflicts:

- [DuplicateSKU](/reference/error-codes/DuplicateSKU) - SKU already exists in the system
- [DuplicateUrlKey](/reference/error-codes/DuplicateUrlKey) - URL key is not unique
- And more product-related errors...

### Price Errors
Errors related to pricing and tier prices:

- [DuplicateTierPrice](/reference/error-codes/DuplicateTierPrice) - Duplicate tier price definition
- And more pricing errors...

### Attribute Errors
Errors related to attributes and attribute options:

- [DuplicateAttributeOption](/reference/error-codes/DuplicateAttributeOption) - Attribute option already exists
- And more attribute errors...

### Customer Group Errors
Errors related to customer groups and pricing:

- [DuplicateCustomerGroupEntry](/reference/error-codes/DuplicateCustomerGroupEntry) - Customer group entry is duplicated
- And more customer group errors...

## Common Error Patterns

### Duplicate Errors
Most "Duplicate" errors occur when you try to create or modify a value that must be unique:

- **SKU** must be unique across all products
- **URL keys** must be unique within the same store view
- **Tier prices** must have unique qty/customer group combinations

**General solution:** Make values unique or use the filter to find existing entries.

### Validation Errors
Validation errors occur when data doesn't match expected formats or rules:

- Text is too long
- Numbers are in the wrong format
- Required fields are empty

**General solution:** Check the specific error for format requirements.

### Conflict Errors
Conflict errors happen when changes can't be applied due to system state:

- Product is locked by another process
- Attribute set doesn't support the attribute
- Store view configuration conflicts

**General solution:** Check related documentation for the specific conflict type.

## All Error Codes

Browse the complete alphabetical list of error codes in the sidebar, or use the search function to find specific errors quickly.

## Related Resources

- [Error Assistant Feature](/explanation/features/error-assistant) - Understand how cobby helps you resolve errors
- [Job History](/explanation/features/job-history) - Track and review all save operations
- [Troubleshooting Guides](/how-to/troubleshooting) - Step-by-step solutions for common issues

---

:::info Need More Help?
If you can't resolve an error using this reference, check our [troubleshooting guides](/how-to/troubleshooting) or contact cobby support.
:::

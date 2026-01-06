---
title: How to Reset Store View Values to Defaults
description: Learn how to reset store view-specific attribute values back to their default values in cobby using the Reset Product function.
---

# How to Reset Store View Values to Defaults

When working with multi-store Magento setups, you can override default attribute values for specific store views. This guide shows you how to revert store view-specific values back to their defaults in cobby.

This function works similarly to Magento's "Use Default Value" checkbox and is essential when you need to remove store view-specific customizations.

---

## Reset a Single Cell to Default

Use this method when you need to reset one attribute value for one product in a specific store view.

1. Select the cell containing the store view-specific value you want to reset.

2. Click the **dropdown arrow** on the lower part of the **Reset Product** button in the cobby toolbar.

3. Select **Reset standard value** from the menu.

   → The cell is overwritten with the code `[Use Default Value]`.

4. Click **Save products** in the cobby toolbar to save your changes.

   → The product row will display a red status indicator after saving. This is normal behavior as it simply indicates that the data in Excel needs to be refreshed to match what's now in Magento.

5. Click **Load products** to refresh the data and resolve the red status.

   → The cell now displays the default value instead of the store view-specific override.

---

## Reset Multiple Cells to Default (Bulk Operation)

When you need to reset multiple attributes or products at once, cobby allows you to apply the default value reset to multiple cells simultaneously.

1. Select multiple cells across any combination of:
   - Multiple attributes for a single product
   - A single attribute for multiple products
   - Multiple attributes for multiple products

2. Click the **dropdown arrow** on the **Reset Product** button.

3. Select **Reset standard value**.

   → All selected cells are overwritten with `[Use Default Value]`.

4. Click **Save products** to save the changes.

5. Click **Load products** to refresh and display the actual default values.

:::info
This bulk operation is particularly useful when restructuring store view configurations or reverting a batch of customizations.
:::

---

## Understanding the Reset Process

**What happens when you reset to default:**

- The store view-specific value is removed from Magento
- The attribute inherits its value from the default scope
- Changes are visible in both cobby and Magento admin
- The `[Use Default Value]` code is a temporary placeholder until you reload

**When to use this function:**

- Removing store view-specific customizations
- Standardizing attribute values across store views
- Correcting accidental store view overrides
- Simplifying multi-store maintenance

---

## Troubleshooting

<details>
<summary>**The cell still shows `[Use Default Value]` after saving?**</summary>

You need to click **Load products** to refresh the data. The placeholder code is replaced with the actual default value during the load operation.

</details>

<details>
<summary>**The default value is not what I expected?**</summary>

The reset function uses the value from the default scope in Magento. If the default value is incorrect, you need to:
1. Switch to the default store view in cobby
2. Update the value there
3. Save and reload

</details>

<details>
<summary>**Can I undo a reset operation?**</summary>

Before saving, you can use Excel's Undo function (Ctrl+Z). After saving to Magento, you would need to manually re-enter the store view-specific value.

</details>

---

## Related Topics

- [Store Views](/explanation/architecture/store-views) - Understanding how Store Views enable multi-language and multi-region e-commerce
- [How to Filter Product Data](/how-to/product-management/filter-product-data) - Filtering products by Store View to work more efficiently

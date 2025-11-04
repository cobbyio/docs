---
sidebar_position: 2
title: How to Delete Products
---

# How to Delete Products

cobby uses a two-stage approach to delete products safely. Mark products for deletion in cobby, then complete the deletion in Magento.

## Prerequisites

- Products loaded in cobby
- Access to Magento backend

## Steps

1. In cobby, locate the products you want to delete.

2. Change the "Name" attribute of each product to "Delete me".

3. Click "Save products" in cobby to sync the changes to Magento.

4. Log in to your Magento backend.

5. Navigate to the product catalog.

6. Use the product search to filter by name "Delete me".

7. Click "Select all" to select all products with this name.

8. Open the action dropdown menu and select "Delete".

9. Click "Submit" to delete all selected products.

## Why Two Stages?

This deliberate two-stage process (cobby + Magento) ensures you make conscious decisions before permanently deleting products. The extra step in Magento provides a safety checkpoint before removing products from your store.

## Alternative Approaches

You can use any unique identifier instead of "Delete me":
- A specific date: "DELETE-2024-11-04"
- A category name: "REMOVE-discontinued"
- Any text that helps you identify the deletion batch

The key is choosing a value that won't accidentally match other products.

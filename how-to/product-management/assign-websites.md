---
sidebar_position: 3
title: How to Assign Products to Websites
---

# How to Assign Products to Websites

Assign or remove products from specific websites in your Magento multi-website setup.

## Prerequisites

- Products loaded in cobby
- Multiple websites configured in Magento

## Assign a Single Product

1. Navigate to the "Website - Storeview" cell of the product you want to modify.

2. Click the globe icon in the cobby Task Pane.

   ![](/img/website-assignments-in-cobby/pic1.png)

3. Check the box to add a website or uncheck the box to remove a website.

   You can either add or remove a website in one operation, not both simultaneously.

4. Click "Apply".

5. Click "Save products" to save the changes.

**Note**: Website assignments only display in the Task Pane when a single product is selected. When multiple products are selected, the Task Pane will not show current assignments.

## Assign Multiple Products (Bulk Actions)

1. Select the "Website - Storeview" cells of all products you want to modify.

2. Click the globe icon in the cobby Task Pane.

   ![](/img/website-assignments-in-cobby/pic2.png)

3. Check the box for the website you want to add or uncheck it to remove.

   You can either add or remove a website in one operation, not both simultaneously.

   ![](/img/website-assignments-in-cobby/pic3.png)

4. Select the appropriate bulk action from the dropdown menu:
   - "Add websites" to assign the selected website
   - "Remove websites" to unassign the selected website

5. Click "Apply".

6. Click "Save products" to save the changes.

## Troubleshooting

### Changes Not Reflected After Saving
Ensure you clicked "Apply" before clicking "Save products". The Apply button confirms your website selection before syncing to Magento.

### Cannot Select Multiple Actions
cobby only allows one action per operation. To both add and remove websites, perform two separate operations:
1. First operation: Add the needed websites
2. Second operation: Remove the unwanted websites

---
sidebar_position: 5
title: How to Handle Unfilled Required Fields
---

# How to Handle Unfilled Required Fields

When saving products in cobby, empty required fields can block the save operation. Use column hiding to work around this issue temporarily.

## Prerequisites

- Products loaded in cobby
- cobby Error Task Pane visible (appears automatically when save fails)

## Problem

You attempt to save product changes in cobby, but an unfilled required field prevents saving. The cobby Error Task Pane displays an error message indicating which field is causing the issue.

![](/img/working-around-unfilled-required-fields-when-saving-in-cobby/pic1.png)

## Solution

1. Click the eye icon in the Error Task Pane to jump to the field causing the error.

2. Click on the column header to select the entire column.

   The cursor should turn into a downward pointing arrow:

   ![](/img/working-around-unfilled-required-fields-when-saving-in-cobby/pic2.png)

3. Right-click on the column header.

4. Select "Hide" from the context menu.

   ![](/img/working-around-unfilled-required-fields-when-saving-in-cobby/pic3.png)

5. Click "Save products" again.

   ![](/img/working-around-unfilled-required-fields-when-saving-in-cobby/pic4.png)

## Important Notes

### System Attributes Cannot Be Hidden
System attributes (SKU, Admin-Key, etc.) cannot be hidden because cobby needs them for unique product identification and the save process.

### Hidden Fields Are Ignored
When you hide a column, cobby ignores that field during the save operation. This allows you to save changes to other fields without filling the hidden required field.

### Fill Required Fields Later
This is a temporary workaround. Fill the required field values when you have the necessary information, then unhide the column to save complete product data.

## Troubleshooting

### Cannot Hide Column
If you cannot hide a column, it may be a system attribute that cobby requires for product identification. These fields must remain visible.

### Multiple Required Fields Empty
If multiple required fields are empty, repeat the hiding process for each field causing errors. You can hide multiple columns before clicking "Save products".

### Need to Unhide Columns
To unhide columns:
1. Right-click on any column header
2. Select "Unhide" from the context menu
3. Choose which columns to make visible again

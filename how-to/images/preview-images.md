---
sidebar_position: 3
title: How to Preview Product Images While Working
---

# How to Preview Product Images While Working

**Goal:** Display product images in a separate window while editing product data, making it easier to write descriptions and verify image assignments.

## Prerequisites

- Excel with cobby installed
- Products loaded with images
- cobby Task Pane accessible

---

## Enable Image Preview Temporarily

### 1. Select a Product Image

1. Open your Excel workbook with loaded products
2. Navigate to any store view
3. Click on a product's cell in the **Images** column

### 2. Open Image Preview

1. The cobby Task Pane opens on the right side
2. Click on the **picture frame icon** in the Task Pane

![](/img/image-preview-in-cobby/pic1.png)

### 3. Use the Preview Window

1. A new window opens displaying the product's images
2. The window stays on top of other windows
3. Switch to different products - images update automatically
4. Use arrow buttons to navigate through multiple images

---

## Enable Image Preview Permanently

### 1. Access Settings

1. Click on a product's **Images** column cell
2. In the cobby Task Pane, click the **cogwheel icon**
3. Check the option **"Always show Image Preview"**

![](/img/image-preview-in-cobby/pic2.png)

### 2. Save and Apply

1. Click **Save** in the settings dialog
2. Click **Reload products** in cobby
3. The Image Preview window opens automatically

![](/img/image-preview-in-cobby/pic3.png)

### 3. Disable When Done

To turn off permanent preview:
1. Open cobby Task Pane
2. Click the cogwheel icon
3. Uncheck "Always show Image Preview"
4. Click **Save**

---

## Working with Image Preview

### Navigate Images

- Use **arrow buttons** to move between images
- Images display in order of their position
- Click on any product to see its images immediately

### Write Descriptions

1. Open Image Preview window
2. Select the product's description cell
3. View the image while writing
4. Switch between products without closing the preview

### Verify Image Assignments

1. Navigate through products using arrow keys
2. Check that correct images are assigned
3. Verify image quality and content
4. Confirm image order and roles

---

## Use Cases

### ✍️ Bulk Description Writing

1. Enable permanent Image Preview
2. Navigate through products row by row
3. Write descriptions while viewing each product image
4. Save time by not switching contexts

### 🔍 Image Quality Control

1. Open Image Preview
2. Review each product systematically
3. Note products requiring new images
4. Verify image resolution and clarity

### 📁 Category Assignment

1. View product images while assigning categories
2. Make informed categorization decisions
3. Ensure products are in appropriate categories

### ✅ Product Data Verification

1. Cross-reference images with product attributes
2. Verify color, size, and style attributes match images
3. Identify mismatched or incorrect data

---

## Troubleshooting

<details>
<summary>**Image Preview not opening**</summary>

- Verify images are assigned to the product
- Check that cobby Task Pane is open
- Try clicking directly on the picture frame icon

</details>

<details>
<summary>**Images not displaying (Magento 2)**</summary>

- This is expected behavior for Magento 2
- media/import folder is protected via .htaccess
- Images cannot be displayed in preview
- Image import still works normally

</details>

<details>
<summary>**Preview window disappears**</summary>

- Check if window is minimized to taskbar
- Reopen by clicking picture frame icon in Task Pane
- If permanently enabled, reload products

</details>

<details>
<summary>**Wrong images showing**</summary>

- Click directly on the product's Images cell
- Wait a moment for images to load
- Verify the correct product row is selected

</details>

<details>
<summary>**Navigation arrows not working**</summary>

- Ensure product has multiple images assigned
- Check that images loaded successfully
- Try reloading the product

</details>

---

## Important Notes

### Magento 2 Limitations

In Magento 2, the media/import folder is protected via .htaccess configuration:
- Images cannot be accessed directly
- Preview feature won't display images
- Image import functionality is **not affected**
- All image operations work normally

### Performance Considerations

- Large images may take time to load
- Multiple previews won't slow down Excel
- Preview window uses minimal system resources
- Close preview if experiencing performance issues


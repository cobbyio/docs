---
sidebar_position: 7
title: How to Store Product Images in Excel
---

# How to Store Product Images in Excel

**Goal:** Manually add and manage product images directly from Excel using the cobby Task Pane, without using formulas.

## Prerequisites

- Excel with cobby installed
- Products loaded in Excel
- Image files accessible on your local computer

## Add Images via Task Pane

### 1. Select Product

1. Open your Excel workbook with loaded products
2. Navigate to the **Images** column
3. Click on the Images cell for the product you want to update

![](/img/store-magento-product-images-in-excel/pic1.png)

The cobby Task Pane opens on the right side, showing currently assigned images.

### 2. Add New Image

1. In the cobby Task Pane, click the **Add** button
2. A file browser window opens
3. Navigate to your image file location
4. Select the image file(s) you want to add
5. Click **Open**

![](/img/store-magento-product-images-in-excel/pic2.png)

### 3. Automatic Upload

- Images are automatically uploaded in the background
- Upload progress may be shown briefly
- Images are prepared for Magento sync
- No manual upload step required

### 4. Save to Magento

1. Review the images in the Task Pane
2. Click **Save products** in cobby toolbar
3. Images are immediately stored in Magento
4. Images become available in your store

## Copy Images Between Products

### Scenario

Multiple products share the same image (e.g., shoes from the same manufacturer with different sizes or colors).

### Steps

#### 1. Filter Products

1. Navigate to your products worksheet
2. Apply a filter to the relevant column (e.g., Manufacturer)
3. Select the value to filter by (e.g., "Nike")

![](/img/store-magento-product-images-in-excel/pic3.png)

#### 2. Add Image to First Product

1. Click the Images cell for the first filtered product
2. Use the **Add** button in Task Pane
3. Select and add the shared image
4. Verify the image appears in the Task Pane

#### 3. Copy Image to Other Products

1. Click on the Images cell with the newly added image
2. Copy the cell (Ctrl+C)
3. Select the Images cells for other filtered products
4. Paste (Ctrl+V)

The same image is now assigned to all selected products.

#### 4. Save Changes

1. Click **Save products** in cobby
2. All products now have the shared image
3. Verify in Magento admin or frontend

## Use Cases

### Single Image Per Product

**When to use:**
- Quick manual image assignments
- One-off product updates
- Testing image appearance
- Products with unique images

**Steps:**
1. Select product Images cell
2. Click Add in Task Pane
3. Choose image file
4. Save products

### Shared Images Across Products

**When to use:**
- Product variations (size, color)
- Same manufacturer logo/brand image
- Generic category images
- Placeholder images

**Steps:**
1. Add image to one product
2. Copy the Images cell
3. Paste to other products
4. Save products

### Multiple Images Per Product

**When to use:**
- Products requiring multiple views
- Detail shots needed
- Lifestyle and product images
- 360-degree views

**Steps:**
1. Select product Images cell
2. Click Add multiple times
3. Select different images each time
4. Or select multiple files at once
5. Arrange order if needed
6. Save products

## Managing Images in Task Pane

### View Images

- All assigned images appear in the Task Pane
- Images display in their assigned order
- Click on image to select it
- Use preview to verify image quality

### Reorder Images

1. Select an image in the Task Pane
2. Use up/down arrows to change position
3. Position determines frontend display order
4. First image is typically the main product image

### Remove Images

1. Select image in Task Pane
2. Click the **Remove** or **Delete** button
3. Image is removed from product
4. Save products to sync deletion to Magento

### Edit Image Properties

1. Select image in Task Pane
2. Modify properties:
   - Label/Description
   - Image roles (Base, Small, Thumbnail)
   - Exclude from frontend
   - Custom image codes
3. Changes apply immediately in Excel
4. Save products to sync to Magento

## Troubleshooting

**Add button not working**
- Verify product is selected (Images cell is active)
- Check cobby Task Pane is open
- Ensure cobby connection is active
- Try reloading products

**Images not uploading**
- Check file format is supported (JPG, PNG, GIF)
- Verify file size isn't too large
- Check file isn't corrupted
- Review file permissions

**Copied images not pasting**
- Ensure you copied the Images cell, not image preview
- Verify paste destination is also Images column
- Check cell format is compatible
- Try copy-paste on single cell first

**Images not saving to Magento**
- Click Save products button
- Check cobby connection status
- Verify you have permissions to update products
- Review Magento logs for errors

**Wrong images appearing**
- Clear Excel cell and re-add
- Verify correct product selected
- Check image cache in Magento
- Clear browser cache

## Best Practices

### File Organization

**Before adding images:**
1. Organize images in clear folder structure
2. Use consistent naming convention
3. Keep images in easily accessible location
4. Remove old/unused images from folders

### Image Quality

**Optimize images before upload:**
- Use appropriate resolution (72-150 DPI for web)
- Compress images to reduce file size
- Maintain aspect ratios
- Remove unnecessary metadata

### Batch Operations

**For efficiency:**
1. Filter products by relevant criteria
2. Add images to first product
3. Copy to similar products
4. Save once for all changes
5. Reduces repetitive clicking

### Verification

**After adding images:**
1. Review in Task Pane before saving
2. Check image order is correct
3. Verify image roles are set
4. Test in Magento frontend after save
5. Clear cache if images don't appear

## Advanced Tips

### Multiple Images at Once

Select multiple image files in the file browser:
1. Hold Ctrl while clicking files
2. Or Shift+Click for range selection
3. All selected images add to product
4. Order may follow selection order

### Quick Image Replacement

To replace an image:
1. Remove old image from Task Pane
2. Add new image
3. Or use formula method for bulk replacement

### Image Preview

Enable Image Preview feature (see dedicated guide) to view images while working with product data.

### Combine Methods

Mix manual and formula approaches:
- Use formulas for bulk operations
- Use Task Pane for exceptions
- Use copy-paste for shared images
- Use Add button for unique cases

---
sidebar_position: 5
title: How to Manage Image Descriptions
---

# How to Manage Image Descriptions

**Goal:** Add or replace descriptions (labels) for existing product images using cobby formulas and helper columns.

## Prerequisites

- Excel with cobby installed
- Products loaded with existing images
- Understanding of cobby table structure

## Add Image Descriptions

### 1. Create Helper Column

1. Navigate to the **Images** column
2. Right-click on the column header
3. Select **Insert** to create a new column to the right

![](/img/image-description/pic1.png)

### 2. Preserve Original Image Data

1. Select all cells in the **Images** column
2. Copy the contents (Ctrl+C)
3. Paste into the new helper column
4. Delete the contents from the **Images** column

![](/img/image-description/pic2.png)

This preserves your original image data while preparing for the formula.

### 3. Insert the Formula

1. Click on the first cell in the **Images** column
2. Click the **fx** (Insert Function) button
3. Select category: **cobby**
4. Select function: **BILDER.BEZEICHNUNGENERSETZEN** (IMAGES.REPLACELABELS)
5. Click **OK**

![](/img/image-description/pic3.png)

### 4. Configure Function Parameters

In the function dialog:

1. **VERWEIS_AUF_BILDER (Reference to Images):** Click on the helper column cell (e.g., `[@Column1]`)
2. **BEZEICHNUNG (Label):** Select the column to use for labels (e.g., `[@[Product Name]]`)

![](/img/image-description/pic4.png)

### 5. Add Custom Descriptions for Multiple Images

For products with multiple images, add position-based descriptions:

**Formula example:**

```
=BILDER.BEZEICHNUNGENERSETZEN([@Column1];"1:"&[@[Product Name]]&" - Front View";"2:"&[@[Product Name]]&" - Back View")
```

**Breakdown:**
- `[@Column1]` - References the helper column with original image data
- `"1:"` - Position prefix for first image (0-indexed)
- `[@[Product Name]]` - Dynamic product name reference
- `" - Front View"` - Custom text added to label

![](/img/image-description/pic5.png)

### 6. Apply to All Products

1. Select the cell with your formula
2. Double-click the fill handle at the bottom-right corner
3. The formula applies to all products in the table
4. Adjust individual descriptions as needed

### 7. Save Changes

1. Review the updated image descriptions
2. Click **Save products** in cobby
3. Changes sync to Magento

## Replace Image Filenames

### 1. Create Helper Column

1. Navigate to the **Images** column
2. Right-click and select **Insert**

![](/img/image-description/pic6.png)

### 2. Copy Image Data

1. Copy all contents from the **Images** column
2. Paste into the helper column
3. Delete contents from the **Images** column

![](/img/image-description/pic7.png)

### 3. Insert Filename Replace Function

1. Click **fx** button
2. Select category: **cobby**
3. Select function: **BILDER.DATEINAMENERSETZEN** (IMAGES.REPLACEFILENAMES)
4. Click **OK**

![](/img/image-description/pic8.png)

### 4. Configure Parameters

In the function dialog:

1. **Reference to Images:** Select helper column cell
2. **Filename:** Select column with new filenames (e.g., `[@[Product Name]]`)

![](/img/image-description/pic9.png)

### 5. Apply and Review

1. The formula replaces image filenames
2. For multiple images per product, all images receive the same base filename
3. Magento adds numbers automatically (image_1, image_2, etc.)

![](/img/image-description/pic10.png)

**Note:** If multiple images exist, they will all receive the same filename base. Magento automatically appends numbers to differentiate them.

## Use Cases

### SEO-Friendly Image Names

Replace SKU-based filenames with descriptive names:

```
=BILDER.DATEINAMENERSETZEN([@Helper];[@[Product Name]])
```

Result: `24-MB04.jpg` becomes `Blue-Cotton-Shirt.jpg`

### Position-Specific Descriptions

Add different descriptions based on image position:

```
=BILDER.BEZEICHNUNGENERSETZEN([@Helper];
  "0:"&[@[Product Name]]&" - Main Image";
  "1:"&[@[Product Name]]&" - Detail Shot";
  "2:"&[@[Product Name]]&" - Lifestyle Photo")
```

### Brand-Prefixed Descriptions

Include brand information in image labels:

```
=BILDER.BEZEICHNUNGENERSETZEN([@Helper];[@Brand]&" - "&[@[Product Name]])
```

### Category-Based Labels

Add category context to images:

```
=BILDER.BEZEICHNUNGENERSETZEN([@Helper];[@Category]&" - "&[@[Product Name]]&" - View "&[@Position])
```

## Troubleshooting

**Formula not working**
- Verify helper column contains original image data
- Check that cell format is General (not Text)
- Ensure function name matches your Excel language

**All images get same description**
- Use position syntax: `"0:Label"` for individual descriptions
- Without position prefix, all images receive the same label

**Descriptions too long**
- Magento may truncate very long labels
- Keep descriptions concise and meaningful
- Consider using abbreviations

**Changes not appearing in store**
- Click Save products in cobby
- Clear Magento cache
- Check that images are published

**Helper column interfering with layout**
- Keep helper column but hide it:
  - Right-click column header
  - Select "Hide"
- Or delete after verifying formulas work

## Best Practices

### Consistent Naming Convention

Establish a standard format:
- `[Brand] - [Product Name] - [View Type]`
- `[Category] / [Product Name] - [Variation]`
- `[SKU] - [Description] - [Position]`

### Use Cell References

Prefer cell references over hardcoded text:
- Makes formulas reusable across products
- Easier to maintain and update
- Reduces manual typing errors

### Test on Sample Products

Before applying to all products:
1. Test formula on 2-3 products
2. Verify descriptions appear correctly
3. Check Magento frontend display
4. Then apply to entire product catalog

### Document Your Formula

Add a comment to the formula cell:
- Right-click cell
- Select "New Comment"
- Document what the formula does
- Helps future maintenance

### Preserve Helper Columns

Keep helper columns in your workbook:
- Hide them if needed
- Allows easy updates later
- Useful for troubleshooting
- Necessary for formula functionality

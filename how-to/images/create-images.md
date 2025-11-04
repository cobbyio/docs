---
sidebar_position: 2
title: How to Create Images with Full Parameters
---

# How to Create Images with Full Parameters

**Goal:** Use the IMAGE.CREATE function to add a new image with all available parameters including labels, roles, and custom image codes.

## Prerequisites

- Excel with cobby installed
- Image file available locally or via URL
- Understanding of Magento image roles (Base, Small, Thumbnail)

## Understanding IMAGE.CREATE

The `IMAGE.CREATE` (German: `BILD.ERSTELLEN`) function creates a single image with complete control over all parameters.

**Syntax:**

```
=IMAGE.CREATE("File","Label",Exclude,Small,Thumbnail,Base,CustomImageCode1,CustomImageCode2,CustomImageCode3)
```

**Parameters:**

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| File | Text | Local path or URL to image | Yes |
| Label | Text | Image description/alt text | Yes |
| Exclude | TRUE/FALSE | Exclude from frontend | No (default: FALSE) |
| Small | TRUE/FALSE | Set as Small Image role | No (default: FALSE) |
| Thumbnail | TRUE/FALSE | Set as Thumbnail role | No (default: FALSE) |
| Base | TRUE/FALSE | Set as Base Image role | No (default: FALSE) |
| CustomImageCode1-3 | Text | Custom image codes | No |

## Steps

### 1. Locate Your Image

Choose your image source:
- **Local path:** `C:\Users\Name\Pictures\image.jpg`
- **URL:** `https://example.com/images/product.jpg`
- **Magento media/import:** Just filename `image.jpg`

### 2. Build Your Formula

Click on the **Images** column cell and create your formula.

**Basic example (file and label only):**

```
=IMAGE.CREATE("C:\cobby_logo.png";"The cobby logo")
```

**Full example with all parameters:**

```
=IMAGE.CREATE("C:\cobby_logo.png";"The cobby logo";FALSE;TRUE;TRUE;TRUE)
```

![](/img/image-create/pic1.png)

### 3. Understand the Result

After entering the formula, Excel converts it to JSON code:

```json
{
  "file": "C:\\cobby_logo.png",
  "label": "The cobby logo",
  "position": 0,
  "url": "C:\\cobby_logo.png",
  "exclude": false,
  "imageCodes": ["thumbnail", "small_image", "image"]
}
```

### 4. Verify in Task Pane

1. Click on the cell with your image formula
2. The cobby Images Task Pane displays your image configuration

![](/img/image-create/pic2.png)

3. Verify all settings are correct:
   - Image file path
   - Label/description
   - Image roles (Small, Thumbnail, Base)
   - Exclude status

### 5. Save to Magento

1. Click **Save products** in cobby
2. The image is uploaded to Magento
3. The image appears in your store according to the roles assigned

## Common Use Cases

### Set All Image Roles

Make an image the primary image by setting all roles:

```
=IMAGE.CREATE("product.jpg";"Main Product Image";FALSE;TRUE;TRUE;TRUE)
```

### Add Gallery Image Only

Add an additional gallery image without any special roles:

```
=IMAGE.CREATE("product_detail.jpg";"Detail View")
```

### Exclude Image from Frontend

Create an image for internal use only:

```
=IMAGE.CREATE("internal_photo.jpg";"Internal Documentation";TRUE)
```

### Add Custom Image Codes

Use custom image codes for specific purposes:

```
=IMAGE.CREATE("C:\product.jpg";"Product Image";FALSE;TRUE;TRUE;TRUE;"AMAZON";"ZALANDO";"EBAY")
```

This is useful for:
- Marketplace integrations
- Feed generation
- Custom export requirements

## Dynamic Formula Examples

### Use Product Name as Label

```
=IMAGE.CREATE("C:\Images\"&[@SKU]&".jpg";[@[Product Name]])
```

### Set Roles Conditionally

Use IF function to set roles based on conditions:

```
=IMAGE.CREATE([@SKU]&".jpg";"Product Image";FALSE;TRUE;TRUE;[@[Is Main Image]]))
```

### Combine Path Components

```
=IMAGE.CREATE("C:\Images\"&[@Brand]&"\"&[@SKU]&".jpg";[@[Product Name]]&" - "&[@Brand])
```

## Troubleshooting

**Formula shows as text**
- Change cell format to General
- Re-enter the formula

**Image not found error**
- Verify file path is correct
- Check file exists at specified location
- Use double backslashes in paths: `C:\\Images\\`

**Image roles not applied**
- Use TRUE/FALSE (not 1/0)
- Check parameter order matches function syntax
- Verify no missing semicolons between parameters

**JSON conversion failed**
- Check all text parameters are in quotes
- Verify boolean parameters (TRUE/FALSE) are not quoted
- Ensure semicolons separate all parameters

**Image not uploading to Magento**
- Verify cobby connection is active
- Check file format is supported (JPG, PNG, GIF)
- Ensure file isn't corrupted
- Verify file size isn't too large

## Advanced Tips

**Multiple custom image codes:**
Add up to 3 custom codes directly in the formula for integrations.

**Cell references for all parameters:**
Store parameters in separate columns:

```
=IMAGE.CREATE([@[Image Path]];[@[Image Label]];[@Exclude];[@Small];[@Thumbnail];[@Base])
```

**Combine with IMAGES.ADD:**
Use IMAGE.CREATE as the first parameter in IMAGES.ADD for full control of the first image:

```
=IMAGES.ADD(IMAGE.CREATE("image1.jpg";"Main";FALSE;TRUE;TRUE;TRUE);"image2.jpg";"image3.jpg")
```

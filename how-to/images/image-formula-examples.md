---
sidebar_position: 9
title: How to Use Image Formulas - Practical Examples
---

# How to Use Image Formulas - Practical Examples

**Goal:** Learn practical examples of cobby image formulas to efficiently manage product images including adding, replacing filenames, displaying URLs, and setting image roles.

## Prerequisites

- Excel with cobby installed
- Images stored locally or in media/import folder
- Understanding of basic Excel formulas
- Products loaded in Excel

## Assign Single Image

### Basic Syntax

```
=IMAGE.CREATE("imagename.jpg")
```

**Use when:** Image is in Magento's media/import folder and can be referenced by name only.

### Full Syntax with All Parameters

```
=IMAGE.CREATE("Filename";"Description";Exclude;Small;Thumbnail;Base;"ImageCode1";"ImageCode2";"ImageCode3")
```

**Example:**

```
=IMAGE.CREATE("C:\Users\Markus\Pictures\TEST.jpg";"Test Image";FALSE;TRUE;TRUE;TRUE;"AMAZON";"ZALANDO";"EBAY")
```

**Parameters explained:**
- `"C:\Users\Markus\Pictures\TEST.jpg"` - Full path to image
- `"Test Image"` - Image label/description
- `FALSE` - Don't exclude from frontend
- `TRUE;TRUE;TRUE` - Set Small, Thumbnail, and Base roles
- `"AMAZON";"ZALANDO";"EBAY"` - Custom image codes

## Assign Multiple Images

### Basic Syntax

```
=IMAGES.ADD(;"image1.jpg";"image2.jpg")
```

**Note:** First parameter is empty (;) to add to existing images, or reference column with current images.

### With Cell References

Instead of hardcoding filenames, reference columns:

```
=IMAGES.ADD(;[@[Image1 Column]];[@[Image2 Column]])
```

**Use when:**
- Image names stored in separate columns
- Dynamic image assignment based on data
- Combining multiple data sources

## Common Mistakes and Solutions

### Incorrect Image Path

**Problem:** Formula doesn't find images because path is wrong.

**Wrong:**

```
=IMAGE.CREATE("C:\Users\Images"&[@SKU]&".jpg")
```

Missing backslash at end of path.

**Correct:**

```
=IMAGE.CREATE("C:\Users\Images\"&[@SKU]&".jpg")
```

Path ends with `\` before filename.

**Helper Column Method:**

Create a helper column with the base path:
- Column name: "Image Path"
- Value: `C:\Users\Images\`
- Formula: `=IMAGE.CREATE([@[Image Path]]&[@SKU]&".jpg")`

**Key rule:** Valid image path always ends with backslash `\`.

## Change Image Filenames

### Goal

Replace image filenames with SEO-friendly names (e.g., SKU → product name).

### Steps

#### 1. Create Helper Column

1. Right-click Images column header
2. Select **Insert**
3. Name it "Original Images"
4. Copy Images column content to helper column

#### 2. Apply Filename Replace Formula

In the Images column:

```
=IMAGES.REPLACEFILENAMES([@[Original Images]];[@[Product Name]])
```

**Result:**
- Old: `24-MB04.jpg`
- New: `Blue-Cotton-Shirt.jpg`

#### 3. Apply to Multiple Products

1. Select formula cell
2. Drag fill handle down
3. Formula applies to all products

#### 4. Handle Multiple Images

For products with multiple images:
- All images get the same base name
- Magento adds numbers: `Product-Name.jpg`, `Product-Name_1.jpg`
- Spaces in names become underscores automatically

### Video Workflow Example

**Scenario:** Rename images using product name instead of SKU

1. Load demo data (Magento 1.9.0.0)
2. Create helper column with current images
3. Apply formula: `=IMAGES.REPLACEFILENAMES([@Helper];[@[Product Name]])`
4. Drag formula down for multiple products
5. For products with multiple images, automatic numbering applies
6. Save changes
7. Reload products to verify
8. Magento converts spaces to underscores

## Display Image URLs

### Goal

Extract and display image URLs for exports, integrations, or verification.

### Formula

Create new column with:

```
=IMAGES.GETURLS([@Images];";")
```

**Parameters:**
- `[@Images]` - Reference to Images column
- `";"` - Separator between multiple URLs

**Result:**

```
https://store.com/media/catalog/product/i/m/image1.jpg;https://store.com/media/catalog/product/i/m/image2.jpg
```

### Use Cases

**Export to marketplaces:**
```
=IMAGES.GETURLS([@Images];",")
```
Uses comma separator for CSV exports.

**Display first URL only:**
```
=LEFT(IMAGES.GETURLS([@Images];"");SEARCH(";";IMAGES.GETURLS([@Images];""))-1)
```

**Count images:**
```
=LEN(IMAGES.GETURLS([@Images];";"))-LEN(SUBSTITUTE(IMAGES.GETURLS([@Images];";");";";""))+1
```

## Add Multiple Images with Roles

### Goal

Add multiple images where the first image has all roles set, and additional images are gallery only.

### Formula

```
=IMAGES.ADD(;IMAGE.CREATE("c:\Users\Eduard\Desktop\Foto1.png";;;TRUE;TRUE;TRUE);"c:\Users\Eduard\Desktop\Foto2.png";"c:\Users\Eduard\Desktop\Foto3.png")
```

**Breakdown:**
- Empty first parameter adds to existing images
- `IMAGE.CREATE(...)` creates first image with all parameters
- `;;;` skips Label and Exclude parameters
- `TRUE;TRUE;TRUE` sets Small, Thumbnail, and Base roles
- Remaining images (Foto2, Foto3) are gallery images only

**Result:**
- Image 1: All roles set (appears in listings, cart, product page)
- Image 2-3: Gallery only (appear on product page only)

## Change Image Descriptions/Labels

### Goal

Update image labels for SEO or better organization.

### Steps

#### 1. Create Helper Column

```
Column name: "Original Images"
Content: Copy of Images column
```

#### 2. Apply Label Replace Formula

In Images column:

```
=IMAGES.REPLACELABELS([@[Original Images]];[@[Product Name]])
```

**Result:** All images get product name as label.

#### 3. Position-Specific Labels

For different labels per position:

```
=IMAGES.REPLACELABELS([@[Original Images]];"0:"&[@[Product Name]]&" - Main View";"1:"&[@[Product Name]]&" - Detail View")
```

**Result:**
- First image: "Blue Shirt - Main View"
- Second image: "Blue Shirt - Detail View"

## Helper Column Strategy

### Why Use Helper Columns

**Benefits:**
- Preserve original image data
- Easy to modify formulas
- Test before applying to all products
- Troubleshoot issues
- Rollback if needed

### Setup Pattern

1. **Copy original data** to helper column
2. **Create formula** referencing helper
3. **Test on single product**
4. **Apply to all products** when verified
5. **Hide helper column** when done (don't delete)

### Example Workflow

```
Column A: SKU
Column B: Product Name
Column C: Images (will contain formula)
Column D: Images Helper (original image data)

Formula in Column C:
=IMAGES.REPLACELABELS([@[Images Helper]];[@[Product Name]])
```

## Advanced Combinations

### Conditional Image Assignment

```
=IF([@Brand]="Nike";IMAGE.CREATE("nike_"&[@SKU]&".jpg";"Nike Product");IMAGE.CREATE("generic_"&[@SKU]&".jpg";"Product"))
```

Assigns different images based on brand.

### Multiple Path Sources

```
=IMAGE.CREATE(IF([@[Image Source]]="Local";[@[Local Path]];[@[URL Path]])&[@SKU]&".jpg")
```

Chooses between local path or URL based on data.

### Dynamic Role Assignment

```
=IMAGE.CREATE([@SKU]&".jpg";[@[Product Name]];FALSE;[@[Set Small]];[@[Set Thumbnail]];[@[Set Base]])
```

Uses column values to determine which roles to set.

## Troubleshooting

<details>
<summary>**Formula shows as text**</summary>

- Change cell format to General (not Text)
- Re-enter formula after format change

</details>

<details>
<summary>**Images not found**</summary>

- Verify path ends with backslash
- Check image files exist
- Confirm filenames match exactly (case-sensitive)

</details>

<details>
<summary>**Formulas too complex**</summary>

- Break into multiple helper columns
- Test each part separately
- Use named ranges for clarity

</details>

<details>
<summary>**Performance slow**</summary>

- Process products in batches
- Hide unused columns
- Remove formulas after data is set
- Use simple formulas when possible

</details>

## Best Practices

1. **Always use helper columns** for image formula operations
2. **Test on 2-3 products** before applying to all
3. **Document your formulas** with comments
4. **Backup before bulk changes**
5. **Verify in Magento** after saving
6. **Keep formulas simple** when possible
7. **Use cell references** instead of hardcoded values
8. **Follow naming conventions** for consistency

## Related Resources

See also: [Common Excel Formulas](/reference/formulas/common-formulas) for more Excel formula techniques.

---
sidebar_position: 8
title: How to Check Image Roles with Formulas
---

# How to Check Image Roles with Formulas

**Goal:** Use cobby formulas to verify whether Small, Base, or Thumbnail roles are set for a specific image position (e.g., the second image).

## Prerequisites

- Excel with cobby installed
- Products loaded with multiple images
- Understanding of Excel formulas
- Familiarity with Magento image roles (Small, Base, Thumbnail)

## Understanding Image Roles

Magento uses three main image roles:
- **Base Image:** Main product image displayed on product page
- **Small Image:** Used in category listings and search results
- **Thumbnail:** Small preview in cart and mini-cart

A product can have multiple images, but typically only one image should have all three roles set.

## Setup Required Columns

You need to create 6 helper columns to check if the second image has Small/Base/Thumbnail roles set.

### 1. Thumbnail Image

**Column Name:** "Thumbnail Image"

**Formula:**
```
=IMAGE.GET([@Images];1)
```

**Function:** Retrieves the image that has Thumbnail role set. Used for comparison with the second image.

### 2. Small Image

**Column Name:** "Small Image"

**Formula:**
```
=IMAGE.GET([@Images];2)
```

**Function:** Retrieves the image that has Small Image role set. Used for comparison with the second image.

### 3. Base Image

**Column Name:** "Base Image"

**Formula:**
```
=IMAGE.GET([@Images];3)
```

**Function:** Retrieves the image that has Base Image role set. Used for comparison with the second image.

### 4. All Images

**Column Name:** "All Images"

**Formula:**
```
=IMAGES.GET([@Images])
```

**Function:** Retrieves all images of the product as a semicolon-separated list. Needed to locate the second image.

### 5. Second Image from All Images

**Column Name:** "2nd Image from All Images"

**Formula:**
```
=MID([@[All Images]];SEARCH(";";[@[All Images]])+1;SEARCH(";";[@[All Images]];SEARCH(";";[@[All Images]])+1)-SEARCH(";";[@[All Images]])-1)
```

**Function:** Extracts the value between the first and second semicolon, which represents the second image.

**Formula breakdown:**
- `SEARCH(";";[@[All Images]])` - Finds position of first semicolon
- `+1` - Starts after the first semicolon
- Second SEARCH finds the next semicolon
- MID extracts text between the two semicolons

### 6. Is Set?

**Column Name:** "Is Set?"

**Formula:**
```
=AND([@[Thumbnail Image]]=[@[2nd Image from All Images]];[@[Small Image]]=[@[2nd Image from All Images]];[@[Base Image]]=[@[2nd Image from All Images]])
```

**Function:** Compares all three role images (Small, Base, Thumbnail) with the second image to verify that all three roles are set on the same image.

**Result:**
- **TRUE** - All three roles are set on the second image
- **FALSE** - Not all roles are set on the second image

## Steps to Implement

### 1. Create Helper Columns

1. Navigate to the right of your Images column
2. Insert 6 new columns
3. Name them according to the list above

### 2. Enter First Formula

1. Click the first cell in "Thumbnail Image" column
2. Enter the formula: `=IMAGE.GET([@Images];1)`
3. Press Enter

### 3. Enter Remaining Formulas

Repeat for each column using the formulas listed above:
- Small Image: `=IMAGE.GET([@Images];2)`
- Base Image: `=IMAGE.GET([@Images];3)`
- All Images: `=IMAGES.GET([@Images])`
- 2nd Image: MID formula (see above)
- Is Set?: AND formula (see above)

### 4. Apply to All Products

For each formula:
1. Select the cell with the formula
2. Double-click the fill handle to apply to all rows
3. Or drag the fill handle down manually

### 5. Interpret Results

Review the "Is Set?" column:
- **TRUE** = Second image has all three roles set correctly
- **FALSE** = Second image is missing one or more roles

### 6. Take Action

Based on results:
- Filter for FALSE values to find problems
- Manually correct image roles in cobby Task Pane
- Or use formulas to set roles correctly
- Save products after corrections

## How It Works

### Comparison Logic

The formulas work by comparing image filenames:

1. Get the image with Thumbnail role → `product_thumb.jpg`
2. Get the image with Small role → `product_small.jpg`
3. Get the image with Base role → `product_base.jpg`
4. Get the second image from all images → `product_second.jpg`
5. Compare if all three match the second image

**If all match:** The same image file has all three roles = TRUE

**If any don't match:** Different images have different roles = FALSE

### Why This Matters

Having consistent roles on the same image ensures:
- Proper image display across store
- Consistent user experience
- No confusion with multiple role images
- Easier image management

## Adapt for Different Positions

### Check First Image (Position 0)

**2nd Image formula becomes:**
```
=LEFT([@[All Images]];SEARCH(";";[@[All Images]])-1)
```

### Check Third Image (Position 2)

**2nd Image formula becomes:**
```
=MID([@[All Images]];SEARCH(";";[@[All Images]];SEARCH(";";[@[All Images]])+1)+1;SEARCH(";";[@[All Images]];SEARCH(";";[@[All Images]];SEARCH(";";[@[All Images]])+1)+1)-SEARCH(";";[@[All Images]];SEARCH(";";[@[All Images]])+1)-1)
```

Or create a helper column with position parameter.

## Troubleshooting

**Formula returns #VALUE! error**
- Verify product has multiple images
- Check that Images column contains valid image data
- Ensure image list uses semicolons as separators
- Try on product with at least 2 images

**Always returns FALSE**
- Check that second image actually exists
- Verify image roles are set in Magento
- Reload products to get latest data
- Check for case sensitivity in filenames

**Cannot extract second image**
- Product may have only one image
- Check All Images column format
- Verify semicolons are present in list
- Use IF statement to handle single-image products

**Formula too complex**
- Break into multiple helper columns
- Test each part of formula separately
- Use named ranges for clarity
- Add comments to document logic

## Advanced Use Cases

### Check Multiple Positions

Create a dynamic formula that checks any position:

```
=IMAGE.GET([@Images];[@Position_Column])
```

### Report Missing Roles

Create a text column that reports which roles are missing:

```
=IF([@[Thumbnail Image]]<>[@[2nd Image]];"Thumbnail missing ";)&IF([@[Small Image]]<>[@[2nd Image]];"Small missing ";)&IF([@[Base Image]]<>[@[2nd Image]];"Base missing ";"")
```

### Conditional Formatting

Apply conditional formatting to "Is Set?" column:
- Green fill for TRUE
- Red fill for FALSE
- Quick visual identification of problems

### Auto-Correction Formula

Create a formula to automatically fix roles (advanced):

```
=IF([@[Is Set?]]=FALSE;IMAGE.SETROLES([@Images];2;TRUE;TRUE;TRUE);[@Images])
```

## Best Practices

**Before checking:**
1. Ensure products are fully loaded
2. Verify images are synced from Magento
3. Check that image data is current

**During checking:**
1. Test formulas on small sample first
2. Verify results make sense
3. Document your helper columns
4. Keep formulas in template row

**After checking:**
1. Filter results to find issues
2. Correct problems systematically
3. Re-check after corrections
4. Hide helper columns when done

**Performance:**
- Complex formulas can slow Excel
- Consider checking in batches
- Hide unused helper columns
- Delete helpers after verification complete

---
sidebar_position: 10
title: How to Generate Product Names and Descriptions from Attributes
description: Use Excel formulas to automatically create product names and descriptions by combining multiple product attributes in cobby
---

import Storylane from '@site/src/components/Storylane';

# How to Generate Product Names and Descriptions from Attributes

Learn how to automatically generate product names and descriptions by combining existing product attributes using Excel formulas. This approach saves time and ensures consistency across your product catalog.

## Prerequisites

- Products loaded in cobby
- Basic familiarity with Excel formulas
- Understanding of cobby's auxiliary columns feature (optional but recommended for testing)

## Interactive Demo

See how to generate product names from attributes in this interactive walkthrough:

<Storylane
  src="https://app.storylane.io/share/wa8vv2ylh1lo"
  title="Generate Product Names from Attributes - Interactive Demo"
/>

## When to Use This Approach

Generate product names and descriptions from attributes when you need to:

- Create consistent naming conventions across hundreds of products
- Build product names from brand, type, color, size, and other attributes
- Generate SEO-friendly product titles automatically
- Maintain uniform description formats for product families
- Update names in bulk when attributes change

## Optional: Prepare Your View for Better Clarity

Before starting with formulas, organize your Excel workspace for easier editing:

1. **Move important columns to the front** - Right-click on columns you'll use (like **Product Name**, **Brand**, **Color**, **Material**), select **Cut**, then right-click where you want them and select **Insert Cut Cells**

2. **Hide unnecessary columns** - Select columns you don't need, right-click, and choose **Hide**. This reduces clutter and helps you focus on relevant attributes

3. **Save as a preset** - Click the arrow under **Load products** > **Presets** > **Save** to save your custom layout for future use

Learn more: [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views)

## Step 1: Identify the Attributes to Combine

Determine which product attributes should be included in your generated name or description.

**Common attributes for product names:**
- **Brand** or **Manufacturer**
- **Product Type** or **Category**
- **Color**
- **Size**
- **Material**
- **Model Number**

**Example combination:** Nike + Running Shoes + Red + Size 42 = "Nike Running Shoes - Red - Size 42"

## Step 2: Create an Auxiliary Column for Testing

Before modifying your actual product name column, test your formula in an auxiliary column:

1. Right-click on a column letter near your product data
2. Select **Insert cells** from the context menu
3. A new column appears with a **yellow background** (this is your auxiliary column)
4. Click the header cell and name it "Generated Name" or "Name Preview"

:::tip
Auxiliary columns let you test formulas safely without affecting your actual product data. Once satisfied with the results, you can apply the formula to the real product name column.
:::

## Step 3: Remove Data Validation from the Auxiliary Column

To use formulas in your auxiliary column, disable data validation:

1. Right-click the auxiliary column letter
2. Go to the **Data** tab in the Excel ribbon
3. Click the **Data Validation** icon
4. Select **Delete all**
5. Click **Ok**

Your auxiliary column now accepts Excel formulas.

## Step 4: Build Your Formula

Click the first data cell in your auxiliary column and create a formula using one of these methods:

### Method 1: Using the & Operator (Simplest)

The ampersand (&) operator is the fastest way to combine text:

```excel
=[@Brand]&" - "&[@Color]&" - "&[@[Product Type]]
```

**Result:** "Nike - Red - Running Shoes"

### Method 2: Using CONCATENATE Function

CONCATENATE explicitly combines values and is easier for beginners to read:

```excel
=CONCATENATE([@Brand];" - ";[@Color];" - ";[@[Product Type]])
```

**Result:** "Nike - Red - Running Shoes"

### Method 3: Using TEXTJOIN (Excel 2019+)

TEXTJOIN automatically handles separators and can ignore empty values:

```excel
=TEXTJOIN(" - ";TRUE;[@Brand];[@Color];[@[Product Type]])
```

**Result:** "Nike - Red - Running Shoes"

**Benefits:** Automatically skips empty attributes, preventing issues like "Nike - - Running Shoes"

:::tip Formula Help with AI
If you need help understanding or modifying your formula, try [Formula Bot](https://formulabot.com). Click "Explain", paste your formula, and the AI will break down each component and show you how to modify it.
:::

:::tip
Use TEXTJOIN when some attributes might be empty. The TRUE parameter tells Excel to ignore empty cells.
:::

### Understanding the Formula Structure

Let's break down a typical formula to understand how it works:

**Example formula:**
```excel
=[@[Product Name]]&" in "&[@Color]&" made of "&[@Material]
```

**What each part does:**

- `=` - Every Excel formula starts with an equals sign
- `[@[Product Name]]` - References the value from the "Product Name" column in the current row. The `@` symbol means "this row only"
- `&` - The concatenation operator that combines text values
- `" in "` - Fixed text that will appear exactly as written (with spaces)
- `[@Color]` - References the "Color" column value in the current row
- `" made of "` - Another fixed text string
- `[@Material]` - References the "Material" column value in the current row

**Example result:**

If a row contains:
- Product Name: "T-Shirt"
- Color: "Red"
- Material: "Cotton"

The formula generates: **"T-Shirt in Red made of Cotton"**

**Key points:**
- Column names with spaces need double brackets: `[@[Product Name]]`
- Column names without spaces need single brackets: `[@Color]`
- Fixed text must be in quotes: `" - "` or `" made of "`
- The `&` operator connects everything together

## Step 5: Customize Your Formula

Enhance your formula with these techniques:

### Add Descriptive Text

Make the name more readable by adding words like "Size", "Color", or "by":

```excel
=[@Brand]&" "&[@[Product Type]]&" - Color: "&[@Color]&" - Size: "&[@Size]
```

**Result:** "Nike Running Shoes - Color: Red - Size: 42"

### Handle Empty Attributes

Use IF to check for empty values:

```excel
=[@Brand]&" "&[@[Product Type]]&IF([@Color]<>"";" - "&[@Color];"")&IF([@Size]<>"";" - Size "&[@Size];"")
```

This only adds color and size when they have values.

### Add Line Breaks for Descriptions

Create multi-line descriptions using CHAR(10):

```excel
=[@Brand]&" "&[@[Product Name]]&CHAR(10)&"Color: "&[@Color]&CHAR(10)&"Material: "&[@Material]
```

**Result:**
```
Nike Running Shoes
Color: Red
Material: Mesh
```

**Note:** Enable **Wrap Text** formatting (Home tab > Wrap Text) to see line breaks in Excel.

### Combine with Conditional Logic

Create different name formats based on product type:

```excel
=IF([@Type]="simple";[@Brand]&" "&[@[Product Name]]&" - "&[@Color];[@Brand]&" "&[@[Product Name]])
```

Simple products include color; configurable products don't.

## Step 6: Apply the Formula to All Products

Copy your formula down to all product rows:

**Method 1: Auto-fill**
1. Click the cell with your formula
2. Double-click the small black square at the bottom-right corner
3. Excel automatically fills the formula down to all rows

**Method 2: Copy-paste**
1. Select the cell with your formula
2. Press Ctrl+C to copy
3. Select the range of cells below
4. Press Ctrl+V to paste

## Step 7: Review the Results

Scroll through your generated names and verify:

- All attributes are combining correctly
- Spacing and separators look proper
- Empty attributes are handled appropriately
- Names are not too long or too short
- Special characters display correctly

## Step 8: Apply to the Actual Product Name Column

Once satisfied with the results:

1. Select all cells in your auxiliary column with generated names
2. Press Ctrl+C to copy
3. Click the first cell in your actual **Product Name** column
4. Press Ctrl+V to paste
5. Click the **Paste Options** icon that appears
6. Select the **second icon from the left (showing "123")** to paste values only

:::warning Important: Paste Values Only
Always use the **123 icon** (Values) when pasting. Do NOT paste the formula itself into the product name column. Pasting values ensures your product names become fixed text and won't change when attributes are modified.
:::

## Step 9: Save Changes to Your Shop

After applying the generated names to your product name column, you have two options:

### Option A: Save Immediately to Shop

1. Click the **Save products** button in the cobby ribbon
2. cobby syncs the new product names to your shop system
3. Verify the names appear correctly in your shop

### Option B: Save Workbook Only (Work Offline)

If you're not ready to publish changes to your shop yet:

1. Click **File** > **Save** or press Ctrl+S to save the Excel workbook
2. Your changes are saved locally but not yet synced to the shop
3. Continue working offline, then use **Save products** when ready to go live

Learn more about [working with cobby offline](/how-to/product-management/work-with-cobby-offline).

## Verification

Check that your generated names were applied successfully:

1. **In Excel:** Review the product name column for consistency
2. **In cobby:** No error messages appear after saving
3. **In your shop:** Log into your shop admin and verify a few product names updated correctly

## Formula Examples

### Basic Product Name with Brand and Type

```excel
=[@Brand]&" "&[@[Product Type]]
```

**Result:** "Nike Running Shoes"

### Name with Three Attributes

```excel
=[@Brand]&" "&[@[Product Type]]&" - "&[@Color]
```

**Result:** "Nike Running Shoes - Red"

### Name with Conditional Size

```excel
=[@Brand]&" "&[@[Product Type]]&" - "&[@Color]&IF([@Size]<>"";CONCATENATE(" - Size ";[@Size]);"")
```

**Result:** "Nike Running Shoes - Red - Size 42" (only if size exists)

### Product Description from Multiple Attributes

```excel
=[@[Product Type]]&" by "&[@Brand]&". Available in "&[@Color]&". "&[@[Short Description]]
```

**Result:** "Running Shoes by Nike. Available in Red. Lightweight and breathable design."

### SEO-Friendly Product Title

```excel
=[@Brand]&" "&[@Model]&" "&[@Color]&" - "&[@Category]&" | Your Store Name"
```

**Result:** "Nike Air Max 270 Red - Running Shoes | Your Store Name"

### Multi-Line Description with Line Breaks

```excel
=[@[Product Name]]&CHAR(10)&"Brand: "&[@Brand]&CHAR(10)&"Color: "&[@Color]&CHAR(10)&"Material: "&[@Material]
```

**Result:**
```
Running Shoes Pro
Brand: Nike
Color: Red
Material: Mesh
```

## Tips and Best Practices

### Testing First

- **Always test in an auxiliary column** before modifying actual product data
- Review at least 10-20 products to catch edge cases (empty values, special characters, etc.)
- Check products from different categories to ensure the formula works universally

### Handling Empty Values

- Use TEXTJOIN with TRUE parameter to automatically skip empty attributes
- Or use IF statements: `IF([@Color]<>""; " - "&[@Color]; "")`
- Empty values can create unwanted double spaces or separators

### Formula Performance

- For large catalogs (thousands of products), formulas can slow down Excel
- Once satisfied with results, always **paste as values** to convert formulas to text
- This improves performance and prevents accidental recalculation

### Maintain Consistency

- Use the same separator throughout (e.g., always " - " or always " | ")
- Apply the same formula pattern to all products in a category
- Save your formula setup as a preset for future use

### Character Limits

- Be mindful of character limits in your shop system
- Product names often have limits (e.g., 255 characters in Magento)
- Use LEN function to check length: `=LEN([@[Generated Name]])`
- Keep SEO titles under 60 characters for optimal search display

### Preserving Formulas

- If you want to keep formulas active (names update when attributes change):
  - Apply formulas directly to the product name column
  - Or use auxiliary columns and copy to the name column periodically
- If you want fixed names:
  - Use auxiliary columns for generation
  - Paste as values into the product name column

## Common Use Cases

### Scenario 1: Fashion E-commerce

**Goal:** Create product names with brand, type, color, and size

**Formula:**
```excel
=[@Brand]&" "&[@[Product Type]]&" - "&[@Color]&IF([@Size]<>""; " - Size "&[@Size]; "")
```

**Result:** "Adidas T-Shirt - Blue - Size L"

### Scenario 2: Electronics Store

**Goal:** Include manufacturer, model number, and key specs

**Formula:**
```excel
=[@Manufacturer]&" "&[@Model]&" - "&[@[Screen Size]]&" "&[@[Storage Capacity]]
```

**Result:** "Samsung Galaxy S24 - 6.2 inch 256GB"

### Scenario 3: Home Goods

**Goal:** Descriptive names with material and dimensions

**Formula:**
```excel
=[@[Product Type]]&" - "&[@Material]&" - "&[@Width]&"x"&[@Height]&"x"&[@Depth]&"cm"
```

**Result:** "Coffee Table - Oak Wood - 120x60x45cm"

### Scenario 4: Bulk SEO Title Generation

**Goal:** Create meta titles for all products

**Formula:**
```excel
=[@Brand]&" "&[@[Product Name]]&" | Buy Online at YourStore"
```

**Result:** "Nike Running Shoes Pro | Buy Online at YourStore"

## Troubleshooting

### Formula Displays as Text Instead of Calculating

**Problem:** You see the formula text in the cell instead of the result

**Solution:**
- The cell format is set to "Text"
- Right-click the cell > **Format Cells** > Select **Standard** or **General**
- Press F2 then Enter to recalculate the formula

### Attributes Running Together Without Spaces

**Problem:** "NikeRedRunningShoes" instead of "Nike Red Running Shoes"

**Solution:**
- Add space separators between attributes: `" "` or `" - "`
- Example: `=[@Brand]&" "&[@Color]&" "&[@[Product Type]]`

### Formula Shows #NAME! Error

**Problem:** Excel doesn't recognize the formula

**Solution:**
- Check for typos in function names (CONCATENATE, TEXTJOIN)
- Verify column names are spelled correctly
- Ensure column names with spaces are in brackets: `[@[Product Name]]`

### Empty Values Create Double Separators

**Problem:** "Nike - - Running Shoes" when color is empty

**Solution:**
- Use TEXTJOIN: `=TEXTJOIN(" - "; TRUE; [@Brand]; [@Color]; [@[Product Type]])`
- Or use IF: `=[@Brand]&IF([@Color]<>""; " - "&[@Color]; "")&" - "&[@[Product Type]]`

### Formulas Not Copying Down to All Rows

**Problem:** Formula only in first row

**Solution:**
- Click the cell with the formula
- Double-click the fill handle (small black square at bottom-right)
- Or manually select and drag down
- Or copy (Ctrl+C) and paste to the range below

### Generated Names Are Too Long

**Problem:** Names exceed character limits

**Solution:**
- Remove less important attributes
- Shorten fixed text
- Use abbreviations where appropriate
- Check length with: `=LEN([@[Generated Name]])`

## Additional Applications

:::tip Beyond Product Names
This formula technique works for many fields, not just product names! You can use the same approach to generate:

- **Product descriptions** - Combine features and specifications into consistent descriptions
- **Short descriptions** - Create summary text from key attributes
- **Meta titles** - Generate SEO-optimized titles for search engines (keep under 60 characters)
- **Meta descriptions** - Build compelling descriptions for search results
- **SKU codes** - Create systematic product codes from brand, type, and variants
- **URL keys** - Generate SEO-friendly URLs from product attributes

The formula principles remain the same - just apply them to different columns in your cobby workbook!
:::

## Related Documentation

- [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views) - Organize columns for easier formula building
- [How to Create Auxiliary Columns in cobby](/how-to/product-management/create-auxiliary-columns) - Learn more about testing with auxiliary columns
- [How to Combine Text with CONCATENATE](/how-to/excel-formulas/concatenate-attributes) - Detailed guide on CONCATENATE function and advanced techniques
- [How to Show Hidden Columns](/how-to/product-management/show-hidden-columns) - Unhide attributes you need for your formulas

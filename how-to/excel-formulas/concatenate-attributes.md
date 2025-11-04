---
sidebar_position: 8
title: How to Combine Text with CONCATENATE
---

# How to Combine Text with CONCATENATE

Learn how to automatically create meta titles, descriptions, and other text fields by combining multiple product attributes.

## When to Use This

Use CONCATENATE when you need to:
- Create meaningful page titles (meta titles)
- Build product descriptions from attributes
- Combine multiple fields into one
- Add fixed text to variable data

## Understanding CONCATENATE

CONCATENATE combines up to 255 different values into a single text string.

### Syntax

```excel
=CONCATENATE(text1; text2; text3; ...)
```

### Example

```excel
=CONCATENATE("Hello"; " "; "World")
```

Result: "Hello World"

## Step-by-Step: Create Meta Titles

This example shows how to automatically generate SEO-friendly page titles from product attributes.

### Step 1: Select the Meta Title Cell

1. Click the first cell in the Meta Title column
2. Right-click > Format Cells > Select **Standard** (not Text)
3. This ensures the formula will calculate

![](/img/verketten/advent_08_01.png)

### Step 2: Start the Formula

In the formula bar, enter:

```excel
=CONCATENATE(
```

![](/img/verketten/advent_08_02.png)

### Step 3: Add Attributes

Click the column headers of attributes you want to include, separating each with a semicolon:

```excel
=CONCATENATE([@Brand];[@[Product Name]];[@Color])
```

![](/img/verketten/advent_08_03.png)

### Step 4: Add Spaces

Add spaces between attributes so they don't run together:

```excel
=CONCATENATE([@Brand];" ";[@[Product Name]];" ";[@Color])
```

**Result**: "Nike Running Shoe Black" (instead of "NikeRunning ShoeBlack")

![](/img/verketten/advent_08_04.png)

### Step 5: Add Descriptive Text

Add fixed text to provide context:

```excel
=CONCATENATE([@Brand];" ";[@[Product Name]];" - Size ";[@[Shoe Size]];" - ";[@Color])
```

**Result**: "Nike Running Shoe - Size 42 - Black"

![](/img/verketten/advent_08_06.png)

### Step 6: Apply to All Products

1. Double-click the small black square at the bottom-right of the cell
2. Or copy and paste the formula down the column
3. Click "Save products" to transfer to your store

![](/img/verketten/advent_08_07.png)

## Common Use Cases

### Simple Product Title

```excel
=CONCATENATE([@Brand];" ";[@[Product Name]])
```

Result: "Nike Running Shoe"

### Title with Category

```excel
=CONCATENATE([@Category];" - ";[@Brand];" ";[@Model])
```

Result: "Shoes - Nike Air Max 270"

### Title with Price Point

```excel
=CONCATENATE([@[Product Name]];" - Only ";[@Price];" EUR")
```

Result: "Running Shoe - Only 79.99 EUR"

### Multi-Line Description

```excel
=CONCATENATE([@[Product Name]];" by ";[@Brand];". ";[@[Short Description]];" Available in ";[@Color];".")
```

Result: "Running Shoe by Nike. Lightweight and comfortable. Available in Black."

## Advanced Techniques

### Combine with IF for Conditional Text

```excel
=CONCATENATE([@Brand];" ";[@[Product Name]];IF([@Type]="simple";" - Size ";"");[@[Shoe Size]])
```

Only includes size for simple products.

### Add Line Breaks

Use CHAR(10) for line breaks:

```excel
=CONCATENATE([@[Product Name]];CHAR(10);[@Brand];CHAR(10);[@Description])
```

Make sure to enable "Wrap Text" formatting to see the breaks.

### Nested CONCATENATE

For more than 255 parameters, nest functions:

```excel
=CONCATENATE([@Field1];CONCATENATE([@Field2];[@Field3]))
```

## Alternative: The & Operator

You can also use & instead of CONCATENATE:

```excel
=[@Brand]&" "&[@[Product Name]]&" "&[@Color]
```

**Benefits of &:**
- Shorter syntax
- Easier to read
- Same result as CONCATENATE

**Benefits of CONCATENATE:**
- More explicit and clear
- Easier for beginners
- Traditional Excel syntax

## Tips

- **Always add spaces**: Use " " between attributes to separate words
- **Set format to Standard**: Text format won't calculate formulas
- **Test first**: Apply to one row before copying to all products
- **Use descriptive text**: Add words like "Size", "by", "in" for clarity
- **Check length**: Meta titles should be 50-60 characters for SEO

## Building Effective Meta Titles

### SEO Best Practices

1. **Include brand**: Helps with brand recognition
2. **Add key attributes**: Size, color, model number
3. **Keep it under 60 characters**: Prevents truncation in search results
4. **Front-load important terms**: Put brand/product name first
5. **Be descriptive**: Help users understand what they'll find

### Example Formula

```excel
=CONCATENATE([@Brand];" ";[@Model];" ";[@Color];" - ";[@Category];" | Your Store")
```

## Troubleshooting

**Formula showing as text?**
- Cell format is set to "Text"
- Change to "Standard": Right-click > Format Cells > Standard

**Attributes running together?**
- Missing space separators
- Add " " between each attribute

**Getting #NAME! error?**
- Misspelled CONCATENATE
- Column reference has typo
- Missing brackets around column names

**Result is too long?**
- Remove less important attributes
- Shorten fixed text
- Check character count with LEN function: =LEN([@[Meta Title]])

**Empty values showing?**
- Use IF to check: `=IF([@Color]<>"";CONCATENATE(" ";[@Color]);"")`
- Or use IFISEMPTY (coming soon)

## Performance Tips

- CONCATENATE recalculates when any referenced cell changes
- For large datasets, consider copying results and pasting as values
- Use templates in cobby to save and reuse formulas

## Related Functions

- **IF**: Add conditional logic (coming soon)
- **IFISEMPTY**: Handle empty values (coming soon)
- **TRIM**: Remove extra spaces
- **CHAR**: Insert special characters (line breaks, tabs)
- **LEN**: Check text length

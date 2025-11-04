---
sidebar_position: 2
title: How to Build Conditional Text with the IF Function
---

# How to Build Conditional Text with the IF Function

Learn how to create dynamic text that changes based on product values using Excel's IF function.

## When to Use This

Use the IF function when you need to:
- Create different text for different product types
- Include attributes only when they exist
- Build dynamic meta titles or descriptions
- Handle variations between simple and configurable products

## Understanding the IF Function

The IF function checks a condition and returns different values depending on whether the condition is true or false.

### Syntax

```excel
=IF(Check; Then_Value; Other_Value)
```

### Parameters

- **Check**: A comparison that returns TRUE or FALSE
- **Then_Value**: What to return if the check is TRUE
- **Other_Value**: What to return if the check is FALSE

## Comparison Operators

Use these operators in your checks:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `=` | Equal to | `1=1` | TRUE |
| `=` | Equal to | `"Dog"="Cat"` | FALSE |
| `<>` | Not equal to | `"Dog"<>"Cat"` | TRUE |
| `>` | Greater than | `1>0` | TRUE |
| `<` | Less than | `1<2` | TRUE |

## Step-by-Step: Add Size to Meta Title for Simple Products

This example shows how to include a "Size" attribute in the meta title only for simple products (not for configurable products where the attribute is empty).

### Step 1: Create the IF Formula

Click on the cell next to your meta title column and enter:

```excel
=IF([@Type]="simple";"Size ";""
```

**What this does:**
- Checks if the Type column contains "simple"
- If TRUE: returns "Size " (with a space)
- If FALSE: returns empty text ""

### Step 2: Add to CONCATENATE

Now incorporate this into your CONCATENATE function for the meta title:

```excel
=CONCATENATE([@Brand];" ";IF([@Type]="simple";"Size ";"");[@[Shoe Size]];" ";[@Color])
```

**Result:**
- Simple products: "Nike Size 42 Black"
- Configurable products: "Nike Black" (no size)

## Common Use Cases

### Check if Value is Empty

```excel
=IF([@[Special Price]]="";"Regular Price";"On Sale")
```

Shows "On Sale" if a special price exists, otherwise "Regular Price".

### Check Numeric Values

```excel
=IF([@Stock]>100;"In Stock";"Low Stock")
```

Shows "In Stock" for products with more than 100 units.

### Multiple Conditions with Nested IF

```excel
=IF([@Stock]>100;"In Stock";IF([@Stock]>0;"Low Stock";"Out of Stock"))
```

Creates three-level stock status based on quantity.

## Tips

- Always use double quotes around text values: "simple"
- Column references use brackets: [@Type]
- Separate parameters with semicolons (;)
- The Then_Value and Other_Value must be specified, even if empty ("")
- Use nested IF statements for multiple conditions

## Troubleshooting

**Formula not calculating?**
- Check that cell format is set to "Standard", not "Text"
- Right-click cell > Format Cells > Select "Standard"

**Getting #VALUE! error?**
- Ensure you're comparing the same data types (text with text, numbers with numbers)
- Check for extra spaces in your text comparisons

**Wrong result?**
- Verify your comparison operator (`=` vs `<>` vs `>` vs `<`)
- Test your condition in a separate cell to see if it returns TRUE or FALSE

---
sidebar_position: 15
title: How to Optimize Formula Performance
---

# How to Optimize Formula Performance

Learn how to improve calculation speed when working with formulas in large cobby workbooks.

## The Problem

Formulas that reference cells outside their own row can slow down cobby, especially when:
- Making mass changes to many products
- Working with thousands of products
- Using complex lookup formulas
- Referencing external data sources

## The Solution: Ignore Formula Relations

cobby includes a setting to improve performance when working with formulas.

### Location

Go to **cobby ribbon** > **Settings** > **Ignore formula relations**

### What It Does

When activated:
- Formula relationships to cells outside the row are ignored
- Product status no longer changes to yellow when linked cells are modified
- Mass changes calculate significantly faster
- Within-row formulas still work normally

## When to Use This Setting

### Good Use Cases

Use "Ignore formula relations" when:
- Linked data won't change after setting the formula
- Working only with formulas that reference the same product row
- Performing mass updates on thousands of products
- Calculation speed is noticeably slow

**Example**: Calculating prices from a fixed cost column
```excel
=[@Cost]*1.4
```

This references only the current row, so ignoring external relations is safe.

### When NOT to Use

Don't use "Ignore formula relations" when:
- Linked data will change after setting the formula
- Using VLOOKUP or INDEX-MATCH to external data
- Formulas depend on other products or sheets
- You need to track when linked data changes

**Example**: Looking up prices from a supplier sheet
```excel
=VLOOKUP([@SKU];SupplierSheet!$A$2:$D$100;3;FALSE)
```

If supplier prices change, you need cobby to detect this and mark products as changed.

## Understanding Formula Relations

### Within-Row Formulas

These always work efficiently:
```excel
=[@Price]*0.9
=CONCATENATE([@Brand];" ";[@Name])
=IF([@Stock]>0;"In Stock";"Out of Stock")
```

### Cross-Row Formulas

These create performance overhead:
```excel
=VLOOKUP([@SKU];SupplierData;2;FALSE)
=INDEX(PriceList!C:C;MATCH([@Model];PriceList!A:A;0))
=SupplierSheet!A2
```

## Performance Best Practices

### 1. Use Templates

Save formula configurations in cobby templates:
- Formulas are pre-set and ready to use
- No need to recreate formulas each time
- Consistent across users
- Faster than copying formulas manually

### 2. Calculate Once, Then Paste Values

For one-time calculations:
1. Create formulas
2. Let them calculate
3. Copy the results
4. Paste as values (Ctrl+Alt+V > Values)
5. Delete the formulas

This eliminates ongoing calculation overhead.

### 3. Simplify Complex Formulas

Break complex formulas into steps:

**Instead of**:
```excel
=IF([@Type]="simple";ROUND(VLOOKUP([@SKU];Costs;2;0)*1.4;2);"")
```

**Use helper columns**:
- Column A: `=VLOOKUP([@SKU];Costs;2;0)`
- Column B: `=IF([@Type]="simple";ROUND([@[Column A]]*1.4;2);"")`

### 4. Limit Formula Range

Don't apply formulas to empty rows:
- Select only rows with data
- Use Ctrl+Shift+End to find the last cell with data
- Avoid entire column references when possible

### 5. Use Efficient Functions

Some functions are faster than others:

**Faster**: INDEX-MATCH, simple IF, CONCATENATE
**Slower**: VLOOKUP, nested functions, SUMIF with large ranges

## Monitoring Performance

### Signs of Slow Performance

- Excel becomes unresponsive when typing
- Status bar shows "Calculating..." frequently
- Saving products takes unusually long
- Excel uses high CPU in Task Manager

### Testing Performance

1. Note how long operations take
2. Enable "Ignore formula relations"
3. Repeat the operations
4. Compare the times

## Alternative: Power Query

For complex data transformations, consider Power Query:
- Faster than formulas for large datasets
- One-time transformation
- Results are static (paste values)
- Better for repeated imports

## Real-World Example

### Scenario: Update 10,000 Products

You need to set special prices based on cost data from a supplier.

### Approach 1: Live Formulas (Slow)

```excel
=VLOOKUP([@SKU];SupplierCosts;2;FALSE)*1.3
```

- Calculations happen on every change
- Excel tracks all dependencies
- Slow performance

### Approach 2: Calculate and Paste (Fast)

1. Use VLOOKUP in helper column
2. Let it calculate
3. Copy results
4. Paste as values into Special Price
5. Delete helper column
6. Enable "Ignore formula relations" if using other formulas

- No ongoing calculations
- Much faster
- Same result

### Approach 3: Simple Within-Row Formula (Fastest)

If you can add cost to cobby first:
```excel
=[@Cost]*1.3
```

- Only references current row
- Very fast calculation
- Enable "Ignore formula relations" for even better performance

## Tips

- **Start simple**: Test formulas on a small subset first
- **Profile your workbook**: Identify which formulas are slow
- **Consider alternatives**: Sometimes macros or external tools are faster
- **Clean up**: Remove unused formulas and columns
- **Close other programs**: Free up system resources

## Troubleshooting

<details>
<summary>**Still slow after enabling the setting?**</summary>

- Formulas within rows still calculate normally
- Complex formulas take time regardless
- Check if you have other performance issues (large images, many sheets)

</details>

<details>
<summary>**Products not showing as changed?**</summary>

- This is expected with "Ignore formula relations" enabled
- Changes to linked data won't trigger yellow status
- Manually reload if needed

</details>

<details>
<summary>**Formulas not calculating?**</summary>

- Ensure cell format is "Standard", not "Text"
- Press F9 to force recalculation
- Check if calculation mode is set to Automatic (Formulas tab)

</details>

## Related Topics

- **Formulas in cobby**: Basic formula usage (coming soon)
- **Templates**: Save formula configurations (coming soon)
- **Macros**: Alternative to formulas for complex tasks (coming soon)

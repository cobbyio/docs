---
sidebar_position: 12
title: How to Use AutoFilter
---

# How to Use AutoFilter

Learn how to filter and work with product data using Excel's AutoFilter feature in cobby.

## What is AutoFilter

AutoFilter adds dropdown arrows to column headers, allowing you to:
- Show only specific products
- Filter by value, date, or number
- Search for specific text
- Work with subsets of data

## Understanding AutoFilter in cobby

The AutoFilter appears in cobby sheets next to each attribute name in the table header.

Different columns offer different filtering options based on the data type:
- **Text columns**: Value list and text search
- **Number columns**: Greater than, less than, equals
- **Date columns**: Date ranges and specific dates

## Using the Value List

### Basic Filtering

1. Click the AutoFilter dropdown arrow
2. Uncheck **(Select all)**
3. Check only the values you want to see
4. Click **OK**

**Result**: Only rows with selected values are shown.

### Search for Values

1. Click the AutoFilter dropdown
2. Type in the search field
3. The value list automatically filters to matching items
4. Check the value you want
5. Click **OK**

**Example**: Filter products in the "Sale" category
- Type "Sale" in search
- Check the matching category
- Click OK to see only Sale products

## Filtering by Data Type

### Text Columns

Available filters:
- Equals / Does not equal
- Begins with / Ends with
- Contains / Does not contain

**Example**: Show products with "Nike" in the name
1. Click Name filter dropdown
2. **Text Filters** > **Contains**
3. Enter "Nike"
4. Click OK

### Number Columns (Prices, Stock)

Available filters:
- Equals / Does not equal
- Greater than / Less than
- Between
- Top 10
- Above/Below average

**Example**: Show products with price over 100
1. Click Price filter dropdown
2. **Number Filters** > **Greater Than**
3. Enter 100
4. Click OK

### Date Columns

Available filters:
- Equals / Before / After
- Between dates
- Yesterday, Today, Tomorrow
- This week, Last week, Next week
- This month, Last month, Next month
- This year, Last year, Next year

**Example**: Show products with special prices ending this month
1. Click "Special Price To Date" filter
2. **Date Filters** > **This Month**
3. Click OK

## Clearing Filters

### Clear Single Column

Click the filter dropdown and select **(Select all)**

### Clear All Filters

Go to **Data** ribbon > **Clear** (in Sort & Filter group)

### Visual Indicators

- **Blue row numbers**: Filters are active
- **Filter icon**: Shows which columns have filters applied

## Working with Filtered Data

### Copying Filtered Data

When you copy visible cells:
- Only visible (filtered) rows are copied
- Hidden rows are ignored
- This is usually what you want

### Pasting into Filtered Data

**Important**: Be careful when pasting into filtered areas.

**The problem**:
- Excel pastes into ALL rows, including hidden ones
- Data doesn't go where you expect

**Example**: You copy 3 values and paste into rows 13-15 (visible). Excel pastes into rows 13, 14, 15 even if 14 is hidden, so your data ends up in the wrong places.

**Solution**: Always use formulas when working with filtered data.

## Using Formulas with Filters

### Safe Approach

Instead of copying and pasting:

1. Create a formula in the first visible cell
2. Reference the source data
3. Copy the formula down

**Example**:
```excel
=SourceSheet![@Price]
```

The formula automatically adjusts for each row and respects filters.

## Advanced Filtering

### Multiple Filters

Apply filters to multiple columns:
1. Filter by Category = "Shoes"
2. Then filter by Brand = "Nike"
3. Result: Only Nike shoes are shown

Filters work together (AND logic).

### Custom Filters

Create complex conditions:

1. Click filter dropdown
2. Choose **Custom Filter** or **Text/Number/Date Filters**
3. Set up to two conditions with AND/OR
4. Click OK

**Example**: Products with price between 50 and 100
1. Price filter > **Number Filters** > **Between**
2. Enter 50 and 100
3. Click OK

## Common Use Cases

### Find Products Needing Attention

**Low stock:**
- Filter Stock < 10
- Update quantities or reorder

**Missing data:**
- Filter for (Blanks)
- Fill in missing information

**Outdated special prices:**
- Filter Special Price To Date < Today
- Remove expired prices

### Work with Specific Categories

Filter by category to:
- Update pricing for one category
- Change visibility settings
- Bulk edit attributes

### Quality Control

**Find duplicates:**
- Sort by SKU or Name
- Look for consecutive identical values

**Check prices:**
- Filter unusual prices
- Verify they're correct

## Tips

- **Save filter views**: Use cobby presets to save filter combinations
- **Combine with sorting**: Sort within filtered results
- **Use search**: Faster than scrolling through long value lists
- **Check row numbers**: Blue numbers confirm filters are active
- **Clear regularly**: Remove filters when done to see all data

## Troubleshooting

<details>
<summary>**Filter dropdown missing?**</summary>

- AutoFilter may be disabled
- Go to **Data** > **Filter** to enable

</details>

<details>
<summary>**Can't see some rows?**</summary>

- Check if filters are active (blue row numbers)
- Clear all filters to see everything

</details>

<details>
<summary>**Pasted data in wrong rows?**</summary>

- You pasted into a filtered range
- Undo and use formulas instead

</details>

<details>
<summary>**Filter not showing all values?**</summary>

- Scroll down in the value list
- Use search to find specific values

</details>

<details>
<summary>**Date filter not working?**</summary>

- Ensure cells are formatted as dates, not text
- Check date format matches your system settings

</details>

## Related Features

- **Sort**: Order data within filters (Data > Sort)
- **Custom Views**: Excel feature to save filter states
- **Advanced Filter**: More complex filtering (Data > Advanced)

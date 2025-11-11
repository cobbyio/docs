---
title: How to Filter Product Data in cobby
description: Learn how to filter product data using Excel filters and cobby filters to work more efficiently with your product catalog.
---

# How to Filter Product Data in cobby

Learn how to filter product data efficiently using both Excel filters and cobby filters to focus on the products you need to work with.

cobby offers two complementary filtering approaches: **Excel filters** for filtering data after it's loaded into your workbook, and **cobby filters** for pre-filtering data before loading it from Magento. Understanding both methods helps you work faster and more efficiently.

import Storylane from '@site/src/components/Storylane';

<Storylane src="https://app.storylane.io/share/hq3e5doraaww" />

---

## Excel Filters: Filter Data After Loading

:::info Excel Filters
Excel filters work on data that's already loaded into your workbook. Use Excel filters when you want to quickly focus on specific products within your current dataset.
:::

### Open the Filter Dropdown

Click the dropdown arrow next to any attribute column header to access filtering options.

### Case 1: Filter by Attribute Values

Filter to show only products with specific attribute values.

1. Click the filter dropdown arrow
2. Deselect **Select All**
3. Check only the values you want to see
4. Click **OK**

**Example**: To show only products in sizes M and S:
- Deselect **Select All**
- Check **M** and **S**
- Click **OK**

### Case 2: Filter for Empty Values

Find products that are missing values for specific attributes.

1. Click the filter dropdown arrow
2. Look for **(Empty)** in the value list
3. Select **(Empty)**
4. Click **OK**

**Result**: Only products without a value for that attribute are displayed.

:::tip
Use empty value filtering to identify products that need attention or are missing required information.
:::

### Case 3: Filter Text Attributes

Search for products containing specific text patterns in attributes like product names or descriptions.

1. Click the filter dropdown arrow
2. Select **Text Filters** > **Starts with...**
3. Enter your search text (e.g., "Teton")
4. Choose **AND** or **OR** conditions if using multiple criteria
5. Click **OK**

**Available text filter options:**
- Starts with
- Ends with
- Contains
- Does not contain
- Equals / Does not equal

### Case 4: Filter Number Attributes

Filter products by numeric ranges such as prices or stock quantities.

1. Click the filter dropdown arrow
2. Select **Number Filters** > **Between...**
3. Enter the minimum value (e.g., 50)
4. Enter the maximum value (e.g., 60)
5. Click **OK**

**Result**: Only products with values within the specified range are displayed.

**Other number filter options:**
- Greater than / Less than
- Equals / Does not equal
- Top 10
- Above/Below average

### Remove Excel Filters

**Remove a single filter:**
1. Click the filter icon on the filtered column
2. Select **Remove filter**

**Remove all filters at once:**
1. Go to the **Data** tab
2. Click **Clear** in the Sort & Filter group

:::warning
When filters are active, row numbers appear blue. Always check row numbers to confirm whether filters are currently applied.
:::

---

## cobby Filters: Pre-Filter Before Loading

:::info cobby Filters
cobby filters reduce data load times by filtering products before they're loaded from Magento into Excel. This approach offers better performance when working with large product catalogs.
:::

### Advantages of cobby Filters

- Faster load times by retrieving only relevant data
- Reduced memory usage in Excel
- More efficient when working with specific product segments
- Better performance for large catalogs

### Access cobby Filters

Open the cobby filter dialog before loading products into your workbook.

### Store View Filtering

Select specific store views to load products from only those locations.

1. In the cobby filter dialog, locate the **Store View** section
2. Check the store views you want to load
3. Uncheck store views you want to exclude

**Example**: Select **MainDE** and **MainCH** to load only products from German and Swiss stores.

**Result**: Products are loaded only from the selected store views, improving performance.

### Text Attribute Filtering

Filter products by text attributes like SKUs, product names, or brands.

1. In the cobby filter dialog, find the **Text Attributes** section
2. Enter values separated by commas
3. Click **Apply** or **OK**

**Example**: To filter by brands:
- Enter "Adidas, Nike" in the brand filter field
- Only products from these brands will load

:::tip
Use the "Copy selection for filter" feature to quickly copy SKUs from your current selection and paste them into the filter field.
:::

### Selection Attribute Filtering

Filter by categorical attributes such as manufacturers or other dropdown/multiselect attributes.

1. Locate the **Selection Attributes** section
2. Click the checkboxes next to the values you want to include
3. Click **Apply** or **OK**

**Example**: Filter by manufacturer:
- Check specific manufacturer names
- Only products from selected manufacturers will load

### Advanced Options

Configure additional filtering options to optimize your data load.

#### Hide Empty Attribute Sets

Exclude attribute sets that aren't relevant to your current work.

1. Check **Hide empty attribute sets**
2. Click **Apply** or **OK**

**Result**: Only attribute sets that contain products matching your filters are loaded, reducing clutter and improving performance.

#### Only Active Products

Control whether deactivated products are included.

1. **Only active products** is enabled by default
2. To include deactivated products, uncheck this option
3. Click **Apply** or **OK**

**Default behavior**: Only active products are loaded.

:::tip
Keep "Only active products" enabled unless you specifically need to work with deactivated products.
:::

## Choosing the Right Filter Method

Use this guide to decide which filtering approach works best for your task:

**Use Excel filters when:**
- Data is already loaded in your workbook
- You want to quickly explore different product subsets
- You need to switch between different views frequently
- You're working with a manageable dataset size

**Use cobby filters when:**
- You're loading data for the first time
- You work regularly with specific product segments
- You have a large product catalog (thousands of products)
- You want to minimize load times and memory usage
- You know exactly which products you need before loading

**Use both together:**
- Apply cobby filters to load relevant product segments
- Then use Excel filters to further refine your view within that data

## Tips

- **Combine filtering methods**: Use cobby filters to load a product segment, then use Excel filters for quick refinements
- **Save filter configurations**: Document frequently used cobby filter combinations for consistency
- **Check filter indicators**: Blue row numbers in Excel indicate active filters
- **Clear filters regularly**: Remove Excel filters when done to avoid confusion
- **Start broad, then narrow**: Load a broader dataset with cobby filters, then use Excel filters to find specific products

## Troubleshooting

**No products appear after applying cobby filters?**
- Your filter criteria may be too restrictive
- Check that you've selected at least one store view
- Verify filter values match actual product data

**Excel filter not showing expected values?**
- cobby filters may have excluded those products during load
- Clear Excel filters first to see what data is actually loaded
- Consider reloading with different cobby filter settings

**Performance is slow even with filters?**
- Use cobby filters to reduce the initial data load
- Enable "Hide empty attribute sets" in cobby filters
- Filter by store view to limit data scope
- Consider working with smaller product batches

## Related Topics

- [How to Use AutoFilter](/how-to/excel-formulas/use-autofilter) - Detailed Excel AutoFilter techniques
- [How to Create Custom Product Views](/how-to/product-management/create-custom-product-views) - Save and reuse filter configurations
- [How to Handle Required Fields](/how-to/product-management/handle-required-fields) - Use filters to find incomplete products

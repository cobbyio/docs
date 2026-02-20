---
sidebar_position: 2
title: cobby Filter and Excel Filter
description: Technical reference for cobby filter and Excel filter capabilities
---

# cobby Filter and Excel Filter

import Storylane from '@site/src/components/Storylane';

cobby provides two distinct filtering mechanisms for managing product data: the cobby filter and the Excel filter. These filters operate at different stages of the data workflow and serve complementary purposes.

## Key Distinction
---

| Filter Type | Application Stage | Primary Purpose |
|-------------|------------------|-----------------|
| **cobby filter** | Pre-load (before data transfer) | Performance optimization through selective data loading |
| **Excel filter** | Post-load (after data transfer) | Data analysis and temporary view refinement |

The fundamental difference between these two filtering mechanisms lies in their timing and impact: the cobby filter determines which data is retrieved from Magento, while the Excel filter controls which rows are visible within already-loaded data.

<Storylane src="https://app.storylane.io/share/hq3e5doraaww" />

## cobby Filter
---

:::info Pre-Load Filter
The cobby filter applies **before** data transfer from Magento to Excel, determining which products are retrieved. This reduces data volume, memory usage, and load time.
:::

The cobby filter is a pre-loading filtering mechanism that restricts which products are transferred from Magento to Excel before data transfer occurs. This filter optimizes performance by reducing initial data transfer volume, memory consumption, and worksheet load time.

**Location:** Load products button dropdown → "Filter..."
**Interface:** Modal dialog
**Persistence:** Settings are retained across Excel sessions

### Store View Filtering

The store view selector provides a multi-select tree structure that displays websites, stores, and storeviews. By default, only the default store view is loaded. When multiple store views are selected, cobby transfers data only for the selected storeviews, creating corresponding columns in Excel for each selected view.

### Text Attribute Filtering

Text attributes (SKU and product name) support keyword-based filtering using comma-separated values. The filter uses a "starts with" matching pattern with OR logic, meaning products matching any keyword are included in the result set.

**Examples:**
- SKU filter: `SKU123, SKU456`
- Product name filter: `Shirt, Pants`

### Selection Attribute Filtering

Selection attributes with predefined value lists (such as Manufacturer, Category, Color, Size) can be filtered using a checkbox-based multi-select interface. The filter applies OR logic, including products that match any selected value.

### Attribute Set Options

The "Hide empty attribute sets" option excludes attribute sets containing no products matching the current filter criteria. This reduces column count in Excel and improves load performance. When disabled, all attribute sets load regardless of product count, providing complete attribute set visibility at the cost of increased column count.

### Product Status Filtering

The "Only active products" option is enabled by default and transfers only products with status "Enabled". When disabled, both active and inactive products are transferred. Product status changes made in Magento require an Excel session restart to reflect in the filter.

### Copy Selection for Filter

The "Copy Selection for Filter" feature enables rapid transfer of selected Excel cell values into cobby filter criteria, streamlining the process of filtering by specific product identifiers or attributes.

**Supported Attributes:** SKU and any text-based attribute displayed in Excel columns

**Workflow:**
1. Select cells in Excel containing values to filter by (e.g., SKU column)
2. Access via Tools → "Copy selection for filter"
3. Open the filter dialog (Load products dropdown → "Filter...")
4. Paste into the corresponding attribute field (Ctrl+V or right-click paste)
5. Apply filter and load products

**Input Format:** Supports multiple values separated by newlines or commas

**Use Case:** Quickly filter products based on a specific subset of SKUs or attribute values already present in the current worksheet or another data source.

### Keyboard Navigation

The cobby filter dialog supports full keyboard-based operation, enabling filter configuration without mouse interaction. This capability accelerates filter setting for users who prefer keyboard navigation workflows.

**Supported Operations:**
- Direct attribute search via keyboard input
- Suggestion navigation using arrow keys (`↑`/`↓`)
- Value selection with `Enter` or `Tab`
- Dialog cancellation with `ESC`
- Automatic focus advancement to next input field
- Universal dropdown list support

**Keyboard Shortcuts:**
- **Ctrl + Q**: Cancel and close filter dialog
- **Ctrl + Enter**: Apply filter and load products

The keyboard navigation system applies to all dropdown lists and input fields within the filter dialog, providing consistent interaction patterns across all filter attribute types (store views, text attributes, selection attributes).

![Filter dialog showing keyboard navigation shortcuts](/img/filtering-capabilities/filter-keyboard-navigation.png)

**Target Users:** Power users managing high-volume product catalogs who require rapid navigation through multiple filter criteria.

### Performance Impact

Pre-loading filtration significantly reduces data transfer requirements. For example, filtering 10,000 products to 100 matching items transfers only 100 rows from Magento, rather than transferring all 10,000 rows and hiding 9,900 of them in Excel.

## Excel Filter
---

:::info Post-Load Filter
The Excel filter applies **after** data is loaded into Excel, controlling which rows are visible. All data remains in memory, enabling instant filter switching without data reload.
:::

The Excel filter is a native Microsoft Excel AutoFilter capability that operates on product data already loaded into the Excel worksheet. The filter hides rows that do not match filter criteria while maintaining all data in memory, enabling instant filter switching without data reload.

**Location:** Column header dropdown menus
**Interface:** Excel AutoFilter dropdown
**Persistence:** Not retained on worksheet reload

### Filtering Capabilities

**Specific Attribute Values:** Excel's AutoFilter enables filtering by specific attribute values. Users deselect "Select All" and check specific values to view products with particular sizes, colors, or other attribute values. Multiple values can be selected to view products matching any of several values.

**Empty Fields:** The "(Blanks)" checkbox identifies products missing assigned values for specific attributes, supporting data quality maintenance and identification of incomplete product records. Deselecting "(Blanks)" excludes products with missing values.

**Text Patterns:** Text filters support various conditions including "Begins With", "Ends With", "Contains", and "Equals", as well as negation options like "Does Not Contain" and "Does Not Equal". For example, "Begins With 'Shirt'" filters product names starting with "Shirt".

**Numeric Ranges:** Number filters support "Between" for price ranges (e.g., between 10.00 and 50.00), "Greater Than" and "Less Than" for quantity thresholds, and "Equals" or "Does Not Equal" for specific numeric values.

### Filter Removal

Individual column filters can be removed via the filter icon in the column header by selecting "Clear Filter". All filters can be removed simultaneously through the Excel ribbon Data tab, in the Sort & Filter group, by selecting "Clear".

### Operational Characteristics

Excel filters preserve original data order and content while hiding non-matching rows. All data remains loaded in memory regardless of filter state, meaning Excel filters do not reduce memory consumption or load time. The primary advantage is instant filter switching for data analysis without requiring data reload.

## How the Filters Work Together
---

The cobby filter and Excel filter serve complementary roles in product data management:

**Initial Load:** The cobby filter reduces transferred data and memory usage by filtering at the source. The Excel filter is not applicable during initial load as no data exists in Excel yet.

**Data Exploration:** The cobby filter requires a reload to change filter criteria, making it suitable for major data subsetting. The Excel filter enables instant switching between different views, making it ideal for data analysis and exploration of already-loaded data.

**Performance:** The cobby filter provides significant performance benefits by optimizing data transfer and load time. The Excel filter has no impact on load performance since all data is already loaded.

**Persistence:** The cobby filter retains settings across Excel sessions, preserving filter configurations between uses. The Excel filter is cleared on worksheet reload and does not persist.

**Recommended Usage:** Apply the cobby filter for major data subsetting before loading products to optimize performance. Use the Excel filter for quick data analysis and temporary views of the loaded data set.

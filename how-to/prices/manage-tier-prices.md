---
title: "How to Manage Tier Prices with cobby"
description: "Learn how to efficiently import and update tier prices from supplier lists directly into your shop using cobby's import mode and Excel integration."
---

# How to Manage Tier Prices with cobby

Import tier prices from supplier price lists directly into your shop using cobby's import mode and Excel.

## Goal

Update tier prices for multiple products efficiently by importing structured price data from supplier lists, rather than manually entering each tier level in your shop's admin panel.

## Why Use This Method

Managing tier prices with cobby offers these advantages:
- **Speed:** Update prices in minutes instead of hours
- **Flexibility:** Work with internal or external price lists
- **Single interface:** Stay in Excel throughout the entire process

## Prerequisites

- cobby installed and connected to your shop
- Basic familiarity with cobby operations (loading products, working with attributes)
- Supplier price list in Excel format with tier pricing data
- Understanding of your shop's tier pricing structure

## Interactive Demo

See the complete tier pricing workflow in action:

import Storylane from '@site/src/components/Storylane';

<Storylane src="https://app.storylane.io/share/jgd8mih21r8m" />

## Steps

### 1. Prepare your supplier price list

Open the supplier price list in Excel. Structure your data with columns in this order: SKU, quantity tier 1, price tier 1, quantity tier 2, price tier 2, and so on for all tier levels.

:::tip
If your supplier provides data in a different format, consider using Excel's Power Query to automatically transform the data into the required structure. This saves time when processing regular price updates.
:::

### 2. Start cobby from your price list

Click on the **cobby** tab in Excel's ribbon while your price list is open. This allows you to work directly from your supplier data without switching between multiple spreadsheets.

### 3. Activate import mode

Click the small arrow to the right of the **Load Products** button, then select **Start import mode** from the dropdown menu. Import mode enables you to bring external data into cobby's product structure.

### 4. Navigate to the tier pricing attribute set

In the cobby tabs/attribute sets panel, locate and select your tier pricing list. Verify you're working in the correct attribute set for your products.

### 5. Configure your Excel view

Adjust the visible columns in cobby to display your SKU column and the tier price attribute. Remove any unnecessary columns to create a clean working view.

### 6. Locate the tier price attribute

Use Excel's search function (press **Ctrl+F**) to find the **Tier Price** attribute column in the cobby worksheet.

### 7. Reposition the tier price column

Cut the **Tier Price** column (Ctrl+X), then use cobby's **Insert Cut Cells** button to place it in your desired position.

:::warning
Always use **Insert Cut Cells** when repositioning cobby attribute columns. Using Excel's standard paste function may break the attribute mapping.
:::

### 8. Open the tier price configuration

Click on any cell in the **Tier Price** attribute column. This opens the cobby Task Pane on the right side of Excel.

### 9. Expand tier price columns

In the Task Pane, click the **second icon** in the upper right corner (split columns icon) to expand the tier price attribute into separate columns for each tier level.

### 10. Select the customer group

In the Task Pane, choose the customer group for your tier pricing. Select **All Groups** to apply pricing across all customer segments, or select a specific group.

### 11. Set the number of tier levels

Under **Amount of Tiers** in the Task Pane, select the number that matches your supplier list structure (e.g., select "6" if your list has 6 tier levels).

### 12. Simplify your view

Select and hide all columns that appear after your tier price columns. This creates a clean workspace showing only SKU and tier pricing data.

### 13. Import the tier pricing data

Return to your supplier price list spreadsheet. Copy all product rows with tier information (excluding the header row). Switch back to the cobby worksheet, click into an empty SKU field, and paste the data (Ctrl+V).

### 14. Assign store views

Click the small arrow to the right of the empty store view field and select the appropriate store view from the dropdown list. The store view determines which shop instance receives the tier pricing updates.

### 15. Apply store view to all products

You can manually select the store view for each product, or apply it to all products at once by double-clicking the small green box in the bottom-right corner of the selected cell. The green box auto-fills the store view selection down the entire column.

### 16. Save the tier prices to your shop

Click the **Save Product** button to upload all tier pricing data to your online shop. cobby processes each product and updates the tier price structure in your shop's database.

### 17. Verify the update

After saving, check a few sample products in your shop's admin panel to confirm the tier prices display correctly with the expected quantities and price points.

## Result

Your shop now displays the updated tier prices for all imported products. Customers will see quantity-based pricing when viewing product pages, with prices automatically adjusting based on the quantity selected.

## Related Information

- [Understanding Tier Pricing Concepts](/explanation/concepts/tier-pricing) - Learn how tier pricing works and its business applications
- [Update Prices](/how-to/prices/update-prices) - General guide for price updates in cobby

## Tips for Efficiency

- **Regular updates:** Save this cobby worksheet as a template for future price imports. You can reuse the column configuration without recreating it each time.
- **Automation:** Use Excel's Power Query to automatically fetch and format supplier price lists, creating a direct pipeline from supplier data to cobby.
- **Single interface:** This workflow keeps you in Excel throughout the entire process, eliminating the need to switch between your shop's admin panel, Excel, and other tools.

## Best Practices & Optimization

:::info Tier Pricing Strategy Management
Once you've set up your tier prices, ongoing analysis and optimization ensures they remain effective and profitable.
:::

### Best Practices for Data Entry & Management

**Regular review:** Regularly update your tier prices to remain competitive. Market conditions and supplier costs change frequently, so schedule periodic reviews of your pricing structure.

**Customer segmentation:** Adjust the tier prices to different customer needs. Consider creating separate tier pricing strategies for wholesale buyers, retail customers, or loyalty program members.

**Avoid unrealistic tiering:** Make sure that quantities and discounts do not jeopardize your margins. Calculate your break-even points and ensure each tier maintains profitability.

**Explicit communication:** Ensure that the tier prices are clearly visible on your product pages. Customers should easily understand the savings they receive at different quantity levels.

### Monitoring & Analysis of Tier Prices

**Success evaluation:** Analyze sales data and collect customer feedback to assess the effectiveness of tier prices. Track which tiers are most frequently purchased and which products benefit most from tier pricing.

**Tools and methods:** Use analytics tools like Google Analytics for data analysis and tracking of KPIs. Monitor metrics such as average order value, conversion rates for tiered products, and customer purchase patterns.

### Optimization of the Tier Prices Strategy

**Data-driven decisions:** Adjust your tiered pricing based on the collected data. If certain tiers are rarely used, consider adjusting the quantities or discount percentages to make them more attractive.

**Implementation of feedback:** Implement improvements based on customer feedback. If customers request different quantity breaks or find pricing confusing, use this input to refine your tier structure.

---
sidebar_position: 6
title: How to Implement GPSR Requirements Quickly
description: Add required GPSR compliance information to your products efficiently using cobby's Excel interface
---

# How to Implement GPSR Requirements Quickly

The General Product Safety Regulation (GPSR) requires e-commerce sellers in the EU to provide specific product safety information. This guide shows you how to quickly add manufacturer details, responsible person information, safety warnings, and compliance data to your products using cobby.

:::info Background Information
To understand the regulatory context and why GPSR requires this information, see [Understanding GPSR Requirements](/explanation/regulatory-compliance/understanding-gpsr-requirements).
:::

## Prerequisites

- Products loaded in cobby
- GPSR compliance data ready (manufacturer information, contact details, safety warnings)
- Basic familiarity with cobby's Excel interface

## Interactive Demo

See how to implement GPSR requirements step-by-step in this interactive walkthrough:

import Storylane from '@site/src/components/Storylane';

<Storylane
  src="https://app.storylane.io/share/jpwnboikmcum"
  title="GPSR Implementation Demo"
/>

## Steps

### 1. Load Your Product Data

Open cobby and load the products that need GPSR information:

1. Click "Load products" in the cobby toolbar
2. Select the product range you want to update
3. Wait for products to load into Excel

### 2. Identify GPSR-Related Columns

Look for columns related to GPSR requirements in your Excel sheet. Common GPSR fields include:

- Manufacturer name and address
- Responsible person (name, address, contact)
- Safety warnings and instructions
- Product documentation links
- Compliance marks and certificates
- Country of origin

If these columns are not visible, you may need to show them first.

### 3. Show Hidden GPSR Columns (If Needed)

If GPSR-related columns are hidden:

1. Right-click any column header
2. Select "Unhide" from the context menu
3. Check the boxes for GPSR-related columns
4. Click "OK"

### 4. Add GPSR Information to Your Products

Enter the required GPSR data directly into the Excel cells:

**For manufacturer information:**
- Fill in manufacturer name, street address, postal code, city, and country
- Add contact email and phone number

**For responsible person details:**
- Enter the responsible person's full name
- Add their complete address (street, postal code, city, country)
- Include contact email and website

**For safety information:**
- Add safety warnings in the appropriate language(s)
- Include age restrictions or usage instructions
- Add links to product manuals or safety documentation

**For compliance data:**
- Enter CE marking or other compliance certifications
- Add product test certificates or documentation URLs
- Include country of origin

:::tip
Use Excel's fill-down feature (Ctrl+D) to quickly copy the same GPSR information to multiple products from the same manufacturer.
:::

### 5. Use Formulas for Repetitive Data (Optional)

If many products share the same manufacturer or responsible person:

1. Create an auxiliary column with the common GPSR text
2. Use Excel formulas to reference this data across multiple products
3. Update once to change all products simultaneously

For more information, see [How to create auxiliary columns](/how-to/product-management/create-auxiliary-columns).

### 6. Validate Your GPSR Data

Before saving, verify that all required GPSR fields are filled:

1. Use Excel's filter feature to find empty cells in GPSR columns
2. Check that contact information is complete and accurate
3. Ensure all URLs for documentation are valid and accessible

### 7. Save Your Changes

Once all GPSR information is added:

1. Click "Save products" in the cobby toolbar
2. Wait for the save operation to complete
3. Check the cobby task pane for any errors or warnings

:::warning
If you receive errors about required fields, see [How to handle unfilled required fields](/how-to/product-management/handle-required-fields) for workarounds.
:::

## Verification

After saving, verify your GPSR implementation:

1. Check your shop system's product pages to confirm GPSR data appears correctly
2. Verify that all required information is visible to customers
3. Test that documentation links work and lead to the correct resources

Your products now include the required GPSR compliance information and meet EU regulatory requirements.

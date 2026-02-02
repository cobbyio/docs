---
title: How to Identify and Manage Default Values
description: Learn how to recognize which cells use default values vs. store view overrides in cobby, and how to use conditional formatting to visualize them.
---

# How to Identify and Manage Default Values

When working with multiple Store Views in cobby, it's essential to know which product values are inherited from "All Store Views" (default) and which have been overridden for a specific Store View. This guide shows you how to identify, visualize, and manage default values effectively.

---

## Understanding Default vs. Overridden Values

In cobby, every Store View-scoped attribute follows this logic:

- **Default value:** The value set in "All Store Views" — inherited by all Store Views that haven't overridden it
- **Overridden value:** A value explicitly set in a specific Store View — takes priority over the default

The challenge: cobby displays the *effective* value in every cell. Whether a cell shows the inherited default or a specific override looks identical at first glance.

:::tip
To understand the full Store View concept and how value inheritance works, see [Store Views](/explanation/architecture/store-views).
:::

---

## Check if a Cell Uses the Default Value

There are two ways to determine whether a cell contains a default or overridden value:

### Method 1: Compare with "All Store Views"

1. Load your products with **both** "All Store Views" and the specific Store View you want to check.
2. Find the same product in both rows (same SKU).
3. Compare the values:
   - **Identical values** → The Store View likely inherits the default
   - **Different values** → The Store View has an override

:::info
Identical values don't *guarantee* inheritance — someone could have manually entered the same value as an override. To be certain, use Method 2.
:::

### Method 2: Reset and Observe

1. Note the current value of the cell in the specific Store View.
2. Use **Reset Product → Reset standard value** on that cell (see [How to Reset Store View Values to Defaults](/how-to/product-management/reset-storeview-defaults)).
3. Save and reload products.
4. Compare:
   - **Value unchanged** → It was already using the default
   - **Value changed** → It had an override that's now been removed

:::caution
This method actually removes the override. Only use it when you're comfortable reverting to the default, or test on a non-critical product first.
:::

---

## Highlight Non-Default Values with Conditional Formatting

The most efficient approach is to use Excel's conditional formatting to **automatically color-code cells** that differ from their default values. This gives you an instant visual overview across your entire catalog.

### Step 1: Prepare Your Data

1. Load products with "All Store Views" **and** the Store View(s) you want to check.
2. Make sure products are sorted by **SKU** so that "All Store Views" rows and Store View rows align.

### Step 2: Set Up Conditional Formatting

This example highlights cells in a specific Store View that **differ from** the "All Store Views" default.

1. Select the column range you want to check in your Store View rows (e.g., the "Product Name" column for all German Store View rows).

2. Go to **Home → Conditional Formatting → New Rule**.

3. Select **"Use a formula to determine which cells to format"**.

4. Enter a formula that compares the Store View cell with the corresponding "All Store Views" cell. The exact formula depends on your sheet layout. For example:

   ```
   =B2<>B1
   ```

   Where `B2` is the Store View cell and `B1` is the corresponding "All Store Views" cell directly above it.

   For more complex layouts where rows aren't adjacent, use an INDEX/MATCH approach:

   ```
   =B2<>INDEX(AllStoreViews!B:B,MATCH($A2,AllStoreViews!$A:$A,0))
   ```

5. Click **Format** and choose a fill color:
   - 🟡 **Yellow** or 🟠 **Orange** — recommended for "has override" (stands out without implying good/bad)
   - Leave unformatted — cells using the default

6. Click **OK** to apply.

→ All cells with Store View-specific overrides are now highlighted. Unformatted cells inherit the default.

### Step 3: Interpret the Results

| Cell Appearance | Meaning | Action |
|----------------|---------|--------|
| **No highlight** | Uses default value from "All Store Views" | No action needed — value is inherited |
| **Highlighted** | Has a Store View-specific override | Review: Is this override intentional? |

### Practical Example

You manage a German Store View and want to see which product names have been translated:

| SKU | Store View | Product Name | Status |
|-----|-----------|-------------|--------|
| ABC-001 | All Store Views | Classic T-Shirt | — |
| ABC-001 | German | Klassisches T-Shirt | 🟡 Override (translated) |
| ABC-002 | All Store Views | Summer Dress | — |
| ABC-002 | German | Summer Dress | No highlight (not translated yet!) |

→ At a glance you can see: ABC-002 still needs a German translation.

---

## Save Your Setup as a Preset

Once you've configured conditional formatting, save the workbook as a **cobby preset** so you don't have to set it up again:

1. Configure your Store View filters, columns, and conditional formatting as desired.
2. In the cobby toolbar, go to **Load Products → Preset**.
3. Save the current view as a new preset (e.g., "DE Translation Check").

Next time, simply load the preset to get the same view with formatting intact.

For more details, see [Presets](/explanation/features/presets).

---

## Bulk-Reset Non-Default Values

If you find overrides that shouldn't exist (e.g., accidentally entered Store View values), you can reset them in bulk:

1. Use your conditional formatting to identify the highlighted (overridden) cells.
2. Select all cells you want to reset.
3. Click **Reset Product → Reset standard value**.
4. **Save products** to commit.
5. **Load products** to refresh and see the inherited default values.

For the full reset workflow, see [How to Reset Store View Values to Defaults](/how-to/product-management/reset-storeview-defaults).

---

## Troubleshooting

<details>
<summary><strong>Conditional formatting doesn't highlight anything?</strong></summary>

- Verify your formula references are correct — check that you're comparing the right rows
- Make sure "All Store Views" data is loaded alongside your Store View data
- Test the formula manually: enter it in a helper column to see if it returns TRUE/FALSE

</details>

<details>
<summary><strong>All cells are highlighted even though values look the same?</strong></summary>

Possible causes:
- **Trailing spaces:** The values may look identical but contain invisible whitespace. Use `=TRIM()` in your comparison formula.
- **Formatting differences:** Numbers stored as text vs. actual numbers. Use `=EXACT()` for strict comparison.
- **The value was manually entered** identically to the default — Magento still treats it as an override.

</details>

<details>
<summary><strong>Error "UseDefaultNotSupported" when resetting?</strong></summary>

Not all attributes support the "Reset standard value" function. Global-scope attributes (like SKU, weight) don't have Store View-level defaults to reset. This function only works with Store View-scoped attributes like names, descriptions, and meta data.

See [UseDefaultNotSupported error](/reference/error-codes/UseDefaultNotSupported) for details.

</details>

---

## Related Topics

- [Store Views](/explanation/architecture/store-views) — Understand how Store Views and value inheritance work
- [How to Reset Store View Values to Defaults](/how-to/product-management/reset-storeview-defaults) — Step-by-step guide for resetting overrides
- [How to Use Conditional Formatting](/how-to/excel-formulas/use-conditional-formatting) — General guide to conditional formatting in cobby
- [Product Attributes](/explanation/architecture/product-attributes) — Understanding attribute scopes (global, website, store view)

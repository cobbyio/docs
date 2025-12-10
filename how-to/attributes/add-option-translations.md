---
sidebar_position: 9
title: How to Add Attribute Option Translations
---

# How to Add Attribute Option Translations

Add or modify translations for attribute options across different store views directly in cobby.

## Why Translate Options

Attribute option translations allow:
- Multi-language store support
- Region-specific naming conventions
- Different values per store view

## Prerequisites

- cobby Excel add-in installed
- Products loaded in Excel
- Multiple store views configured in Magento
- Selection/dropdown attributes with existing options

## When to Use This

Use this process when:
- Adding translations for new attribute options
- Updating existing option translations
- Setting different values per store view
- Managing multi-language stores

---

## Steps

### Step 1: Access Attribute Options

1. Load your products in Excel via the cobby ribbon
2. Locate the attribute you want to translate (e.g., "Color", "Size", "Material")
3. Look at the cobby task pane on the right side of the screen

The task pane displays all available options for the selected attribute.

### Step 2: Select Option to Translate

1. Click on the option you want to translate from the list in the task pane
2. Click the **pen/edit button** (pencil icon)

![Select option and click edit](/img/adding-trasnslations-for-attribute-options-in-cobby/pic1.png)

The translation dialog will open.

### Step 3: Enter Store View Values

1. The dialog shows fields for each store view configured in your Magento installation
2. Enter the translated or alternative value for each store view
3. Leave any store views blank to use the default value

![Enter translations](/img/adding-trasnslations-for-attribute-options-in-cobby/pic2.png)

**Example:**
- **Default Store View:** Blue
- **German Store View:** Blau
- **French Store View:** Bleu
- **Spanish Store View:** Azul

### Step 4: Save Translations

1. Review all entered values
2. Click **Save** in the translation dialog
3. The dialog closes automatically

**Important:** Changes are saved immediately and do **not** require clicking "Save Products" in the cobby ribbon.

### Step 5: Verify Translations

The translations are now active:
- Frontend displays will show translated values per store view
- Layered navigation will use translated option names
- Product pages show appropriate translations

---

## Alternative: Translate During Creation

When creating new attribute options, cobby prompts for translations automatically:

### Step 1: Create New Option

1. Enter a new option value in the attribute column
2. Save products

### Step 2: Translation Prompt

After saving, a yellow job status appears with an exclamation mark:

1. Click **Yes** to open the translation dialog
2. The dialog shows the newly created option

### Step 3: Add Translations

1. Enter translations for each store view
2. If multiple new options were created, click through the tabs to translate each one
3. Click **Save**

**Skip translations:** Click **No** to dismiss. You can add translations later using the method above.

---

## Working with Multiple Options

### Translate Several Options

To translate multiple options efficiently:

1. Open the translation dialog for the first option
2. Add all translations and save
3. Immediately click the next option in the task pane
4. Click the edit button and repeat
5. Continue for all options needing translation

### Bulk Translation Strategy

For many options:

1. Create a spreadsheet listing:
   - Option name (default)
   - German translation
   - French translation
   - (etc. for each store view)
2. Keep this reference sheet open
3. Copy/paste translations into cobby's dialog
4. Process options one by one

---

## Setting Different Values Per Store View

Translations aren't only for language - use them for region-specific values:

### Example: Size Conversions

**Default (US sizes):**
- Small
- Medium
- Large

**UK Store View:**
- Size 8
- Size 10
- Size 12

**EU Store View:**
- Taille 36
- Taille 38
- Taille 40

### Example: Color Names

**Default:**
- Navy Blue

**Casual Store View:**
- Deep Sea

**Technical Store View:**
- #001F3F

---

## Important Notes

### Immediate Save

Unlike product data changes, option translations:
- Save immediately when you click "Save" in the dialog
- Do NOT require "Save Products" action
- Take effect right away

### Cannot Delete Options

You can translate options in cobby but cannot:
- Delete options
- Rename the default option value
- Reorder options

These actions must be done in Magento admin.

### Cache Considerations

After translating options:
- Frontend changes may be cached
- Clear Magento cache if translations don't appear immediately
- Layered navigation may need reindexing

---

## Troubleshooting

<details>
<summary>**Translation dialog doesn't open**</summary>

**Problem:** Clicking the option doesn't open the translation dialog.

**Solution:** Ensure you clicked the edit/pen icon after selecting an option. If the icon is greyed out, the attribute type may not support option editing.

</details>

<details>
<summary>**Translations don't appear on frontend**</summary>

**Problem:** Saved translations are not visible on the storefront.

**Solution:**
1. Clear Magento cache (System → Cache Management → Flush Magento Cache)
2. Verify the correct store view is selected on frontend
3. Check that attribute is set to "Visible on Catalog Pages on Storefront"

</details>

<details>
<summary>**Can't find new option**</summary>

**Problem:** A recently created option doesn't appear in the task pane.

**Solution:** Reload products in Excel. The task pane refreshes when products are loaded.

</details>

<details>
<summary>**Translation disappeared**</summary>

**Problem:** A translation was saved but no longer shows.

**Solution:** Check that you're viewing the correct store view. Each store view displays its own translation - the default shows if no translation exists.

</details>

<details>
<summary>**Remove a translation**</summary>

**Problem:** You need to delete an existing translation.

**Solution:** Open the option translation dialog and clear the store view field, then save. This reverts to showing the default value.

</details>

---

## Best Practices

### Translation Workflow

1. Create all options in default language first
2. Complete initial product assignments
3. Batch translate options by attribute
4. Verify translations on frontend before launch

### Maintain Consistency

- Use consistent translation terminology across options
- Create a translation glossary for your team
- Document any special naming conventions per store view

### Quality Assurance

- Review translations with native speakers
- Test frontend display in each store view
- Verify layered navigation shows correct values
- Check product pages display appropriate translations

### Keep Records

Maintain a reference document with:
- Original option values
- Translations per store view
- Date translations were added
- Any special notes or context

---

## Related Articles

- How to Create Attribute Options (coming soon)
- How to Maintain Attribute Options (coming soon)
- Managing Multi-Language Stores (coming soon)

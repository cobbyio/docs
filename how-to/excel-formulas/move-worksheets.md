---
sidebar_position: 16
title: How to Move Worksheets to Another Workbook
---

# How to Move Worksheets to Another Workbook

Learn how to copy or move Excel worksheets from one workbook to another.

## When to Use This

Move worksheets when you need to:
- Split a large workbook into smaller files
- Combine worksheets from different files
- Archive specific sheets
- Share only certain worksheets with others

## Step-by-Step: Move Sheets to New Workbook

### Step 1: Open the Document

Open the workbook containing the sheets you want to move.

### Step 2: Select Worksheets

Select the worksheets you want to keep:
- Click one sheet tab
- Hold **Shift** and click another to select a range
- Hold **Ctrl** and click to select non-adjacent sheets

### Step 3: Right-Click

Right-click on one of the selected sheet tabs.

### Step 4: Choose "Move or Copy"

Select **Move or copy** from the context menu.

![](/img/how-to-move-an-excel-page-into-another-document/pic1.png)

### Step 5: Create New Workbook

In the dialog:
1. Check **Create copy** (to keep originals)
2. Select **New workbook** in the dropdown
3. Click **OK**

Excel creates a new workbook with copies of the selected worksheets.

![](/img/how-to-move-an-excel-page-into-another-document/pic2.png)

### Step 6: Save

1. Save the new workbook with a descriptive name
2. When all desired worksheets are moved, you can delete the old document

## Common Use Cases

### Split by Attribute Set

Move each attribute set to its own workbook for easier management.

### Archive Old Data

Move historical worksheets to an archive workbook.

### Share Specific Data

Create a workbook with only the sheets others need to see.

### Backup Specific Sheets

Copy important sheets to a backup file before major changes.

## Move vs Copy

### Copy (Recommended)

- **Check "Create copy"**
- Original sheets remain in source workbook
- Safer option
- Allows you to verify before deleting originals

### Move

- **Uncheck "Create copy"**
- Removes sheets from source workbook
- Faster but riskier
- No undo after closing the file

## Alternative Destinations

Instead of "New workbook", you can move/copy to:

- **Another open workbook**: Select from the dropdown
- **Specific position**: Choose where to insert (before which sheet)
- **End**: Place at the end of the workbook

## Moving to Existing Workbook

### Step 1: Open Both Workbooks

Open both the source and destination workbooks.

### Step 2: Select and Right-Click

Select sheets in the source workbook and right-click.

### Step 3: Choose Destination

1. Select **Move or copy**
2. In the "To book" dropdown, select the destination workbook
3. Choose where to insert the sheets
4. Check "Create copy" if you want to keep originals
5. Click **OK**

## Tips

- **Always create a copy first**: Verify everything worked before deleting originals
- **Check formulas**: Links to other sheets may break when moving
- **Watch file size**: Moving many sheets can create large files
- **Name clearly**: Use descriptive names for new workbooks
- **Save immediately**: Don't lose your work

## Troubleshooting

<details>
<summary>**Links broken after moving?**</summary>

- External references become #REF! errors
- Update formulas to reference the new location
- Consider keeping related sheets together

</details>

<details>
<summary>**Can't select multiple sheets?**</summary>

- Make sure you're holding Shift or Ctrl while clicking
- Release other keys before clicking sheet tabs

</details>

<details>
<summary>**Move or copy is grayed out?**</summary>

- The workbook may be protected
- Check if you have permission to modify

</details>

<details>
<summary>**New workbook has different formatting?**</summary>

- Themes don't copy automatically
- Manually apply formatting or copy entire workbook

</details>


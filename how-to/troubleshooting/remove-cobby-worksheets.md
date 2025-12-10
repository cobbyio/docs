---
title: "How to Remove cobby Worksheets from Excel Workbooks"
description: "Remove cobby worksheets from locally saved Excel files or disable synchronization while keeping your data."
---

# How to Remove cobby Worksheets from Excel Workbooks

This guide shows you how to remove cobby worksheets from a locally saved Excel workbook or keep cobby data without synchronizing with your shop. You can choose from four different methods depending on your specific goal.

:::warning Important
**Always create a backup copy** of your Excel file before applying any of these methods. These operations cannot be undone.
:::

## Prerequisites

- A locally saved Excel workbook containing cobby worksheets
- Basic knowledge of Excel and file management
- For Method B: Familiarity with file extensions, ZIP archives, and XML file editing

## Method A: Move Non-cobby Worksheets to a New Workbook

This method preserves only your data worksheets by copying them to a new workbook, leaving cobby worksheets behind.

1. Open the workbook.
2. Select the worksheets you want to keep (hold **Shift** and click for multiple selections).
3. Right-click on one of the selected worksheet tabs.
4. Select **Move or Copy**.
5. Check the **Create a copy** box.
6. In the **To book** dropdown, select **(new book)**.
7. Click **OK**.
8. Save the new workbook.

**Result:** Your data worksheets are now in a new workbook without any cobby connections. The original file can be deleted.

## Method B: Disable Sync Without Opening the File (XML Editing)

This advanced method removes the cobby connection at the XML level from the Excel file. The data and worksheets remain fully intact.

1. Save the workbook as `.xlsx` and close Excel.
2. Navigate to the file in Windows Explorer.
3. **If file extensions are not visible**, enable them:
   - Press **Alt** to show the menu bar.
   - Go to **Tools** → **Folder Options**.
   - Uncheck **"Hide extensions for known file types"**.
   - Click **OK**.
4. Rename the Excel file extension from `.xlsx` to `.zip`.
5. Extract the ZIP file to a folder.
6. Navigate to the `/docProps/` folder.
7. Open the `custom.xml` file in a text editor.
8. Locate and remove the entire XML section containing `cobbyWorkbook`. It typically looks like this:
   ```xml
   <property fmtid="{D5CDD505-2E9C-101B-9397-08002B2CF9AE}" pid="2" name="DocType">
       <vt:lpwstr>cobbyWorkbook</vt:lpwstr>
   </property>
   ```
9. Save and close the `custom.xml` file.
10. Repackage the folder structure back into a ZIP archive.
11. Rename the file extension back from `.zip` to `.xlsx`.

**Result:** The cobby connection is removed at the file structure level. The workbook will no longer sync, but all data and worksheets remain intact.

:::tip
When repacking the ZIP file, maintain the same folder structure. All files must be at the same level as when they were extracted.
:::

## Method C: Remove cobby Properties from Document Properties

This method disables sync by removing all cobby-related custom properties from the open workbook. You control which data to keep.

1. Open the Excel workbook.

   ![Open Excel File menu](/img/remove-cobby-worksheets/remove-1.png)

2. Go to **File** → **Info** → **Properties** → **Advanced Properties**.

   ![Advanced Properties dialog](/img/remove-cobby-worksheets/remove-2.png)

3. Click on the **Custom** tab.
4. Look for any properties related to cobby (e.g., properties with "cobby" in the name).
5. Select each cobby-related property.
6. Click **Delete**.

   ![Delete custom properties](/img/remove-cobby-worksheets/remove-3.png)
7. Repeat steps 5-6 for all cobby properties.
8. Click **OK** to close the dialog.
9. Save the workbook.

**Result:** All cobby custom properties are removed from the document. The sync is disabled, and you determine which data remains in the file.

## Method D: Open Excel in Safe Mode

This method temporarily prevents cobby add-ins from loading, allowing you to work with the workbook without an active cobby connection.

1. Hold down the **Ctrl key**.
2. Launch Excel (while keeping Ctrl pressed).
3. Confirm the prompt to start in Safe Mode.
4. Open your workbook.

**Result:** Excel starts in Safe Mode without add-ins. You'll see "Safe Mode" in the Excel title bar. cobby worksheets are not loaded and synchronization is disabled.

:::note
This is a temporary solution. cobby will load again the next time you open Excel normally.
:::

## Which Method to Use?

Choose the method that best fits your goal:

- **Method A**: When you want to start fresh with a new workbook containing only your data worksheets, leaving all cobby worksheets behind
- **Method B**: When you want to permanently disable sync while keeping data and worksheets intact (advanced users comfortable with file editing)
- **Method C**: When you want to remove cobby properties from an open workbook and decide which data to keep
- **Method D**: When you need to temporarily open the file without cobby synchronization (e.g., for viewing or testing)

## Related Information

- [How to Fix cobby Not Showing in Excel](fix-cobby-not-showing-in-excel.md)
- [How to Fix Connection Issues](fix-connection-issues.md)

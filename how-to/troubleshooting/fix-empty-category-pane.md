---
sidebar_position: 3
title: How to Fix Empty Category Task Pane
---

# How to Fix Empty Category Task Pane

This guide helps you resolve the issue when the category task pane in cobby appears empty or blank.

## Problem

When you open the category task pane in cobby, it displays as empty or completely blank, preventing you from managing product categories.

![Empty category task pane](/img/the-category-task-pane-is-empty/pic1.png)

**Affected users:** This issue primarily affects users working with Windows 10, Windows 11, and Office 365.

## Cause

This issue is caused by an Office 365 feature designed to optimize add-ins for high-resolution displays. Microsoft's display optimization feature can interfere with cobby's category task pane rendering.

Read more about this feature in [Microsoft's documentation](https://support.office.com/en-us/article/office-support-for-high-definition-displays-6720ca0e-be59-41f6-b629-1369f549279d).

## Solution

### Method 1: Using Display Settings (Quick Method)

If the Display Settings option is visible in Excel:

1. Look at the bottom-right corner of your Excel window.
2. Find the **Display Settings** icon.
3. Click on it.
4. Select **Optimize for Compatibility**.

   ![Display settings menu](/img/the-category-task-pane-is-empty/pic2.png)

5. Restart Excel.
6. Open the category task pane again.
7. Categories should now be visible.

### Method 2: Using Excel Options (If Display Settings Not Visible)

If you don't see the Display Settings menu in the bottom-right corner:

1. Open Excel.
2. Click **File** in the menu bar.
3. Click **Options** at the bottom of the sidebar.

   ![Excel options](/img/the-category-task-pane-is-empty/pic3.png)

4. In the left sidebar, click **General**.
5. Under **User Interface Options**, find the display optimization setting.
6. Select **Optimize for compatibility**.
7. Click **OK**.

   ![User interface options](/img/the-category-task-pane-is-empty/pic4.png)

8. Restart Excel.
9. Open the category task pane again.

## Troubleshooting

### Categories still not visible after restart

Excel may still be running in the background. Completely close Excel:

1. Close all Excel windows.
2. Press **Ctrl + Shift + Esc** to open Task Manager.
3. Click on the **Details** tab.
4. Look for any processes named **Excel.exe** or **EXCEL.EXE**.

   ![Task Manager details](/img/the-category-task-pane-is-empty/pic5.png)

5. If found, select the process.
6. Click **End task**.
7. Open Excel again.
8. Try opening the category task pane.

### Display optimization keeps reverting

- Office updates may reset this setting.
- Check and reapply the compatibility setting after each Office update.
- Set a reminder to verify this setting monthly.

### Other task panes also appear empty

- Follow the same solution steps.
- All cobby task panes should work once the display setting is changed.
- If only specific task panes are affected, contact cobby support.

### Setting doesn't exist in your Excel version

- Verify you're using Office 365 or Office 2019 or later.
- Check for pending Office updates and install them.
- If using an older Excel version, this issue likely doesn't apply to you.

## Alternative Solution

If the compatibility mode affects your Excel performance negatively:

1. Use cobby's Excel-based features instead of task panes where possible.
2. Switch to "Best for high definition" temporarily when not using cobby.
3. Consider upgrading your display drivers.
4. Contact cobby support for additional workarounds.

## Related Resources

- [How to Fix cobby Not Showing Up in Excel](fix-excel-addin-not-showing.md)
- [Microsoft Office High Definition Display Support](https://support.office.com/en-us/article/office-support-for-high-definition-displays-6720ca0e-be59-41f6-b629-1369f549279d)

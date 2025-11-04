---
sidebar_position: 2
title: How to Fix cobby Not Showing Up in Excel
---

# How to Fix cobby Not Showing Up in Excel

This guide helps you resolve issues when the cobby add-in is installed but does not appear in Excel's ribbon menu.

## Problem

After installing cobby, the cobby tab is not visible in Excel's menu bar, preventing you from accessing cobby features.

## Solution

Follow these steps in order until cobby appears in Excel.

### Step 1: Restart Excel

1. Close all Excel windows completely.
2. Open Excel again.
3. Check if the cobby ribbon tab appears in the menu bar.
4. If not, continue to Step 2.

### Step 2: Restart Your Computer

1. Save all your work and close all applications.
2. Restart your computer.
3. Open Excel after the restart.
4. Check if the cobby ribbon tab appears.
5. If not, continue to Step 3.

### Step 3: Enable cobby in COM Add-ins

Excel may have disabled cobby after a crash. Re-enable it manually.

1. Open Excel.
2. Click **File** in the menu bar.
3. Click **Options** at the bottom of the sidebar.
4. In the left sidebar, click **Add-Ins**.
5. At the bottom of the window, find the **Manage** dropdown.
6. Select **COM Add-ins** from the dropdown.
7. Click **Go**.

   ![Excel Add-ins options](/img/cobby-does-not-show-up-in-excel/pic1.png)

8. In the COM Add-Ins window, check the box next to **cobby**.
9. Click **OK**.

   ![Enable cobby in COM Add-ins](/img/cobby-does-not-show-up-in-excel/pic2.png)

10. Restart Excel.
11. If cobby still doesn't appear, continue to the next substep.

**Additional Check for Excel Add-ins:**

1. Open Excel and go back to **File > Options > Add-Ins**.
2. In the **Manage** dropdown, select **Excel Add-ins**.
3. Click **Go**.

   ![Excel Add-ins management](/img/cobby-does-not-show-up-in-excel/pic3.png)

4. Check the box next to **Cobby.ExcelHelper** or **Cobby.ExcelHelper addin64** (depending on your Excel version).

   ![Enable Excel helper](/img/cobby-does-not-show-up-in-excel/pic4.png)

5. Click **OK**.
6. Restart Excel.

### Step 4: Check Disabled Items

Excel may have moved cobby to the disabled items list.

1. Open Excel.
2. Click **File** in the menu bar.
3. Click **Options**.
4. Click **Add-Ins** in the left sidebar.
5. At the bottom, find the **Manage** dropdown.
6. Select **Disabled Items**.
7. Click **Go**.

   ![Disabled items management](/img/cobby-does-not-show-up-in-excel/pic5.png)

8. If cobby appears in the list, select it.
9. Click **Enable**.
10. Click **Close**.
11. Restart Excel.

## Troubleshooting

### cobby still doesn't appear after all steps

- Verify cobby is actually installed on your computer (Check Control Panel > Programs and Features).
- Uninstall cobby completely and reinstall it.
- Check if other Excel add-ins are working (this helps identify if it's an Excel issue).
- Run Excel as administrator and check if cobby appears.
- Contact cobby support at [info@cobby.io](mailto:info@cobby.io).

### cobby appears but then disappears after Excel restart

- Excel may be repeatedly disabling cobby due to performance issues.
- Check if Excel is loading too many add-ins (disable others temporarily).
- Increase Excel's add-in load timeout in the registry (advanced users only).
- Ensure you have the 64-bit version of Excel installed for better performance.

### Error message when enabling cobby

- Note the exact error message.
- Check if all Windows and Office updates are installed.
- Repair your Office installation through Control Panel.
- Reinstall cobby with the latest installer version.

## Related Resources

- [How to Fix cobby Installation Problems](../installation/installation-troubleshooting.md)
- System Requirements (coming soon)

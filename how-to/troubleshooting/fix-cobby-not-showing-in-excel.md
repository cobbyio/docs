---
sidebar_position: 1
title: How to Fix cobby Not Showing in Excel
---

# How to Fix cobby Not Showing in Excel

This guide helps you make cobby visible in Excel when it doesn't appear after installation.

## Symptoms

- cobby has been installed but does not appear in Excel
- The cobby tab is missing from the Excel ribbon menu bar
- Excel starts normally but without the cobby add-in

## Prerequisites

- cobby is installed on your computer
- You have Excel running
- Administrative access to modify Excel settings

## Step-by-Step Solutions

### Solution 1: Restart Excel

1. Close all Excel windows completely
2. Start Excel again
3. Check if the cobby ribbon tab appears in the menu bar

**Expected result:** cobby should appear as a new tab in the Excel ribbon.

If cobby still doesn't appear, continue to Solution 2.

### Solution 2: Restart Your Computer

1. Save all your work and close all applications
2. Restart your computer
3. Open Excel
4. Check if the cobby ribbon tab appears

**Expected result:** cobby should appear after the system restart.

If cobby still doesn't appear, continue to Solution 3.

### Solution 3: Enable cobby in COM Add-ins

Excel may have disabled cobby if it crashed previously. Re-enable it manually:

1. Open Excel and click **File** in the menu bar
2. Click **Options** and navigate to **Add-Ins**
3. At the bottom, click **Manage**, select **COM Add-ins** from the dropdown
4. Click **Go**

![Excel Add-ins settings](/img/cobby-does-not-show-up-in-excel/pic1.png)

5. Check the box next to **cobby** in the add-ins list
6. Click **OK**

![Enable cobby in COM Add-ins](/img/cobby-does-not-show-up-in-excel/pic2.png)

7. Restart Excel

**Expected result:** cobby should now appear in the Excel ribbon.

If cobby still doesn't appear, continue with these additional steps:

8. Navigate to **File** > **Options** > **Add-Ins** again
9. Click **Manage**, select **Excel Add-Ins** from the dropdown
10. Click **Go**

![Excel Add-ins management](/img/cobby-does-not-show-up-in-excel/pic3.png)

11. Enable **Cobby.ExcelHelper** or **Cobby.ExcelHelper addin64** (depending on your Excel version)

![Enable Cobby.ExcelHelper](/img/cobby-does-not-show-up-in-excel/pic4.png)

12. Click **OK** and restart Excel

**Expected result:** cobby should now appear in the Excel ribbon.

### Solution 4: Check Disabled Items

Check if Excel has disabled cobby:

1. Open Excel and click **File** in the menu bar
2. Click **Options** and navigate to **Add-Ins**
3. At the bottom, click **Manage**, select **Disabled Items** from the dropdown
4. Click **Go**

![Check disabled items](/img/cobby-does-not-show-up-in-excel/pic5.png)

5. If cobby appears in the disabled items list, select it
6. Click **Enable**
7. Restart Excel

**Expected result:** cobby should now appear in the Excel ribbon.

## Still Having Issues?

If none of these solutions work:

- Verify that cobby is properly installed by checking your installed programs
- Try reinstalling cobby
- Contact cobby support at info@cobby.io with details about your Excel version and operating system

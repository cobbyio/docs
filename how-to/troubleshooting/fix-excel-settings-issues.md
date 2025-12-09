---
sidebar_position: 6
title: How to Fix Excel Settings Issues
---

# How to Fix Excel Settings Issues

This guide helps you resolve cobby problems caused by incorrect Excel or system settings. These settings can prevent cobby from functioning properly.

## Common Problem Scenarios

This guide addresses three specific scenarios:

1. **Images cannot be added** - Feedback window appears when trying to add images
2. **Products cannot be loaded** - Feedback window appears and Excel hangs
3. **Only one row of products displays** - Products appear below the table instead of within it

## Scenario 1: Cannot Add Images

### Symptoms

- You try to add images using the cobby task pane
- Only the feedback window opens
- No images are added to the Excel sheet
- Connection appears to fail to cloud storage

### Prerequisites

- cobby is installed and connected to your store
- Administrative access to Windows time settings
- Administrative access to security software settings

### Step-by-Step Solutions

#### Solution 1A: Fix System Time

AWS requires correct system time for secure connections:

1. Check your system clock in the Windows taskbar
2. Verify the time, date, and timezone are correct
3. If incorrect, right-click the clock and select **Adjust date/time**
4. Enable **Set time automatically** and **Set time zone automatically**
5. If problems persist, manually sync the time:
   - Click **Sync now** under "Synchronize your clock"
6. Restart cobby in Excel
7. Try adding images again

**Expected result:** Images should now upload successfully to the Excel sheet.

**Background:** AWS verifies your computer's time to establish secure connections. Incorrect time causes authentication failures.

For advanced troubleshooting, see:
- [Microsoft NTP Troubleshooting Guide](https://docs.microsoft.com/de-de/windows-server/networking/windows-time-service/Windows-Time-Service-Tools-and-Settings)
- [Configure NTP (NTP.org)](http://www.pool.ntp.org/de/use.html)

**If this doesn't work:** Continue to Solution 1B.

#### Solution 1B: Check Security Software Blocking AWS

Internet security suites may block Amazon Web Services:

1. Identify your Internet Security Suite (MalwareBytes, Norton, McAfee, etc.)
2. Update the security software's definitions:
   - Open your security software
   - Look for "Update" or "Check for updates"
   - Install all available updates
3. Restart your computer
4. Try adding images in cobby again

**Expected result:** Updated security definitions should unblock AWS, allowing image uploads.

**Background:** Security suites sometimes block entire AWS server clusters when detecting malware. Updates typically fix these false positives within hours.

**If this doesn't work:**

1. Temporarily disable your Internet Security Suite
2. Try adding images in cobby
3. If it works, add cobby to your security software's exception list
4. Re-enable your security software

## Scenario 2: Cannot Load Products

### Symptoms

- Feedback window appears when loading products
- Feedback window appears when applying filters
- Feedback window appears when starting import mode
- Excel hangs after closing the feedback window
- You must restart Excel to continue working

### Prerequisites

- cobby is installed in Excel
- Access to Excel Options

### Step-by-Step Solution

#### Solution 2: Disable R1C1 Reference Style

cobby only supports A1 reference style (letters for columns, numbers for rows):

1. Open Excel
2. Check your worksheet headers:
   - **Problem:** Both rows AND columns show numbers
   - **Correct:** Columns show letters (A, B, C...), rows show numbers (1, 2, 3...)

![R1C1 reference style](/img/settings-that-can-make-cobby-unusable/pic1.png)

3. Click **File** in the Excel ribbon
4. Click **Options**
5. Select **Formulas** in the left sidebar
6. Under "Working with formulas", find **R1C1 reference style**
7. **Uncheck** the "R1C1 reference style" checkbox

![Disable R1C1 reference style](/img/settings-that-can-make-cobby-unusable/pic2.png)

8. Click **OK**
9. Verify columns now show letters (A, B, C...)
10. Restart Excel
11. Try loading products again

**Expected result:** Products should load successfully with A1 reference style enabled.

**Background:** R1C1 style uses numbers for both rows and columns. cobby requires A1 style (letters for columns) to function correctly.

## Scenario 3: Only One Product Row Shows

### Symptoms

- Only the first product appears in each worksheet table
- All other products are listed below the table
- The table doesn't expand to include all rows
- Data appears outside the formatted table structure

![Products outside table](/img/settings-that-can-make-cobby-unusable/pic3.png)

### Prerequisites

- cobby is installed in Excel
- Access to Excel Options and AutoCorrect settings

### Step-by-Step Solution

#### Solution 3: Enable Auto-Expansion of Tables

Configure Excel to automatically include new rows in tables:

1. Close all Excel workbooks
2. Open Excel (with a blank workbook)
3. Click the **File** tab
4. Select **Options**
5. Select **Proofing** in the left sidebar
6. Click the **AutoCorrect Options...** button
7. Switch to the **AutoFormat As You Type** tab
8. Under "Automatically as you work", find **Include new rows and columns in table**
9. **Check** the "Include new rows and columns in table" checkbox

![Enable table auto-expansion](/img/settings-that-can-make-cobby-unusable/pic4.png)

10. Click **OK** to close AutoCorrect Options
11. Click **OK** to close Excel Options
12. Restart Excel
13. Load products in cobby and verify all rows appear in the table

**Expected result:** All products should appear within the table structure, not below it.

**Background:** cobby creates tables from top to bottom. Without this setting, Excel doesn't automatically expand tables to include new rows.

## Troubleshooting

<details>
<summary>**Still experiencing issues?**</summary>

- Ensure you've restarted Excel after making settings changes
- Try creating a new Excel workbook and loading products fresh
- Check for Excel add-in conflicts by disabling other add-ins temporarily
- Verify you're using a supported Excel version

</details>

<details>
<summary>**Multiple issues?**</summary>

- Work through each scenario that applies to your situation
- Settings are independent, so you may need to fix more than one
- Always restart Excel after making changes

</details>

## Still Having Issues?

If problems persist after trying these solutions:

- Email cobby support at support@cobby.io with:
  - Which scenario you're experiencing
  - Excel version (File > Account > About Excel)
  - Windows version
  - Screenshots of the issue
  - Any error messages from the feedback window
- Include what settings you've already tried changing
- Note any security software or antivirus programs you're running

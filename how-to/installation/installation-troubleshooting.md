---
sidebar_position: 1
title: How to Fix cobby Installation Problems
---

# How to Fix cobby Installation Problems

This guide helps you resolve common issues that occur during cobby add-in installation on Windows.

## Problem

You receive an error message during cobby installation, preventing the add-in from being installed properly.

![Installation error message](/img/problems-while-installing-the-cobby-addin/pic1.png)

## Prerequisites

- Microsoft Windows operating system
- Microsoft Excel 2007 or later
- Administrator access to install Windows updates

## Solution

### Step 1: Install Windows and Office Updates

The cobby installer requires the latest Windows and Office files to run successfully.

1. Open your **Control Panel**.
2. Click on **System and Security**.
3. Select **Windows Update**.
4. Install all pending updates.
5. Restart your computer if required.
6. Open Excel and check for Office updates (File > Account > Update Options).
7. Install any pending Office updates.
8. Try running the cobby installer again.

### Step 2: Install Security Certificate (If Step 1 Fails)

If the installation still fails after updating, install the cobby security certificate manually.

1. Right-click on the cobby installation file.
2. Select **Properties**.
3. Go to the **Digital Signatures** tab.
4. Select the entry "mash2 GmbH & Co. KG".
5. Click **Details**.

   ![Digital signatures tab](/img/problems-while-installing-the-cobby-addin/pic3.png)

6. In the "Digital signature details" window, click **View certificate**.
7. In the "Certificate" window, click **Install Certificate**.
8. Follow the Certificate Import Wizard.
9. When asked for the certificate store, select **Place all certificates in the following store**.
10. Click **Browse** and select **Trusted Publishers**.
11. Click **OK**, then **Next**, then **Finish**.
12. Try running the cobby installer again.

## Troubleshooting

### Installation still fails after following all steps

- Verify you have administrator rights on your computer.
- Check if antivirus software is blocking the installation (temporarily disable and retry).
- Ensure you downloaded the installer from the official cobby website.
- Contact cobby support at [info@cobby.io](mailto:info@cobby.io) with the exact error message.

### Error message mentions missing files

- Run Windows Update again and ensure all updates are installed.
- Restart your computer and try the installation immediately after startup.
- Check that your Excel installation is not corrupted (repair Office through Control Panel if needed).

## Related Resources

- System Requirements (coming soon)
- [How to Fix Excel Add-in Not Showing](/how-to/troubleshooting/fix-excel-addin-not-showing)

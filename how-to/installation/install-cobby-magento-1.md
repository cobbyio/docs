---
sidebar_position: 2
title: Install cobby for Magento 1
---

import YoutubeVideo from '@site/src/components/YoutubeVideo';

# Install cobby for Magento 1

This guide shows you how to install and configure cobby for your Magento 1 shop.

## Prerequisites

- cobby account (register at [app.cobby.io](https://app.cobby.io/))
- Admin access to your Magento 1 backend
- FTP/SFTP access to your Magento server
- Your Magento admin password
- Microsoft Excel installed on your computer

:::warning Important
It is strongly recommended to make a backup of your server files and database before installing this extension. We recommend testing the installation on a staging server first.
:::

:::tip Video Tutorial
Watch our step-by-step video guide for the complete setup process:
:::

<YoutubeVideo id="ATfWX5ZoEeY" title="Magento 1 - Portal Setup Guide" />

---

## Step 1: Create Your Workspace in the cobby Portal

1. Log in to the cobby portal at [app.cobby.io](https://app.cobby.io/).

2. Click on the **little arrow on the left** to view all workspaces.

3. Click on **Create new** to add a new workspace.

   ![](/img/magento-2-setup/picture-1.png)

4. Give your workspace a meaningful name (e.g., "My Magento 1 Shop").

   ![](/img/magento-2-setup/picture-1b.png)

5. Click **Create**.

:::warning Important
Each workspace can only be connected to one shop and one license. If you have multiple shops (e.g., staging and production) or are migrating from Magento 1 to Magento 2, you'll need to create separate workspaces for each.
:::

---

## Step 2: Select Your Shop System and Download the Extension

1. Select **Magento Version 1** as your shop system.

   ![](/img/magento-2-setup/picture-2b.png)

2. Click the **download button** to download the cobby extension for Magento 1.

---

## Step 3: Prepare Your Magento Installation

1. Log in to your Magento Admin Panel.

2. Go to **System** → **Tools** → **Compilation**.

3. If the compiler is enabled, **disable it** (you'll re-enable it later).

4. Go to **System** → **Cache Management**.

5. Make sure the cache is **enabled**.

:::tip
Having the cache enabled during installation helps ensure the extension installs correctly.
:::

---

## Step 4: Upload the Extension Files to Your Server

1. Unzip the downloaded cobby extension archive on your computer.

2. Connect to your Magento server using your FTP/SFTP client (we recommend [FileZilla](https://filezilla-project.org/))

3. Navigate to your Magento root directory (the folder containing `app`, `downloader`, `errors`, etc.).

4. Upload the contents of the `app` directory from the ZIP file to your server's `app` directory.
   - **Important:** Skip the `app/etc` directory for now - we'll upload it in the next step

   ![](/img/installation-guide-cobby-for-magento-1/pic2.png)

5. After all other files are uploaded, now upload the contents of `app/etc` from the ZIP file to your server's `app/etc` directory.

   ![](/img/installation-guide-cobby-for-magento-1/pic3.png)

:::tip Why Upload app/etc Last?
Uploading the `app/etc` directory last greatly reduces the chance of SQL scripts not running correctly during installation.
:::

---

## Step 5: Activate the Extension in Magento

1. Log out of the Magento Admin Panel.

2. Log back in to the Magento Admin Panel.

   :::warning
   This logout/login step is essential to prevent "404 Access Denied" errors.
   :::

3. Go to **System** → **Cache Management**.

4. **Disable all caches** by unchecking all cache types.

   ![](/img/installation-guide-cobby-for-magento-1/pic4.png)

5. Click **Flush Magento Cache** to empty the cache completely.

6. Open your shop's **frontend** in a browser (visit your shop's public URL).

:::tip
Opening the frontend ensures that all database updates are executed properly.
:::

---

## Step 6: Complete the Installation

1. If you use the Magento compiler, go back to **System** → **Tools** → **Compilation**.

2. Run the recompilation process.

   :::warning
   Skipping recompilation can cause fatal errors like "Call to a member function toOptionArray() on a non-object"
   :::

3. Go back to **System** → **Cache Management**.

4. **Re-enable all caches**.

5. Refresh the cache.

6. Go to **System** → **Configuration** → **Services** → **cobby**.

   ![](/img/installation-guide-cobby-for-magento-1/pic5.png)

---

## Step 7: Create an API Role for cobby

1. In the Magento Admin Panel, go to **System** → **Web Services** → **SOAP/XML-RPC - Roles**.

   ![](/img/magento-1-setup/picture-4.png)

2. Click **Add New Role**.

3. In the **Role Info** tab:
   - **Role Name:** Enter `cobby`
   - **Admin Password:** Enter your current Magento admin password

   ![](/img/magento-1-setup/picture-6.png)

4. Switch to the **Role Resources** tab.

5. Under **Resource Access**, expand the tree and check the **cobby** checkbox.

6. Click **Save Role** in the upper right corner.

   ![](/img/magento-1-setup/picture-7.png)

---

## Step 8: Create an API User for cobby

1. Go to **System** → **Web Services** → **SOAP/XML-RPC - Users**.

   ![](/img/magento-1-setup/picture-8.png)

2. Click **Add New User**.

   ![](/img/magento-1-setup/picture-5.png)

3. In the **User Info** tab, enter:
   - **User Name:** Choose a username (e.g., `cobby_api`)
   - **API Key:** Create a secure API key (you'll need this later)

   ![](/img/magento-1-setup/picture-9.png)

   :::tip
   Write down the username and API key - you'll need them to connect to the cobby portal.
   :::

4. Switch to the **User Role** tab.

5. Select the **cobby** role you created earlier.

6. Click **Save User** in the upper right corner.

   ![](/img/magento-1-setup/picture-10.png)

---

## Step 9: Connect Your Shop to the cobby Portal

1. Return to the cobby portal.

2. In your workspace settings, enter:
   - **Shop URL:** Your Magento shop URL (e.g., `https://yourshop.com`)
   - **User Name:** The API username you created
   - **API Key:** The API key you created

   ![](/img/magento-1-setup/picture-15.png)

3. Click **Save**.

---

## Step 10: Save the Magento Configuration

1. Go to **System** → **Configuration** in your Magento Admin Panel.

2. Click **Save Config** in the upper right corner (even if you didn't change anything).

   ![](/img/magento-1-setup/picture-12.png)

:::tip Success Indicator
The green text confirms that cobby is properly configured in Magento 1!
:::

   ![](/img/magento-1-setup/picture-13.png)

---

## Step 11: Wait for Synchronization

1. Return to the cobby portal.

2. Wait for the synchronization to complete (this may take several minutes depending on your catalog size).

3. Once complete, the status changes to **Active**.

---

## Step 12: Download and Install the cobby Excel Plugin

1. In the cobby portal, go to the menu on the left and open the dropdown menu by clicking on the little arrow next to your selected workspace.

2. Click on **Download Excel app** to start the download of the Excel plugin.

   <img src="/img/install-cobby-excel-plugin/picture-1.png" width="35%" />

3. Click the download link to download the plugin installer.

4. Right-click the downloaded file and select **Open**.

   ![](/img/install-cobby-excel-plugin/picture-2.png)

5. In the installer window, click **Install**.

6. Wait for the installation to complete.

7. Click **Close**.

   ![](/img/install-cobby-excel-plugin/picture-3.png)

---

## Step 13: Load Your Products in Excel

1. Open **Microsoft Excel**.

2. Click on the **cobby** tab in the ribbon.

3. Click **Load products**.

   ![](/img/install-cobby-excel-plugin/picture-4.png)

---

## Next Steps

- Edit product data in Excel
- Set up category management
- Configure image handling
- Explore advanced features like bulk updates and custom attributes

:::tip Need Help?
If you encounter any issues during installation, please contact our support team or check our [installation troubleshooting guide](/how-to/installation/installation-troubleshooting).
:::

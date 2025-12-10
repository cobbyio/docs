---
sidebar_position: 3
title: Install cobby for Magento 2
---

import YoutubeVideo from '@site/src/components/YoutubeVideo';

# Install cobby for Magento 2

This guide shows you how to install and configure cobby for your Magento 2 shop.

## Prerequisites

- A cobby account at [app.cobby.io](https://app.cobby.io/)
- Admin access to your Magento 2 backend
- Your Magento admin password
- Microsoft Excel installed on your computer

:::tip Video Tutorial
Watch our step-by-step video guide for the complete setup process:
:::

<YoutubeVideo id="vjdYaBn75mY" title="Magento 2 - Portal Setup Guide" />

---

## Step 1: Create Your Workspace in the cobby Portal

1. Log in to the cobby portal at [app.cobby.io](https://app.cobby.io/).

2. Click on the **little arrow on the left** to view all workspaces.

3. Click on **Create new** to add a new workspace.

   ![](/img/magento-2-setup/picture-1.png)

4. Give your workspace a meaningful name (e.g., "My Magento 2 Shop").

5. Click **Create**.

   ![](/img/magento-2-setup/picture-1b.png)

6. Click on **here** to continue with the setup.

   ![](/img/magento-2-setup/picture-2a.png)

:::warning Important
Each workspace can only be connected to one shop and one license. If you have multiple shops (e.g., staging and production) or are migrating from Magento 1 to Magento 2, you'll need to create separate workspaces for each.
:::

---

## Step 2: Select Your Shop System and Download the Extension

1. Select **Magento 2** as your shop system.

   ![](/img/magento-2-setup/picture-2b.png)

2. Click the **download button** to download the cobby extension for Magento 2.

:::tip
For detailed installation instructions, you can also refer to our [GitHub repository](https://github.com/cobbyio/cobby-connector-magento2).
:::

---

## Step 3: Create an Integration in Magento 2

1. Go to your **Magento Admin Panel** and log in.

2. Navigate to **System** → **Integrations**.

3. Click **Add New Integration** in the upper right corner.

   ![](/img/magento-2-setup/picture-4.png)

---

## Step 4: Configure the Integration Settings

1. In the **Integration Info** tab, enter the following:
   - **Name:** cobby
   - **Email:** Your email address
   - **Your Password:** Your Magento backend password

   ![](/img/magento-2-setup/picture-5.png)

2. Switch to the **API** tab.

3. Check the **cobby** checkbox to grant API access.

4. Click **Save** in the upper right corner.

   ![](/img/magento-2-setup/picture-6.png)

---

## Step 5: Activate the Integration

1. Find your newly created cobby integration in the list.

2. Click **Activate** in the Actions column.

   ![](/img/magento-2-setup/picture-7.png)

3. A confirmation dialog appears - click **Allow** in the upper right corner.

   ![](/img/magento-2-setup/picture-8.png)

:::tip
Keep this window open - you'll need to copy these credentials in the next step.
:::

---

## Step 6: Connect Your Shop to the cobby Portal

1. Copy the **Access Token** from the Magento screen.

2. Return to the cobby portal.

3. Paste the access token and other required credentials into the workspace settings.

4. Click **Save**.

   ![](/img/magento-2-setup/picture-9.png)

5. Wait for the synchronization to complete.

:::tip Success Indicator
When you see the "Active" status, your shop data has been successfully synchronized with cobby! This may take several minutes depending on the size of your product catalog.
:::

---

## Step 7: Download and Install the cobby Excel Plugin

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

## Step 8: Load Your Products in Excel

1. Open **Microsoft Excel**.

2. Click on the **cobby** tab in the ribbon.

3. Click **Load products**.

   ![](/img/install-cobby-excel-plugin/picture-4.png)

---

## Next Steps

- Learn how to edit product data efficiently in Excel
- Set up category management
- Configure image handling
- Explore advanced features like bulk updates and custom attributes

:::tip Need Help?
If you encounter any issues during installation, please contact our support team or check our [installation troubleshooting guide](/how-to/installation/installation-troubleshooting).
:::

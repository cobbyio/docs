---
sidebar_position: 4
title: Install cobby for Shopware 6
---

# Install cobby for Shopware 6

import Storylane from '@site/src/components/Storylane'

This guide shows you how to install and configure cobby for your Shopware 6 shop.

## Prerequisites

- A Shopware 6 shop with admin access
- Admin login credentials for your Shopware backend
- A Microsoft account
- Microsoft Excel (Microsoft 365 or standalone version)

:::tip Interactive Demo
You can explore an interactive demo of the installation process:

<Storylane src="https://app.storylane.io/share/ysullyv3kiin" />
:::

---

## Step 1: Create a cobby Role in Shopware

First, create a dedicated role with the necessary permissions for cobby.

1. Log in to your Shopware 6 admin panel (e.g., `https://yourshop.com/admin`).

2. Navigate to **Settings** in the left sidebar.

3. Under **System**, click on **Roles**.

4. Click **Create role**.

5. Enter a name for the role (e.g., "cobby").

6. Click on **Detailed privileges**.

7. Under **Permissions**, check the required permissions for cobby (see screenshot below):

![Shopware role permissions](/img/install-cobby-shopware-6/role-permissions.png)

8. Click **Save**.

---

## Step 2: Create an Integration with the cobby Role

Now create an integration that cobby will use to connect to your shop.

1. Go back to **Settings** > **System**.

2. Click on **Integrations**.

3. Click **Add integration**.

4. Enter a name for the integration (e.g., "cobby").

5. Assign the cobby role you created in Step 1.

6. **Important:** Copy and save the following credentials:
   - **Access key ID**
   - **Secret access key**

:::warning Keep Your Keys Safe
You'll need these credentials to connect cobby to your shop. Store them securely - the Secret access key won't be shown again after you close this dialog.
:::

---

## Step 3: Download and Install the cobby Extension

1. Download the cobby extension from [https://download.cobby.io/shopware/cobby_sw6_app.zip](https://download.cobby.io/shopware/cobby_sw6_app.zip).

2. In Shopware, navigate to **Extensions** in the left sidebar.

3. Click on **My extensions**.

4. Click **Upload extension** in the top right corner.

5. Select the downloaded `cobby_sw6_app.zip` file.

6. Once uploaded, find **cobby** in the extensions list and click **Install app**.

7. Activate the extension by clicking the toggle switch (it should turn blue).

:::tip
Keep track of where the ZIP file is saved - you'll need to locate it during upload.
:::

---

## Step 4: Register for the cobby Portal

:::note Optional Order
You can complete this step before or after the Shopware configuration (Steps 1-3).
:::

1. Go to [https://app.cobby.io/login](https://app.cobby.io/login).

2. Click **Register** if you don't have an account yet.

3. Complete the registration form with your details.

4. Verify your email address and log in to the cobby portal.

---

## Step 5: Create a Workspace and Connect Your Shop

1. Log in to the cobby portal at [https://app.cobby.io](https://app.cobby.io).

2. Click **Create Workspace** (or select an existing workspace).

3. Select **Shopware 6** as your shop system.

4. Enter your shop details:
   - **Shop URL**: Your Shopware shop URL (e.g., `https://yourshop.com`)
   - **Access key ID**: The Access key ID from Step 2
   - **Secret access key**: The Secret access key from Step 2

5. Click **Connect** to establish the connection.

:::tip Success Indicator
Once connected, you'll see your shop listed in the workspace overview.
:::

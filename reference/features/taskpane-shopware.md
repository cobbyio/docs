---
title: Task Pane (Shopware)
description: Complete reference documentation for the cobby Task Pane in the Shopware environment, including tabs, toolbar icons, and editor attributes.
platform: shopware
---

# Task Pane (Shopware)

The cobby Task Pane in the Shopware environment is the central control panel displayed on the right side of the cobby interface. It provides workspace information, context-sensitive editing capabilities, and job monitoring across three tabs.

## Toolbar

![Task Pane/Toolbar Shopware](/img/taskpane-shopware/taskpane-shopware-toolbar.png)

The dark blue toolbar at the top of the Task Pane contains five icons (from left to right) for navigation and core actions.

- **Back to Home** — Returns to the workspace selection screen where all connected shops are listed.
- **Load Products** — Opens the filter overview to select which products and columns to load into Excel. See [Quick Start: Your First Product Edit (Shopware) — Step 3](/tutorials/getting-started/first-steps-shopware#step-3-configure-product-filters-with-rules).
- **Save Products** — Saves all modified product data and transfers changes to the Shopware shop. Changes go live immediately.
- **Three-dot menu** — Contains two options: *Go to Shop* (opens the Shopware storefront) and *Go to Shopware* (opens the Shopware backend).
- **Logout** — Logs out the current user.

## Tabs

![Task Pane/Tabs Shopware](/img/taskpane-shopware/taskpane-shopware-tabs.png)

The Task Pane is divided into three tabs: **Home**, **Editor**, and **Jobs**.

### Home

![Task Pane/Home Shopware](/img/taskpane-shopware/taskpane-shopware-home.png)

The Home tab displays workspace details for the currently connected shop:

- **Shop Status** — Current connection status of the shop.
- **Shop Type** — The type of connected shop (e.g., Shopware 6).
- **Shop URL** — The URL of the connected shop.
- **Quick Action** — Button linking directly to the cobby Portal.

### Editor

![Task Pane/Editor Shopware](/img/taskpane-shopware/taskpane-shopware-editor.png)

The Editor tab provides a context-sensitive editing interface. The content displayed depends on which cell (column) is currently selected in the Excel sheet.

#### Attributes with Task Pane Support

The following attributes open a dedicated editing interface in the Task Pane when their corresponding cell is selected:

- Categories (see [Quick Start: Your First Product Edit (Shopware) — Step 6](/tutorials/getting-started/first-steps-shopware))
- Linked Properties (see [How to Edit Linked Properties (Shopware)](/how-to/product-management/edit-linked-properties-shopware6))
- Tax Rate
- Description (see [How to Edit Product Descriptions with the HTML Editor (Shopware)](/how-to/product-management/edit-descriptions-html-editor-shopware))
- Highlight Product
- Clearance Sale
- Free Shipping
- Visibility
- Hide in Product Listings
- Hide in Product Listings and Search
- Active
- Manufacturer
- Release Date
- Delivery Time
- Units of Measure

:::info
Not every attribute opens an editing interface in the Task Pane. If no Task Pane is available for the selected attribute, the message **"No Task Pane available for this attribute"** is displayed. These attributes can still be edited directly in the Excel cell.
:::

### Jobs

![Task Pane/Jobs Shopware](/img/taskpane-shopware/taskpane-shopware-jobs.png)

The Jobs tab provides a real-time overview of all executed jobs.

**Displayed information per job:**

- **Status** — Current job status (see below).
- **Created Date** — Timestamp of job creation.
- **Created By** — User who initiated the job.

**Possible job statuses:**

- Warning
- Finished
- Importing
- Info
- Pending
- Error

For a detailed description of each status icon, see [Job History and Status Icons](/explanation/features/job-history).

**Filtering:** Jobs can be filtered directly within the Task Pane by status (e.g., show only Error entries).

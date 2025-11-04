---
sidebar_position: 0
title: Introduction to cobby - Your First Product Update
---

# Introduction to cobby - Your First Product Update

Welcome! In this tutorial, you'll discover what cobby is, learn the interface, and successfully update your first product. By the end, you'll understand how cobby transforms product management from a tedious task into an efficient workflow.

import YoutubeVideo from '@site/src/components/YoutubeVideo';

<YoutubeVideo id="9bEeSZ_vA8g" title="cobby Introduction - Getting Started Tutorial" />

## What You'll Learn

In this tutorial, you will:

1. Understand what cobby does and why it exists
2. Connect to your shop and explore the cobby Portal
3. Navigate the Excel interface and its components
4. Load products from your shop
5. Edit product information using Excel
6. Save your changes back to your online shop
7. Understand the difference between Excel and the cobby Portal

**Time to complete:** About 20-25 minutes

**What you'll build:** You'll complete your first real product update, changing product information and successfully syncing it to your live shop.

---

## Prerequisites

Before starting this tutorial, you need:

- **A Magento or Shopware store** with the cobby extension installed
- **Microsoft Excel** installed on your computer (Windows or Mac)
- **The cobby Excel add-in** installed
- **A cobby account** with valid credentials
- **At least one product** in your store to edit

:::info Need to install cobby?
If you haven't installed cobby yet, check our installation guides:
- [Install cobby for Magento 1](/how-to/installation/install-cobby-magento-1)
- [Install cobby for Magento 2](/how-to/installation/install-cobby-magento-2)
- [Install cobby for Shopware 6](/how-to/installation/install-cobby-shopware-6)
:::

---

## Part 1: Understanding What cobby Does

### The Problem cobby Solves

Imagine you need to update prices for 500 products, add descriptions to 200 items, or reorganize your entire category structure. In Magento or Shopware's admin panel, you would:

1. Open each product individually
2. Wait for the page to load
3. Find the correct field
4. Make your change
5. Save and wait again
6. Repeat hundreds of times

**This is time-consuming and frustrating.**

### What cobby Does Differently

cobby brings all your product data into Microsoft Excel, where you can:

- **See hundreds of products at once** in a familiar spreadsheet
- **Edit multiple products simultaneously** using copy-paste, fill-down, and formulas
- **Use Excel's powerful features** like filters, search, and conditional formatting
- **Work offline** and save changes when ready
- **Collaborate with team members** who can work on different products at the same time

**The result:** Tasks that took hours now take minutes.

### How It Works (Simplified)

```
Your Shop (Magento/Shopware)
         ↕
  cobby Service (Cloud)
         ↕
   Excel on Your Computer
```

1. **Load:** cobby fetches product data from your shop into Excel
2. **Edit:** You make changes in Excel using familiar spreadsheet tools
3. **Save:** cobby sends only your changes back to the shop

All changes sync in real-time, and you always see the current state of your products.

---

## Part 2: Connecting and Exploring the cobby Portal

The **cobby Portal** is the web-based dashboard where you manage your workspace, users, and settings. Let's explore it first before working in Excel.

### Step 1: Log In to the cobby Portal

1. Open your web browser
2. Go to [https://customer.cobby.io](https://customer.cobby.io)
3. Enter your email address and password
4. Click **"Sign In"**

**What you'll see:** The cobby Portal dashboard with your workspace information.

### Step 2: Explore Your Workspace

The Portal displays:

- **Workspace name:** Your company or project name
- **Connected shop:** Your Magento or Shopware store URL
- **Active users:** Team members with access to this workspace
- **Subscription status:** Your current plan and billing information

**What is a workspace?** A workspace represents one connected shop. If you manage multiple shops, you'll have multiple workspaces.

### Step 3: Check Your Connection Status

1. Look for the **"Connection Status"** indicator
2. Verify it shows **"Connected"** with a green indicator
3. Check the **last sync time** to confirm recent communication

:::tip Connection Issues?
If your connection status shows "Disconnected" or has errors, check our [troubleshooting guide](/how-to/troubleshooting/fix-connection-issues) before continuing.
:::

### Step 4: Review Team Members (Optional)

1. Click **"Team"** or **"Users"** in the navigation
2. See who has access to this workspace
3. Note their permission levels (Admin, Editor, Viewer)

**Why this matters:** Understanding who else can edit products helps avoid conflicts when saving changes.

### Step 5: Close the Portal

You've now seen the cobby Portal. We'll do the actual product editing in Excel, which is where the real power lies. Keep the Portal open in a browser tab for reference.

---

## Part 3: Opening Excel and Connecting

Now let's move to Excel, where you'll do most of your work.

### Step 6: Open Excel and Find cobby

1. Launch **Microsoft Excel**
2. Create a new blank workbook (or Excel will open one automatically)
3. Look at the ribbon menu at the top
4. Find and click the **"cobby"** tab

**What you'll see:** The cobby ribbon appears with buttons and controls for managing your products.

![cobby ribbon in Excel](/img/first-steps/first-steps-2.png)

:::info Don't see the cobby tab?
If the cobby tab is missing, the add-in might not be loaded. See our [troubleshooting guide](/how-to/troubleshooting/fix-cobby-not-showing-in-excel).
:::

### Step 7: Understanding the cobby Ribbon

The cobby ribbon has several key sections:

**Left side (Product Actions):**
- **Load products** (blue button) - Fetches products from your shop
- **Save products** (blue button) - Sends your changes back to the shop
- **Show changes** - Reviews what you've edited
- **Refresh products** - Updates data from the shop

**Middle section (Product Management):**
- **New product** - Creates a new product
- **Duplicate product** - Copies an existing product
- **Delete products** - Removes selected products

**Right side (Settings & Tools):**
- **Presets** - Switches between different column views
- **Filter** - Shows only specific products
- **Settings** - Configures cobby preferences

You'll use these buttons throughout your cobby workflow.

### Step 8: Sign In to Your Workspace

1. Click the **"Load products"** button (blue button on the left)
2. A login dialog will appear
3. Enter the **same credentials** you used for the Portal
4. Click **"Sign In"**

**What happens:** cobby connects to your workspace and prepares to load your products.

:::tip Remember Me
Check "Remember me" to avoid logging in every time you open Excel.
:::

---

## Part 4: Loading and Exploring Products

### Step 9: Load Your Products

After signing in, your products will automatically begin loading. If not:

1. Click the blue **"Load products"** button in the cobby ribbon
2. Wait while cobby fetches your products from the shop
3. Watch the progress indicator

**What you'll see:** After a few moments (or minutes for large catalogs), your Excel worksheet fills with product data. Each row represents one product, and each column represents a product attribute.

![Products loaded in Excel](/img/first-steps/first-steps-3.png)

**What just happened?** cobby connected to your shop through the cobby service, retrieved all product information, and displayed it in Excel format. You're now looking at live data from your store.

:::info Loading Time
- Small catalogs (under 1,000 products): 5-15 seconds
- Medium catalogs (1,000-10,000 products): 30-60 seconds
- Large catalogs (10,000+ products): 1-3 minutes
:::

### Step 10: Understand the Excel Interface

Let's explore the columns you're seeing:

**Column A - Product Status (Colored indicator)**
This critical column shows synchronization status:
- 🟢 **Green:** Product is synchronized (Excel matches your shop)
- 🟡 **Yellow:** You've made changes that aren't saved yet
- 🔴 **Red:** Someone else changed this product in the shop

**Column B - SKU (Stock Keeping Unit)**
The unique identifier for each product. You'll use this to find specific products quickly.

**Column C - Product Type**
Shows the product type: simple, configurable, bundle, etc.

**Column D - Attribute Set**
The attribute set that determines which attributes this product has.

**Following columns - Product Attributes**
All the other columns represent product attributes like:
- Name
- Price
- Description
- Weight
- Categories
- Images
- And many more...

**What determines which columns appear?** Your active **Preset**. Presets are saved column configurations that show only the attributes you need for specific tasks.

### Step 11: Navigate the Product Data

Let's practice finding and viewing products:

1. **Scroll right** to see more columns (use the arrow keys or scroll bar)
2. **Use Ctrl+Home** to jump back to the first cell
3. **Use Ctrl+F** to open Excel's Find dialog
4. Search for a product SKU you know exists
5. Press **Enter** to jump to that product

**Tip:** The first few columns (Status, SKU, Type, Attribute Set) are usually frozen, so they stay visible as you scroll right.

### Step 12: Explore a Preset

Presets help you focus on relevant attributes:

1. Look at the **Presets** dropdown in the cobby ribbon (right side)
2. Click the dropdown to see available presets
3. Note the current preset name (usually "Default" or "All attributes")

**What are presets?** Think of presets as different "views" of your products. You might have:
- A "Prices" preset showing only pricing columns
- A "Descriptions" preset showing content fields
- A "Categories" preset showing categorization
- A "Stock" preset showing inventory attributes

We'll use the default preset for now, but you can create custom presets later for specific workflows.

---

## Part 5: Making Your First Edit

Now comes the exciting part - actually changing product data!

### Step 13: Find a Product to Edit

Let's find a product with a simple, identifiable SKU:

1. Press **Ctrl+F** to open Find
2. Search for a product SKU (for example, "24-MB01" if you have sample data)
3. Click **"Find Next"** until you locate the product
4. Press **Escape** to close the Find dialog

**What you'll see:** The selected cell highlights the found product.

:::tip Choose Wisely
For your first edit, choose a test product or one you don't mind changing. You can always revert the change later.
:::

### Step 14: Edit the Product Name

Now let's make a simple change to demonstrate the workflow:

1. From your selected product row, scroll right to find the **"Name"** column
2. Double-click the Name cell for your chosen product
3. Add `_TEST` at the end of the product name
4. Press **Enter** to confirm

![Editing a product name](/img/first-steps/first-steps-4.png)

**What you'll see immediately:** The **Product Status** column (Column A) for that product changes from green to **yellow**.

This yellow status means: "You've made a change in Excel that hasn't been saved to your shop yet."

### Step 15: Make Additional Changes (Optional)

While you're in edit mode, try making other changes:

1. Find the **"Price"** column
2. Change the price value slightly (for example, from 39.00 to 39.99)
3. Press **Enter**
4. Notice the Product Status remains yellow

**What you're seeing:** cobby tracks all changes you make. The yellow status persists until you save.

### Step 16: Review Your Changes

Before saving, let's see exactly what you changed:

1. Click anywhere in your edited product's row
2. Click the **"Show changes"** button in the cobby ribbon
3. A **History Task Pane** opens on the right side of Excel

**What you'll see:**
- **Attribute name:** Which field you changed (e.g., "Name", "Price")
- **Magento value:** The original value in your shop
- **Excel value:** Your new value

![History pane showing changes](/img/first-steps/first-steps-6.png)

This is your safety check - you can confirm your changes are correct before they go live.

---

## Part 6: Saving Changes to Your Shop

### Step 17: Save Your Changes

Time to make your edits live:

1. Click the **"Save products"** button in the cobby ribbon (blue button)
2. Wait while cobby processes your changes
3. Watch the Product Status indicator

**What you'll see:**
- A progress bar or message showing the save is in progress
- The Product Status changes from yellow to **green** when complete
- A confirmation message that your changes were saved

![Save products button](/img/first-steps/save-products_icon.png)

**What just happened behind the scenes:**
1. Excel sent your changes to the cobby service
2. The cobby service sent them to your shop's cobby extension
3. The extension applied the changes to Magento/Shopware
4. Magento confirmed the changes were successful
5. cobby updated the status to synchronized (green)

### Step 18: Verify the Changes

Let's confirm your changes are really in your shop:

1. Open your **Magento/Shopware admin panel** in a web browser
2. Navigate to **Catalog > Products**
3. Find the product you edited (search by SKU)
4. Open the product
5. Verify your changes appear (the name has "_TEST", price is updated, etc.)

**Success!** Your changes from Excel are now live in your shop.

:::tip Frontend Changes
Depending on your shop's cache settings, you might need to clear cache before seeing changes on the storefront.
:::

---

## Part 7: Understanding Excel vs. Portal

You've now worked in both the cobby Portal and Excel. Let's clarify when to use each:

### Use Excel For:
- ✅ **Editing product data** (names, prices, descriptions, attributes)
- ✅ **Bulk updates** across many products
- ✅ **Using formulas** to calculate values
- ✅ **Filtering and searching** products
- ✅ **Daily product management tasks**

**Excel is your workspace** - where you spend most of your time.

### Use the cobby Portal For:
- ⚙️ **Managing users** and team permissions
- ⚙️ **Checking connection status** to your shop
- ⚙️ **Viewing subscription** and billing information
- ⚙️ **Configuring workspace settings**
- ⚙️ **Generating API keys** for integrations

**The Portal is your admin dashboard** - where you manage the cobby system itself.

### Why Two Interfaces?

- **Excel** gives you the familiar spreadsheet power for product editing
- **Portal** provides centralized management without cluttering Excel

Most users open the Portal occasionally (weekly or monthly) but use Excel daily.

---

## Part 8: Key Concepts to Remember

### Product Status Colors

Always watch Column A (Product Status):

| Color | Meaning | What to Do |
|-------|---------|------------|
| 🟢 Green | Synchronized | No action needed |
| 🟡 Yellow | You have unsaved changes | Save when ready |
| 🔴 Red | Shop changed, Excel outdated | Reload products to sync |

### The cobby Workflow

Remember these three core actions:

1. **Load products** - Get the latest data from your shop
2. **Edit in Excel** - Make your changes
3. **Save products** - Send changes back to your shop

This workflow repeats throughout your day.

### Working with Others

If multiple people use cobby:

- **Before editing:** Load products to get the latest data
- **During editing:** Watch for red status (someone else saved)
- **After editing:** Save promptly to avoid conflicts

### Presets Speed Up Your Work

As you become comfortable:

- Create presets for specific tasks (e.g., "Price Updates", "Content Writing")
- Switch presets to see only relevant columns
- Share presets with your team for consistency

---

## What You've Accomplished

Congratulations! In this tutorial, you've:

✅ Understood what cobby does and why it exists
✅ Explored the cobby Portal and your workspace
✅ Opened Excel and connected to your shop
✅ Loaded products into Excel
✅ Navigated the Excel interface and understood columns
✅ Made your first product edit
✅ Reviewed your changes before saving
✅ Saved changes back to your live shop
✅ Verified changes in Magento/Shopware
✅ Learned the difference between Excel and the Portal

**You now understand the complete cobby workflow!**

---

## Next Steps

Now that you've mastered the basics, explore more cobby features:

### Learn More Product Management
- **[Working with categories](/explanation/features/categories)** - Organize products into categories
- **[Managing images](/how-to/images/add-images)** - Upload and arrange product images
- **[Handling configurable products](/explanation/product-types/configurable-products)** - Work with product variations

### Optimize Your Workflow
- **[Using Excel formulas](/how-to/excel-formulas/use-formulas-in-cobby)** - Automate calculations
- **[Filtering products](/reference/features/filter)** - Load only what you need
- **[Creating presets](/explanation/features/presets)** - Customize your column views

### Solve Specific Problems
- **[Update prices in bulk](/how-to/prices/update-prices)** - Change multiple product prices
- **[Optimize metadata for SEO](/how-to/seo/optimize-metadata-part-1)** - Improve search rankings
- **[Import external data](/how-to/product-management/import-data)** - Bring data from other sources

### Troubleshooting
- **[Fix connection issues](/how-to/troubleshooting/fix-connection-issues)** - Resolve connectivity problems
- **[Understanding error messages](/explanation/features/error-assistant)** - Interpret validation errors

---

## Quick Reference

Keep these shortcuts handy:

| Action | Button/Shortcut |
|--------|----------------|
| Load products from shop | Blue "Load products" button |
| Save changes to shop | Blue "Save products" button |
| Find a product | Ctrl+F in Excel |
| Review changes | "Show changes" button |
| Go to first cell | Ctrl+Home |
| Refresh shop data | "Refresh products" button |

---

:::tip Practice Makes Perfect
The best way to learn cobby is to use it regularly. Start with small tasks like updating a few product names or prices, then gradually tackle larger projects as you grow comfortable.
:::

:::info Need Help?
If you run into issues or have questions:
- Check our [How-To Guides](/how-to) for specific tasks
- Visit our [Reference section](/reference) for technical details
- Contact support through the cobby Portal
:::

**Happy editing with cobby!**

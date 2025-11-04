---
sidebar_position: 2
title: How to Optimize Product Metadata for Search Engines - Part 2
---

# How to Optimize Product Metadata for Search Engines - Part 2

Learn where to find and maintain SEO information in Magento, and how to efficiently update it using cobby and Excel. This guide shows you how search results are displayed and where to configure the corresponding settings.

## Goal

Configure and maintain product metadata in Magento to optimize how your products appear in search engine results.

## Prerequisites

- Understanding of basic SEO principles (see Part 1)
- Access to Magento admin panel
- cobby installed for bulk editing

## Understanding Search Result Snippets

Google (the most frequently used search engine) displays search results as "snippets" consisting of three elements:

- **Title** - blue headline
- **URL** - green link
- **Snippet text** - black description

**Key point:** Snippets are dynamic. Google may display different snippet text for the same page using different search terms, and it highlights relevant keywords in bold.

## Optimizing Each Element

### 1. Optimizing the Title

The title is the largest and most eye-catching element in search results.

#### Character Limit
Google displays a maximum of **70 characters** in the title. Longer titles are truncated to show as many complete words as possible.

#### Where to Set It in Magento

**Location:** Product editing page → Meta Information group → **Meta Title** field

#### Automatic Meta Generation

If you haven't used this field, Magento may be generating meta information automatically:

**Check the setting:** General tab → **Generate Meta Tags** option

When enabled, Magento:
- Uses the product name for Meta Title
- Includes category names in Meta Keywords and Meta Description
- Creates basic metadata automatically

**Limitation:** While convenient, automatic generation typically doesn't create compelling descriptions that encourage customers to visit your store.

#### System-Wide Title Configuration

If a fixed text appears next to product titles, check your system configuration:

1. Go to **System**
2. Select **Configuration**
3. Choose **Design**
4. Find the **HTML Head** group
5. Check **Title Prefix** and **Title Suffix** settings

### 2. Optimizing the URL

The URL plays a subordinate role for users but shouldn't be ignored.

#### What Makes a Good URL
- Signals to users where they're going
- Highlights relevant search terms
- Should be descriptive and relevant

#### URL Structure in Magento
Product URL = Base URL + URL Key

**Location:** Product editing page → **URL Key** field

#### Multiple Category Assignments

If a product is assigned to multiple categories:
- The product page is accessible via different URLs
- Google selects the most relevant URL for search results
- **Problem:** This creates duplicate content

#### Preventing Duplicate Content Issues

Enable **canonical URLs** to tell search engines which URL to index:

1. Go to **System**
2. Select **Configuration**
3. Choose **Catalog**
4. Find **Search Engine Optimizations** group
5. Enable both:
   - "Use Canonical Link Meta Tag For Products"
   - "Use Canonical Link Meta Tag For Categories"

### 3. Optimizing the Snippet (Meta Description)

The snippet text is often the deciding factor for whether customers click through to your page.

#### Character Requirements
- **Less than 80 characters:** Single-line display (reduced visibility)
- **More than 156 characters:** Gets cut off
- **Optimal:** 80-156 characters, self-contained, with search terms early

#### Where to Set It in Magento

**Location:** Product editing page → Meta Information group → **Meta Description** field

#### Dynamic Snippet Behavior

**Example:** MacBook Pro with meta description:
"Apple MacBook Pro MA464LL/A 15.4" Notebook PC (2.0 GHz Intel Core Duo, 1 GB RAM, 100 GB Hard Drive, SuperDrive)"

- **Search: "macbook pro"** → Shows the meta description as written
- **Search: "engineering leaps hd 3d"** → Google uses different text from the product page that better matches those terms

**Implication:** If your meta description contains only a few relevant search terms, Google may display unpredictable snippets, reducing click-through rates.

## Bulk Editing with cobby

For efficient bulk updates of meta information:

1. Load products in cobby
2. Display the meta information columns:
   - Meta Title
   - Meta Keywords
   - Meta Description
   - URL Key
3. Edit multiple products in Excel
4. Save changes back to Magento

This approach is much faster than editing products individually in the Magento backend.

## Best Practices Summary

### Title
- Keep under 70 characters
- Include primary keyword
- Make it compelling for customers

### URL
- Use descriptive, keyword-rich URL keys
- Enable canonical URLs to prevent duplicate content
- Keep URLs clean and readable

### Meta Description
- Write 80-156 characters
- Include primary keyword early
- Write for customers, not just search engines
- Make each description unique
- Create a compelling reason to click

## Next Steps

1. Audit your current product meta information
2. Identify products missing or with poor metadata
3. Choose relevant keywords for each product
4. Write optimized titles and descriptions
5. Use cobby to update products in bulk
6. Monitor your search engine rankings and adjust as needed

## Troubleshooting

**Meta description not showing in Google:** Google may choose different text if it finds content on your page more relevant to the search query.

**Title showing fixed prefix/suffix:** Check System → Configuration → Design → HTML Head settings.

**URLs not including categories:** Verify that URL rewrites are enabled in Magento configuration.

**Changes not appearing in search results:** Search engines need time to re-index your pages. This can take days or weeks.

---
sidebar_position: 1
title: Resynchronization
---

# Resynchronization

## Overview

Resynchronization (resync) is the process of updating cobby's internal cache with structural changes from the Magento database. It rebuilds the metadata index that cobby uses to map Magento attributes, storeviews, and attribute sets to Excel columns.

## Purpose
---

Resynchronization is required when Magento's structural configuration changes in ways that affect cobby's data schema. It does **not** sync product data—only the structure definition.

## Synchronization Triggers
---

### Attribute-Related Changes

| Change Type | Requires Resync | Reason |
|-------------|-----------------|--------|
| New attribute created | Yes | cobby must register new column |
| Attribute deleted | Yes | cobby must remove column mapping |
| Attribute moved within group | Yes | Column order changes |
| Attribute type changed | Yes | Data type mapping changes |
| Attribute scope changed | Yes | Storeview column structure changes |

### Attribute Set Changes

| Change Type | Requires Resync | Reason |
|-------------|-----------------|--------|
| New attribute set created | Yes | cobby must create new worksheet structure |
| Attribute set deleted | Yes | cobby must remove worksheet mapping |
| Attributes added/removed from set | Yes | Column structure changes for that set |
| Attribute group renamed | Yes | Section headers change |

### Store Structure Changes

| Change Type | Requires Resync | Reason |
|-------------|-----------------|--------|
| New storeview added | Yes | New translation columns required |
| Storeview deleted | Yes | cobby must remove storeview columns |
| Store or website added/deleted | Yes | Hierarchy structure changes |
| Storeview code changed | Yes | Column header mapping changes |

### Direct Database Changes

| Change Type | Requires Resync | Reason |
|-------------|-----------------|--------|
| Manual database import | Yes | Bypasses Magento's indexing triggers |
| Direct SQL updates to `eav_attribute` | Yes | Attribute schema changes not cached |
| Direct SQL updates to `store` tables | Yes | Store structure changes not cached |

### Extension-Related Changes

| Change Type | Requires Resync | Reason |
|-------------|-----------------|--------|
| Extension adds custom attributes | Yes | New columns registered outside Magento model |
| Extension modifies EAV structure | Yes | Schema changes not detected by cobby |
| Extension changes inventory sources | Depends | Only if extension affects cobby-visible attributes |

### Configuration Changes

| Change Type | Requires Resync | Reason |
|-------------|-----------------|--------|
| Stock settings changed in cobby config | Yes | Inventory column structure may change |
| Base URL changed | Yes | cobby portal connection requires revalidation |
| Installation or update of cobby extension | Yes | Version-specific schema updates |

## What Does NOT Require Resync
---

- Product data changes (name, price, description, etc.)
- Inventory quantity updates
- Category assignments
- Product status changes
- Media/image updates
- Product relations (upsells, cross-sells)
- Customer data changes

**Note:** Product data syncs automatically through cobby's standard Excel synchronization process.

## Resync Process
---

### Initiation

**Location:** cobby Portal → Settings → Manage shop → "Resync" button

**Access Required:** cobby Portal login credentials ([app.cobby.io](https://app.cobby.io/))

### Technical Process

1. cobby fetches current Magento EAV structure
2. Rebuilds attribute-to-column mapping
3. Updates storeview hierarchy cache
4. Regenerates attribute set worksheets
5. Validates data type mappings
6. Clears local Excel cache

### Duration

- Small catalogs (less than 1,000 products): 10-30 seconds
- Medium catalogs (1,000-10,000 products): 30-90 seconds
- Large catalogs (more than 10,000 products): 1-5 minutes

**Factors Affecting Duration:**
- Number of attributes
- Number of attribute sets
- Number of storeviews
- Server response time

## Effect on Active Excel Sessions
---

| Scenario | Behavior | Recommended Action |
|----------|----------|-------------------|
| Excel open during resync | No immediate effect | Close and reopen Excel to see structural changes |
| Unsaved changes in Excel | No data loss | Complete edits before closing |
| Mid-upload during resync | Upload completes normally | Structural changes appear after next load |

## Validation
---

After resync, verify the following in Excel:

- New attributes appear as columns
- Deleted attributes removed from worksheets
- Storeview columns match current Magento storeviews
- Attribute sets match Magento configuration
- Column order reflects attribute group positions

## Technical Notes
---

- Resync is idempotent (safe to run multiple times)
- Does not modify Magento data
- Does not affect product visibility or availability
- Can be performed while shop is live
- No downtime required
- Recommended after major Magento upgrades or structural changes

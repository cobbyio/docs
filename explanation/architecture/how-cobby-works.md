---
sidebar_position: 1
title: How cobby Works
---

# How cobby Works

Understanding cobby's architecture helps you work more effectively and troubleshoot issues. This article explains the three-tier system that powers cobby and how data flows between your shop, our service, and Excel.

## The Three Components

cobby consists of three interconnected parts that work together to enable real-time product management:

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│  Magento/       │ ←─────→ │  cobby Service   │ ←─────→ │  Excel Add-in   │
│  Shopware Shop  │  HTTPS  │  (Cloud)         │  HTTPS  │  (Your PC)      │
└─────────────────┘         └──────────────────┘         └─────────────────┘
     cobby                       Central                      cobby
    Extension                 Orchestrator                   Add-in
```

Let's explore each component and its role.

---

## 1. The cobby Extension (In Your Shop)

**Location:** Installed in your Magento or Shopware shop

**Primary Responsibilities:**

### Two-Way Communication Bridge
The extension acts as the communication gateway between your shop and the cobby service:

- **Outbound:** Notifies the cobby service whenever product data changes in Magento/Shopware
- **Inbound:** Receives and processes product updates from the cobby service

### Change Processing
When the cobby service sends product updates from Excel:
1. The extension validates the changes
2. Applies them to your Magento/Shopware database
3. Triggers Magento's standard indexing and cache processes
4. Confirms success or reports errors back to the service

### Authentication & Security
Uses Magento's native web service interface with role-based access control. This means:
- cobby respects your Magento user permissions
- All API communication is authenticated
- The extension can only access data you've granted permission for

:::info
The extension doesn't store any product data - it's purely a communication and processing layer.
:::

---

## 2. The cobby Service (Cloud)

**Location:** Hosted on EU servers

**Primary Responsibilities:**

### Performance Optimization Through Data Caching
The cobby service maintains **a copy of your product data** for crucial performance reasons:

**Why cache data?**
- **Speed:** Instant access without querying Magento for every Excel interaction
- **Reduced load:** Minimizes database queries on your shop server
- **Multi-user support:** Enables multiple users to work simultaneously
- **Differential sync:** Only transmits what changed, not entire datasets

### Intelligent Change Management
The service acts as an intelligent orchestrator:

1. **Receives changes** from both Excel and Magento
2. **Calculates differentials** - determines exactly what changed
3. **Transmits minimal updates** - sends only the deltas, not full datasets
4. **Pushes notifications** - alerts all active Excel clients in real-time
5. **Manages conflicts** - handles simultaneous edits from multiple users

**Example:** If you change a product name, cobby only sends:
```json
{
  "sku": "PROD-001",
  "name": "New Product Name"
}
```
Not the entire product record with hundreds of attributes.

### Workspace Data Storage
Beyond product data, the service stores:
- **Presets** - your custom column configurations
- **User settings** - individual user preferences
- **Rules & filters** - your workflow customizations
- **Job history** - logs of all save operations

---

## 3. The Excel Add-in (Your Computer)

**Location:** Installed in Microsoft Excel on your computer

**Primary Responsibilities:**

### Real-Time Data Presentation
- Displays product data from the cobby service in Excel
- Updates instantly when changes occur in Magento or by other users
- Provides a familiar spreadsheet interface for bulk editing

### Rich Editors
Includes specialized editors for complex data types:
- **Category editor** - assign products to categories with tree view
- **Image editor** - upload, arrange, and manage product images
- **WYSIWYG editor** - edit HTML descriptions visually
- **Custom options editor** - manage configurable product options
- **Formula support** - use Excel formulas for calculations

### Change Tracking
- Tracks which cells you've modified (yellow status)
- Shows what changed compared to Magento
- Validates data before sending to the service
- Provides immediate feedback on errors

---

## How Data Flows

### Loading Products (Shop → Excel)

```
1. You click "Load Products" in Excel
                ↓
2. Excel requests data from cobby service
                ↓
3. Service returns cached product data (instant)
                ↓
4. Excel displays data in spreadsheet
```

**Result:** Your products appear in Excel within seconds, even for large catalogs.

### Saving Changes (Excel → Shop)

```
1. You click "Save Products" in Excel
                ↓
2. Excel sends only changed data to cobby service
                ↓
3. Service calculates differential and forwards to shop extension
                ↓
4. Extension applies changes to Magento/Shopware
                ↓
5. Magento confirms success
                ↓
6. Service updates cache and notifies all Excel clients
                ↓
7. Excel shows green status (synchronized)
```

**Result:** Only your changes are transmitted, keeping traffic minimal.

### Background Sync (Shop → Service → Excel)

When someone changes a product directly in Magento:

```
1. Product changes in Magento admin
                ↓
2. Extension notifies cobby service
                ↓
3. Service updates its cache
                ↓
4. Service pushes notification to all active Excel clients
                ↓
5. Excel shows red status (out of sync)
```

**Result:** You see immediately when shop data changes.

---

## Security & Privacy

### Encryption
All communication uses **HTTPS** with TLS encryption:
- Magento ↔ cobby service: encrypted
- cobby service ↔ Excel: encrypted

### Data Location
- All servers are **hosted in the European Union**
- Data never leaves EU territory
- No data is shared with third parties

### Access Control
- Uses Magento's native authentication system
- Respects Magento role-based permissions
- Each user's access is individually controlled

### Data Storage
- Product data is cached temporarily for performance
- Workspace settings and presets are stored permanently
- No sensitive payment or customer data is stored

---

## Why This Architecture?

This three-tier design solves several challenges:

### Performance at Scale
By caching product data, cobby can:
- Handle catalogs with 100,000+ products
- Support 10+ simultaneous users
- Respond instantly to Excel interactions
- Minimize load on your shop server

### Real-Time Collaboration
The centralized service enables:
- Multiple users editing different products simultaneously
- Instant notifications of changes
- Conflict detection and resolution
- Unified view of current product state

### Excel Flexibility
By separating data processing from presentation:
- Excel remains responsive even with huge datasets
- Complex editors can run locally without network lag
- You can use full Excel functionality (formulas, macros, pivot tables)

### Reliability
The architecture provides:
- Fault tolerance - if one component fails, others continue
- Automatic retry logic for failed saves
- Complete audit trail via job history
- Easy rollback of changes

---

## Practical Implications

Understanding this architecture helps you:

**Diagnose Issues**
- Excel slow? Check your internet connection to the service
- Changes not appearing in Magento? Check the extension status
- Other users not seeing your changes? Service might be updating

**Optimize Workflows**
- Use filters to load only needed products (reduces service load)
- Save in batches to minimize round trips
- Let differential sync handle large updates efficiently

**Plan Maintenance**
- Extension updates require brief Magento downtime
- Service updates are transparent (no downtime)
- Excel add-in updates are per-user

**Troubleshoot Conflicts**
- Red status = shop changed, reload to sync
- Yellow status = you changed, save to sync
- Multiple yellows across users = coordinate saves

---

## Related Topics

- Understanding Data Synchronization (coming soon)
- Performance Optimization (coming soon)
- How to Troubleshoot Connection Issues (coming soon)
- Multi-User Workflows (coming soon)

---

:::tip Learn By Doing
Now that you understand how cobby works, try the [First Steps Tutorial](/tutorials/getting-started/first-steps) to see this architecture in action!
:::

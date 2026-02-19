---
sidebar_position: 1
title: How cobby Works
description: Understanding cobby's three-tier architecture as a PIM system and how it enables real-time synchronization between Excel and e-commerce platforms
---

# How cobby Works

cobby is a **Product Information Management (PIM) system** designed to bridge the gap between familiar spreadsheet workflows and complex e-commerce platforms. At its core, cobby solves a fundamental challenge: how do you enable teams to manage thousands of products efficiently in Excel while keeping your Magento or Shopware shop perfectly synchronized in real-time?

The answer lies in cobby's three-tier architecture—a design that prioritizes performance, real-time collaboration, and data integrity. Understanding this architecture reveals why cobby can handle massive catalogs, support multiple concurrent users, and maintain seamless bidirectional synchronization without compromising your shop's performance.

## cobby as a PIM System
---

Before diving into the technical architecture, it's important to understand cobby's role as a PIM system. Traditional e-commerce platforms require you to navigate complex backend interfaces to manage product data—a time-consuming process that doesn't scale well when managing large catalogs or coordinating across teams.

cobby transforms this workflow by positioning itself as an intelligent intermediary. Rather than forcing users to adapt to rigid backend interfaces, cobby brings product data into Excel—an environment where teams already have expertise. But unlike simple export-import workflows, cobby maintains a **continuous, bidirectional connection**. Changes made in Excel flow instantly to your shop, while changes made directly in Magento or Shopware are immediately visible in Excel.

This real-time synchronization is what distinguishes cobby from traditional data management approaches. Your team works in Excel with the confidence that every saved change is immediately live in your shop, and every change made by others (whether in Excel or the shop backend) is instantly visible. This eliminates data inconsistencies, reduces manual coordination, and enables true collaborative product management.

Beyond day-to-day management, cobby's PIM architecture provides crucial support during system migrations—such as upgrading from Magento 1 to Magento 2. By maintaining a central, synchronized view of your product data, cobby ensures data integrity throughout the migration process while allowing your team to continue working without interruption.

## The Three-Tier Architecture
---

cobby's functionality is powered by three interconnected components, each designed for a specific purpose:

![cobby architecture diagram](/img/introduction-to-cobby/cobby-architecture-diagram.jpg)

As the diagram illustrates, cobby creates a bidirectional bridge where data flows seamlessly between Excel, the cobby service, and your e-commerce platforms (Magento 1, Magento 2, or Shopware 6). Let's explore each component and understand its role in this ecosystem.

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│  Magento/       │ ←─────→ │  cobby Service   │ ←─────→ │  Excel Add-in   │
│  Shopware Shop  │  HTTPS  │  (Cloud)         │  HTTPS  │  (Your PC)      │
└─────────────────┘         └──────────────────┘         └─────────────────┘
     cobby                       Central                      cobby
    Extension                 Orchestrator                   Add-in
```

---

## Component 1: The cobby Extension (In Your Shop)

**Location:** Installed in your Magento or Shopware shop

The cobby extension serves as the communication gateway between your e-commerce platform and the cobby ecosystem. It's important to understand that the extension doesn't store product data—it's purely a processing and communication layer.

### Two-Way Communication Bridge

The extension's primary role is facilitating bidirectional data flow:

- **Outbound communication:** Monitors your shop for product data changes and notifies the cobby service whenever updates occur in Magento or Shopware
- **Inbound communication:** Receives product updates from the cobby service and processes them into your shop's database

This bidirectional design is crucial for real-time synchronization. Whether a product is changed in Excel or directly in your shop's backend, the extension ensures all systems remain aware of the change.

### Change Processing and Validation

When the cobby service sends product updates originating from Excel edits, the extension follows a careful process:

1. **Validates the incoming changes** against your shop's data structure and business rules
2. **Applies changes to your Magento or Shopware database** using native platform APIs
3. **Triggers standard platform processes** including indexing, cache invalidation, and search updates
4. **Confirms success or reports errors** back to the cobby service, which relays the status to Excel

This approach ensures that changes flow through your platform's normal validation and processing pipelines—cobby doesn't bypass any of your shop's data integrity checks.

### Authentication and Security Integration

The extension integrates with your platform's native authentication system:

- Uses Magento's or Shopware's built-in web service interfaces
- Respects role-based access control (RBAC) permissions
- Only accesses data that your admin user permissions explicitly allow
- Maintains all API communication through authenticated channels

This means cobby inherits your existing security model rather than requiring a separate access control system.

:::info
The extension is a lightweight communication layer—it doesn't maintain a separate database or cache of your product data.
:::

---

## Component 2: The cobby Service (Cloud)

**Location:** Hosted on EU servers

The cobby service is the central orchestrator and the key to understanding why cobby performs so efficiently at scale. While the extension and add-in facilitate communication, the service is where the intelligence lives.

### Why Cache Data? The Performance Rationale

The cobby service maintains **a synchronized copy of your product data**. This caching strategy is fundamental to the architecture and solves several critical challenges:

**Instant responsiveness**
- When you open a product list in Excel, the service returns data immediately from its cache
- No waiting for database queries to run on your shop server
- Large catalogs (100,000+ products) load in seconds rather than minutes

**Reduced shop server load**
- Without caching, every Excel interaction would trigger queries on your Magento database
- Multiple users would multiply this load, potentially impacting shop performance
- Caching ensures your shop server focuses on customer-facing requests

**Multi-user collaboration**
- The cached data provides a unified view that multiple users can access simultaneously
- The service can coordinate changes from different users without constant database locks
- Conflict detection becomes possible by comparing user changes against the current cached state

**Differential synchronization**
- By maintaining the current state, the service can calculate exactly what changed
- Only deltas are transmitted, not entire datasets
- This minimizes network traffic and processing time

### Intelligent Change Management

The cobby service acts as an intelligent intermediary that optimizes data flow:

1. **Receives changes from multiple sources** (Excel users and shop extensions)
2. **Calculates differentials** by comparing new data against the cached state
3. **Transmits minimal updates** containing only changed fields, not full records
4. **Pushes real-time notifications** to all active Excel clients when data changes
5. **Manages conflict resolution** when multiple users edit the same product simultaneously

**Example of differential sync:**

If you change just a product's name, cobby doesn't send the entire product record with potentially hundreds of attributes. Instead, it transmits:

```json
{
  "sku": "PROD-001",
  "name": "New Product Name"
}
```

This differential approach is what enables cobby to handle large-scale updates efficiently. A change to 10,000 products might only transmit a few megabytes of data rather than hundreds of megabytes.

### Workspace and Configuration Storage

Beyond product data, the service permanently stores:

- **Presets** — your custom column configurations and view layouts
- **User settings** — individual preferences and interface configurations
- **Rules and filters** — workflow automation and data validation rules
- **Job history** — complete audit trail of all save operations with timestamps and user information

This workspace data enables cobby to provide a personalized, consistent experience across sessions and users.

---

## Component 3: The Excel Add-in (Your Computer)

**Location:** Installed in Microsoft Excel on your computer

The Excel add-in is your direct interface to cobby—the component you interact with daily. It transforms Excel from a simple spreadsheet application into a powerful product management interface.

### Real-Time Data Presentation

The add-in displays product data from the cobby service within Excel's familiar grid interface:

- Renders product attributes as spreadsheet columns
- Updates instantly when the cobby service pushes change notifications
- Provides visual indicators of data status (synchronized, modified, out-of-sync)
- Supports standard Excel operations like sorting, filtering, and searching

This real-time connection means you're always working with current data. When a colleague saves changes or someone updates a product in Magento, you see those changes reflected immediately—no manual refresh required.

### Specialized Editors for Complex Data

While most attributes can be edited directly in cells, the add-in provides rich editors for complex data types:

- **Category editor** — hierarchical tree view for assigning products to categories
- **Image editor** — upload, arrange, and manage product images with drag-and-drop
- **WYSIWYG editor** — visual HTML editing for product descriptions
- **Custom options editor** — manage configurable product options and variations
- **Formula support** — leverage Excel's calculation engine for price calculations, data transformations, and bulk operations

These specialized editors bridge the gap between Excel's spreadsheet paradigm and e-commerce platforms' complex data structures.

### Change Tracking and Validation

The add-in implements sophisticated change tracking:

- **Visual status indicators** show which cells you've modified (yellow status)
- **Comparison with Magento state** helps you understand what will change when you save
- **Client-side validation** checks data formats before sending to the service
- **Immediate error feedback** alerts you to validation issues before attempting to save

This local validation reduces round trips to the server and provides immediate feedback as you work.

---

## Understanding Data Flow

To fully appreciate cobby's architecture, let's trace how data moves through the system in different scenarios.

### Scenario 1: Loading Products (Shop → Service → Excel)

```
1. You click "Load Products" in Excel
                ↓
2. Excel requests data from cobby service via HTTPS
                ↓
3. Service returns cached product data (instant response)
                ↓
4. Excel displays data in spreadsheet grid
```

**Why this is fast:** The service returns data from its cache immediately, without querying your Magento database. Even catalogs with 100,000+ products appear within seconds.

**What about data freshness?** The cache is continuously updated through the background sync mechanism (described below), so cached data typically reflects the shop state within seconds.

### Scenario 2: Saving Changes (Excel → Service → Shop)

```
1. You modify products in Excel and click "Save Products"
                ↓
2. Excel sends only changed data to cobby service via HTTPS
                ↓
3. Service calculates differential (what changed vs. cached state)
                ↓
4. Service forwards minimal update to shop extension via HTTPS
                ↓
5. Extension validates and applies changes to Magento/Shopware
                ↓
6. Magento processes changes through indexing and cache
                ↓
7. Extension confirms success to service
                ↓
8. Service updates its cache to reflect new state
                ↓
9. Service pushes notifications to all active Excel clients
                ↓
10. Excel shows green status (synchronized)
```

**Why this is efficient:** Only your changes are transmitted, not entire product records. If you modify 10 fields across 1,000 products, cobby only sends those 10,000 modified values, not the complete dataset.

**Error handling:** If step 5 fails (validation error or database issue), the error is reported back through the chain to Excel, where you see a detailed error message indicating what went wrong.

### Scenario 3: Background Synchronization (Shop → Service → Excel)

When someone changes a product directly in your Magento or Shopware backend:

```
1. Product data changes in Magento admin panel
                ↓
2. Extension detects change and notifies cobby service
                ↓
3. Service updates its cached copy of the product
                ↓
4. Service pushes real-time notification to all active Excel clients
                ↓
5. Excel shows red status indicator (data out of sync with shop)
```

**Result:** You see immediately when shop data changes, even if you didn't make the change. This real-time awareness is crucial for multi-user environments where people work in both Excel and the shop backend.

**What happens next?** When you reload products in Excel, you'll receive the updated data from the service's cache, which now reflects the Magento change.

---

## Security and Data Protection

Understanding how cobby handles security and privacy is essential for e-commerce operations.

### Encryption in Transit

All communication uses **HTTPS with TLS encryption**:

- Magento/Shopware ↔ cobby service: encrypted end-to-end
- cobby service ↔ Excel add-in: encrypted end-to-end
- No product data is transmitted over unencrypted connections

This protects your product information from interception during transmission.

### Data Sovereignty and Location

- All cobby servers are **hosted in the European Union**
- Product data never leaves EU territory
- No data is shared with third parties or external analytics services
- Data storage complies with GDPR requirements

For businesses with data residency requirements, this EU-only hosting provides compliance assurance.

### Access Control and Authentication

cobby doesn't implement its own permission system—it inherits yours:

- Uses your Magento or Shopware authentication system
- Respects role-based access control (RBAC) permissions
- Each user's access is individually controlled through your shop's admin panel
- Users can only view and edit products they have permission to access

This means managing cobby access is as simple as managing shop admin permissions—no separate user administration required.

### Data Storage and Retention

Understanding what data cobby stores and why:

- **Product data:** Cached temporarily for performance; can be purged on request
- **Workspace settings:** Stored permanently to maintain your configurations
- **Job history:** Retained for audit trail purposes; configurable retention period
- **Sensitive data:** Payment information and customer personal data are never stored

:::info
cobby caches product content (names, prices, descriptions) but never stores customer personal data, payment information, or order details.
:::

---

## Why This Architecture? Design Rationale

cobby's three-tier design is a deliberate response to specific challenges in e-commerce product management. Understanding the reasoning behind these architectural decisions reveals why simpler approaches fall short.

### Challenge 1: Performance at Scale

**The problem:** E-commerce catalogs can contain hundreds of thousands of products with dozens of attributes each. Loading this data directly from Magento into Excel is prohibitively slow—potentially taking minutes for large catalogs.

**cobby's solution:** By caching product data in the service layer, cobby can:
- Return data to Excel within seconds regardless of catalog size
- Support 10+ simultaneous users without overwhelming the shop database
- Respond instantly to Excel interactions (sorting, filtering, searching)
- Minimize load on your shop server, preserving capacity for customer traffic

**The tradeoff:** Caching introduces the need for synchronization logic, but the performance gains far outweigh this complexity for anything beyond small catalogs.

### Challenge 2: Real-Time Collaboration

**The problem:** Multiple users need to work on product data simultaneously. Without coordination, changes can overwrite each other, causing data loss and confusion.

**cobby's solution:** The centralized service provides:
- A single source of truth that all users work against
- Instant notifications when anyone (in Excel or Magento) changes data
- Conflict detection when multiple users edit the same product
- Synchronized view of the current product state across all users

**Why this matters:** Teams can coordinate product launches, seasonal updates, or catalog expansions without manual coordination or fear of data conflicts.

### Challenge 3: Excel Limitations and Flexibility

**The problem:** Excel isn't designed for real-time data synchronization or complex e-commerce data structures (hierarchical categories, multi-language content, configurable products).

**cobby's solution:** By separating data processing (service) from presentation (add-in):
- Excel remains responsive even with large datasets (processing happens server-side)
- Complex editors can run locally without network latency
- You retain full Excel functionality (formulas, macros, pivot tables, conditional formatting)
- The add-in can provide specialized interfaces for complex data types

**The benefit:** You get e-commerce platform integration without sacrificing Excel's flexibility and familiarity.

### Challenge 4: Reliability and Data Integrity

**The problem:** Data synchronization systems are prone to failures—network interruptions, validation errors, concurrent modifications. Without careful design, these failures can result in data loss or inconsistencies.

**cobby's solution:** The architecture provides multiple safety mechanisms:
- **Fault tolerance:** If one component fails temporarily, others continue operating
- **Automatic retry logic:** Failed saves are retried with exponential backoff
- **Complete audit trail:** Job history logs every save operation with timestamps and user information
- **Differential sync:** Only deltas are applied, reducing the chance of overwriting unrelated changes
- **Validation at multiple layers:** Client-side (Excel), service-side, and shop-side validation

**The result:** Data integrity is maintained even in the face of network issues, concurrent edits, or validation errors.

---

## Practical Implications for Users

Understanding cobby's architecture isn't just theoretical—it has practical implications for how you use the system and troubleshoot issues.

### Diagnosing Performance Issues

**Excel loading slowly?**
- Check your internet connection to the cobby service (HTTPS connection quality)
- Consider filtering products to load smaller datasets
- Verify that the cobby service is operational (service status page)

**Changes taking a long time to save?**
- Check your Magento server's performance (the extension runs there)
- Verify that Magento indexing isn't overloaded with other operations
- Review job history in cobby to see where time is spent (transmission vs. Magento processing)

**Other users not seeing your changes?**
- Verify that your save completed successfully (check for error messages)
- Ensure the cobby service is pushing notifications (check connection status)
- Have other users refresh their data to pull the latest from the service

### Optimizing Your Workflow

**Load only what you need:**
- Use filters to load relevant product subsets rather than entire catalogs
- This reduces memory usage in Excel and speeds up all operations
- The service efficiently handles filtered queries without loading unnecessary data

**Batch your changes:**
- Make multiple edits, then save once rather than saving after each change
- cobby's differential sync efficiently handles large change sets
- This reduces network round trips and Magento indexing overhead

**Leverage specialized editors:**
- Use the category editor for bulk category assignments (faster than editing cells)
- Use the image editor for visual image management (upload multiple files at once)
- These editors optimize the data format sent to the service

### Planning System Maintenance

Understanding the architecture helps you plan maintenance windows:

**Extension updates:**
- Require brief Magento downtime (the extension must be upgraded)
- Impact all cobby users temporarily (no saving during update)
- Should be coordinated with Magento maintenance windows

**cobby service updates:**
- Handled transparently by the cobby team
- Typically involve no user-facing downtime
- Users may see brief "reconnecting" messages during deployment

**Excel add-in updates:**
- Installed per-user on individual computers
- No coordination required (users update independently)
- Old and new versions typically work simultaneously

### Understanding Status Indicators

cobby uses color-coded status to communicate data state:

**Green status (synchronized):**
- Your Excel data matches the shop state
- Safe to continue editing
- All changes have been successfully saved

**Yellow status (modified):**
- You've made changes in Excel that haven't been saved yet
- Changes exist only on your computer
- Other users don't see these changes until you save

**Red status (out of sync):**
- The shop data changed (either in Magento or by another user)
- Your Excel view is outdated
- Reload products to synchronize with the current shop state

**Handling conflicts:**
- If you have yellow status (unsaved changes) and see red status (shop changed), you have a potential conflict
- Best practice: Note your changes, reload to see shop changes, then re-apply your edits
- cobby will warn you if you're about to overwrite recent shop changes

---

## cobby During System Migrations

One of cobby's significant architectural advantages emerges during platform migrations—such as upgrading from Magento 1 to Magento 2.

### The Migration Challenge

E-commerce platform migrations are notoriously risky:
- Product data must be accurately transferred between different database schemas
- Business operations can't stop during migration (the shop must remain functional)
- Teams still need to manage products (catalog updates don't pause for IT projects)
- Data inconsistencies between old and new systems create operational chaos

### How cobby's Architecture Helps

cobby's PIM architecture provides crucial support throughout migration:

**Continuous operations:**
- Teams continue managing products in Excel during migration planning and execution
- Changes made in Excel sync to the current production system (Magento 1)
- No interruption to daily product management workflows

**Data integrity:**
- cobby maintains a synchronized view of product data independent of the underlying platform
- This service-layer cache provides a stable reference during migration
- Differential sync ensures changes are accurately applied regardless of platform version

**Reduced risk:**
- Product data in cobby can be used to verify migration accuracy (compare pre- and post-migration states)
- Teams maintain productivity throughout the migration process
- Business operations aren't held hostage to migration timelines

**Smooth transition:**
- Once the new platform (Magento 2) is ready, the cobby extension is installed and connected
- The existing product data in the cobby service can sync to the new platform
- Users experience minimal disruption (same Excel interface, same workflows)

This migration support transforms cobby from a daily productivity tool into strategic infrastructure that de-risks major platform upgrades.

---

## The Bigger Picture: cobby's Role in Your E-commerce Ecosystem

cobby's architecture positions it as more than a product management tool—it's a data integration layer that sits between your team's workflows (Excel) and your technical infrastructure (Magento/Shopware).

This positioning has several strategic implications:

**Workflow continuity:** Teams work in familiar Excel interfaces regardless of backend platform complexity or changes.

**Data consistency:** A single synchronized view prevents the data fragmentation that often occurs when different teams use different tools.

**Scalability:** The architecture handles growing catalogs and teams without proportional increases in complexity or performance degradation.

**Integration potential:** cobby's service layer can potentially integrate with additional data sources (ERPs, PIMs, suppliers) to become a central hub for product data.

**Operational resilience:** By decoupling daily workflows from platform-specific interfaces, cobby reduces operational risk during platform changes or updates.

Understanding these strategic aspects helps explain why cobby's architecture is more complex than a simple Excel plugin—it's designed to be reliable infrastructure for product management at scale.

---


:::tip Learn By Doing
Now that you understand how cobby works as a PIM system and the architectural design behind it, experience this architecture in action with the [First Steps Tutorial](/tutorials/getting-started/first-steps). You'll see the real-time synchronization, differential updates, and collaborative features firsthand.
:::

## Related Topics

- [Product Attributes and Scopes](/explanation/architecture/product-attributes) - Understanding the fundamental data structure cobby displays: attributes, attribute sets, and scopes
- [Store Views](/explanation/architecture/store-views) - Understanding how Store Views enable multi-language stores and why products appear multiple times in cobby
- [Custom Product Types](/explanation/architecture/custom-product-types) - How cobby handles product types beyond standard Magento types

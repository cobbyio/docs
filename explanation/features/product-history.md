---
sidebar_position: 2
title: Product History
---

# Understanding the Product History

The product history is cobby's comprehensive audit trail that tracks every change made to your products over time. It's more than just a log—it's a forensic tool for understanding data evolution and a safety net for data recovery.

## What Product History Captures

Every time a product changes, cobby records a snapshot of that change in the product history. This creates a complete timeline showing:

- **Product ID**: The Magento internal identifier
- **SKU**: The product's unique identifier
- **Attribute Set**: Which template the product uses (e.g., "Sprite Stasis Ball")
- **Product Type**: The structural type (simple, configurable, bundle, grouped)
- **Product Version**: Which iteration of the product data this represents
- **Processing Date**: Exactly when the change was processed
- **Transaction ID**: Links to the corresponding job log entry

For each change, you can drill down to see granular details:
- Which specific properties changed
- The old value
- The new value

![Product history interface](/img/product-history/pic-3.png)

## Why Product History Matters

### Audit Trail and Accountability

In collaborative environments, knowing who changed what and when is essential. The product history provides:

- **Change tracking**: See every modification made to any product
- **Time-based analysis**: Understand when changes occurred
- **Attribution**: Transaction IDs link changes to specific users or processes
- **Compliance**: Maintain records for regulatory or business requirements

### Data Recovery and Protection

The product history serves as a time-based backup system:

- **Recovery Window**: Product data is retained for a defined period
- **Point-in-Time Restoration**: Restore products to previous states within the retention window
- **Data Loss Protection**: If data is accidentally deleted or corrupted, the history provides a recovery path
- **Confidence**: Make changes knowing you can revert if needed

This is fundamentally different from traditional backups—you can recover specific product changes without restoring an entire database.

### Troubleshooting and Diagnosis

When something seems wrong with product data, the product history helps you investigate:

- **Identify when changes occurred**: Pinpoint the exact moment data diverged from expectations
- **Understand the sequence**: See the order of changes that led to the current state
- **Filter efficiently**: Search by product ID, SKU, or transaction ID to find relevant history quickly
- **Compare states**: See old vs. new values to understand what actually changed

## How Product History Enables Better Operations

### Data Confidence

Knowing that every change is tracked and recoverable allows teams to:

- Make changes confidently without fear of permanent mistakes
- Experiment with data knowing rollback is possible
- Delegate product management to more team members
- Reduce bottlenecks in approval workflows

### Forensic Analysis

When investigating issues, the product history provides evidence:

**Scenario**: "Why is this product's price different than expected?"

The product history shows:
- When the price was changed
- What it was changed from
- What transaction made the change
- Whether it came from cobby or Magento

This eliminates guesswork and speculation.

### Data Quality Insights

Over time, the product history reveals patterns:

- Which products change frequently (high maintenance items)
- Which attributes are modified most often
- When bulk changes typically occur
- How product data evolves

These insights help optimize workflows and identify areas for process improvement.

## The Relationship Between Product History and Job History

These two features work together but serve different purposes:

**Job History**: Tracks operations and processes (what cobby is doing)
**Product History**: Tracks data changes (what happened to products)

A single job can affect multiple products, creating multiple product history entries. The transaction ID links them together, allowing you to see both the operation that ran and the specific product changes it made.

## Understanding Product Versions

Each change creates a new product version. This versioning system means:

- You can see the evolution of a product over time
- Each version represents a complete state of the product at that moment
- Versions are chronologically ordered
- You can identify how many times a product has been modified

Version tracking is essential for understanding product data maturity—a product with 50 versions has been heavily edited and refined, while one with 3 versions is relatively stable.

## Data Retention and Lifecycle

Product history is retained for a specific period, creating a rolling window of recoverable history. Understanding this helps you:

- Know how far back you can investigate
- Plan recovery operations within the retention window
- Understand the limits of historical data
- Make decisions about archiving critical changes

The retention period balances data protection with storage efficiency.

## Why Search and Filtering are Critical

With thousands of products changing over time, the raw history would be overwhelming. Search and filtering make it useful:

- **Product ID search**: Find all changes to a specific product
- **SKU search**: Track a product using its business identifier
- **Transaction ID search**: See all products affected by a specific operation

These filters transform a massive dataset into actionable information.

![Product history detail view](/img/product-history/pic-1.png)

## The Role of History in Multi-User Environments

When multiple people or systems modify products, the product history becomes essential for:

- **Coordination**: See what others are changing
- **Conflict resolution**: Understand why data doesn't match expectations
- **Communication**: Reference specific changes when discussing issues
- **Training**: Show new users how products have evolved

The history provides a shared source of truth for all team members.

## Related Topics

For information on job history, see:
- [Understanding Job History](/explanation/features/job-history)

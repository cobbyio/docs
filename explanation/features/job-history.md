---
sidebar_position: 1
title: Job History and Status Icons
---

# Understanding the Job History

The job history is cobby's real-time monitoring system that provides visibility into all data processing operations between cobby and Magento. Understanding how it works helps you maintain data integrity and quickly identify issues.

## What the Job History Represents

The job history is essentially a live activity log that tracks every operation you initiate in cobby. Each entry represents a discrete job—whether it's importing products, processing changes, or updating attributes. The history provides complete transparency into what's happening with your data at any moment.

### Why Real-Time Monitoring Matters

Traditional e-commerce systems often lack visibility into data operations. You make a change, submit it, and hope it worked. cobby's job history eliminates this uncertainty by providing:

- **Immediate Feedback**: See the status of operations as they happen
- **Error Detection**: Problems are surfaced immediately, not discovered later
- **Audit Trail**: Complete history of what was processed and when
- **Performance Insights**: Understand how long operations take

## Understanding Job Statuses

cobby uses five distinct job statuses to communicate what's happening with your data. Each status has a specific meaning and visual indicator.

### Finished (Green)

![Green status](/img/job-history/job-history-3.png)

A green status indicates successful completion. The job log shows exactly what was processed—how many products were imported and the time spent. This is your confirmation that data is synchronized.

**What this means**: All changes have been successfully applied to Magento, indexes have been rebuilt, and your data is current.

### Pending (Yellow Hourglass)

![Pending status](/img/job-history/job-history-5.png)

The hourglass appears when changes are queued but not yet processing. This is the waiting stage where cobby has received your changes but hasn't started applying them yet.

**What this means**: Your changes are safely queued. They'll be processed in order, and you'll see the status update when processing begins.

### Importing (Yellow Processing)

![Importing status](/img/job-history/job-history-6.png)

The processing status shows active work in progress. During this phase, cobby is:

1. Loading your latest product version
2. Identifying changes
3. Validating data for errors
4. Transferring approved changes to Magento
5. Rebuilding affected indexes

The job log provides detailed progress, showing exactly which data types are being processed:
- Attribute, custom, and bundle options
- Product types (simple, configurable, grouped, bundle)
- URL keys
- Stock management data
- Category and website assignments
- Images
- Pricing (tier, customer group)
- SKU changes

**What this means**: Your data is actively being synchronized. The detailed log helps you understand exactly what's happening if you need to troubleshoot later.

### Warning (Yellow Exclamation)

![Warning status](/img/job-history/job-history-7.png)

Warnings indicate informational messages that don't prevent the operation from completing. Common causes include:

- Newly created attribute options
- Price update notifications
- Permission notices for warehouses or store views

**What this means**: The operation completed successfully, but there's information you should be aware of. These are not errors—they're notifications about what happened during processing.

### Error (Red)

![Error status](/img/job-history/job-history-8.png)

Red status indicates a failure in processing. Errors can occur at two different stages:

**Data Validation Errors**: cobby detected problems during the validation phase. The error assistant opens automatically, showing:
- Which products have issues
- What attributes are problematic
- Why the validation failed
- Direct links to fix each issue (eye icon)

**Server Errors**: The job failed due to Magento server issues. Common causes:
- Incorrect file permissions
- Database errors
- PHP errors or timeouts
- Resource limitations

When server errors occur, the job log contains the error message. Server logs (Magento error logs and PHP error logs) provide additional diagnostic information.

**What this means**: Something needs to be fixed before the changes can be applied. Data validation errors can be fixed in cobby directly. Server errors require investigation of server logs or hosting configuration.

## Understanding Product Statuses

While job statuses track operations, product statuses track the synchronization state of individual products.

### Green Product Status

![Green product](/img/job-history/job-history-10.png)

Green means the product data in cobby and Magento is identical. Everything is synchronized.

### Yellow Product Status

![Yellow product](/img/job-history/job-history-11.png)

Yellow indicates the product data in cobby differs from Magento because:

1. You've created new products or made changes not yet saved
2. Products are currently being saved (processing)
3. Saving failed (error)

**What this means**: There's a pending change that hasn't been applied to Magento yet.

### Red Product Status

![Red product](/img/job-history/job-history-12.png)

Red means Magento has different data than what's currently in Excel. This commonly occurs when:

1. **First-time save**: Magento populates empty fields with default values
2. **Image changes**: Image cell content is converted to JSON code
3. **External changes**: Another user or extension modified data in Magento

The "Show changes" feature reveals exactly which products differ. "Load products" updates Excel to match Magento's current values.

**What this means**: Excel is out of sync with Magento. This is normal during editing and after certain operations, but should be resolved by loading or saving changes.

## Why the Job History is Essential

### Data Integrity

The job history ensures you always know the state of your data. In e-commerce, data accuracy directly impacts sales—incorrect pricing, missing products, or wrong inventory can cost money. The job history eliminates uncertainty.

### Fast Problem Resolution

When something goes wrong, time matters. The job history helps you:

- Identify problems immediately rather than discovering them later
- Understand exactly what failed and why
- Access detailed logs for troubleshooting
- Resolve issues before they impact customers

### Operational Transparency

The job history provides complete visibility into how data flows through your system. This transparency helps you:

- Build confidence in the synchronization process
- Understand system behavior
- Train new team members
- Document workflows

## The Role of Icons in Communication

cobby uses color and iconography intentionally to communicate status at a glance. This visual language allows you to:

- **Scan quickly**: Identify issues without reading every log entry
- **Prioritize**: Red demands attention, yellow provides context, green confirms success
- **Understand context**: Different yellow icons (hourglass, processing, warning) provide nuanced information

The icon system is designed to reduce cognitive load—you can understand the state of operations without deep investigation unless needed.

## How Job History Enables Workflows

Understanding the job history helps you build efficient workflows:

**Batch Operations**: Process many products at once and monitor progress through the history

**Troubleshooting**: Use detailed logs to diagnose problems without guessing

**Validation**: Confirm operations completed before moving to the next task

**Collaboration**: Multiple team members can see what's being processed and by whom

## Related Topics

For hands-on guidance on using the job history feature, see:
- How-To: Access and filter the job history (coming soon)
- How-To: Troubleshoot red job status (coming soon)
- How-To: Interpret error messages (coming soon)

For technical specifications on job processing, see the Reference documentation.

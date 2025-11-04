---
sidebar_position: 6
title: How to Prevent Image Duplicates
---

# How to Prevent Image Duplicates

**Goal:** Configure cobby to overwrite existing images instead of creating duplicates with numbered suffixes when updating images with the same filename.

## Problem

By default, Magento renames new images when an image with the same name already exists:
- Original: `product.jpg`
- Update attempt creates: `product_1.jpg`
- Next update creates: `product_2.jpg`

This behavior fills your server with orphaned image files over time, especially when you only want to update an existing image (e.g., improved resolution, added text, color correction).

## Solution

cobby provides a setting to overwrite existing images instead of creating duplicates.

## Prerequisites

- Access to Magento Admin panel
- Administrator permissions for System Configuration
- cobby extension installed

## Steps

### 1. Access Magento Admin

1. Log into your Magento Admin panel
2. Navigate to **System** → **Configuration**
3. In the left sidebar, expand **Services**
4. Click on **cobby**

### 2. Open Advanced Settings

1. Scroll down to the **Advanced** section
2. Click to expand if not already open

![](/img/configuring-cobby-to-prevent-image-duplicates/pic1.png)

### 3. Configure Overwrite Setting

Locate the **Overwrite images** option:

**Set to "Yes" to overwrite:**
- Newly uploaded images replace existing files
- Same filename = file gets overwritten
- No numbered suffixes added
- Keeps server clean and organized

**Set to "No" for default behavior:**
- Magento adds underscore and number to duplicate filenames
- Original files are preserved
- Example: `image.jpg`, `image_1.jpg`, `image_2.jpg`

### 4. Save Configuration

1. Click **Save Config** button at the top right
2. Clear Magento cache if prompted
3. The setting applies immediately to all future image uploads

## How It Works

### With Overwrite Enabled (Yes)

**Scenario:** Update product image with better resolution

1. Original image: `product.jpg` (200KB)
2. Upload new image: `product.jpg` (800KB)
3. Result: Original file replaced with new 800KB version
4. Server contains only one `product.jpg`

### With Overwrite Disabled (No)

**Same scenario:**

1. Original image: `product.jpg` (200KB)
2. Upload new image: `product.jpg` (800KB)
3. Result: New file saved as `product_1.jpg`
4. Server contains both `product.jpg` and `product_1.jpg`
5. Original 200KB file becomes orphaned

## Use Cases

### Enable Overwrite When:

**Updating image quality:**
- Replacing low-res with high-res versions
- Updating product photos seasonally
- Correcting image defects

**Maintaining clean server:**
- Want to avoid orphaned files
- Managing server storage space
- Keeping media library organized

**Consistent image updates:**
- Regularly updating product images
- Synchronized image naming across systems
- Automated image import processes

### Disable Overwrite When:

**Preserving history:**
- Need to keep previous image versions
- Want rollback capability
- Maintaining image archives

**Testing variations:**
- Comparing different image versions
- A/B testing product photos
- Reviewing image changes before committing

**Multiple image versions:**
- Intentionally maintaining variations
- Different images for different contexts
- Backup image strategy

## Impact on Existing Images

**Important:** This setting only affects **new** image uploads:
- Existing duplicate files remain on server
- Does not automatically clean up old duplicates
- Only prevents future duplicates

To clean up existing duplicates:
1. Manually review media/catalog/product folder
2. Identify unused image files
3. Remove orphaned images carefully
4. Backup before deleting

## Troubleshooting

**Setting not working**
- Clear Magento cache after changing setting
- Verify you have admin permissions
- Check that cobby extension is up to date
- Test with a new image upload

**Images still being numbered**
- Verify setting is set to "Yes"
- Check that you saved the configuration
- Ensure image filename matches exactly (case-sensitive)
- Clear browser cache and retry

**Original images not updating**
- Verify overwrite is enabled
- Check file permissions on media folder
- Ensure new image has exact same filename
- Review server logs for errors

**Lost images after enabling**
- This is expected behavior when overwriting
- Create backups before enabling
- Test on staging environment first
- Consider whether you need version history

## Best Practices

### Before Enabling

1. **Backup your media folder:**
   - Create full backup of media/catalog/product
   - Store backup in secure location
   - Document backup date and contents

2. **Test on staging:**
   - Enable setting on staging environment
   - Test image upload and replacement
   - Verify functionality works as expected

3. **Document your process:**
   - Create internal documentation
   - Train team on new behavior
   - Establish image update procedures

### After Enabling

1. **Monitor server space:**
   - Track media folder size over time
   - Verify no accumulation of duplicates
   - Schedule periodic media audits

2. **Maintain naming conventions:**
   - Use consistent image filenames
   - Document naming standards
   - Ensure team follows conventions

3. **Regular cleanup:**
   - Periodically review media folder
   - Remove orphaned images from before setting change
   - Optimize storage usage

### Version Control Alternative

If you need both clean storage and version history:
1. Keep overwrite enabled
2. Maintain image versions outside Magento
3. Use version control system (Git) for images
4. Or use external DAM (Digital Asset Management) system

## Additional Notes

**Performance:** Overwriting images has no performance impact compared to creating duplicates.

**Cache:** After overwriting images, clear:
- Magento cache
- CDN cache (if applicable)
- Browser cache for testing

**Compatibility:** This setting works with:
- All cobby versions with advanced settings
- Magento 1 and Magento 2
- All image upload methods (manual, import, API)

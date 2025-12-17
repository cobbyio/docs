---
sidebar_position: 2
title: How to Migrate from cobby Version 1.0 to 2.0
---

# How to Migrate from cobby Version 1.0 to 2.0

Upgrade your cobby installation from version 1.0 to 2.0 for Magento 1 or Magento 2.

## Prerequisites

- cobby version 1.0 currently installed
- Magento 1.x or Magento 2.x
- FTP access to your server (for Magento 1)
- Composer access (for Magento 2)
- Database backup recommended

## For Magento 1

### Steps

#### 1. Uninstall cobby 1.0 Extension

You need to remove the old extension files before installing version 2.0.

1. Connect to your server using FTP (recommended tool: FileZilla)
2. Navigate to the `/html/app/etc/modules/` directory
3. Delete the file `Mash2_Cobby.xml`

![Module location](/img/migrations-update-for-cobby-2.0/pic0.png)

**Expected result:** The cobby 1.0 module configuration file is removed.

#### 2. Install cobby 2.0 Extension

1. Download the cobby 2.0 extension from the repository:
   ```bash
   git clone https://github.com/cobbyio/cobby-connector-magento
   ```

2. Follow the [installation guide for Magento 1](/how-to/installation/install-cobby-magento-1)

3. Verify installation in Magento Admin:
   - Navigate to **System > Configuration > Services**
   - Confirm cobby 2.0 appears in the configuration

**Expected result:** cobby 2.0 extension is installed and visible in Magento configuration.

#### 3. Reconnect Your Shop in cobby Portal

After installing the new extension, reconnect your shop to update the connection settings.

1. Log in to the cobby portal
2. Navigate to **Shop > Magento 1**
3. Click **Edit** for your shop
4. Click **Save** (even if credentials haven't changed)

![Reconnect shop](/img/migrations-update-for-cobby-2.0/pic1.png)

**Expected result:** Your shop is reconnected with cobby 2.0 extension.

#### 4. Clean Database (If Needed)

If new tables are not created automatically, you may need to clean the database entry.

1. Connect to your MySQL database
2. Execute the following query:
   ```sql
   DELETE FROM core_resource WHERE code LIKE 'cobby%';
   ```
3. Re-run Magento setup:
   ```bash
   php shell/indexer.php --reindexall
   ```

**Expected result:** Database tables are created correctly for cobby 2.0.

---

## For Magento 2

### Steps

#### 1. Contact Your Agency

The cobby 1.0 extension must be removed by your agency or developer. Do not attempt to remove it manually.

**Required from agency:**
- Remove cobby 1.0 via Composer:
  ```bash
  composer remove mash2/cobby
  ```
- Clear generated code:
  ```bash
  rm -rf generated/code/*
  ```

#### 2. Install cobby 2.0 Extension

Your agency should install the new extension:

1. Add the repository to Composer:
   ```bash
   composer require cobby-io/cobby-connector-magento2
   ```

2. Run Magento setup:
   ```bash
   php bin/magento setup:upgrade
   php bin/magento setup:di:compile
   php bin/magento cache:clean
   ```

3. Verify installation:
   ```bash
   php bin/magento module:status Cobby_Connector
   ```

**Expected result:** Output shows `Module is enabled`.

#### 3. Reconnect Your Shop in cobby Portal

Update the connection to use the new extension.

1. Log in to the cobby portal
2. Navigate to **Shop > Magento 2**
3. Click **Edit** for your shop
4. Click **Save**

![Reconnect Magento 2 shop](/img/migrations-update-for-cobby-2.0/pic2.png)

**Expected result:** Connection is updated with cobby 2.0 API endpoints.

#### 4. Clean Database (If Needed)

If tables are not created, clean the setup version entries:

```bash
mysql -u [username] -p [database]
```

```sql
DELETE FROM setup_module WHERE module LIKE 'Mash2_Cobby%';
```

Then rerun setup:
```bash
php bin/magento setup:upgrade
```

**Expected result:** All cobby 2.0 tables are created successfully.

---

## Verification

### Test the Migration

1. Open cobby desktop application
2. Verify connection status shows "Connected"
3. Load a product to confirm data syncs correctly
4. Make a test change and save
5. Verify the change appears in Magento

**Expected result:** cobby 2.0 is fully functional with bidirectional sync working.

## Troubleshooting

**Extension not appearing in Magento configuration?**
- Clear all caches: `rm -rf var/cache/* var/page_cache/*`
- Verify file permissions: Files should be readable by web server
- Check error logs: `var/log/system.log`

**Connection fails after reconnection?**
- Verify API credentials in **System > Configuration > Services > cobby**
- Test API endpoint: `curl https://yourstore.com/cobby/api`
- Check firewall rules allow cobby portal IP addresses

**Database tables not created?**
- Verify the `core_resource` (M1) or `setup_module` (M2) table is clean
- Run setup commands with verbose output to see errors
- Check MySQL user has CREATE TABLE permissions

**Products not syncing after migration?**
- Reset the queue: In cobby portal, go to **Shop Settings > Reset Queue**
- Clear Magento indexer: `php bin/magento indexer:reindex`
- Verify cron jobs are running

## Related Documentation

- [cobby Installation Guide for Magento 1](/how-to/installation/install-cobby-magento-1)
- [cobby Installation Guide for Magento 2](/how-to/installation/install-cobby-magento-2)

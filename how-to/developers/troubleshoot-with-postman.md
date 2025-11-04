---
sidebar_position: 4
title: How to Troubleshoot with Postman
---

# How to Troubleshoot with Postman

Learn how to test and debug cobby API requests directly using Postman, bypassing the cobby application to isolate issues.

## Prerequisites

- Postman installed (download from [getpostman.com](https://getpostman.com/))
- cobby extension installed on your Magento store
- Access to your store's cobby API credentials
- Basic understanding of REST APIs
- (Optional) htaccess credentials if your dev site is password-protected

## Overview

Postman allows you to send API requests directly to your store's cobby API endpoint, which helps:
- Test API functionality independently of the cobby desktop application
- Debug connection and authentication issues
- Verify data export and import operations
- Troubleshoot custom extension integrations

## Steps

### 1. Install Postman

1. Visit [getpostman.com](https://getpostman.com/)
2. Download the version for your operating system
3. Install and launch Postman

**Expected result:** Postman application is running and ready to use.

### 2. Import cobby API Collection

We provide pre-configured API request collections for cobby.

1. Download the API collection matching your cobby version from:
   - [cobby API Requests and Events](/how-to/developers/use-api-events)

2. In Postman, click **Import** in the top toolbar

   ![Import button](/img/troubleshoot-with-postman/pic1.png)

3. Click **Import File** and select the downloaded collection file

   ![Import file dialog](/img/troubleshoot-with-postman/pic2.png)

**Expected result:** The cobby API collection appears in your Postman sidebar.

### 3. Create Environment for Your Store

Set up an environment to store your store-specific configuration.

1. Click the **gear icon** in the top-right corner

   ![Settings icon](/img/troubleshoot-with-postman/pic3.png)

2. Click **Manage Environments**

3. Click **Add**

   ![Add environment](/img/troubleshoot-with-postman/pic4.png)

4. Configure the environment with the following variables:

   ![Environment configuration](/img/troubleshoot-with-postman/pic5.png)

   **Variable Configuration (use camelCase):**

   | Variable | Value | Example |
   |----------|-------|---------|
   | `shopURL` | Your store URL + cobby API path | `https://yourstore.com/cobby/api` |
   | `apiUser` | cobby API username | `cobby_api` |
   | `apiPassword` | cobby API password | `your_password` |
   | `cobbyVersion` | cobby version (dots → underscores) | `2_0_1` |
   | `licenseKey` | Your cobby license key | `XXXX-XXXX-XXXX-XXXX` |
   | `htaccessUser` | htaccess username (if applicable) | `dev` |
   | `htaccessPassword` | htaccess password (if applicable) | `password` |

5. Click **Add** to save the environment

   ![Save environment](/img/troubleshoot-with-postman/pic4.png)

**Where to find API credentials:**

**Magento 1:**
- Navigate to **System > Configuration > Services > cobby**

**Magento 2:**
- Navigate to **Stores > Settings: Configuration > Services > cobby**

**Expected result:** Your environment is configured and ready to use.

### 4. Get a Session Key

Before making other API requests, you need to authenticate and get a session key.

1. Select your environment from the dropdown in the top-right

2. From the collection, select **Login (Magento1)** or **Login (Magento2)**

3. Click **Send**

   ![Send login request](/img/troubleshoot-with-postman/pic6.png)

4. Copy the session key from the response (without quotes)

5. Click the **eye icon** in the top-right corner

6. Click **Edit** next to Globals

   ![Edit globals](/img/troubleshoot-with-postman/pic7.png)

7. Add a new global variable:
   - Variable: `sessionKey`
   - Value: [paste the copied session key]

   ![Add session key](/img/troubleshoot-with-postman/pic8.png)

8. Click **Save**

**Expected result:** You now have a valid session key stored globally for subsequent requests.

**Note:** Session keys expire after a period of inactivity. If requests fail with authentication errors, repeat this step to get a fresh session key.

### 5. Make Your First API Request

Test the API by exporting an attribute.

1. Ensure you have a valid session key (step 4)

2. Select **Attribute (Info)** from the collection

3. Click the **Body** tab

   ![Body tab](/img/troubleshoot-with-postman/pic9.png)

4. Replace `AttributeID` with an actual attribute ID from your store (e.g., `73` for SKU attribute)

5. Click **Send**

   ![Send attribute request](/img/troubleshoot-with-postman/pic10.png)

**Expected result:** You receive a JSON response with the attribute details.

**Example successful response:**
```json
{
  "attribute_id": "73",
  "attribute_code": "sku",
  "frontend_label": "SKU",
  "frontend_input": "text",
  "is_required": "1",
  "is_unique": "1"
}
```

### 6. Test Additional API Operations

Now you can test other API operations from the collection:

**Export Operations:**
- **Product Export** - Export product data
- **Category Export** - Export category tree
- **Attribute Set Export** - Export attribute sets
- **Store Export** - Export store views and websites

**Import Operations:**
- **Product Import** - Import product data
- **Stock Update** - Update product stock levels
- **Category Assignment** - Update product-category relationships
- **Media Import** - Import product images

**Testing workflow:**
1. Select the request from the collection
2. Modify the body parameters as needed
3. Click **Send**
4. Review the response for success or errors

## Common API Requests

### Export All Product IDs

**Request:** `cobby_catalog_product.getAllIds` (M1) or `GET cobby/product/ids` (M2)

**Purpose:** Get a list of all product IDs in your store

**Body (Magento 1):**
```json
{
  "sessionKey": "{{sessionKey}}"
}
```

**Expected response:**
```json
[1, 2, 3, 4, 5, ...]
```

### Export Products

**Request:** `cobby_export.exportProducts` (M1) or `POST cobby/export/products` (M2)

**Body (Magento 1):**
```json
{
  "sessionKey": "{{sessionKey}}",
  "productIds": [1, 2, 3],
  "storeId": 1
}
```

**Expected response:** Array of product objects with full data.

### Update Stock

**Request:** `cobby_import_product.updateStock` (M1) or `POST cobby/import/products/stocks` (M2)

**Body (Magento 1):**
```json
{
  "sessionKey": "{{sessionKey}}",
  "stocks": [
    {
      "product_id": "1",
      "qty": 100,
      "is_in_stock": 1
    }
  ]
}
```

**Expected response:** Success confirmation or error details.

## Troubleshooting

**Error: "Invalid session key"**
- Session has expired - get a new session key (Step 4)
- Verify you're using the correct global variable name: `sessionKey`
- Check the session key doesn't include quotes

**Error: "Authentication failed"**
- Verify API credentials in your environment variables
- Check credentials match those in Magento configuration
- Test credentials by logging into Magento admin with same username/password

**Error: "404 Not Found"**
- Verify `shopURL` includes the full path: `https://yourstore.com/cobby/api`
- Check cobby extension is installed and enabled
- For Magento 2, verify the endpoint uses the correct format (REST vs SOAP)

**Error: "Access denied"**
- Check cobby API user has correct permissions in Magento
- Verify license key is valid and active
- For Magento 1, check ACL permissions in **System > Web Services > SOAP/XML-RPC - Roles**

**htaccess authentication issues**
- Ensure `htaccessUser` and `htaccessPassword` variables are set
- Check htaccess credentials are correct
- Verify Postman is sending authentication headers

**No response received**
- Check server is accessible from your network
- Verify firewall isn't blocking API requests
- Test with curl to isolate Postman issues:
  ```bash
  curl -X POST https://yourstore.com/cobby/api \
    -H "Content-Type: application/json" \
    -d '{"method":"login","params":{"username":"user","password":"pass"}}'
  ```

**Attribute/Product not found**
- Verify the ID exists in Magento
- Check you're using the correct store view ID
- For attributes, use attribute ID not attribute code

## Advanced Testing

### Test Custom Events

If you've created custom observers (see [How to Use cobby API Events](/how-to/developers/use-api-events)), test them:

1. Set up request for the operation that triggers your event
2. Send the request
3. Check Magento logs for your observer execution:
   ```bash
   tail -f var/log/system.log | grep "cobby"
   ```
4. Verify expected data modifications occurred

### Test Import Performance

Monitor import performance by testing with increasing data volumes:

1. Start with 10 products
2. Increase to 100, then 1000
3. Monitor response times
4. Check for timeout errors with large datasets

### Validate API Responses

Create Postman tests to validate responses:

```javascript
// Tests tab in Postman
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has product data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('sku');
});
```

## Related Documentation

- [cobby API Requests and Events Reference](/how-to/developers/use-api-events)
- [How to Use cobby API Events and Observers](/how-to/developers/use-api-events)
- [Third Party Extension Compatibility](/explanation/for-developers/third-party-extensions)
- [Postman Documentation](https://learning.postman.com/docs/)

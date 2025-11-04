---
sidebar_position: 8
title: How to Generate API Keys
---

# How to Generate API Keys

Create and manage API keys for connecting your Magento store to cobby.

## Prerequisites

- Workspace owner or admin access
- Active cobby subscription
- Magento store credentials

## Create Magento User for API Access

Before generating cobby API keys, you need to create a dedicated Magento user:

### In Magento 1

1. Log in to your Magento 1 backend.

2. Go to **System** → **Web Services** → **SOAP/XML-RPC - Users**.

3. Click **Add New User**.

4. Enter the user details:
   - **User Name:** Choose a descriptive name (e.g., "cobby_api")
   - **API Key:** Create a secure API key
   - **API Key Confirmation:** Re-enter the API key

5. Go to the **User Role** tab.

6. Assign the cobby role to this user.

7. Click **Save User**.

**Result:** Your API credentials are ready for cobby portal configuration.

### In Magento 2

1. Log in to your Magento 2 backend.

2. Go to **System** → **Integrations**.

3. Click **Add New Integration**.

4. Configure the integration:
   - **Name:** "cobby Integration"
   - **API:** Select all cobby-required endpoints

5. Click **Save**.

6. Click **Activate** and copy the access tokens.

**Result:** Integration tokens are generated for cobby.

## Connect API to cobby Portal

1. Log in to the cobby portal at [app.cobby.io](https://app.cobby.io).

2. Go to **Settings** → **Shop Connection**.

3. Enter your connection details:
   - **Shop URL:** Your Magento store URL
   - **User Name:** The API user name you created
   - **API Key:** The API key you generated

4. Click **Save** to establish the connection.

5. Wait for the synchronization to complete.

**Result:** Your Magento store is connected to cobby.

## Manage API Keys

### View Current Keys

1. Log in to the cobby portal.

2. Go to **Settings** → **Workspace**.

3. Your workspace license key is displayed here.

### Regenerate Keys

If your API keys are compromised:

1. In Magento, delete the old API user.

2. Create a new API user with new credentials.

3. Update the credentials in the cobby portal.

4. Test the connection.

## Common Issues

**Connection failed error?**
- Verify the shop URL is correct and accessible
- Check that the API user has proper permissions
- Ensure the API key matches exactly (no extra spaces)

**API user not working?**
- Verify the user role includes cobby permissions
- Check that the API is enabled in Magento settings
- Review Magento logs for authentication errors

**Need to revoke access?**
- Delete the API user in Magento
- Update credentials in cobby portal
- Create new API user if you need to reconnect later

## Security Best Practices

- Use strong, unique API keys
- Never share API credentials
- Create dedicated API users for cobby (don't reuse admin accounts)
- Regularly audit API access
- Revoke unused API keys immediately

## Related Tasks

- How to Connect a New Shop (coming soon)
- [How to Manage Multiple Workspaces](./manage-multiple-workspaces.md)

## More Information

For developers building custom integrations:
- [API Endpoints and Events](/reference/api/endpoints-and-events) - Complete API reference for custom integrations
- [Troubleshoot with Postman](/how-to/developers/troubleshoot-with-postman) - Test and debug API requests

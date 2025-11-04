---
sidebar_position: 4
title: How to Fix Connection Issues
---

# How to Fix Connection Issues

This guide helps you resolve SSL/TLS connection issues between cobby and the cobby service.

## Problem

cobby cannot establish a secure connection to the service, displaying the following error message:

"Connection to the service failed! No trust relationship could be established for the secure SSL/TLS channel. Possible cause is that you are trying to decrypt the https connection."

![Connection error message](/img/possible-reasons-why-cobby-can-not-establish-a-secure-connection-to-the-service/pic1.png)

## Cause

This error occurs when software on your computer interferes with cobby's secure HTTPS connection, typically by attempting to decrypt or inspect SSL/TLS traffic.

## Solution

Follow these steps in order to identify and resolve the connection issue.

### Step 1: Check Antivirus Software

Antivirus programs often inspect HTTPS traffic, which can interfere with cobby's secure connection.

1. Identify which antivirus software is running on your computer.
2. Temporarily disable the antivirus program.
3. Try using cobby again.
4. If the error no longer appears, the antivirus is the cause.

**To create a permanent solution:**

1. Re-enable your antivirus software.
2. Open your antivirus program's settings.
3. Look for SSL/TLS inspection or HTTPS scanning settings.
4. Create an exception rule for cobby.
5. Add the following to the exception list:
   - All cobby executable files
   - The domains: `*.mash2.com` and `*.cobby.io`
6. Save the settings and test cobby again.

If you need help creating exception rules, consult your antivirus software's user manual or contact the manufacturer.

### Step 2: Check Firewall Settings

Firewalls may block or inspect cobby's connection attempts.

1. Identify your firewall software (Windows Firewall, Bitdefender, etc.).
2. Temporarily disable the firewall.
3. Try using cobby again.
4. If the error no longer appears, the firewall is the cause.

**To create a permanent solution:**

1. Re-enable your firewall.
2. Open your firewall settings.
3. Create an exception rule for cobby.
4. Add the following to the exception list:
   - All cobby executable files
   - The domains: `*.mash2.com` and `*.cobby.io`
5. Allow both inbound and outbound connections for cobby.
6. Save the settings and test cobby again.

If you need help creating firewall rules, consult your firewall's user manual or contact the manufacturer.

### Step 3: Check Proxy Settings

If your network uses a proxy server that handles HTTPS connections, it may act as a "man in the middle" and interfere with cobby's connection.

1. Verify if your network uses a proxy server (ask your IT administrator).
2. Contact your network administrator or IT department.
3. Request that they create proxy exceptions for:
   - `*.mash2.com`
   - `*.cobby.io`
4. The proxy should not decrypt or inspect traffic to these domains.
5. After the exceptions are added, test cobby again.

### Step 4: Scan for Malware

If none of the above solutions work, your computer may be infected with malware performing a "man in the middle" attack.

1. Update your antivirus software to the latest version.
2. Run a full system scan.
3. Remove any detected threats.
4. Restart your computer.
5. Test cobby again.

Learn more about man-in-the-middle attacks in [this article](https://www.kaspersky.de/blog/was-ist-eine-man-in-the-middle-attacke/905/).

**Additional security measures:**

- Change your passwords after removing malware.
- Enable two-factor authentication on important accounts.
- Keep your operating system and software updated.
- Consider using a reputable anti-malware tool.

## Troubleshooting

### Error persists after trying all solutions

- Check with your IT department if additional network security measures are in place.
- Verify your system date and time are correct (SSL certificates are time-sensitive).
- Try connecting from a different network (mobile hotspot) to isolate the issue.
- Contact cobby support at [info@cobby.io](mailto:info@cobby.io) with detailed error information.

### Connection works on some networks but not others

- The blocked network likely has stricter security policies.
- Contact the network administrator for that specific network.
- Request exceptions for cobby as described in [Step 3: Check Proxy Settings](#step-3-check-proxy-settings).

### Connection was working before and suddenly stopped

- Check if antivirus or firewall software was recently updated.
- Verify if new security software was installed.
- Check if your company's IT department changed network policies.
- Verify that Windows updates didn't change security settings.

## Help cobby Improve

If you successfully resolved your connection issue, please contact cobby at [info@cobby.io](mailto:info@cobby.io) and share:

- Which software was causing the problem
- The software version number
- What exception rules you created

This information helps cobby work with software manufacturers to add cobby to their whitelists, preventing this issue for other users.

## Related Resources

- [How to Fix cobby Installation Problems](/how-to/installation/installation-troubleshooting)
- [Kaspersky: What is a Man-in-the-Middle Attack?](https://www.kaspersky.de/blog/was-ist-eine-man-in-the-middle-attacke/905/)

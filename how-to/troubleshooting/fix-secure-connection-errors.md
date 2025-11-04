---
sidebar_position: 2
title: How to Fix Secure Connection Errors
---

# How to Fix Secure Connection Errors

This guide helps you resolve SSL/TLS connection errors that prevent cobby from connecting to the service.

## Symptoms

- You receive the error message: "Connection to the service failed! No trust relationship could be established for the secure SSL/TLS channel"
- The error mentions: "Possible cause is that you are trying to decrypt the https connection"
- Product maintenance is blocked due to connection issues

![Connection error message](/img/possible-reasons-why-cobby-can-not-establish-a-secure-connection-to-the-service/pic1.png)

## Prerequisites

- cobby is installed on your computer
- Administrative access to modify security software settings
- Access to your network/firewall configuration (if applicable)

## Step-by-Step Solutions

### Solution 1: Check Antivirus Software

Your antivirus program may be intercepting HTTPS connections:

1. Identify if an antivirus program is running on your computer
2. Temporarily disable the antivirus program
3. Launch cobby and test if the connection works

**Expected result:** If the error disappears, the antivirus is the cause.

4. Re-enable your antivirus program
5. Consult your antivirus user manual or contact the manufacturer
6. Create an exception rule for cobby in your antivirus settings

**If this doesn't work:** Continue to Solution 2.

### Solution 2: Check Firewall Settings

Your firewall may be blocking cobby's connection:

1. Identify if you use a firewall (Bitdefender, Windows Defender Firewall, or similar)
2. Temporarily disable the firewall
3. Launch cobby and test if the connection works

**Expected result:** If the error disappears, the firewall is the cause.

4. Re-enable your firewall
5. Consult your firewall user manual or contact the manufacturer
6. Create an exception rule for cobby in your firewall settings

**If this doesn't work:** Continue to Solution 3.

### Solution 3: Configure Proxy Settings

If your network uses a proxy that handles HTTPS connections:

1. Contact your IT administrator or check your proxy settings
2. Add exceptions for these domains:
   - `*.mash2.com`
   - `*.cobby.io`
3. Save the proxy configuration
4. Restart cobby and test the connection

**Expected result:** cobby should connect successfully after adding the domain exceptions.

**If this doesn't work:** Continue to Solution 4.

### Solution 4: Check for Malware

If none of the previous solutions work, your computer may be compromised:

1. Run a full system scan with your antivirus software
2. Use additional malware detection tools (such as Malwarebytes)
3. Look for signs of "Man in the Middle" attacks

**What is a Man in the Middle attack?**
This is when malicious software intercepts your secure connections. Learn more in [this article about Man in the Middle attacks](https://www.kaspersky.de/blog/was-ist-eine-man-in-the-middle-attacke/905/).

4. If malware is detected, follow your security software's instructions to remove it
5. Restart your computer
6. Test cobby's connection again

**Expected result:** After removing malware, cobby should connect successfully.

## Troubleshooting

**Connection still failing?**

- Verify your system time is correct (incorrect time can cause SSL/TLS errors)
- Check if your company has SSL inspection enabled on the network
- Confirm that cobby.io and mash2.com are accessible from your network

## Still Having Issues?

If you resolved your problem or need additional help:

- Email cobby support at info@cobby.io
- Include details about your error message, security software, and network setup
- If you found a solution, let us know so we can help add cobby to security software whitelists for other users

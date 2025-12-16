---
sidebar_position: 8
title: How to Convert Between Text and Numbers with VALUE and TEXT
---

# How to Convert Between Text and Numbers with VALUE and TEXT

Learn how to convert data between text and number formats to fix formula errors and match data from different sources.

## The Problem

Excel formulas fail when comparing different data types:
- Text "123" is not equal to number 123
- Formulas return #VALUE! or #NUMBER! errors
- VLOOKUP and INDEX-MATCH can't find matches
- Data from different sources won't align

## Identifying Data Types

Look at cell alignment to identify the data type:

- **Left-aligned**: Text format
- **Right-aligned**: Number format

**Important**: In cobby, all attributes are exported as text except price and date attributes.

## Solution 1: VALUE Function

Converts text to numbers.

### Syntax

```excel
=VALUE(text)
```

### When to Use

Use VALUE when:
- Your cobby SKU is text, but the source file has numeric SKUs
- You need to match text numbers with real numbers
- Price or quantity fields are stored as text

### Example: Transfer Names Using INDEX-MATCH

**Scenario**: Source file has numeric SKUs, cobby has text SKUs.

```excel
=INDEX(NameColumn;MATCH(VALUE([@[SKU]]);SourceSKUColumn;0))
```

**What this does:**
1. VALUE converts the text SKU from cobby to a number
2. MATCH finds the position in the source SKU column
3. INDEX returns the corresponding name

![](/img/value-and-text-functions/pic1.png)

![](/img/value-and-text-functions/pic2.png)

## Solution 2: TEXT Function

Converts numbers to text.

### Syntax

```excel
=TEXT(number; 0)
```

### Parameters

- **number**: The numeric value to convert
- **0**: Format code (0 = standard number)

### When to Use

Use TEXT when:
- Your source file has text SKUs, but cobby's are numeric
- You need to match numbers with text values
- Building formulas that compare IDs or codes

### Example: Transfer Description from cobby Export

**Scenario**: cobby export has text SKUs, source file has numeric SKUs.

```excel
=INDEX(DescriptionColumn;MATCH(TEXT([@[SKU]];0);CobbySKUColumn;0))
```

**What this does:**
1. TEXT converts the numeric SKU to text format
2. MATCH finds the position in the cobby SKU column
3. INDEX returns the corresponding description

![](/img/value-and-text-functions/pic3.png)

![](/img/value-and-text-functions/pic4.png)

## Alternative: Helper Column Method

If you don't want to use VALUE or TEXT in your formulas, create a helper column:

### Convert Text to Number

```excel
=""&[@[SKU]]
```

This concatenates empty text with the SKU, converting it to text.

### Convert Number to Text

Simply change the cell format:
1. Right-click the column
2. Format Cells > Text

## Step-by-Step: Match Data with Different Formats

### Step 1: Identify Format Mismatch

Check if your data is aligned left (text) or right (numbers) in both files.

### Step 2: Choose Conversion Method

- Source is numbers, cobby is text � Use VALUE
- Source is text, cobby is numbers � Use TEXT

### Step 3: Build Your Formula

Wrap the search criterion in VALUE or TEXT:

```excel
' For VLOOKUP
=VLOOKUP(VALUE([@[SKU]]);SourceData;2;FALSE)

' For INDEX-MATCH
=INDEX(SourceData;MATCH(TEXT([@[SKU]];0);SourceSKU;0))
```

### Step 4: Apply and Test

Apply the formula to a few rows and verify the matches are correct.

## Common Use Cases

### Match EAN Codes

```excel
=VLOOKUP(VALUE([@EAN]);SupplierList!$A$2:$D$100;3;FALSE)
```

### Import Numeric IDs

```excel
=INDEX(Prices;MATCH(TEXT([@[Product ID]];0);SourceIDs;0))
```

### Compare Mixed Format Data

```excel
=IF(VALUE([@[Text Number]])=[@[Real Number]];"Match";"No Match")
```

## Tips

- Always check data alignment before creating formulas
- Test conversions on a single cell first
- Remember: cobby exports most attributes as text
- Use helper columns for simpler formulas when needed
- The 0 format in TEXT function keeps the number format standard

## Troubleshooting

<details>
<summary>**Still getting #VALUE! error?**</summary>

- Check for hidden spaces in text values
- Verify the data is actually in the format you think (text vs. number)
- Try using TRIM to remove spaces: `=VALUE(TRIM([@[SKU]]))`

</details>

<details>
<summary>**Numbers look wrong after conversion?**</summary>

- Check the TEXT format parameter (should be 0 for standard)
- Verify you're not accidentally applying number formatting

</details>

<details>
<summary>**VLOOKUP still not finding matches?**</summary>

- Ensure both the search value and the lookup column are the same format
- Check for leading zeros (e.g., "00123" vs "123")
- Use TRIM to clean up extra spaces

</details>

## Related Functions

- **TRIM**: Remove extra spaces from text
- **CLEAN**: Remove non-printable characters

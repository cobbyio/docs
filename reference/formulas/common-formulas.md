---
sidebar_position: 1
title: Common Excel Formulas
---

# Common Excel Formulas

Reference guide for the most commonly used Excel formulas in cobby. This document provides syntax specifications, parameter descriptions, and examples for quick lookup.

## Overview

Excel provides a comprehensive library of formulas for data manipulation, analysis, and formatting. Formulas can be used individually or combined to create complex operations. This reference covers the most essential formulas available in cobby, organized by category.

## Logical Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **IF** | `=IF(logical_test, value_if_true, value_if_false)` | `logical_test`: condition to evaluate; `value_if_true`: value if true; `value_if_false`: value if false | Checks if a condition is true and returns one value if true, another if false | `=IF(A1>100, "High", "Low")` |
| **IFS** | `=IFS(test1, value1, [test2, value2], ...)` | `test1-testN`: conditions to evaluate; `value1-valueN`: corresponding values | Evaluates multiple conditions without nesting formulas (up to 127 conditions) | `=IFS(A1>100, "High", A1>50, "Medium", "Low")` |
| **AND** | `=AND(logical1, [logical2], ...)` | `logical1-logicalN`: conditions to test | Returns TRUE if all conditions are true; FALSE otherwise | `=AND(A1>10, B1<50)` |
| **NOT** | `=NOT(logical)` | `logical`: value or expression to negate | Reverses the logical value (TRUE becomes FALSE, vice versa) | `=NOT(A1=B1)` |
| **IFERROR** | `=IFERROR(value, value_if_error)` | `value`: expression to evaluate; `value_if_error`: value to return if error occurs | Returns specified value if formula returns an error; otherwise returns formula result | `=IFERROR(A1/B1, "Error")` |

## Lookup Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **VLOOKUP** | `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` | `lookup_value`: value to find; `table_array`: range to search; `col_index_num`: column position to return; `range_lookup`: TRUE/FALSE for exact match | Finds data in a table by searching vertically in the first column | `=VLOOKUP("Apple", A1:C10, 3, FALSE)` |
| **INDEX/MATCH** | `=INDEX(array, MATCH(lookup_value, lookup_array, 0))` | `array`: range to return from; `lookup_value`: value to find; `lookup_array`: range to search; `0`: exact match | Similar to VLOOKUP with more flexibility for complex lookup scenarios | `=INDEX(C1:C10, MATCH("Apple", A1:A10, 0))` |

## Text Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **TRIM** | `=TRIM(text)` | `text`: text string to clean | Removes leading and trailing spaces from text | `=TRIM(" Hello ")` |
| **CONCATENATE** | `=CONCATENATE(text1, [text2], ...)` | `text1-textN`: strings to combine | Joins two or more text strings into one | `=CONCATENATE("First", " ", "Last")` |
| **LEFT** | `=LEFT(text, num_chars)` | `text`: string to extract from; `num_chars`: number of characters to return | Returns the first specified number of characters from a text string | `=LEFT("Hello", 3)` returns "Hel" |
| **RIGHT** | `=RIGHT(text, num_chars)` | `text`: string to extract from; `num_chars`: number of characters to return | Returns the last specified number of characters from a text string | `=RIGHT("Hello", 3)` returns "llo" |
| **MID** | `=MID(text, start_num, num_chars)` | `text`: string to extract from; `start_num`: position of first character; `num_chars`: number of characters | Returns specified number of characters from text string starting at specified position | `=MID("Hello", 2, 3)` returns "ell" |
| **LEN** | `=LEN(text)` | `text`: string to measure | Returns the number of characters in a text string | `=LEN("Hello")` returns 5 |
| **FIND** | `=FIND(find_text, within_text, [start_num])` | `find_text`: text to find; `within_text`: text to search in; `start_num`: character position to start search | Finds a string within another string and returns the starting position (case-sensitive) | `=FIND("ll", "Hello")` returns 3 |
| **SUBSTITUTE** | `=SUBSTITUTE(old_text, old_text, new_text, [instance_num])` | `old_text`: text containing text to replace; `old_text`: text to find; `new_text`: replacement text; `instance_num`: which occurrence to replace | Replaces specific text in a text string | `=SUBSTITUTE("Hello", "l", "x")` returns "Hexxo" |
| **TEXT** | `=TEXT(value, format_code)` | `value`: number to format; `format_code`: number format code | Formats a number as text with specified formatting | `=TEXT(1234.5, "$#,##0.00")` returns "$1,234.50" |
| **VALUE** | `=VALUE(text)` | `text`: text string representing a number | Converts a text string that represents a number into a number | `=VALUE("123")` converts text to number 123 |

## Counting Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **COUNTIF** | `=COUNTIF(range, criteria)` | `range`: cells to count; `criteria`: condition to meet | Counts cells that meet a specified criterion | `=COUNTIF(A1:A10, ">50")` |
| **COUNTA** | `=COUNTA(range)` | `range`: cells to count | Counts non-empty cells in a range | `=COUNTA(A1:A10)` |

## Math Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **ROUND** | `=ROUND(number, num_digits)` | `number`: value to round; `num_digits`: decimal places | Rounds a number to specified number of digits | `=ROUND(1234.5678, 2)` returns 1234.57 |
| **MIN** | `=MIN(number1, [number2], ...)` | `number1-numberN`: values to compare | Returns the smallest number in a group of values | `=MIN(10, 5, 20)` returns 5 |
| **MAX** | `=MAX(number1, [number2], ...)` | `number1-numberN`: values to compare | Returns the largest number in a group of values | `=MAX(10, 5, 20)` returns 20 |
| **RANDBETWEEN** | `=RANDBETWEEN(bottom, top)` | `bottom`: smallest integer to return; `top`: largest integer to return | Returns a random integer between specified values (inclusive) | `=RANDBETWEEN(1, 100)` |

## Date Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **TODAY** | `=TODAY()` | (no parameters) | Returns the current date as a serial number | `=TODAY()` |

## Error Checking Formulas

| Formula | Syntax | Parameters | Description | Example |
|---------|--------|------------|-------------|---------|
| **IS** | `=IS.ERROR()`, `=IS.NUMBER()`, etc. | Depends on specific IS function | Checks if an error condition or specific type is present | `=ISERROR(A1/B1)` |

## cobby Custom Formulas

cobby extends Excel with custom formulas for image and general data management. Custom formulas are available in the Excel function assistant under the cobby category.

### Image Management Formulas

| Formula | Purpose |
|---------|---------|
| **BILD.ERSTELLEN** | Create a new single image with parameters (description, exclude, size, etc.) |
| **BILDER.ERSTELLEN** | Create multiple images in the store |
| **BILD.HOLEN** | Retrieve names of all images for a product |
| **BILDER.HOLEN** | Retrieve names of all product images |
| **BILD.BEZEICHNUNGHOLEN** | Retrieve the label/name of a specific image type (e.g., small) |
| **BILDER.BEZEICHNUNGHOLEN** | Retrieve labels of all product images |
| **BILD.URLHOLEN** | Retrieve the URL of a specific image type (e.g., small) |
| **BILDER.URLSHOLEN** | Retrieve URLs of all product images |
| **BILDER.HINZUFUEGEN** | Add additional images to a product that already has images |
| **BILDER.DATEINAMENERSETZEN** | Overwrite file names of product images |
| **BILDER.BEZEICHNUNGENERSETZEN** | Replace the description (alternative text) of all product images |

### General Formula Utilities

| Formula | Purpose |
|---------|---------|
| **EINMALFORMEL** | Single-use formula that executes once and removes itself after saving. Reduces processing time by transmitting only values to the system instead of formulas. Useful when creating new products with many linked formulas. |
| **IFISEMPTY** | Checks if a cell is empty and executes accordingly |

## External References

For detailed Excel formula documentation, refer to the official Microsoft Office support articles:
- [TRIM](https://support.office.com/en-US/article/TRIM-function-410388FA-C5DF-49C6-B16C-9E5630B479F9)
- [CONCATENATE](https://support.office.com/en-US/article/CONCATENATE-function-8F8AE884-2CA8-4F7A-B093-75D702BEA31D)
- [IF](https://support.office.com/en-US/article/IF-function-69AED7C9-4E8A-4755-A9BC-AA8BBFF73BE2)
- [IFS](https://support.office.com/en-us/article/IFS-function-36329a26-37b2-467c-972b-4a39bd951d45)
- [AND](https://support.office.com/en-US/article/AND-function-5F19B2E8-E1DF-4408-897A-CE285A19E9D9)
- [COUNTIF](https://support.office.com/en-US/article/COUNTIF-function-E0DE10C6-F885-4E71-ABB4-1F464816DF34)
- [COUNTA](https://support.office.com/en-US/article/COUNTA-function-7DC98875-D5C1-46F1-9A82-53F3219E2509)
- [RANDBETWEEN](https://support.office.com/en-US/article/RANDBETWEEN-function-4CC7F0D1-87DC-4EB7-987F-A469AB381685)
- [ROUND](https://support.office.com/en-US/article/ROUND-function-C018C5D8-40FB-4053-90B1-B3E7F61A213C)
- [VALUE](https://support.office.com/en-US/article/VALUE-function-257D0108-07DC-437D-AE1C-BC2D3953D8C2)
- [TEXT](https://support.office.com/en-US/article/TEXT-function-20D5AC4D-7B94-49FD-BB38-93D29371225C)
- [LEFT](https://support.office.com/en-US/article/LEFT-LEFTB-functions-9203D2D2-7960-479B-84C6-1EA52B99640C)
- [RIGHT](https://support.office.com/en-US/article/RIGHT-RIGHTB-functions-240267EE-9AFA-4639-A02B-F19E1786CF2F)
- [MID](https://support.office.com/en-US/article/MID-MIDB-functions-D5F9E25C-D7D6-472E-B568-4ECB12433028)
- [LEN](https://support.office.com/en-US/article/LEN-LENB-functions-29236F94-CEDC-429D-AFFD-B5E33D2C67CB)
- [FIND](https://support.office.com/en-US/article/FIND-FINDB-functions-C7912941-AF2A-4BDF-A553-D0D89B0A0628)
- [MIN](https://support.office.com/en-US/article/MIN-function-61635D12-920F-4CE2-A70F-96F202DCC152)
- [MAX](https://support.office.com/en-US/article/MAX-function-E0012414-9AC8-4B34-9A47-73E662C08098)
- [SUBSTITUTE](https://support.office.com/en-US/article/SUBSTITUTE-function-6434944E-A904-4336-A9B0-1E58DF3BC332)
- [TODAY](https://support.office.com/en-US/article/TODAY-function-5EB3078D-A82C-4736-8930-2F51A028FDD9)
- [NOT](https://support.office.com/en-US/article/NOT-function-9CFC6011-A054-40C7-A140-CD4BA2D87D77)
- [IFERROR](https://support.office.com/en-US/article/IFERROR-function-C526FD07-CAEB-47B8-8BB6-63F3E417F611)

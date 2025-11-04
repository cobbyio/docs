---
sidebar_position: 1
title: How to Extract Text from Cells Using SEARCH, LEFT, and RIGHT
---

# How to Extract Text from Cells Using SEARCH, LEFT, and RIGHT

Learn how to split text in cells by extracting portions before or after specific keywords using Excel's SEARCH, LEFT, and RIGHT functions.

## When to Use This

Use text extraction formulas when you need to:
- Split manufacturer descriptions into separate attributes
- Extract specific parts of product information
- Separate text at signal words or keywords
- Create individual columns from combined data

## Extract Text Before a Keyword

Use this formula to extract everything before a specific search word in a cell.

### Formula

```excel
=IFERROR(LEFT([cell];(SEARCH("search word";[cell])-1));[cell])
```

### How It Works

The formula combines three functions:
- **SEARCH**: Finds the position where the search word starts
- **LEFT**: Extracts the front part of the cell
- **IFERROR**: Returns the original cell content if the search word isn't found

### Example: Extract Product Description

Extract the product description before the words "Scope of delivery":

```excel
=IFERROR(LEFT([p_desc.de];(SEARCH("scope_of_delivery";[p_desc.de])-1));[p_desc.de])
```

**What this does:**
1. Searches for "scope_of_delivery" in the description
2. Extracts everything before that keyword
3. If the keyword isn't found, keeps the entire description

## Extract Text After a Keyword

Use this formula to extract everything after a specific search word in a cell.

### Formula

```excel
=IFERROR(RIGHT([cell];(LEN([cell])-SEARCH("search word";[cell])+1));"")
```

### How It Works

The formula combines four functions:
- **SEARCH**: Finds the position where the search word starts
- **LEN**: Calculates the total length of the text
- **RIGHT**: Extracts the rear part of the cell
- **IFERROR**: Returns empty text if the search word isn't found

### Example: Extract Delivery Information

Extract the delivery information after the words "Scope of delivery":

```excel
=IFERROR(RIGHT([p_desc.de];(LEN([p_desc.de])-SEARCH("scope_of_delivery";[p_desc.de])+1));"")
```

**What this does:**
1. Finds where "scope_of_delivery" starts
2. Calculates how many characters come after it
3. Extracts everything from that point to the end
4. If the keyword isn't found, leaves the cell empty

## Tips

- **Case sensitivity**: SEARCH is not case-sensitive, so "Scope" and "scope" are treated the same
- **Exact keywords**: Make sure your search word exactly matches what appears in your text
- **Multiple columns**: Create separate columns for different extracted portions
- **Signal words**: Replace "scope_of_delivery" with any keyword that separates your data

## Alternative: Text to Columns

If your data is separated by specific characters (like commas or semicolons), consider using Excel's built-in **Text to Columns** feature instead:

1. Select the cells with data to split
2. Go to Data > Text to Columns
3. Choose "Delimited" and select your separator character
4. Click Finish

This method is simpler but only works with character separators, not keyword phrases.

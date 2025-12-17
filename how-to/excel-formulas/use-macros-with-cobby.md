---
sidebar_position: 3
title: How to Use Macros with cobby
---

# How to Use Macros with cobby

Learn when and how to use Excel macros with cobby, and when formulas or templates are better alternatives.

## When Macros Make Sense

Macros are useful for:
- Data cleanup and transformation tasks
- Repetitive multi-step processes
- One-time complex operations
- Automating cobby workflows

## When to Avoid Macros

Consider alternatives to macros for:
- Simple calculations � Use formulas
- Repeatable workflows � Use cobby templates
- Data transformations � Use Power Query
- Regular data updates � Use formulas with templates

## Advantages of Formulas Over Macros

### Formulas are Transparent

**Formulas:**
- Logical, unambiguous constructs
- Easy to understand and verify
- Visible in the formula bar
- Quick to learn and use

**Macros:**
- Code can be complex and opaque
- Hard to troubleshoot without programming knowledge
- Not easily understood by all team members
- Time-consuming to fix when broken

### Formulas are Maintainable

When a formula doesn't work:
- Anyone can see and fix it
- Logic is clear and traceable
- Documentation is built-in

When a macro doesn't work:
- Requires VBA knowledge to fix
- May take significant time to debug
- Can become a blocker if the creator is unavailable

### Templates Enable Reusability

cobby templates allow you to:
- Save formulas for repeated use
- Document workflows step-by-step
- Share setups across team members
- Maintain consistency

This combines the power of automation with the transparency of formulas.

## Recommended Workflow

### For Regular Tasks

1. **Define the process** with filters and templates
2. **Use formulas** for calculations and transformations
3. **Document steps** in template names and descriptions
4. **Train team members** on the template-based workflow

**Benefits:**
- Anyone can use templates after brief training
- No programming knowledge required
- Consistent results across users
- Easy to update and maintain

### For Cleanup Tasks

Macros are ideal for cleanup operations:
- Removing empty rows or columns
- Standardizing data formats
- Batch find and replace
- One-time data corrections

**Example cleanup tasks:**
- Convert all text to proper case
- Remove duplicate spaces
- Standardize phone number formats
- Clean up imported data inconsistencies

## cobby Compatibility

### Macros Work with cobby

- Excel macros run normally in cobby workbooks
- Macros can trigger cobby processes
- cobby functions are accessible via VBA
- No special configuration needed

### Best Practices

When using macros with cobby:

1. **Test thoroughly**: Verify macros work with cobby data structure
2. **Save first**: Always save before running macros
3. **Use cleanup macros**: Reserve macros for cleanup steps
4. **Document**: Comment your code clearly
5. **Share carefully**: Not all users may be comfortable with macros

## Example Use Cases

### Good Macro Uses

**Data Cleanup:**
```vba
' Remove all empty rows
Sub RemoveEmptyRows()
    ' Macro code here
End Sub
```

**Batch Operations:**
```vba
' Apply specific formatting to all products in a category
Sub FormatByCategory()
    ' Macro code here
End Sub
```

**One-Time Import:**
```vba
' Transform supplier data format to cobby format
Sub TransformSupplierData()
    ' Macro code here
End Sub
```

### Better with Formulas

**Price Calculations:**
```excel
' Instead of macro
=ROUND([@Cost]*1.4;2)
```

**Conditional Text:**
```excel
' Instead of macro
=IF([@Stock]>0;"In Stock";"Out of Stock")
```

**Text Building:**
```excel
' Instead of macro
=CONCATENATE([@Brand];" ";[@Name])
```

## Enabling Macros in Excel

### Step 1: Open Excel Options

Go to **File** > **Options** > **Trust Center** > **Trust Center Settings**

### Step 2: Configure Macro Settings

Choose one of:
- **Disable all macros with notification** (recommended)
- **Enable all macros** (not recommended for security)

### Step 3: Save as Macro-Enabled

Save the workbook as:
- **.xlsm** (Excel Macro-Enabled Workbook)

## Security Considerations

### Risks

- Macros can contain malicious code
- Only run macros from trusted sources
- Review code before enabling

### Protection

- Use "Disable with notification" setting
- Review macros before running
- Keep Excel and cobby updated
- Don't share macro files publicly

## Transition from Macros to Formulas

If you currently use macros, consider:

### Step 1: Document Current Process

Write down what the macro does step by step.

### Step 2: Identify Formula Alternatives

Check if each step can be done with:
- Standard Excel formulas
- cobby's IFISEMPTY function
- Conditional formatting
- Built-in Excel features

### Step 3: Create Template

Build a cobby template with:
- Formula columns
- Filter settings
- Documentation

### Step 4: Train Team

Show team members how to use the template instead of the macro.

## When Macros Are the Best Choice

Keep macros for:

1. **Complex cleanup**: Multi-step data transformations
2. **Workflow automation**: Triggering multiple cobby actions
3. **Custom integration**: Connecting cobby to other tools
4. **One-time migrations**: Large data imports with complex rules

## Tips

- **Document everything**: Comment your macro code thoroughly
- **Version control**: Save different versions of macro workbooks
- **Test on copies**: Never run untested macros on production data
- **Keep it simple**: Simpler macros are easier to maintain
- **Consider Power Query**: May be better for complex data transformations

## Getting Help

If you need to create or fix macros:

1. **Excel VBA documentation**: Microsoft's official resources
2. **cobby support**: Contact for guidance on cobby-specific integrations
3. **Developer community**: Excel forums and Stack Overflow

## Related Topics

- **Power Query**: Alternative to macros for data transformation

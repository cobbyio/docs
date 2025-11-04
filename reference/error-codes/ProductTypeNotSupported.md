
# ProductTypeNotSupported

### Message
The product type is not supported.

### Description
If an incorrect value is assigned in the product type mapping between a simple and configurable product, it will cause problems. You will receive the following message:

![](/img/import-error-codes/pic-3.png)

If data validation was manually disabled for this cell, cobby will give this error message in the Error Task Pane when saving:
"Attribute / Invalid value"

![](/img/import-error-codes/pic-4.png)

### Solution
This is because the input is not included in the drop-down menu. To work around this error, select a valid value and save the changes.
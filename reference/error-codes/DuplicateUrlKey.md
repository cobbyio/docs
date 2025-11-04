
# DuplicateUrlKey

### Message
It exists a duplicate URL key.

### Description
If it happens that a unique value appears twice in cobby, it will be checked if the value already exists. If this is the case, the already existing value is selected and you get an error message.

### Solution
This error often affects attributes like EAN or GTIN. To fix this you have to revise the attribute EAN/GTIN in Magento and set the setting Unique to Yes. It is about the English option Unique Value. After that you have to resynchronize cobby.
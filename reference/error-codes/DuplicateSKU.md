
# DuplicateSKU

### Message
There is a duplicate SKU.

### Description
If the SKU of a product is changed or assigned when creating a new product, cobby checks whether this SKU already exists in the system. If this is the case, the note "SKU must be unique" appears.

### Solution
Use a SKU that exists only once in the shop. Quick help is e.g. the addition of a text DUPLICATE behind the SKU. The filter dialog can be used to search for the existing SKU after saving. Both products are then displayed below each other and so it is easy to find out which product should have the SKU.

# ConfigurableProductsAssignedDuplicates

### Message
Configurable assignment: super attribute double constellation

### Description
The error "Double constellation" only occurs if the assignment is no longer unique, i.e. if several simple products with identical properties have been assigned to a grouped or configurable product. Neither cobby nor Magento can handle such a procedure.

**Example**: You group a product such as shoes by color and size and create the individual simple products in the attribute "linked products" manually or with the help of formulas. Here you separate as usual the individual SKUs by a pipe. After the process is finished, you click on "Save Products" and get a red job log. Also, the following error message appears:

![](/img/import-error-codes/pic-24.png)

### Solution
1. Click on the eye icon under "Action" in the Error Assistant Task Pane. You will automatically jump to the "Linked Products" field where the error of the duplicate constellation can be found. 
2. Under Error in the Error Assistant Task Pane, the product SKUs containing the duplicate constellations are displayed.
3. Clean up the data. You can proceed differently depending on the case:	
- Remove one of the two products from the linked products attribute by deleting the checkmark.

![](/img/import-error-codes/pic-25.png)

- Look at the two products individually and mark out errors. For example, the wrong shoe size was maintained in product "ams002". Instead of size 9, this is shoe size 10, so simply change the attribute value of the product and the error is fixed.

4. When you have fixed the error, the error message is automatically crossed out in the Error Assistant Task Pane.
5. Click on "Save products". If all errors are removed, you will get a green job log.
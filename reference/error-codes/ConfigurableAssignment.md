
# ConfigurableAssignment
Configurable assignment incorrect (error_17)

When maintaining a configurable product, four different error cases can occur: 
1. The linked products are not simples
2. The linked products are not in the same attribute set
3. A constellation exists several times
4. Product values are not entered

## Error case no. 1: The linked products are not simples
**Message**:
Products are not simples or virtuals

**Description**: 
If products are assigned to a configurable product which are not simple or virtual in type, you will receive the following error message:

![](/img/import-error-codes/pic-14.png)

**Solution**:
Adjust either the product type of the affected items or remove them from the assignment.

---

## Error case no. 2: The linked products are not in the same attribute set
**Message**:
Products are not in the same attribute set

**Description**:
If products are assigned to a configurable product that are in a different attribute set, you will receive the following error message:

![](/img/import-error-codes/pic-15.png)

**Solution**:
Remove the affected items from the mapping or recreate it for the correct attribute set.

---

## Error case no. 3: A constellation exists several times
**Message**:
The combination exists several times.

**Description**:
If a constellation such as 32-Grey (size, color) exists multiple times for products in an assignment, you will receive the following error message:

![](/img/import-error-codes/pic-16.png)

**Solution**:
Adjust the affected combination so that it does not occur for two items.

---

## Error case no. 4: Product values are not entered
**Message**:
Some products are not complete.

**Description**:
If assigned products are not complete, e.g. because a characteristic for linking is missing, you will receive the following message:

![](/img/import-error-codes/pic-17.png)

**Solution**:
Click the eye icon next to the error message and you will go directly to the affected cell. Enter a valid value and save again.
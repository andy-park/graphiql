
# Query Fragments
-Way to predefine query attributes to avoid repeating syntax
-Example

> {
    company(id: "1"){
        ...CompanyDetails
    }
    company(id: "2"){
        ...CompanyDetails
    }
}

fragment companyDetails on Company {
    id
    name
    description
}

# Mutations
-Create, Delete, Edit operations
-Schema.js Line 98 Note 1
-Put vs. Patch: Put overwrites completely, Patch overwrites partially
-Schema.js Line 103 Note 2
-Error: Wrapped edit args in curly brackets, which created a new object (Removed)
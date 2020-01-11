
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
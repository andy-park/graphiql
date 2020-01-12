
# Query Fragments
- Way to predefine query attributes to avoid repeating syntax  
- Example

'{
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
}'

# Mutations
- Create, Delete, Edit operations  
- Schema.js Line 98 Note 1  
- Put vs. Patch: Put overwrites completely, Patch overwrites partially  
- Schema.js Line 103 Note 2  
- Error: Wrapped edit args in curly brackets, which created a new object (Removed)  

# GraphQL Clients
- Lokka: Basic queries and mutations. Some simple caching.  
- Apollo: Good balance between features and complexity. Has server and client. Server splits schemas, uses markup (Types File, Resolvers File)  
- Relay: Good performance for mobile. Paid for in complexity.  
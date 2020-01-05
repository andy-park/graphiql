const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

//Hardcoded users
/* const users = [
    { id: '23', firstName: 'Andy', age: 25 },
    { id: '2', firstName: 'Jess', age: 21 },
]; */

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
              return axios.get(`http://localhost:3000/companies/${parentValue.id}.users`)
                .then(res => res.data);
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: { 
            type: CompanyType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                  .then(res => res.data);
            } 
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            //Function to enter data store and retrieve requested data
            resolve(parentValue, args) {
                //Call to hardcoded data
                //return _.find(users, { id: args.id });
                //Call to json mock data
                return axios.get(`http://localhost:3000/users/${args.id}`)
                 .then(resp => resp.data);
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                  .then(resp => resp.data);
            }
        } 
    }
});

//Allow this scheme to be accessible by other parts of application
module.exports = new GraphQLSchema({
    query: RootQuery
});
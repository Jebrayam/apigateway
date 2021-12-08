const { gql } = require('apollo-server');

const productTypeDefs = gql`
    type Product {
        id: String!
        category: String!
        name: String!
        description: String!
        price: Float!
    }

    input ProductInput {        
        category: String!
        name: String!
        description: String!
        price: Float!
    }

    extend type Query {
        productByName(name: String!): Product
    }

    extend type Query {
        productByCategory(category: String!): [Product]
    }

    extend type Query {
        allProduct(): [Product]
    }   
    
    extend type Mutation {
        createProduct(product: ProductInput!): Product
    }

    extend type Mutation {
        updateProduct(product: Product!, name: String!): Product
    }

    extend type Mutation {
        deleteProduct(name: String!): Boolean
    }
`;

module.exports = productTypeDefs;
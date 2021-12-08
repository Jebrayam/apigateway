const { gql } = require('apollo-server');

const stockTypeDefs = gql`
    type Stock {
        product: String!
        date: String!
        quantity: Int!
    }

    input StockInput {
        product: String!
        updateDate: String!
        quantity: Int!   
    }

    extend type Query {
        stockByProduct(product: String!): Stock!
    }

    extend type Query {
        allStock: [Stock]!
    }

    extend type Mutation {
        createStock(stock: StockInput!): Stock!
    }

    extend type Mutation {
        updateStock(stock: StockInput!, product: String!): Stock!
    }
`;

module.exports = stockTypeDefs;
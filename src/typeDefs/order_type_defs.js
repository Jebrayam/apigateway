const { gql } = require('apollo-server');

const orderTypeDefs = gql`
    input OrderProductInput {
        product: String!
        quantity: Int!
    }

    type OrderProduct {
        id: String!
        product: String!
        quantity: Int!
    }

    type Order {
        id: String!
        date: String!
        orderedProducts: [OrderProduct]!
        username: String!
    }

    input OrderInput {
        orderedProducts: [OrderProductInput]!
        username: String!    
    }

    extend type Query {
        orderByUsername(username: String!): [Order]!
    }

    extend type Query {
        orderById(id: String!): Order!
    }

    extend type Query {
        allOrder: [Order]!
    }

    extend type Mutation {
        createOrder(order: OrderInput!): Order!
    }

    extend type Mutation {
        updateOrder(order: OrderInput!, id: String!): Order!
    }
`;

module.exports = orderTypeDefs;
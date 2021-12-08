const { gql } = require('apollo-server');

const orderTypeDefs = gql`
    input OrderProduct {
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
        orderedProducts: [OrderProduct]!
        username: String!    
    }

    extend type Query {
        orderByUsername(username: String!): [Order]
    }

    extend type Query {
        orderById(id: String!): Order
    }

    extend type Query {
        allOrder(): [Order]
    }

    extend type Mutation {
        createOrder(order: Order!): Order
    }

    extend type Mutation {
        updateOrder(order: Order!, id: String!): Order
    }
`;

module.exports = orderTypeDefs;
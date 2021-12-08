const { gql } = require('apollo-server');

const categoryTypeDefs = gql`
    type Category {
        name: String!
        description: String!        
    }

    input CategoryInput {
        name: String!
        description: String!
    }

    extend type Query {
        categoryById(name: String!): Category
    }

    extend type Query {
        allCategories(): [Category]
    }

    extend type Mutation {
        createCategory(category: CategoryInput!): Category
    }
`;

module.exports = categoryTypeDefs;
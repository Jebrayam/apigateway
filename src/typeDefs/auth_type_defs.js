const { gql } = require('apollo-server');

const authTypeDefs = gql`
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        email: String!
        password: String!
    }

    input SignUpInput {
        email: String!
        first_name: String!
        last_name: String!
        phone_number: String!
        address: String!
        password: String!            
    }

    type UserDetail {
        id: Int!
        email: String!
        first_name: String!
        last_name: String!
        phone_number: String!
        address: String!
        password: String! 
    }

    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }`;

module.exports = authTypeDefs;
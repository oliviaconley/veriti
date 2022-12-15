const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  # declaring type Auth with it values
  type Auth {
    token: ID!
    user: User
  }

  type Category {
    _id: ID
    name: String
    charities: [Charity]!
  }

  type Charity {
    _id: ID
    name: String
    location: String
    mission: String
    link: String
    imgLink: String
    ein: String
    categories: [Category]!
  }

  type Donation {
    _id: ID
    donationAmount: Float!
    donationDate: String
    user: User!
    charity: Charity!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    charity(_id: ID!): Charity
    charities: [Charity]
    donations: [Donation]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDonation(charity: ID!, user: ID!): Donation
    saveCharity(user: ID!, charity: ID!): User
    unsaveCharity(user: ID!, charity: ID!): User
  }
`;

module.exports = typeDefs;

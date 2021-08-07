const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    getFriend(id: Int): Friend
  }

  type Friend {
    id: ID
    name: String
    gender: Gender
    email: String
  }

  enum Gender {
    MALE
    FEMAIL
  }

  type Email {
    email: String
  }

  input EmailInput {
    email: String
  }

  input FriendInput {
    name: String
    gender: Gender
    email: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports = {schema}

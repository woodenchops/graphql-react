const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    getTodos(id: ID): Todos
    getAllTodos: [Todos]
  }

  type Todos {
    id: ID
    name: String
    completed: Boolean
  }


  input TodosInput {
    name: String
    completed: Boolean
  }

  type Mutation {
    createTodo(input: TodosInput): Todos
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { connectToDatabase } = require('./db');
const { resolvers } = require('./data/resolvers');
const { schema } = require('./data/schema');

const root = resolvers;

connectToDatabase({
  database: process.env.TODOS,
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(5000);
console.log('Running a GraphQL API server at http://localhost:5000/graphql');

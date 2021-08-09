const Todo = require('../data/models');

// The resolvers provides a resolver function for each API endpoint

const resolvers = {
  Query: {
    getTodos: (root, { id }, context) => {
      return Todo.findById(id);
    },
    getAllTodos: (root, args, context) => {
      return Todo.find({});
    },
  },
  Mutation: {
    createTodo: (root, { input }) => {
      const { name, completed } = input;

      const newTodo = new Todo({
        name,
        completed,
      });

      return newTodo.save();
    },
  },
};

module.exports = { resolvers };

const Todo = require('../data/models');

// The resolvers provides a resolver function for each API endpoint

const resolvers = {
  Query: {
    getTodos: (root, { todoName }, context) => {
      const res = Todo.find({ name: { $regex: todoName } });

      return res;
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

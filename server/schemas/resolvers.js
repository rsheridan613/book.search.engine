const { User } = require("../models");

const resolvers = {
  Query: {
    // get one user
    user: async (parent, _id) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
  Mutation: {
    // create user
    createUser: async () => {},

    // save book to user
    saveBook: async () => {},

    // delete book from user
    deleteBook: async () => {},
  },
};

module.exports = resolvers;

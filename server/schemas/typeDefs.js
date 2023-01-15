const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login:
    addUser:
    addBook:
    removeBook:
  }

  type User {
    _id: ID!
    username:
    email:
    bookCount:
    savedBooks:
  }

  type Book {
    bookId:
    authors:
    description:
    title:
    image:
    link:
  }

  type Auth {
    token:
    user:
  }
`;

module.exports = typeDefs;

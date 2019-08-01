import graphql = require('graphql');

const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = graphql;

let books: any = {
  '1': { 
    id: '1', 
    name: 'Name of the Wind', 
    genre: 'Fantasy',
    authorId: '1',
  },
  '2': { 
    id: '2', 
    name: 'Nineteen Eighty-Four', 
    genre: 'Dystopia',
    authorId: '2',
  },
  '3': { 
    id: '3', 
    name: 'Brave New World',
    genre: 'Dystopia',
    authorId: '3'
  }
};

let authors: any = {
  '1': { id: '1', name: 'Patrick Rothfuss', age: 86 },
  '2': { id: '2', name: 'George Orwell', age: 48 },
  '3': { id: '3', name: 'Aldous Huxley', age: 67 }
};

const authorType: graphql.GraphQLObjectType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(bookType),
      resolve(parent, args) {
        return Object.values(books)
        .filter((book: any) => book.authorId === parent.id);
      }
    }
  })
});

const bookType: graphql.GraphQLObjectType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: { 
      type: authorType,
      resolve(parent, args) {
        return authors[parent.authorId];
      }
    }
  })
});



const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: bookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books[args.id];
      }
    },
    author: {
      type: authorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors[args.id];
      }
    },
    books: {
      type: new GraphQLList(bookType),
      resolve(parent, args) {
        return Object.values(books);
      }
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve(parent, args) {
        return Object.values(authors);
      }
    }
  }
});

export default new GraphQLSchema({
  query: rootQuery
});

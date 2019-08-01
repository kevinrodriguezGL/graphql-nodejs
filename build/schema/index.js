"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql = require("graphql");
var GraphQLObjectType = graphql.GraphQLObjectType, GraphQLString = graphql.GraphQLString, GraphQLSchema = graphql.GraphQLSchema;
var bookType = new GraphQLObjectType({
    name: 'Book',
    fields: function () { return ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }); }
});
var rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: bookType,
            args: { id: { type: GraphQLString } },
            resolve: function (parent, args) {
                // Code to get data from db/other source
            }
        }
    }
});
exports.default = new GraphQLSchema({
    query: rootQuery
});

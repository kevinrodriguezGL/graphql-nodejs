import express = require('express');
import graphqlHTTP = require('express-graphql');
import schema from './schema';

const app: express.Application = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log(`> Now listening for requests on port: ${4000}`);
});
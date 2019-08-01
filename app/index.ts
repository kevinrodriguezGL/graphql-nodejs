import express = require('express');
import graphqlHTTP = require('express-graphql');
import mongoose = require('mongoose');
import chalk = require('chalk');
const clk = chalk.default;
import schema from './schema';

const env = { 
  MONGO_DB_URL: 'mongodb://localhost:32768/graphql-nodejs',
  PORT: 4000,
};

(async () => {
  const app: express.Application = express();
  try {
    await mongoose.connect(env.MONGO_DB_URL, { useNewUrlParser: true });
    console.log(clk.greenBright(`Connected to: ${env.MONGO_DB_URL}`));
  } catch (error) {
    console.error(clk.redBright(`Unable to connect to: ${env.MONGO_DB_URL}`));
    console.error(error);
  }
  app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
  app.listen(env.PORT, () => {
    console.log(clk.blueBright(`> Now listening for requests on port: ${env.PORT}`));
  });
})();

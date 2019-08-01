"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var graphqlHTTP = require("express-graphql");
var schema_1 = __importDefault(require("./schema"));
var app = express();
app.use('/graphql', graphqlHTTP({ schema: schema_1.default }));
app.listen(4000, function () {
    console.log("> Now listening for requests on port: " + 4000);
});

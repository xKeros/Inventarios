import express from "express";
import { graphqlHTTP } from "express-graphql";
import { Schema } from "./Schema/index";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: Schema,
  })
);

export default app;

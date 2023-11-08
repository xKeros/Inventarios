import express from "express";
import { graphqlHTTP } from "express-graphql";
import { Schema } from "./Schema/index";
import cors from "cors";

const app = express();

// Implementar CORS
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: Schema,
  })
);

export default app;

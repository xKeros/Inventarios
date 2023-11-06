import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { CREAR_PRODUCTO } from "./Mutations/Productos";
import {todosProductos, UN_PRODUCTO } from "./Queries/Productos";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    todosProductos : todosProductos,
    UN_PRODUCTO: UN_PRODUCTO
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    crearProducto: CREAR_PRODUCTO
  }
})

export const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

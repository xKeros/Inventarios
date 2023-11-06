import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const ProductType = new GraphQLObjectType({
  name: "Producto",
  fields: {
    id: {type: GraphQLID },
    Barcode: {type: GraphQLString },
    nombre: {type: GraphQLString },
    descripcion: {type: GraphQLString },
    cantidad: {type: GraphQLString },
  },
});

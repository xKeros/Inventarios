import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { Productos } from "../../Entitys/Productos";
import { ProductType } from "../typeDefs/Producto";

export const todosProductos = {
  type: new GraphQLList(ProductType),
  async resolve() {
    const resultado = await Productos.find();

    return resultado;
  },
};

export const UN_PRODUCTO = {
  type: ProductType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(_:any, args: any) {
    return await Productos.findOne(args.id)
  }
}
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

export const BUSCAR_PRODUCTO_POR_BARCODE = {
  type: GraphQLList(ProductType),
  args: {
    barcode: { type: GraphQLString } // Asegúrate de que el tipo de datos sea el correcto para el código de barras
  },
  async resolve(_: any, args: any) {
    const { barcode } = args;
    return await Productos.find({ where: { Barcode: barcode } });
  }
}
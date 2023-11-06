import { GraphQLString } from "graphql";
import { Productos } from "../../Entitys/Productos";
import { ProductType } from "../typeDefs/Producto";

export const CREAR_PRODUCTO = {
  type: ProductType,
  args: {
    Barcode: { type: GraphQLString },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    cantidad: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { Barcode, nombre, descripcion, cantidad } = args;

    const resultado = await Productos.insert({
      Barcode: Barcode,
      nombre: nombre,
      descripcion: descripcion,
      cantidad: cantidad,
    });

    console.log(resultado);

    return {...args, id: resultado.identifiers[0].id};
  },
};

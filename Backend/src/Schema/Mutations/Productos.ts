import { GraphQLString, GraphQLID, GraphQLBoolean } from "graphql";
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

    return { ...args, id: resultado.identifiers[0].id };
  },
};

export const ELIMINAR_PRODUCTO = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const resultado = await Productos.delete(args.id);
    if (resultado.affected === 1) {
      return true;
    }
    return false;
  },
};

export const UPDATE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
    Barcode: { type: GraphQLString },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    cantidad: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const resultado = await Productos.update(args.id, {
      Barcode: args.Barcode,
      nombre: args.nombre,
      descripcion: args.descripcion,
      cantidad: args.cantidad,
    });
    console.log(resultado);
    if (resultado.affected === 1) {
      return true
    } else {
      return false
    }
  }
};
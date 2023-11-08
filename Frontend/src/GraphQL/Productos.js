import { gql } from "@apollo/client";

export const TODOS_PRODUCTOS = gql`
  {
    todosProductos {
      id
      Barcode
      nombre
      descripcion
      cantidad
    }
  }
`;

export const CREAR_PRODUCTO = gql`
  mutation crearProducto(
    $Barcode: String!
    $nombre: String!
    $descripcion: String!
    $cantidad: String!
  ) {
    crearProducto(
      Barcode: $Barcode
      nombre: $nombre
      descripcion: $descripcion
      cantidad: $cantidad
    ) {
      id
      Barcode
      nombre
      descripcion
      cantidad
    }
  }
`;

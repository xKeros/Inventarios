import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREAR_PRODUCTO } from "../GraphQL/Productos";

export const Crear_Producto = () => {
  const [Product, setProduct] = useState({
    Barcode: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
  });
  const [crearProducto, { loading, error, data }] = useMutation(CREAR_PRODUCTO);
  const handleChange = (e) => {
    setProduct({
      ...Product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    crearProducto({
      variables: {
        Barcode: Product.Barcode,
        nombre: Product.nombre,
        descripcion: Product.descripcion,
        cantidad: Product.cantidad,
      },
    });
    console.log(Product);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Código de barras del producto</label>
        <input
          type="text"
          placeholder="Código de barras"
          name="Barcode"
          onChange={handleChange}
        />
        <label htmlFor="">Nombre del producto</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          name="nombre"
          onChange={handleChange}
        />
        <label htmlFor="">Descripción del producto</label>
        <input
          type="text"
          placeholder="Descripción del producto"
          name="descripcion"
          onChange={handleChange}
        />
        <label htmlFor="">Cantidad del producto</label>
        <input
          type="text"
          placeholder="Cantidad del producto"
          name="cantidad"
          onChange={handleChange}
        />
        <button
          disabled={
            !Product.Barcode ||
            !Product.nombre ||
            !Product.descripcion ||
            !Product.cantidad ||
            loading
          }
        >
          Crear producto
        </button>
      </form>
    </div>
  );
};

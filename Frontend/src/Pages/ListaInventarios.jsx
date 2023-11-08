import { useQuery } from "@apollo/client";
import { TODOS_PRODUCTOS } from "../GraphQL/Productos";
import Tabla from "../Components/Tabla";

export const ListaInventarios = () => {
  const { loading, error, data } = useQuery(TODOS_PRODUCTOS);
  if (loading === true) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>Hubo un error</h1>;
  }
  return (
    <div className="">
      {data.todosProductos.map((producto) => (
        <Tabla key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

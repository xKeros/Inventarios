import { createConnection } from "typeorm";
import { Productos } from "./Entitys/Productos";

export const conexion_db = async () => {
  await createConnection({
    type: "mysql",
    username: "root",
    password: "",
    port: 3306,
    host: "localhost",
    database: "Inventarios",
    entities: [Productos],
    synchronize: false,
    ssl: false,
  });
  console.log("Conexion exitosa🗃️");
};

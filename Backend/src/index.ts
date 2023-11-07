import app from "./app";
import { conexion_db } from "./db";

async function main() {
  try {
    await conexion_db();
    app.listen(3000);
    console.log("🚀 server on port http://localhost:3000/graphql 🚀");
  } catch (error) {
    console.log(`Error en el servido => ${error}`);
  }
}

main();

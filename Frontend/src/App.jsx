// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "./Pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider,  } from '@apollo/client';
import { ListaInventarios } from "./Pages/ListaInventarios";
import { Crear_Producto } from "./Components/Crear_Producto";
import Scanner from "./Components/Scanner";

const conexion = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={conexion}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Scanner />}/>
            <Route path="/lista" element={<ListaInventarios />} />
            <Route path="/crear" element={<Crear_Producto />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;

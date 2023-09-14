import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from './Componentes/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Paginas/Inicio";
import "./App.css";
import ResultadosBusquedaPage from "./Paginas/ResultadosBusqueda";
import DetalleDeUnaPelicula from "./Paginas/DetallePelicula";


function App() {
  return (
   <Routes>
    <Route element={<HomePage/>} path="/" />
    <Route element={<ResultadosBusquedaPage/>} path="/busqueda/:clave" />
    <Route element={<DetalleDeUnaPelicula/>} path="/detallepelicula/id" />
    <Route element={<h1>Nosotros</h1>} path="/nosotros" />
   </Routes>
  );
}

export default App;

import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from './Componentes/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Paginas/Inicio";
import "./App.css";
import ResultadosBusquedaPage from "./Paginas/ResultadosBusqueda";
import DetalleDeUnaPelicula from "./Paginas/DetallePelicula";
import PeliculasPopulares from "./Paginas/PeliculasPopulares";
import Favoritos from "./Paginas/Favoritos";
import Error from "./Componentes/Error/Error";


function App() {
  return (
   <Routes>
    <Route element={<HomePage/>} path="/" />
    <Route element={<ResultadosBusquedaPage/>} path="/busqueda/:clave" />
    <Route element={<DetalleDeUnaPelicula/>} path="/detallepelicula/id" />
    <Route element={<PeliculasPopulares/>} path="/PeliculasPopulares"/>
    <Route element={<Favoritos/>} path="/Favoritos"/>
    <Route element={<h1>Nosotros</h1>} path="/nosotros" />
    <Route component={<Error/>} path="" />
   </Routes>
  );
}

export default App;

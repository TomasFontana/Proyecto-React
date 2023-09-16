import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from './Componentes/Footer/Footer';
import { Route, Switch } from "react-router-dom";
//import HomePage from "./Paginas/Inicio";
import "./App.css";
import DetallePelicula from "./Paginas/Detalles/DetallePelicula";
import Favoritos from "./Paginas/Favoritos/Favoritos";
import Error from "./Componentes/Error/Error";
import Inicio from "./Paginas/Inicio/Inicio";
import VerMasSeries from "./Paginas/VerMasSeries/VerMasSeries";
import VerMasPeliculas from "./Paginas/VerMasPeliculas/VerMasPeliculas";
import DetalleSerie from "./Paginas/Detalles/DetalleSerie";


function App() {
  return (
   <Switch>
    <Route component={Inicio} path="/" exact/>
    <Route component={Favoritos} path="/Favoritos"/>
    <Route component={VerMasSeries} path="/SeriesTodas"/>
    <Route component={VerMasPeliculas} path="/PeliculasTodas"/>
    <Route component={DetallePelicula} path="/detallePelicula/id/:id" />
    <Route component={DetalleSerie} path="/detalleSerie/id/:id" />
    <Route component={Error} path="" />
   </Switch>
  );
}

export default App;

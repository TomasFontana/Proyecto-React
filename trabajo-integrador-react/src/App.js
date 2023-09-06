import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from './Componentes/Footer/Footer';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Paginas/Inicio";
import "./App.css";



function App() {
  return (
   <Routes>
    <Route element={<HomePage/>} path="/" />
    <Route element={<h1>Nosotros</h1>} path="/nosotros" />
   </Routes>
  );
}

export default App;

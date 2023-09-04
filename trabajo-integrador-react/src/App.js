import React from "react";

import Navbar from "./Componentes/Navbar/Navbar";

import Footer from './Componentes/Footer/Footer';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* componente header como nav */}
      <Navbar />
      {/* Contenido principal de tu aplicación */}
      <h1>Mi Aplicación React</h1>
      {/* Agrega el componente Footer al final de la aplicación */}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import "./navbar.css";


function Navbar (){
    return (
        <nav>
            <ul className="main-nav">
               <li><Link to="/">Inicio</Link></li>
               <li><Link to="/favoritos">Favoritos</Link></li>
               <li><Link to="/peliculasPopulares">Peliculas populares</Link></li>
               <li><Link to="/PeliculasCartel">Cartelera</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar
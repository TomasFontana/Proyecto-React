import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar (){
    return (

        <nav>
             <div className="Logo">
            <Link to='/'> <img src="/img/logo.png" alt="Logo"/></Link>
            </div>
            <ul className="main-nav">
               <li><Link to="/">Inicio</Link></li>
               <li><Link to="/favoritos">Favoritos</Link></li>
               <li><Link to="/PeliculasTodas">Peliculas</Link></li>
               <li><Link to="/SeriesTodas">Series</Link></li>            
            </ul>

        </nav>
    )
}

export default Navbar
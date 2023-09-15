import React, { Component } from "react";
import { useEffect, useState } from "react"
import TarjetaDetallePelicula from "../Componentes/DetallePelicula/TarjetaDetallePelicula"
import { Form, useNavigate, useRoutes } from "react-router-dom"


class DetallePelicula extends Component{

    constructor(){
        super();
        this.state = {
            peliculas : [],
        }
    }

    componentDidMount(){

        fetch("https://api.themoviedb.org/3/movie/changes")
        
    }



}

export default DetallePelicula; 






// const DetallePelicula = () => {
//     const [peliculasPopulares, setpeliculasPopulares] = useState([])
//     useEffect(function () {
//         const cargarDatos = async () => {
//             const response = await fetch('https://api.themoviedb.org/3/movie/changes')
//             const resultado = await response.json()
            
//             setpeliculasPopulares(resultado.results.id)
//         }
//         cargarDatos().then()
//     }, [])


//     return (
//         <main>

//             <section className="lista-cartelera">
//                 <h2 className="h2-titulos">Popular movies</h2>

//                 {peliculasPopulares.map(pelicula => (<TarjetaDetallePelicula key={pelicula.id} pelicula={pelicula} />))}

//             </section>
//         </main>
//     )

// }

// export default DetallePelicula

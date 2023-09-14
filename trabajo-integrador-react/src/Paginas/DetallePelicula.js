import { useEffect, useState } from "react"
import TarjetaDetallePelicula from "../Componentes/DetallePelicula/TarjetaDetallePelicula"
import { Form, useNavigate, useRoutes } from "react-router-dom"

const DetalleDeUnaPelicula = () => {
    const [peliculasPopulares, setpeliculasPopulares] = useState([])
    useEffect(function () {
        const cargarDatos = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            const resultado = await response.json()
            
            setpeliculasPopulares(resultado.results.id)
        }
        cargarDatos().then()
    }, [])


    return (
        <main>

            <section className="lista-cartelera">
                <h2 className="h2-titulos">Popular movies</h2>

                {peliculasPopulares.map(pelicula => (<TarjetaDetallePelicula key={pelicula.id} pelicula={pelicula} />))}

            </section>
        </main>
    )

}

export default DetalleDeUnaPelicula

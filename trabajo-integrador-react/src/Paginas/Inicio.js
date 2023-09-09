import { useEffect, useState } from "react"
import ItemListPeliculaPopular from "../Componentes/ItemListPeliculaPopular/ItemListPeliculaPopular"
import ItemListSeriePopular from "../Componentes/ItemListSeriePopular/ItemListSeriePopular"

const HomePage = () => {
    const [peliculasPopulares, setpeliculasPopulares] = useState([])
    const [seriesPopulares, setseriesPopulares] = useState([])
    useEffect(function () {
        const cargarDatos = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            const resultado = await response.json()

            setpeliculasPopulares(resultado.results.slice(0, 5))

            //cargar series populares
            const responseSeriesPopulares = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            const resultadoSeriesPopulares = await responseSeriesPopulares.json()

            setseriesPopulares(resultadoSeriesPopulares.results.slice(0, 5))
        } //await es para esperar la promesa fetch
        cargarDatos().then()
    }, [])
    return (
        <main>
            <section className="lista-cartelera-series">
                <h2 className="h2-titulos">Popular series</h2>
                {seriesPopulares.map(serie => (<ItemListSeriePopular key={serie.id} serie={serie} />))}
            </section>

            <section className="lista-cartelera">
                <h2 className="h2-titulos">Popular movies</h2>

                {peliculasPopulares.map(pelicula => (<ItemListPeliculaPopular key={pelicula.id} pelicula={pelicula} />))}

            </section>
        </main>
    )
}

export default HomePage
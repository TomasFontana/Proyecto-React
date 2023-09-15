import { useEffect, useState } from "react"
import ItemListPeliculaPopular from "../Componentes/ItemListPeliculaPopular/ItemListPeliculaPopular"
import ItemListSeriePopular from "../Componentes/ItemListSeriePopular/ItemListSeriePopular"
import { Form, useNavigate, useRoutes } from "react-router-dom"


const PeliculasPopulares = () => {
    const [peliculasPopulares, setpeliculasPopulares] = useState([])
    const [seriesPopulares, setseriesPopulares] = useState([])
    useEffect(function () {
        const cargarDatos = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            const resultado = await response.json()

            setpeliculasPopulares(resultado.results.slice(0, 14))

            //cargar series populares
            const responseSeriesPopulares = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            const resultadoSeriesPopulares = await responseSeriesPopulares.json()

            setseriesPopulares(resultadoSeriesPopulares.results.slice(0, 5))
        } //await es para esperar la promesa fetch
        cargarDatos().then()
    }, [])
    const [busqueda, setbusqueda] = useState("")
    const navigate = useNavigate()
    const handleOnSearchForm = (event) => {
event.preventDefault()
navigate("/busqueda/" + busqueda)
    }
    return (
        <main>
            <nav>
                <form onSubmit={handleOnSearchForm}>
                    <input type="search" name="busqueda" placeholder="busca peliculas o series" onChange={(event)=>{setbusqueda(event.target.value.toLowerCase()); console.log(event.target.value)}}></input>
                    <button type="submit">buscar</button>
                </form>
            </nav>


            <section className="lista-cartelera">
                <h2 className="h2-titulos">Peliculas Populares</h2>

                {peliculasPopulares.map(pelicula => (<ItemListPeliculaPopular key={pelicula.id} pelicula={pelicula} />))}

            </section>
        </main>
    )
}

export default PeliculasPopulares



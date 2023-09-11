import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import ItemListBusqueda from "../Componentes/ItemListBusqueda/ItemListBusqueda"
import "../Componentes/ItemListBusqueda/ItemListBusqueda.css"

const ResultadosBusquedaPage = () => {
    const params = useParams()
    const [resultadospeliculas, setresultadospeliculas] = useState([])
    const [resultadosseries, setresultadosseries] = useState([])
    useEffect(()=>{
        const buscarenapi = async()=>{
            const consulta = params.clave.replace(" ", "+")
            const resultadospeliculas = await fetch(`https://api.themoviedb.org/3/search/movie?query=${consulta}&api_key=1caaa22005845643c0863fd9677bc21c`)
            const resultadosseries = await fetch(`https://api.themoviedb.org/3/search/tv?query=${consulta}&api_key=1caaa22005845643c0863fd9677bc21c`)
const dataResultadosPelicula = await resultadospeliculas.json()
const dataResultadosSeries = await resultadosseries.json()
console.log("peliculas: ", dataResultadosPelicula)
setresultadospeliculas(dataResultadosPelicula.results.slice(10).map(p => ({
    id: p.id,
    nombre: p.original_title,
    descripcion: p.overview,
    img:  p.poster_path,
    categoria: "movie"
})))
setresultadosseries(dataResultadosSeries.results.slice(10).map(s => ({
    id: s.id,
    nombre: s.original_name,
    descripcion: s.overview,
    img: s.poster_path,
    categoria: "serie"
})))
console.log("series: ", dataResultadosSeries)
        }
        buscarenapi().then()
    },[])
    return(
        <main>
            <section className="lista-cartelera-series">
                <h2 className="h2-titulos">"{params.clave}" series</h2>
                <div className="container-busqueda">
                {resultadosseries.map(serie => (<ItemListBusqueda key={serie.id} item={serie} />))}
                </div>
            </section>

            <section className="lista-cartelera">
                <h2 className="h2-titulos">"{params.clave}" movies</h2>
                <div className="container-busqueda">
                {resultadospeliculas.map(pelicula => (<ItemListBusqueda key={pelicula.id} item={pelicula} />))}
                </div>

            </section>
        </main>
    )
}

export default ResultadosBusquedaPage
import { useState } from "react"
import AgregarFavoritos from "../AgregarFavoritos/AgregarFavoritos"

const ItemListPeliculaPopular = (props) => {
    const [esVisible, setesVisible] = useState (false) //variable que se usa en la vista que muestra o oculta contenido
    const alternarVisibilidad = () => {
        setesVisible(!esVisible)
    }
    return(
        <article className="listados">
            <div>
            <a href={`detail-movie.html?id=${props.pelicula.id}`}>
                <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${props.pelicula.poster_path}`}alt={`${props.pelicula.title}`}/>
                </a>
            </div>

        <h3 className="titulos-peliculas"><a href={`detail-movie.html?id=${props.pelicula.id}`} className="a-titulo">{props.pelicula.title}</a></h3>
        <button onClick={alternarVisibilidad}>Ver Mas</button>
        {esVisible && (
            <div>
                <p className="generos-texto">{props.pelicula.overview}</p>
            </div>
        )}
        <p className="generos-texto"><a href={`detail-movie.html?id=${props.pelicula.id}`} className="a-titulo"> Ir a Detalle </a> </p>

        <AgregarFavoritos categoria="movie" id={props.pelicula.id}/>

    </article>
    )
}

export default ItemListPeliculaPopular
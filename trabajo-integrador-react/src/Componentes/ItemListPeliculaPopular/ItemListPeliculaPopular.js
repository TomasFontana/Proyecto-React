const ItemListPeliculaPopular = (props) => {
    return(
        <article className="listados">
            <div>
            <a href={`detail-movie.html?id=${props.pelicula.id}`}>
                <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${props.pelicula.poster_path}`}alt={`${props.pelicula.title}`}/>
                </a>
            </div>

        <h3 className="titulos-peliculas"><a href={`detail-movie.html?id=${props.pelicula.id}`} className="a-titulo">{props.pelicula.title}</a></h3>
        <p className="generos-texto"><a href={`detail-movie.html?id=${props.pelicula.id}`} className="a-titulo">{props.pelicula.release_date}</a></p>
        <p className="generos-texto"><a href={`detail-movie.html?id=${props.pelicula.id}`} className="a-titulo"> See more ✓ </a> </p>


    </article>
    )
}

export default ItemListPeliculaPopular
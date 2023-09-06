import {useState} from "react";

const ItemListSeriePopular = (props) => {
    const [mostrarDetalle, setmostrarDetalle] = useState (false)
    return(
<article className="listados">
        <div>
        <a href={`detail-serie.html?id=${props.serie.id}`}>
            <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${props.serie.poster_path}`}alt={`${props.serie.name}`}/>
        </a>
            </div>
        <h3 className="titulos-peliculas"><a href={`detail-serie.html?id=${props.serie.id}`} className="a-titulo">{props.serie.name}</a></h3>
    <button onClick={()=>{setmostrarDetalle(!mostrarDetalle)}} >Mostrar/Ocultar Detalle</button>
    {mostrarDetalle && (
        <div>
            <p className="generos-texto"><a href={`detail-serie.html?id=${props.serie.id}`} className="a-titulo">{props.serie.overview}</a></p>
        </div>
    )}

    <p className="generos-texto"><a href={`detail-serie.html?id=${props.serie.id}`} className="a-titulo"> See more ✓ </a></p>


</article>
    )
}

export default ItemListSeriePopular
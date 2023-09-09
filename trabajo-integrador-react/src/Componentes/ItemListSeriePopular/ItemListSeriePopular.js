import {useState} from "react";
import AgregarFavoritos from "../AgregarFavoritos/AgregarFavoritos";
const ItemListSeriePopular = (props) => {
    const [esVisible, setesVisible] = useState (false)
    return(
<article className="listados">
        <div>
        <a href={`detail-serie.html?id=${props.serie.id}`}>
            <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${props.serie.poster_path}`}alt={`${props.serie.name}`}/>
        </a>
            </div>
        <h3 className="titulos-peliculas"><a href={`detail-serie.html?id=${props.serie.id}`} className="a-titulo">{props.serie.name}</a></h3>
    <button onClick={()=>{setesVisible(!esVisible)}} >Ver Mas</button>
    {esVisible && (
        <div>
            <p className="generos-texto"><a href={`detail-serie.html?id=${props.serie.id}`} className="a-titulo">{props.serie.overview}</a></p>
        </div>
    )}

    <p className="generos-texto"><a href={`detail-serie.html?id=${props.serie.id}`} className="a-titulo"> Ir a Detalle </a></p>
    
    <AgregarFavoritos categoria="serie" id={props.serie.id}/>

</article>
    )
}

export default ItemListSeriePopular
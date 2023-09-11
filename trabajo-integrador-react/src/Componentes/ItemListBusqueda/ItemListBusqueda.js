import {useState} from "react"
import AgregarFavoritos from "../AgregarFavoritos/AgregarFavoritos"


const ItemListBusqueda = (props) => {
    const [esVisible, setesVisible] = useState (false) //variable que se usa en la vista que muestra o oculta contenido
    const alternarVisibilidad = () => {
        setesVisible(!esVisible)
    }
    return (
<article className="listados">
            <div>
            <a href={`detail-movie.html?id=${props.item.id}`}>
                <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${props.item.img}`}alt={`${props.item.nombre}`}/>
                </a>
            </div>

        <h3 className="titulos-peliculas"><a href={`detail-movie.html?id=${props.item.id}`} className="a-titulo">{props.item.nombre}</a></h3>
        <button onClick={alternarVisibilidad}>Ver Mas</button>
        {esVisible && (
            <div>
                <p className="generos-texto">{props.item.descripcion}</p>
            </div>
        )}
        <p className="generos-texto"><a href={`detail-movie.html?id=${props.item.id}`} className="a-titulo"> Ir a Detalle </a> </p>

        <AgregarFavoritos categoria={props.item.categoria} id={props.item.id}/>

    </article>
    )
}
export default ItemListBusqueda
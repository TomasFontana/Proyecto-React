import { useEffect, useState } from "react"
import { json } from "react-router-dom"

const AgregarFavoritos = (props) => {
    const { categoria, id } = props
    const [peliculas, setpeliculas] = useState(JSON.parse(localStorage.getItem("peliculas-favoritos")) ?? []) //si el json es undefined, reemplazame con el valor dentro del array "nada"
    const [series, setseries] = useState(JSON.parse(localStorage.getItem("series-favoritos")) ?? [])
    const [estaenlista, setestaenlista] = useState(false)
    useEffect(function () {
        if (peliculas.filter(idfavorito => idfavorito === id).length || series.filter(idfavorito => idfavorito === id).length){
            setestaenlista(true)
        } //idfavorito seria los elementos del array de peliculas, y aca estamos indicando el id con idfavorito. se filtrarian las coincidencias del pedido (id)
    else{
        setestaenlista(false)
    }
    },[])
    const handleOnClick = () => {
        if(estaenlista){
            eliminardefavoritos(categoria,id)
            console.log("entro en eliminar")
        }
        else{
            agregarafavoritos(categoria,id)
        }
    }
    const agregarafavoritos = (categoria,id)=>{
        if (!categoria) {
            return alert("Categoria no existe")
        }
        if (categoria === "movie") {
            console.log(peliculas)
            peliculas.push(id)
            localStorage.setItem("peliculas-favoritos", JSON.stringify(peliculas))
            setestaenlista(true)
            return
        }
        if (categoria === "serie") {
            console.log(series)
            series.push(id)
            localStorage.setItem("series-favoritos", JSON.stringify(series))
            setestaenlista(true)
            return
        }
    }
    const eliminardefavoritos = (categoria,id)=>{
        switch(categoria){
            case "movie":
                setpeliculas(peliculas.filter(idfavorito =>idfavorito !== id))
                console.log(peliculas)
                localStorage.setItem("peliculas-favoritos",JSON.stringify(peliculas))
                setestaenlista(false)
                break
                case"serie":
                setseries(series.filter(idfavorito => idfavorito !== id))
                localStorage.setItem("series-favoritos",JSON.stringify(series))
                setestaenlista(false)
                break
                default:
                    alert("Categoria incorrecta")
        }
    }
    return (
        <button onClick={handleOnClick}><span>{estaenlista?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</span></button>
    )
}

export default AgregarFavoritos
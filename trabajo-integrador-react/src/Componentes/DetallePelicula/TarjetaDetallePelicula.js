import React, { Component } from 'react';


class DetallePelicula extends Component {

    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Agregar a favoritos",
            favoritos: []

        }
    }


    //en que metodo un componente puede controlar algo apenas despues de renderizado -->didMount

    componentDidMount(){
        let arrayFavoritos = [];

        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

            if(arrayFavoritos.includes(this.props.peliculas.id)){
                this.setState({
                    textoBoton: 'Quitar de favoritos'
                })
            }
        }
    }

    agregarAFavoritos(id){
        //Agregar un id dentro de un array y colocar ese array en localstorage
        let arrayFavoritos = []
        arrayFavoritos.push(id)

        //Subirlo a local storage  strigifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritosAString)

        this.setState({
            textoBoton: "Quitar de favoritos"
        })
    }

    render(){
        return(
            <article className="listados">
             <div>
             <a href={`detail-movie.html?id=${this.props.pelicula.id}`}>
                 <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${this.props.pelicula.poster_path}`}alt={`${this.props.pelicula.title}`}/>
                 </a>
             </div>

            <h3 className="titulos-peliculas"><a href={`detail-movie.html?id=${this.props.pelicula.id}`} className="a-titulo">{this.props.pelicula.title}</a></h3>
            <button onClick={alternarVisibilidad}>Ver Mas</button>
            {esVisible && (
             <div>
                 <p className="generos-texto">{this.props.pelicula.overview}</p>
             </div>
            )  }

            <p>{this.props.pelicula.rating}</p>
            <p>{this.props.pelicula.fechadeestreno}</p>
            <p>{this.props.pelicula.duracion}</p>
            <p>{this.props.pelicula.sinopsis}</p>
            <p>{this.props.pelicula.genero}</p>


            <button onClick={()=>this.agregarAFavoritos(this.props.pelicula.id)} type="button">{ this.state.textoBoton }</button>

            </article>
        )
    }
}



// const TarjetaDetallePelicula = (props) => {
//     const [esVisible, setesVisible] = useState (false) //variable que se usa en la vista que muestra o oculta contenido
//     const alternarVisibilidad = () => {
//         setesVisible(!esVisible)
//     }
//     return (
//         <article className="listados">
//             <div>
//             <a href={`detail-movie.html?id=${props.pelicula.id}`}>
//                 <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${props.pelicula.poster_path}`}alt={`${props.pelicula.title}`}/>
//                 </a>
//             </div>

//         <h3 className="titulos-peliculas"><a href={`detail-movie.html?id=${props.pelicula.id}`} className="a-titulo">{props.pelicula.title}</a></h3>
//         <button onClick={alternarVisibilidad}>Ver Mas</button>
//         {esVisible && (
//             <div>
//                 <p className="generos-texto">{props.pelicula.overview}</p>
//             </div>
//         )}

//         <p>{props.pelicula.rating}</p>
//         <p>{props.pelicula.fechadeestreno}</p>
//         <p>{props.pelicula.duracion}</p>
//         <p>{props.pelicula.sinopsis}</p>
//         <p>{props.pelicula.genero}</p>


//         <AgregarFavoritos categoria="movie" id={props.pelicula.id}/>

//     </article>
//     )
// }

// export default TarjetaDetallePelicula;
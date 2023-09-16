// import React, { Component } from 'react';


// class TarjetaDetallePelicula extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             textoBoton: "Agregar a favoritos",
//             favoritos: []

//         }
//     }


//     //en que metodo un componente puede controlar algo apenas despues de renderizado -->didMount

//     componentDidMount(){
//         let arrayFavoritos = [];

//         let recuperoStorage = localStorage.getItem('favoritos')

//         if(recuperoStorage !== null){
//             arrayFavoritos = JSON.parse(recuperoStorage);

//             if(arrayFavoritos.includes(this.props.peliculas.id)){
//                 this.setState({
//                     textoBoton: 'Quitar de favoritos'
//                 })
//             }
//         }
//     }

//     agregarAFavoritos(id){
//         //Agregar un id dentro de un array y colocar ese array en localstorage
//         let arrayFavoritos = []
//         let recuperoStorage = localStorage.getItem('favoritos');

//         if(recuperoStorage !== null){
//             arrayFavoritos = JSON.parse(recuperoStorage);
//         }

//         if(arrayFavoritos.includes(this.props.peliculas.id)){
//             //Si el id esta en el array, queremos sacar el id

//             arrayFavoritos = arrayFavoritos.filter(unId => unId !== this.props.peliculas.id);
//             this.setState =({
//                 textoBoton: "Agregar a favoritos"
//             })

//         } else {
//             arrayFavoritos.push(id);

//             this.setState({
//                 textoBoton: "Quitar de favoritos"
//             })
//         }

//         //Subirlo a local storage  strigifeado
//         let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
//         localStorage.setItem('favoritos', arrayFavoritosAString)
//     }

//     render(){
//         return(
//             <article className="listados">
//              <div>
//              <a href={`detail-movie.html?id=${this.props.pelicula.id}`}>
//                  <img className="portadas"src={`https://image.tmdb.org/t/p/w342/${this.props.pelicula.poster_path}`}alt={`${this.props.pelicula.title}`}/>
//                  </a>
//              </div>

//             <h3 className="titulos-peliculas"><a href={`detail-movie.html?id=${this.props.pelicula.id}`} className="a-titulo">{this.props.pelicula.title}</a></h3>
//             <button>Ver Mas</button>
//              <div>
//                  <p className="generos-texto">{this.props.pelicula.overview}</p>
//              </div>

//             <p>{this.props.pelicula.rating}</p>
//             <p>{this.props.pelicula.fechadeestreno}</p>
//             <p>{this.props.pelicula.duracion}</p>
//             <p>{this.props.pelicula.sinopsis}</p>
//             <p>{this.props.pelicula.genero}</p>


//             <button onClick={()=>this.agregarAFavoritos(this.props.pelicula.id)} type="button">{ this.state.textoBoton }</button>

//             </article>
//         )
//     }
// }

// export default TarjetaDetallePelicula;

        // let arrayFavoritos = []
        // let recuperoStorage = localStorage.getItem('favoritos');

        // if(recuperoStorage !== null){
        //     arrayFavoritos = JSON.parse(recuperoStorage);
        // }

        //Te vas a otra pagina y haces esto mismo, le preguntas si hay algo y si hay algo lo parseas y lo traes al lugar y despues lo recorres
        //en ese caso, cuando tenga q mostrarlo, vamos a usar un map porque te va a quedar un array con muchos id, que por cada id le pegue al endpoint de datos. 
        // a dentro del map vamos a tener un fetch que vaya haciendo consultas


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
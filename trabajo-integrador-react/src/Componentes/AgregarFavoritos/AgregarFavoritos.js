// import { useEffect, useState } from "react";
// import "./AgregarFavoritos.css";

// const AgregarFavoritos = (props) => {
//   // atrubutos que debe recibir mi componente  
//   const { categoria, id } = props; 
//   const [estaenlista, setestaenlista] = useState(false);

//   useEffect(function () {
//     const favoritos = obtenerListaFavoritos()
    
//     if(categoria && id){
//       if(favoritos.filter(favoritoEnLista => favoritoEnLista.id === id ).length){
//         setestaenlista(true)
//       }else {
//         setestaenlista(false)
//       }
//     }
//   }, []);
  
//   const handleOnClick = () => {
//     const favorito = {categoria, id}
//     if(estaenlista){
//       eliminarEnListaFavoritos(favorito)
//       setestaenlista(false)
//     }else {
//       agregarAlistaFavoritos(favorito)
//       setestaenlista(true)
//     }
//   };
  
//   function obtenerListaFavoritos() {
//     return JSON.parse(localStorage.getItem('favoritos')) ?? []
//   }

//   function agregarAlistaFavoritos(favorito) {
//     let favoritos = obtenerListaFavoritos()
//     favoritos.push(favorito)
//     localStorage.setItem('favoritos', JSON.stringify(favoritos))
//   }

//   function eliminarEnListaFavoritos(favorito){
//     let favoritos = obtenerListaFavoritos()
//     favoritos = favoritos.filter(favoritoEnLista => favoritoEnLista.id !== favorito.id)
//     localStorage.setItem('favoritos', JSON.stringify(favoritos))
//   }
   
//   return (
//     <button className="agregarFavoritos-container" onClick={handleOnClick}>
//       <span className="agregarFavoritos-item">
//         {estaenlista ? (
//           <i className="fa-solid fa-heart"></i>
//         ) : (
//           <i className="fa-regular fa-heart"></i>
//         )}
//       </span>
//     </button>
//   );
// };

// export default AgregarFavoritos;

//Chequear que las peliculas sean un componente con estado 

//Agregar un boton de favs
//tiene que cambiar cuando este o no en el array 
// Evento(onClick) y un metodo, uno o mas metodos
//DidMount chequear si la pelicula esta o no en el array 

//recuperar datos del array y mostrarlo en una pagina de Favoritos

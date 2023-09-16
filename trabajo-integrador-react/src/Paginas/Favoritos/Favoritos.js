
import React, { Component } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';


class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props,  
            peliculas: [], 
            borrarFavorito: [], 
            loader: true  
        };
    };

    componentDidMount() {
        
        let recuperoLocalStorage = localStorage.getItem('favoritos');
        let storageAlArray; 
       
        if (recuperoLocalStorage !== null) {
            storageAlArray = JSON.parse(recuperoLocalStorage); 
            let peliculas = []    
            for(let i = 0; i < storageAlArray.length; i++){
                if(storageAlArray[i] !== null){
                     
                    fetch(`https://api.themoviedb.org/3/movie/${storageAlArray[i]}?api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
                    
                    .then(res => res.json())
                    .then(data => {
                        peliculas.push(data)
                        this.setState({
                            peliculas: peliculas, 
                            loader: false  
                        });
                    })
                    .catch(err => console.log(err))
                }
            }            
        };
 
        if (JSON.parse(recuperoLocalStorage).length === 0){
            this.setState({
                loader: false  
            })
        }
    }
    
    borrarFavorito(id){ 
        let recuperoLocalStorage = localStorage.getItem('favoritos');
        let storageAlArray = JSON.parse(recuperoLocalStorage);
        let borrarFav = storageAlArray.indexOf(id);
        storageAlArray.splice(borrarFav, 1);
    
        let favoritosAlString = JSON.stringify(storageAlArray);
        localStorage.setItem('favoritos', favoritosAlString);
    }
    render() {
        console.log(this.state.peliculas)
        return (
            <main>
                {this.state.loader === true ?
                    <img src='../../images/loader.gif' alt="Loader" /> :
                    <React.Fragment>
                        <h2 className="titulo">Mis Favoritos</h2>
                        <section className='contenedorTarjeta'>
                            {this.state.peliculas.length > 0 ?
                                this.state.peliculas.map((unaPelicula, idx) =>
                                    <article className='pelicula-tarjeta' key={idx}>
                                        <Link to={`/detallePelicula/id/${unaPelicula.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${unaPelicula.poster_path}`} alt="" />
                                        </Link>
                                        <div className='tarjeta-fav'>
                                        <h2>{unaPelicula.title}</h2> {/* Nombre */}
                                        <i className="fa-solid fa-heart" onClick={() => {
                                            this.state.borrarFavorito.push(unaPelicula.id);
                                            this.setState({
                                                peliculas: this.state.peliculas.filter(pelicula =>
                                                    !this.state.borrarFavorito.includes(pelicula.id)
                                                )
                                            });
                                            this.borrarFavorito(unaPelicula.id)
                                        }}
                                        ></i>
                                        </div>
                                        <Link to={`/detallePelicula/id/${unaPelicula.id}`}>
                                            <p className='verDetalles'> Ver detalles </p>
                                        </Link>
                                        <p className='mas'>Ver más</p>
                                    </article>
                                ):
                                <h3>No hay Favoritos</h3>
                            }
                        </section>
                    </React.Fragment>}
            </main>
        )
    }
}

export default Favoritos;
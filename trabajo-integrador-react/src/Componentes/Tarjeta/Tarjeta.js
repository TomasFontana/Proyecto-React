import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tarjeta.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mas: false,
            iconoFav: 'fa-regular fa-heart'
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray;
        };

        if(favoritos.includes(this.props.datosPelicula.id)){
            this.setState({
                iconoFav: 'fa-solid fa-heart'
            });
        } 
    }

    modificarFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        };

        if(favoritos.includes(id)){
            let sacarFav = favoritos.indexOf(id);
            favoritos.splice(sacarFav, 1);

            this.setState({
                iconoFav: 'fa-regular fa-heart'
            });
        } else {
            favoritos.push(id);
            this.setState({
                iconoFav: 'fa-solid fa-heart'
            })
        }

        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);
    }

    verMas(){
        this.state.mas === false ?
        this.setState({
            mas: true
        })
        :
        this.setState({
            mas: false
        })
    }

    render() {
        return (
            <article className='movie-card'>

                <Link to={`/detallePelicula/id/${this.props.datosPelicula.id}`}>
                    {/*  poster.path es la ruta de la imagen */}
                    <img alt={`Foto de ${this.props.datosPelicula.title}`} src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} />
                </Link>

                <div className='card-favdiv'>
                    {/* Nombre */}
                <h2>{this.props.datosPelicula.title}</h2> 

                {/*  Metodo para agregar a favoritos */}
                <i className={this.state.iconoFav} onClick={() => this.modificarFavoritos(this.props.datosPelicula.id)}></i>
                </div>
                    {/* La etiqueta link es para que cuando se haga click en el titulo "Go to Deatils" de la pelicula se vaya a la pagina de detalle */}
                    <Link to={`/detallePelicula/id/${this.props.datosPelicula.id}`}>
                        <p>Ir a Detalle</p>
                    </Link>
                    
                {this.state.mas === true ?
                    <React.Fragment>
                        <p>{this.props.datosPelicula.overview}</p>
                        <p className='mas' onClick={() => this.verMas()}>Ver Menos</p>
                    </React.Fragment>
                    :
                    <p className='mas' onClick={() => this.verMas()}>Ver mas</p>
                }

            </article>

        )
    }

}

export default Card
import React, { Component } from "react";
import './Detalle.css'

class DetallePelicula extends Component{

    constructor(props){
        super(props);
        this.state = {
            pelicula : undefined,
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log('id', id);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
        .then(response => response.json().then (data => {
            this.setState({
            pelicula: data
        })
        console.log('data', data);
    }))
        .catch(error => console.log(error))
        
    }

    render(){
        return(
            <div>
                {this.state.pelicula? (
                    <div style={{color: 'white'}}>
                        {/* SECCION DONDE PONER LOS DETALLES */}
                        <h1>{this.state.pelicula.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt='poster' />
                        <p>Calificación: {this.state.pelicula.vote_average}</p>
                        <p>Fecha de Estreno: {this.state.pelicula.release_date}</p>
                        <p>Duración: {this.state.pelicula.runtime}</p>
                        <p>Sinópsis: {this.state.pelicula.overview}</p>
                        <p>Género: {this.state.pelicula.genres[0].name}</p>
                    </div>
                    )
                : 
                (<div>
                    <p>Cargando...</p>
                    </div>
                )}
            </div>
            

        )
    }

}

export default DetallePelicula; 
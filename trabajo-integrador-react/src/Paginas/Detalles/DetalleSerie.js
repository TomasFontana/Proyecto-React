import React, { Component } from "react";


class DetalleSerie extends Component{

    constructor(props){
        super(props);
        this.state = {
            serie : undefined,
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log('id', id);
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
        .then(response => response.json().then (data => {
            this.setState({
            serie: data
        })
        console.log('data', data);
    }))
        .catch(error => console.log(error))
        
    }

    render(){
        return(
            <div>
                {this.state.serie? (
                    <div style={{color: 'white'}}>
                    <h1>{this.state.serie.original_name}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.state.serie.poster_path}`} alt='poster' />
                    <p>Calificación: {this.state.serie.vote_average}</p>
                    <p>Fecha de estreno: {this.state.serie.release_date}</p>
                    <p>Sinópsis: {this.state.serie.overview}</p>
                    <p>Género: {this.state.serie.genres[0].name}</p>
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

export default DetalleSerie; 
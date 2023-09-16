import React, { Component } from 'react';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta';
import './VerMasPeliculas.css'

class VerMasPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            page: 1,
            popularMovies: [],
            mensaje: '',
            valor: '',
            loader: true,
            moviesInicial: [],
            cargarMas: true
        };
    };

    noSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {

        this.setState({
            valor: event.target.value,
            cargarMas: false
        },() => console.log(event.target.value))

        let peliculasFiltradas = this.state.moviesInicial.filter(pelicula => pelicula.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({
            popularMovies: peliculasFiltradas,
        })

        if(event.target.value === ''){
            this.setState({
                cargarMas: true
            })
        }
    }

    verMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1845c94396255a256363182ed898e8fc&language=en-US=${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState({
                popularMovies: this.state.popularMovies.concat(data.results),
                moviesInicial: this.state.moviesInicial.concat(data.results)
            }))
            .catch(error => console.log(error));
        this.setState({ page: this.state.page + 1 })


    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1845c94396255a256363182ed898e8fc&language=en-US=${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState({
                popularMovies: data.results,
                moviesInicial: data.results,
                page: this.state.page + 1,
                loader: false
            }))
            .catch(error => console.log(error));


    }

    render() {
        return (
            <main>
                <div className="buscador-home">
                    
                    <p>{this.state.mensaje}</p>
                </div>
                {this.state.loader === true ?
                    <img src='../../images/loader.gif' alt="Loader"/> :
                    <React.Fragment>
                        <h2 className='title-home'>Peliculas</h2>

                        <section className='cardContainer'>
                            {this.state.popularMovies.map((unaPelicula, idx) => <Tarjeta key={unaPelicula + idx} datosPelicula={unaPelicula} />)}
                        </section>
                        {this.state.cargarMas === true?
                        <div className='div-vermas'>
                            <button className='load-more' onClick={() => this.verMas()}>Cargar Mas</button>
                        </div>: null}
                    </React.Fragment>
                }
            </main>
        )
    }
}

export default VerMasPeliculas;
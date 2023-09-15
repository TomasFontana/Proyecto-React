import React, { Component } from 'react';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta';
import './inicio.css';
import { Link } from 'react-router-dom';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            peliculas: [],
            valor: '',
            resultadosDeBusqueda: [],
            seriesPopulares: [],
            mensaje: '',
            loader: true
        };
    };

    componentDidMount() {
        //Buscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=1845c94396255a256363182ed898e8fc&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results,
                loader: false
            }))
            .catch(err => console.log(err))


        fetch('https://api.themoviedb.org/3/tv/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState({
                seriesPopulares: data.results,
                loader: false
            }))
            .catch(error => console.log(error));
    }
   
    buscadorDePeliculas(event) {
        event.preventDefault();
        if (this.state.valor === '') {
            this.setState({
                mensaje: 'Formulario incompleto'
            })
        } else {
            
            fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.valor}&api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        resultadosDeBusqueda: data.results
                    });
                    if (data.results.length === 0) {
                        this.setState({
                            mensaje: 'No se han enontrado resultados'
                        })

                    }

                })
                .catch(error => console.log(error))
        }
    }
 
    cambiosBuscador(event) {
        this.setState(
            {
                valor: event.target.value,
                mensaje: '',
                resultadosDeBusqueda: []
            },
            () => console.log(event.target.value));
    }

    render() {
        console.log(localStorage)
        return (
            <main>
                <div className="buscador-inicio">
                    <form onSubmit={(event) => this.buscadorDePeliculas(event)}>
                        <input type="text" placeholder='Buscar contenido ...' onChange={(event) => this.cambiosBuscador(event)} value={this.state.valor} />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    <p>{this.state.mensaje}</p>
                </div>

                {/* La siguiente linea es para mostrar el loader y el resto de la pagina cuando se cargan los datos y la logica de la pagina */}
                {this.state.loader === true ?
                    <img src='../../img/loader.gif' alt="Loader"/>  :
                    <React.Fragment>
                        <section className='ContenedorCarta'>
                        {this.state.resultadosDeBusqueda.slice(0, 10).map((peliculaBuscada, idx) => <Tarjeta key={peliculaBuscada.title + idx} datosPelicula={peliculaBuscada} />)}
                        </section>

                        {/*  Seccion de peliculas populares */}
                        <div className='titulo-vermasall'>
                            <h2 className="title-condiv">Peliculas Populares</h2>
                            <Link to='/populares'>
                                 Ver Todas
                            </Link>
                        </div>
                        <section className='ContenedorCarta'>
                            {
                                this.state.peliculas.slice(0,5).map((pelicula, idx) => <Tarjeta key={pelicula.title + idx} datosPelicula={pelicula} />)
                            }
                        </section >
                        
                        {/* Seccion de peliculas en Estreno */}
                        <div className='titulo-vermasall'>
                            <h2 className="titulo-series">Series Populares</h2>
                            <Link to='/estrenos'>
                                 Ver Todas
                            </Link>
                        </div>

                        <section className='ContenedorCarta'>
                            {this.state.seriesPopulares.slice(0,5).map((elm, idx) => <Tarjeta key={elm.title + idx} datosPelicula={elm} />)}
                        </section>
     
                    </React.Fragment>
                }
            </main>
        )
    }
}

export default Inicio;
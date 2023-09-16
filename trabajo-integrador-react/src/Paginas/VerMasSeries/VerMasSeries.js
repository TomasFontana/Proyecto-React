import React, { Component } from 'react';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta';
import './VerMasSeries.css'

class VerMasSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            page: 1,
            seriesPopulares: [],
            mensaje: '',
            valor: '',
            loader: true,
            arrayInicialSeries: [],
            cargarMas: true
        };
    };

    noSubmit(event) {
        event.preventDefault();
    }

    eventoCambiosBusqueda(event) {

        this.setState({
            valor: event.target.value,
            cargarMas: false
        },() => console.log(event.target.value))

        let seriesFiltradas = this.state.arrayInicialSeries.filter(serie => serie.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({
            seriesPopulares: seriesFiltradas,
        })

        if(event.target.value === ''){
            this.setState({
                cargarMas: true
            })
        }
    }

    VerMasSeries() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US=${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState({
                seriesPopulares: this.state.seriesPopulares.concat(data.results),
                arrayInicialSeries: this.state.arrayInicialSeries.concat(data.results)
            }))
            .catch(error => console.log(error));
        this.setState({ page: this.state.page + 1 })


    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US=${this.state.page}`)
            .then(response => response.json())
            .then(data => this.setState({
                seriesPopulares: data.results,
                arrayInicialSeries: data.results,
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
                        <h2 className='title-home'>Series</h2>

                        <section className='TarjetaContainer'>
                            {this.state.seriesPopulares.map((unaSerie, idx) => <Tarjeta key={unaSerie + idx} datosPelicula={unaSerie} />)}
                        </section>
                        {this.state.cargarMas === true?
                        <div className='div-vermas'>
                            <button className='load-more' onClick={() => this.VerMasSeries()}>Load More</button>
                        </div>: null}
                    </React.Fragment>
                }
            </main>
        )
    }
}

export default VerMasSeries;
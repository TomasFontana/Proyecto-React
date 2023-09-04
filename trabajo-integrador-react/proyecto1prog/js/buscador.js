window.addEventListener("load", function () {

    let queryString = location.search;
    let busqueda = new URLSearchParams(queryString)
    let buscar = busqueda.get('busqueda')


    let url = `https://api.themoviedb.org/3/search/movie?api_key=b8041f10f73b7178ac9637ccbb409920&query=${buscar}`

    fetch(url)
        .then(function (response) {
            return response.json();

        })

        .then(function (data) {
            console.log(data)


            let dataPeliculas = data.results

            let contenido = ``
            for (let i = 0; i < dataPeliculas.length; i++) {
                document.querySelector("#results-movies").innerHTML += `  <article class="listados">
       <a class="titulos-peliculas" href="detail-movie.html?id=${data.results[i].id}">
    <img src="https://image.tmdb.org/t/p/w342/${dataPeliculas[i].poster_path}" alt="${dataPeliculas[i].title}" class="portadas">   
    <h3  class="titulos-peliculas"> ${dataPeliculas[i].title} </h3>
    </a>
    <p class="titulo-resultados"> ${dataPeliculas[i].release_date}</p>
    
    <a href="detail-movie.html?id=${dataPeliculas[i].id}" class="titulo-resultados">Detalle</a>
    
    
    </article>  `

            }
        })
        .catch(function (error) {
            console.log('El error fué: ' + error);
        })




    let url1 = `https://api.themoviedb.org/3/search/tv?api_key=b8041f10f73b7178ac9637ccbb409920&query=${buscar}`

    fetch(url1)
        .then(function (response) {
            return response.json();

        })

        .then(function (data) {
            console.log(data)


            let dataSeries = data.results
            let contenido = ``
            for (let i = 0; i < dataSeries.length; i++) {
                document.querySelector("#results-series").innerHTML += ` <article class="listados">
       <a class="titulos-peliculas" href="detail-serie.html?id=${data.results[i].id}">
       <img src="https://image.tmdb.org/t/p/w342/${dataSeries[i].poster_path}" alt="${dataSeries[i].name}" class="portadas">
       <h3 class="titulos-peliculas"> ${dataSeries[i].name} </h3>
       </a>
       <p class="generos-texto"> ${dataSeries[i].first_air_date}</p>
       <a href="detail-serie.html?id=${dataSeries[i].id}" class="titulo-resultados"> Detalle</a>
    
    
    
       
    </article>  `

            }
        })
        .catch(function (error) {
            console.log('El error fué: ' + error);
        })

       


    document.getElementById("form-busqueda").addEventListener("submit", function (e) {
        e.preventDefault();
        let textoBuscado = document.getElementById("busqueda-text").value;
        let tieneErrores = false;

        if (textoBuscado == "") {
            alert("Debes escribir algo!");
            tieneErrores = true;
        } else if (textoBuscado.length <= 2) {
            tieneErrores = true;
            alert("Debes escribir al menos tres caracteres!");
        }

        if (!tieneErrores) {
            this.submit();
        }

    });


});
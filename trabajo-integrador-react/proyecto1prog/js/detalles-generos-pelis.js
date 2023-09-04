window.addEventListener("load", function () {
    let queryStringObj = new URLSearchParams(location.search);
    let id = queryStringObj.get('id');

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1caaa22005845643c0863fd9677bc21c&language=en-US') //traigo la lista de generos


        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            let contenedor = document.querySelector('main')
            for (let i = 0; i < data.genres.length; i++) {
                if (data.genres[i].id == id) {
                    contenedor.innerHTML = `
                <h1 class="h1-generos">${data.genres[i].name}</h1>
                <section class="lista-cartelera">
                </section>
                
                `
                }
            }
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=1caaa22005845643c0863fd9677bc21c&with_genres=' + id) // busco las peliculas de este genero 

                .then(function (response) {
                    return response.json();
                })


                .then(function (datos) {
                    console.log(datos);
                    let detallesGenerosPelis = document.querySelector('.lista-cartelera')
                    for (let i = 0; i < datos.results.length; i++) {
                        detallesGenerosPelis.innerHTML += `
                <article class="listados">
                <div>
                    <a href="detail-movie.html?id=${datos.results[i].id}">
                        <img class="portadas" src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}">
                    </a>    
                </div>
            
                <h3 class="titulos-peliculas"> <a href="detail-movie.html?id=${datos.results[i].id}" class="a-titulo">${datos.results[i].title}</a></h3>
            
            </article>
                `
                    }
                })
        })
        .catch(function (error) {
            console.log('El error fué: ' + error);
        })
})
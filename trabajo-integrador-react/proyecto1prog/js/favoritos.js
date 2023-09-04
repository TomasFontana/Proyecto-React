// favoritos peliculas
window.addEventListener("load", function () {
    let favPelis = []; //este es mi array de peliculas favoritas
    if (localStorage.getItem("favoritos")) { // pongo la condicion de que si fue creada la lista favoritos 
        let agarroStorage = localStorage.getItem('favoritos'); //guardo datos del storage
        favPelis = JSON.parse(agarroStorage); //transformo el string en formato json a obejto literal
    }
    console.log(favPelis);
    let peliculas = document.querySelector('.section-favoritos-peliculas')
    if (favPelis.length == 0) {
        peliculas.innerHTML += `<h3> No movies in your favorite list </h3>`
    } else {
        for (let i = 0; i < favPelis.length; i++) {
            const id = favPelis[i];

            fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=1caaa22005845643c0863fd9677bc21c')

                .then(function (response) {
                    return response.json();
                })


                .then(function (data) {
                    console.log(data);
                    peliculas.innerHTML += `<article class="listados">
                    <div>
                    <a href="detail-movie.html?id=${data.id}">
                        <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.poster_path}"alt="${data.title}">
                        </a>
                    </div>
        
                <h3 class="titulos-peliculas"><a href="detail-movie.html?id=${data.id}" class="a-titulo">${data.title}</a></h3>
                <p class="generos-texto"><a href="detail-movie.html?id=${data.id}" class="a-titulo">${data.release_date}</a></p>
                <p class="generos-texto"><a href="detail-movie.html?id=${data.id}" class="a-titulo"> See more ✓ </a>
        
        
            </article> `
                })
                .catch(function (error) {
                    console.log('El error fué: ' + error);
                })
        }
    }

    // favoritos series

    let series = document.querySelector('.section-favoritos-series')
    let favSeries = []; //este es mi array de peliculas favoritas
    if (localStorage.getItem("favoritosSeries")) { // pongo la condicion de que si fue creada la lista favoritos 
        let traigoStorage = localStorage.getItem('favoritosSeries'); //guardo datos del storage
        favSeries = JSON.parse(traigoStorage); //transformo el string en formato json a obejto literal
    }
    console.log(favSeries);
    if (favSeries.length == 0) {
        series.innerHTML += `<h3> No Series in your favorite list </h3>`
    } else {
        for (let i = 0; i < favSeries.length; i++) {
            const id = favSeries[i];

            fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=1caaa22005845643c0863fd9677bc21c')

                .then(function (response) {
                    return response.json()
                })

                .then(function (data) {
                    console.log(data);
                    series.innerHTML += `<article class="listados">
                    <div>
                    <a href="detail-serie.html?id=${data.id}">
                        <img class="portadas"src="https://image.tmdb.org/t/p/w342/${data.poster_path}"alt="${data.name}">
                    </img>
                        </div>
            
                    <h3 class="titulos-peliculas"><a href="detail-serie.html?id=${data.id}" class="a-titulo">${data.name}</a></h3>
            
                    <p class="generos-texto"><a href="detail-serie.html?id=${data.id}" class="a-titulo">${data.first_air_date}</a></p>
            
                <p class="generos-texto"><a href="detail-serie.html?id=${data.id}" class="a-titulo"> See more ✓ </a></p>
            
            
            </article> `

                })
                .catch(function (error) {
                    console.log('El error fué: ' + error);
                })
        }
    }
    let eliminar = document.querySelector('.vaciar-favoritos')
    eliminar.addEventListener('click', function () {
        window.localStorage.clear()
    })
})
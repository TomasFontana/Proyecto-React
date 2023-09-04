window.addEventListener("load", function () {
console.log(location.search)
let queryStringObjS = new URLSearchParams(location.search);
let idS = queryStringObjS.get('id');
console.log(idS);

fetch('https://api.themoviedb.org/3/tv/' + idS + '?api_key=1caaa22005845643c0863fd9677bc21c')

    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);
        let infoSeries = document.querySelector('section')
        infoSeries.innerHTML =
            ` <h2 class="h2-titulos">${data.name}</h2>
    
    <div class="section-detail-movie">
        <article class="article-img">
            <img class="imagen-detail-movie" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.name}">
        </article>
        <article class="articulo-detail-movie">
            <ul class="clase-texto-detail-movie">
               <li>Calification: ${data.vote_average}</li>
               <li>Release date: ${data.first_air_date}</li>
                
               <li> 
               <a class="a-li-detail-serie" href="detail-genero-series.html?id=${data.genres[0].id}">  Genre: ${data.genres[0].name} </a> </li>
                
               <li>Synopsis: ${data.overview}</li>
                </ul>
                <h3 class= "texto-boton" ><a class="boton-favoritos">Add to favorites ♥ ♥ ♥</a></h3>


            
        </article>
 </div>`
        // comienza el favoritos de series

        let fav = document.querySelector('.boton-favoritos');
        let favSeries = [];
        let agarroStorage = localStorage.getItem('favoritosSeries');
        if (agarroStorage && agarroStorage != null) {
            favSeries = JSON.parse(agarroStorage);
        }
        console.log(favSeries);

        if (favSeries.includes(idS)) {
            fav.innerHTML = `
    <h3 class= "texto-boton" ><a class="boton-favoritos"> Remove from favorites </a></h3>
    `
        }

        fav.addEventListener('click', function (e) {
            e.preventDefault();

            if (favSeries.includes(idS)) {
                let eliminar = favSeries.indexOf(idS);
                favSeries.splice(eliminar, 1);
                fav.innerHTML = `
        <h3 class= "boton-favoritos" ><a class="texto-boton">Add to favorites ♥ ♥ ♥</a></h3>
        `
            } else {
                favSeries.push(idS);
                fav.innerHTML = `
        <h3 class= "texto-boton" ><a class="boton-favoritos"> Remove from favorites </a></h3>
        `
            }
            let pelisStorage = JSON.stringify(favSeries); //tomo mi objeto literal y lo transformo a un string en json
            localStorage.setItem('favoritosSeries', pelisStorage)
        })
    })
    .catch(function (error) {
        console.log('El error fué: ' + error);
    })

})
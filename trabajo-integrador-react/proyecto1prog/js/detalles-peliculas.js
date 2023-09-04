window.addEventListener("load", function () {
let queryStringObj = new URLSearchParams(location.search);
let id = queryStringObj.get('id');

fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=1caaa22005845643c0863fd9677bc21c')

    .then(function (response) {
        return response.json();
    })


    .then(function (data) {
        console.log(data);
        let infoPeliculas = document.querySelector('section');
        console.log(data.genres[1])
        infoPeliculas.innerHTML =
            ` <h2 class="h2-titulos">${data.title}</h2>
    
   <div class="section-detail-movie">
       <article class="article-img">
           <img class="imagen-detail-movie" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.title}">
       </article>
       <article class="articulo-detail-movie">
           <ul class="clase-texto-detail-movie">
              <li>Calification: ${data.vote_average}</li>
              <li>Release date: ${data.release_date}
              <li>Duration: ${data.runtime} minutes</li>
              <li>
                   <a class="a-li-detail-serie"href="detail-genero-movies.html?id=${data.genres[0].id}">Género: ${data.genres[0].name}</a>
               </li>
              <li>Synopsis: ${data.overview}</li>
            
               </ul>
               <h3 class= "texto-boton" ><a class="boton-favoritos">Add to favorites ♥ ♥ ♥</a></h3>
              
             
       </article> 
   
</div>`

        // comienza la pagina de favoritos de peliculas

        // selecciono el boton
        let favoritos = document.querySelector('.boton-favoritos');
        let favPelis = [];
        let traigoStorage = localStorage.getItem('favoritos');
        if (traigoStorage && traigoStorage != null) {
            favPelis = JSON.parse(traigoStorage); // aca convierto de string en json a objeto literal para poder trabajarlo

        }
        console.log(favPelis);

        if (favPelis.includes(id)) {
            favoritos.innerHTML = `
    <h3 class= "texto-boton" ><a class="boton-favoritos"> Remove from favorites </a></h3>
    `
        } //utilizo includes para saber si lo que busco esta o no dentro del array

        favoritos.addEventListener('click', function (e) {
                e.preventDefault();

                if (favPelis.includes(id)) {
                    let borrar = favPelis.indexOf(id);
                    favPelis.splice(borrar, 1) // borra elementos existentes en el array
                    favoritos.innerHTML = `
        <h3 class= "texto-boton" ><a class="boton-favoritos">Add to favorites ♥ ♥ ♥</a></h3>
        `
                } else {
                    favPelis.push(id)
                    favoritos.innerHTML = `
        <h3 class= "texto-boton" ><a class="boton-favoritos"> Remove from favorites </a></h3>
        `
                }

                let pelisStorage = JSON.stringify(favPelis); //tomo mi objeto literal y lo transformo a un string en json
                localStorage.setItem('favoritos', pelisStorage)



            })
            .catch(function (error) {
                console.log('El error fué: ' + error);
            })
    })

})
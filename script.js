
const container = document.getElementById('container')
const headerImage = document.getElementById('headerImage')
const popular = document.querySelectorAll('.popular')


 popular.forEach(element => {

    element.addEventListener('click', ()=> {
        getMovies(element.value)
    })
})


function getMovies (value, shouldChange){
    fetch(`https://api.themoviedb.org/3/movie/${value}?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c`)
    .then(res => res.json())
    .then(data => {

        let movies = data.results
        let changer = Math.floor(Math.random() * movies.length)
        let randomMovie = movies[changer];


        if(shouldChange == 'true'){
        headerImage.innerHTML = `  
        <div class="header-content">
            <div class="headImg">
               <img src="https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path
                }" alt="${randomMovie.title}">
            </div>
            <div class="header-text">
             <div class="header-title">
                    <h1>${randomMovie.title}</h1>
                </div>
                <div class="header-date">
                    <p>${randomMovie.release_date
                    }</p>
                </div>
                <div class="header-description">
                    <p>${randomMovie.overview}</p>
                </div>
            <div class="header-btns">
                <button><i class="ri-play-fill"></i> Play</button>
                <button><i class="ri-add-line"></i> My List</button>
            </div>
            </div>
        </div>
        `
        }
        container.innerHTML = ''
        movies.forEach(element => { 
            container.innerHTML += `
                <div class="movie">
               <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
                <p class="movie-title">${element.title}</p>
                </div>
            `
        });
        
    })
}


const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


getMovies('popular', 'true')


const container = document.getElementById('container')



function getMovies (){
    fetch('https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c')
    .then(res => res.json())
    .then(data => {
        
        console.log(data.results);
        data.results.forEach(element => {
            container.innerHTML += `
                <div class="movie">
                <img src="./3d-rendering-person-watching-movie-with-popcorn.jpg" alt="">
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

getMovies()
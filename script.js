
const container = document.getElementById('container')
const headerImage = document.getElementById('headerImage')
const popular = document.querySelectorAll('.popular')
const upcoming = document.getElementById('upcoming')
const topRated = document.getElementById('topRated')


//  popular.forEach(element => {

//     element.addEventListener('click', ()=> {
//         getMovies(element.value)
//     })
// })

function getMovies(shouldChange) {
    fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c`)
      .then(res => res.json())
      .then(data => {
        const movies = data.results;
        const changer = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[changer];


        function fourLines(text, maxChars = randomMovie.overview.length) {
            return text.length > maxChars ? text.slice(0, maxChars) + '........' : text;
          }
          
  
        if (shouldChange === 'true') {
          headerImage.innerHTML = `
            <div class="header-content">
                <div class="headImg">
                  <img src="https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path}" alt="${randomMovie.title}">
                </div>
                <div class="header-text">
                    <div class="header-title">
                        <h1>${randomMovie.title}</h1>
                    </div>
                    <div class="header-date">
                        <p>${randomMovie.release_date}</p>
                    </div>
                    <div class="header-description">
                    <p>${window.innerWidth <= 900 ? fourLines(randomMovie.overview, 100) : randomMovie.overview}</p>
                    </div>
                    <div class="header-btns">
                        <button><i class="ri-play-fill"></i> Play</button>
                        <button><i class="ri-add-line"></i> My List</button>
                    </div>
                </div>
            </div>
          `;
        }
  

        // $('.owl-carousel').trigger('destroy.owl.carousel');
        // $('.owl-carousel').html(''); 
  

        movies.forEach(movie => {
          if (movie.poster_path) {
            container.innerHTML += `
              <div class="movie item">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              </div>
            `;
          }else {
            console.log('dddddddddddddddddddddddddddddddddddd');
            
          }
        });
  

        // $('.owl-carousel').owlCarousel({
        //   loop: false,
        //   margin: 10,
        //   responsiveClass: true,
        //   responsive: {
        //     0: { items: 3, nav: true },
        //     600: { items: 3, nav: false },
        //     1000: { items: 5, nav: false }
        //   }
        // });
      });
  }



  function upcomingMovies (){


    fetch(`https://api.themoviedb.org/3/movie/upcoming?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c`)
    .then(res => res.json())
    .then(data => {
        const movies = data.results;



        // $('.owl-carousel').trigger('destroy.owl.carousel');
      

        movies.forEach(movie => {
            if (movie.poster_path) {
              upcoming.innerHTML += `
                <div class="movie item">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>
              `;
            }else {
              console.log('dddddddddddddddddddddddddddddddddddd');
              
            }
          });


        //   $('.owl-carousel').owlCarousel({
        //     loop: false,
        //     margin: 10,
        //     responsiveClass: true,
        //     responsive: {
        //       0: { items: 1, nav: false },
        //       600: { items: 3, nav: false },
        //       1000: { items: 5, nav: false }
        //     }
        //   });

        console.log(data);
        
    })


  }







  function topRatedMovies (){


    fetch(`https://api.themoviedb.org/3/movie/top_rated?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c`)
    .then(res => res.json())
    .then(data => {
        const movies = data.results;



        // $('.owl-carousel').trigger('destroy.owl.carousel');
      

        movies.forEach(movie => {
            if (movie.poster_path) {
              topRated.innerHTML += `
                <div class="movie item">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>
              `;
            }else {
              console.log('dddddddddddddddddddddddddddddddddddd');
              
            }
          });


        //   $('.owl-carousel').owlCarousel({
        //     loop: false,
        //     margin: 10,
        //     responsiveClass: true,
        //     responsive: {
        //       0: { items: 1, nav: false },
        //       600: { items: 3, nav: false },
        //       1000: { items: 5, nav: false }
        //     }
        //   });

        console.log(data);
        
    })


  }




  function nowPlayingMovies (){


    fetch(`https://api.themoviedb.org/3/movie/now_playing?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c`)
    .then(res => res.json())
    .then(data => {
        const movies = data.results;



        $('.owl-carousel').trigger('destroy.owl.carousel');
     
        

        movies.forEach(movie => {
            if (movie.poster_path) {
              nowPlaying.innerHTML += `
                <div class="movie item">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>
              `;
            }else {
              console.log('dddddddddddddddddddddddddddddddddddd');
              
            }
          });


          $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
              0: { items: 2.5, nav: false },
              600: { items: 3, nav: false },
              1000: { items: 5, nav: false }
            }
          });

        console.log(data);
        
    })


  }



  

  
  getMovies('true')
  upcomingMovies()
  topRatedMovies()
  nowPlayingMovies()
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


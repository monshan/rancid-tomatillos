export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

export const getMovie = (unique) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + unique)
  .then(response => response.json())
}
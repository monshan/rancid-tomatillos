export const getMovie = (unique) => {
  if (unique) {
    unique = `/${unique}`
  }
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies' + unique)
  .then(response => response.json())
}
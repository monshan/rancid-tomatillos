import { Component } from 'react';
import './SinglePoster.css';

class SinglePoster extends Component {
  constructor () {
    super();
    this.state = {
      movie: null
        // id: 1,
        // title: "Fake Movie Title",
        // poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
        // backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
        // release_date: "2019-12-04",
        // overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
        // average_rating: 6,
        // genres: ["Drama", "Romance"],
        // budget:63000000,
        // revenue:100853753,
        // runtime:139,
        // tagline: "It's a movie!"
      }
  };

  mapInfo = (stateInfo) =>{
    let tempInfo = [...stateInfo]
    return tempInfo.join(', ');
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + this.props.movieId)
      .then(response => response.json())
      .then(result => this.setState({ movie: result.movie }))
      .catch(error => console.log(error))
  }

  render () {
    if (!this.state.movie) {
      return (<h2>you thot</h2>)
    } 

    return (
      <div className="singlePoster">
        <img src={this.state.movie.poster_path} alt="Movie Poster" />
        <article className="singleMovie_Info">
          <h2>{ this.state.movie.title }</h2>
          <h3>{ this.state.movie.tagline }</h3>
          <p>Released: { this.state.movie.release_date }</p>
          <p>Runtime: { this.state.movie.runtime } min.</p>
          <p>Rating: { this.state.movie.average_rating }/10</p>
          <p>Genres: { this.mapInfo(this.state.movie.genres) }</p>
          <p>{ this.state.movie.overview }</p>
          <p>Budget: ${ this.state.movie.budget }</p>
          <p>Revenue: ${ this.state.movie.revenue }</p>
        </article>
      </div>
    )
  }

}

export default SinglePoster;
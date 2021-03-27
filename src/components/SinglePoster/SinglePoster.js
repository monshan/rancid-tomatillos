import { Component } from 'react';
import './SinglePoster.css';

class SinglePoster extends Component {
  constructor () {
    super();
    this.state = {
        id: 1,
        title: "Fake Movie Title",
        poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
        release_date: "2019-12-04",
        overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
        average_rating: 6,
        genres: ["Drama", "Romance"],
        budget:63000000,
        revenue:100853753,
        runtime:139,
        tagline: "It's a movie!"
      }
  };

  mapInfo = (stateInfo) =>{
    let tempInfo = [...stateInfo]
    return tempInfo.join(', ');
  }

  render () {
    return (
      <div className="singlePoster">
        <img src={this.state.poster_path} alt="Movie Poster" />
        <article className="singleMovie_Info">
          <h2>{ this.state.title }</h2>
          <h3>{ this.state.tagline }</h3>
          <p>Released: { this.state.release_date }</p>
          <p>Runtime: { this.state.runtime } min.</p>
          <p>Rating: { this.state.average_rating }/10</p>
          <p>Genres: { this.mapInfo(this.state.genres) }</p>
          <p>{ this.state.overview }</p>
          <p>Budget: ${ this.state.budget }</p>
          <p>Revenue: ${ this.state.revenue }</p>
        </article>
      </div>
    )
  }

}

export default SinglePoster;
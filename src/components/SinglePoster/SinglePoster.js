import { Component } from 'react';
import { getMovie } from '../../calls.js';
// import { FilmReel } from '../../assets/film-reel.svg'
import './SinglePoster.css';

class SinglePoster extends Component {
  constructor () {
    super();
    this.state = {
      movie: null,
      error: null
      }
  };

  mapInfo = (stateInfo) =>{
    let tempInfo = [...stateInfo]
    return tempInfo.join(', ');
  }

  componentDidMount = () => {
    getMovie(this.props.movieId)
      .then(result => this.setState({ movie: result.movie }))
      .catch(error => this.setState({ error: error}))
  }

  render () {
    if (!this.state.movie) {
      return (
        <h2>Loading ...</h2>
      )
    } else if (this.state.error) {
      return (
        <section>
          <h2>Jhonson, we have a problem</h2>
          <p>Cannot load asset of {this.state.error}</p>
        </section>
      )
    }

    const {title, tagline} = this.state.movie

    return (
      <div className="singlePoster">
        <img src={this.state.movie.poster_path} alt={`${title} poster`}/>
        <article className="singleMovie_Info">
          <h2>{ title }</h2>
          <h3>{ tagline }</h3>
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

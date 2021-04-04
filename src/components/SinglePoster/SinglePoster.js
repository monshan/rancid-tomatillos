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

    const {title, tagline, release_date, runtime, budget, revenue, poster_path, average_rating, genres, overview} = this.state.movie

    return (
      <div className="singlePoster">
        <img src={poster_path} alt={`${title} poster`}/>
        <article className="singleMovie_Info">
          <h2>{ title }</h2>
          <blockquote>{ tagline }</blockquote>
          <p>Released: { release_date }</p>
          <p>Runtime: { runtime } min.</p>
          <p>Rating: { average_rating }/10</p>
          <ul>Genres: { this.mapInfo(genres) }</ul>
          <p>{ overview }</p>
          <p>Budget: ${ budget }</p>
          <p>Revenue: ${ revenue }</p>
        </article>
      </div>
    )
  }

}

export default SinglePoster;

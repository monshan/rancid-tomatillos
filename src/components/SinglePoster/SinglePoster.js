import { Component } from 'react';
import './SinglePoster.css';

class SinglePoster extends Component {
  constructor () {
    super();
    this.state = {
      movie: null
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
      {console.log(this.state.movie.id)}
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

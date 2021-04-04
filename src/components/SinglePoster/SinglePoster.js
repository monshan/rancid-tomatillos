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

  makeItems = (listItems, id) =>{
    return listItems.map(genre => <li key={`${id}${genre}`} className="genre">{genre}</li>);
  }

  roundRating = (toRound) => {
    return Math.round(toRound)
  }

  formatMoney = (raw) => {
    return raw.toLocaleString();
  }

  componentDidMount = () => {
    getMovie(this.props.movieId)
      .then(result => {
        this.setState({ movie: result.movie })
        if (result.error) {
          this.setState({error: result.error})
        }
      })
      .catch(error => {
        this.setState({ error: error.error})
      })
  }

  render () {
    if (!this.state.movie && !this.state.error) {
      return (
        <h2>Loading ...</h2>
      )
    } else if (this.state.error) {
      return (
        <section>
          <h2>Jhonson, we have a problem</h2>
          <p>{this.state.error}</p>
        </section>
      )
    }

    const {title, tagline, release_date, runtime, budget, revenue, poster_path, average_rating, genres, overview, id, backdrop_path} = this.state.movie

    return (
      <div className="background" style={{backgroundImage: `linear-gradient(hsla(0, 0%, 0%, 0.8), #253035), url(${backdrop_path})`}}>
        <img src={poster_path} alt={`${title} poster`}/>
        <article className="singleMovie_Info">
          <h2>{ title }</h2>
          {tagline && <blockquote>{ tagline }</blockquote>}
          <p>Released: { release_date }</p>
          <p>Runtime: { runtime } min.</p>
          <p>Rating: { this.roundRating(average_rating) }/10</p>
          <ul className="Genres">Genres: { this.makeItems(genres, id) }</ul>
          <p>{ overview }</p>
          {!!budget && <p>Budget: ${ this.formatMoney(budget) }</p>}
          {!!revenue && <p>Revenue: ${ this.formatMoney(revenue) }</p>}
        </article>
      </div>
    )
  }

}

export default SinglePoster;

import './App.css';
import movieData from './movieData';
import Theatre from './components/Theatre/Theatre';
import SinglePoster from './components/SinglePoster/SinglePoster';
import ReturnButton from './components/ReturnButton/ReturnButton';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: movieData.movies,
      movieId: 0
    }
  }

  posterClick = (id) => {
    this.setState({ movieId: id })
  }

  deselect = () => {
    this.setState({ movieId: 0 })
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(result => {
        this.setState({ movies: result.movies })
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Rancid Tomatillos</h1>
        </header>
        <main>
          <Route
            exact
            path="/:id"
            render={ () => {
            return <SinglePoster posterClick={this.posterClick} movieId={ this.state.movieId }/>
          }} />
          <Route path="/">
              <Theatre movies={this.state.movies} posterClick={this.posterClick}/>
          </Route>
        </main>
        <nav className="bottom-nav">
          <h2>Controlled Form</h2>
          { !!this.state.movieId &&
            <ReturnButton deselect={ this.deselect }/>
          }
        </nav>
      </div>
    )
  }
}

export default App;
//<Theatre movies={this.state.movies}/>
// { !!this.state.movieId  &&
//   <SinglePoster posterClick={this.posterClick} movieId={ this.state.movieId }/>
// }
// { !this.state.movieId &&
//   <Theatre movies={this.state.movies} posterClick={this.posterClick}/>
// }

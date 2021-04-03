import './App.css';
import movieData from './movieData';
import Theatre from './components/Theatre/Theatre';
import SinglePoster from './components/SinglePoster/SinglePoster';
import { getMovie } from './calls.js';
import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: movieData.movies,
      movieId: 0,
      error: null
    }
  }

  posterClick = (id) => {
    this.setState({ movieId: id })
  }

  deselect = () => {
    this.setState({ movieId: 0 })
  }

  componentDidMount = () => {
    getMovie('')
      .then(result => {
        this.setState({ movies: result.movies })
      })
      .catch(error => this.setState({ error: error }))
  }

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Rancid Tomatillos</h1>
        </header>
        <main>
        {this.state.error && <p>{this.state.error}</p>}
        <Switch>
          <Route
            path='/:id'
            render={ ({match}) => {
              return <SinglePoster movieId={ match.params.id }/>
          }} />
          <Route exact path="/">
            <Theatre movies={this.state.movies} posterClick={this.posterClick}/>
          </Route>
          <Route path="*">
            <article>
              <h2>You're in the wrong place Bronco</h2>
              <p>This page doesn't exist, please navigate back to home with the 'Go Back' button below</p>
            </article>
          </Route>
        </Switch>
        </main>
        <nav className="bottom-nav">
          <h2>Controlled Form</h2>
          <Route path="/:id">
            <Link to="/">
              <button className="returnButton" onClick={ this.deselect }>Go back!</button>
            </Link>
          </Route>
        </nav>
      </div>
    )
  }
}

export default App;
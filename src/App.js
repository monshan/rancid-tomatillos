import './App.css';
import movieData from './movieData';
import Theatre from './components/Theatre/Theatre';
import SinglePoster from './components/SinglePoster/SinglePoster';
import ReturnButton from './components/ReturnButton/ReturnButton';
import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

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
        <Switch>
          <Route
            path='/:id'
            render={ ({match}) => {
            return <SinglePoster movieId={ match.params.id }/>
          }} />
          <Route exact path="/">
              <Theatre movies={this.state.movies} posterClick={this.posterClick}/>
          </Route>
        </Switch>
        </main>
        <nav className="bottom-nav">
          <h2>Controlled Form</h2>
          <Route path="/:id">
            <Link to="/">
              <ReturnButton />
            </Link>
          </Route>
        </nav>
      </div>
    )
  }
}

export default App;
import './App.css';
import Theatre from './components/Theatre/Theatre';
import SinglePoster from './components/SinglePoster/SinglePoster';
import { getMovie } from './calls.js';
import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: [],
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

  singlePosterConditional = (id) => {
    const valids = this.state.movies.map(mov => mov.id)
    if (valids.includes(parseInt(id))) {
      return <SinglePoster movieId={ id }/>
    } else {
      return (
        <article>
          <h2>You're in the wrong place Bronco</h2>
          <p>This page doesn't exist, please navigate back to home with the 'Go Back' button below</p>
        </article>
      )
    }
  }

  cleanData = (data) => {
    return data.map(block => {
      return {
        id: block.id,
        poster_path: block.poster_path,
        title: block.title
      }
    })
  }

  componentDidMount = () => {
    getMovie('')
      .then(result =>{
          this.setState({ movies: this.cleanData(result.movies) })
          if (result.error) {
            this.setState({error: result.error})
          }
        })
      .catch(error =>{
        this.setState({ error: error })
       })
  }

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Rancid Tomatillos</h1>
        </header>
        <main>
        <Switch>
          <Route exact path="/">
            {this.state.error && <p>{this.state.error}</p>}
            <Theatre movies={this.state.movies} posterClick={this.posterClick} error={this.state.error}/>
          </Route>
          <Route
            path='/:id'
            render={ ({match}) => this.singlePosterConditional(match.params.id) } />
        </Switch>
        </main>
        <nav className="bottom-nav">
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

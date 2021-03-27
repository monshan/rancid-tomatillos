import './App.css';
import movieData from './movieData';
import Theatre from './components/Theatre/Theatre';
import SinglePoster from './components/SinglePoster/SinglePoster';
import { Component } from 'react';

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
    console.log(id)
  }

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Rancid Tomatillos</h1>
        </header>
        <main>
        <SinglePoster posterClick={this.posterClick}/>
          {/* { this.state.movieId &&
            <SinglePoster posterClick={this.posterClick}/>
          }
          { !this.state.movieId &&
            <Theatre movies={this.state.movies} posterClick={this.posterClick}/>
          } */}
        </main>
        <nav className="bottom-nav">
          <h2>Controlled Form</h2>
          {/* { this.state.movieId &&
            <ReturnButton />
          } */}
        </nav>
      </div>
    )
  }
}

export default App;
//<Theatre movies={this.state.movies}/>

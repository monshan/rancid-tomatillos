import './App.css';
import movieData from './movieData'
import Theatre from './components/Theatre/Theatre'
import { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Rancid Tomatillos</h1>
        </header>
        <main>
          <Theatre movies={this.state.movies}/>
        </main>
        <nav className="bottom-nav">
          <h2>Controlled Form</h2>
        </nav>
      </div>
    )
  }
}

export default App;

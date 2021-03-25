// import { Component } from "react";

// class Poster extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ""
//     }
//   }
// }

import './Poster.css'

const Poster = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
  return (
    <section id={id} className="poster">
      <img src={poster_path} alt="Movie poster" className="movie-poster" />
      <div className="movie-info">
        <h2>{ title }</h2>
        <p>{ release_date }</p>
        <p>{ Math.round(average_rating) } / 10</p>
      </div>
    </section>
  )
}

export default Poster

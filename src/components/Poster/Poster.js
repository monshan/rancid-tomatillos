// import { Component } from "react";

// class Poster extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ""
//     }
//   }
// }

const Poster = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
  return (
    <section id={id} className="poster">
      <h2>{ title }</h2>
      <p>{ release_date }</p>
      <p>{ Math.round(average_rating) } / 10</p>
    </section>
  )
}

export default Poster
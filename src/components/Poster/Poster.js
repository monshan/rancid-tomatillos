import './Poster.css';
import { Link } from "react-router-dom";

const Poster = ({ id, poster_path, title, average_rating, release_date }) => {
  return (
    <Link to={`/${id}`} className="poster hvr-float-shadow" id={id} aria-label={title} style={{backgroundImage: `url(${poster_path})`}} alt={`${title} movie poster`}>
      <div className="details">
        <h2>{ title }</h2>
        <p>{ release_date }</p>
        <p>{ Math.round(average_rating) } / 10</p>
      </div>
    </Link>
  )
}

export default Poster

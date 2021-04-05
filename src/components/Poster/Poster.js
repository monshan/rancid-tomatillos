import './Poster.css';
import { Link } from "react-router-dom";

const Poster = ({ id, poster_path, title }) => {
  return (
    <Link to={`/${id}`} className="poster hvr-float-shadow" id={id} style={{backgroundImage: `url(${poster_path})`}} alt={`${title} movie poster`}>
    </Link>
  )
}

export default Poster

import Poster from '../Poster/Poster';
import './Theatre.css';

const Theatre = ({ movies, posterClick }) => {
  const allMovies = movies.map(mov => {
    return (
      <Poster
        id={ mov.id }
        key={ mov.id }
        poster_path={ mov.poster_path }
        backdrop_path={ mov.backdrop_path }
        title={ mov.title }
        average_rating={ mov.average_rating }
        release_date={ mov.release_date }
    />
    )
  })

  return (
    <div className="theatre" onClick={ event=>{posterClick(event.target.closest('section').id)} }
      >
      {allMovies}
    </div>
  )
}

export default Theatre;

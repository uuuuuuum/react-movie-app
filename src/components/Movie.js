import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function Movie({id, coverImg, title, summary, genres}) {
    return <div className='movie-box'>
      <div className='img-box'>
        <img src={coverImg} alt={title}/>
      </div>
      <div className='txt-box'>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>
          { summary.length > 200
            ? `${summary.slice(0, 200)} ...`
            : summary
          }
        </p>
        <ul className='genres'>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
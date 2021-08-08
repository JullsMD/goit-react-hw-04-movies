import { Route, NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';
import Cast from '../Cast';
import Reviews from '../Reviews';
import default_Img from '../../Images/default_Img.png';

const MovieCard = ({ movie, match, location }) => {
  return (
    <div>
      {/* Image */}
      <div>
        {movie.poster_path ? (
          <img
            src={`${routes.imgUrl}${movie?.poster_path}`}
            alt="movie"
            width="300px"
          />
        ) : (
          <img src={default_Img} alt="noimage" width="300px" />
        )}
      </div>
      {/* Description */}
      <div>
        <h2>
          {movie?.title} ({movie?.release_date.slice(0, 4)})
        </h2>
        <p>User Scope: {movie?.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie?.overview}</p>
        <h4>Genres</h4>
        <p>
          {movie?.genres.map(({ name, id }) => (
            <span key={id}>{name} </span>
          ))}
        </p>
      </div>

      <div>
        <h2>Additional information</h2>
        <NavLink
          to={{
            pathname: `${match.url}${routes.cast}`,
            state: { from: location.state.from },
          }}
        >
          Cast
        </NavLink>

        <NavLink
          to={{
            pathname: `${match.url}${routes.reviews}`,
            state: { from: location.state.from },
          }}
        >
          Reviews
        </NavLink>
      </div>

      <Route path={`${match.path}${routes.cast}`} component={Cast} />
      <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }),
};

export default withRouter(MovieCard);

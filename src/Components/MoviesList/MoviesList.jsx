import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
  ),
};
export default withRouter(MoviesList);

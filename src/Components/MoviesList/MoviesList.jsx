import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={styles.MoviesListLink}
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

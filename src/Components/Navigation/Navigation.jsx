import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.NavList}>
      <li>
        <NavLink className={styles.NavLink} exact to={routes.home}>
          {' '}
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className={styles.NavLink} to={routes.movies}>
          {' '}
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;

import Navigation from '../Navigation';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} exact to={routes.home}>
        <span className={styles.logoMovie}>Movie</span>
        <span className={styles.logoON}>ON</span>
      </NavLink>

      <Navigation />
    </header>
  );
};
export default NavBar;

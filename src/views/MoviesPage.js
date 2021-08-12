import { useEffect, useState } from 'react';
import { getMovies } from '../Services/API';
import MoviesList from '../Components/MoviesList/MoviesList';
import Content from '../Components/Content/Content';
import queryString from 'query-string';
import styles from './MoviesPage.module.css';

const MoviesPage = ({ history, location }) => {
  const [searchValue, setSearchValue] = useState('');
  const [films, setFilms] = useState([]);

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (location.search === '' && searchValue === '') return;
    const parse = queryString.parse(location.search);
    setSearchValue(parse.query);
    getMovies(parse.query).then(data => setFilms(data));
    // eslint-disable-next-line
  }, []);

  const handleSearchMovies = e => {
    e.preventDefault();
    if (searchValue === '') return;

    getMovies(searchValue).then(data => setFilms(data));
    history.push({
      ...location,
      search: `query=${searchValue}`,
    });
  };

  return (
    <Content>
      <form onSubmit={handleSearchMovies}>
        <input
          type="text"
          autoComplete="true"
          value={searchValue}
          onChange={handleSearchValue}
          className={styles.formInput}
        ></input>
        <button type="submit" className={styles.formButton}>
          Search
        </button>
      </form>
      {films.length > 0 && <MoviesList movies={films} />}
    </Content>
  );
};
export default MoviesPage;

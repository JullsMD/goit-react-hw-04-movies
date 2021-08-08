import { useEffect, useState } from 'react';
import { getMovies } from '../Services/API';
import Content from '../Components/Content';
import queryString from 'query-string';

const MoviesPage = ({ history, location }) => {
  const [searchValue, setSearchValue] = useState('');
  const [MoviesList, setMoviesList] = useState([]);

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (location.search === '' && searchValue === '') return;
    const parse = queryString.parse(location.search);
    setSearchValue(parse.query);
    getMovies(parse.query).then(data => setMoviesList(data));
  }, [location.search, searchValue]);

  const handleSearchMovies = e => {
    e.preventDefault();
    if (searchValue === '') return;

    getMovies(searchValue).then(data => setMoviesList(data));
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
        ></input>
        <button type="submit">Search</button>
      </form>
      {MoviesList.length > 0 && <MoviesList movies={MoviesList} />}
    </Content>
  );
};
export default MoviesPage;

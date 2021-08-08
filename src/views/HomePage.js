import { useState, useEffect } from 'react';
import { getTrends } from '../Services/API';
import Content from '../Components/Content';
import MoviesList from '../Components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrends().then(data => setMovies(data));
  }, []);

  return (
    <Content>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </Content>
  );
};

export default HomePage;

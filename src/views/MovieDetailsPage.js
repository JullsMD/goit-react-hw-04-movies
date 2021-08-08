import { useEffect, useState } from 'react';
import { getMovieById } from '../Services/API';
import routes from '../routes';
import Content from '../Components/Content';
import MoviesCard from '../Components/MoviesCard';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MovieDetailsPage = ({ match, history, location }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const { movieId } = match.params;

    getMovieById(movieId).then(data => setMovie(data));
  }, [match.params]);

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  return (
    <Content>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie?.title ? (
        <MoviesCard movie={movie} />
      ) : (
        <Loader type="Rings" color="wheat" height={100} width={100} />
      )}
    </Content>
  );
};
export default MovieDetailsPage;

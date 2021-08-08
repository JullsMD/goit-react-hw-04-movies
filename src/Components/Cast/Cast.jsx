import { useState, useEffect } from 'react';
import { getMovieInfoById } from '../../Services/API';
import default_Img from '../../Images/default_Img.png';

const Cast = ({ match }) => {
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    const { movieId } = match.params;
    getMovieInfoById(movieId, 'credits').then(({ cast }) => setCastList(cast));
  }, [match.params]);

  return (
    <div>
      <ul>
        {castList.map(item => (
          <li key={item?.id}>
            <div>
              {item.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
                  alt={item?.name}
                />
              ) : (
                <img src={default_Img} alt="default" width="80px" />
              )}
              <h2>{item?.name}</h2>
              <p>Character: {item?.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

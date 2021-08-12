import { useState, useEffect } from 'react';
import { getMovieInfoById } from '../../Services/API';
import default_Img from '../../Images/default_Img.png';
import styles from './Cast.module.css';
const Cast = ({ match }) => {
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    const { movieId } = match.params;
    getMovieInfoById(movieId, 'credits').then(({ cast }) => setCastList(cast));
  }, [match.params]);

  return (
    <div>
      <ul className={styles.CastList}>
        {castList.map(item => (
          <li className={styles.CastListItem} key={item?.id}>
            {item.profile_path ? (
              <img
                className={styles.CastListImg}
                src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
                alt={item?.name}
                width="150px"
              />
            ) : (
              <img src={default_Img} alt="default" width="150px" />
            )}
            <h2 className={styles.CastTitle}>{item?.name}</h2>
            <p>Character: {item?.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

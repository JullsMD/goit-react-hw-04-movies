import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getMovieInfoById } from '../../Services/API';
import styles from './Reviews.module.css';
const Reviews = ({ match }) => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const { movieId } = match.params;
    getMovieInfoById(movieId, 'reviews').then(({ results }) =>
      setReviewsList(results),
    );
  }, [match.params]);

  return (
    <>
      {reviewsList.length > 0 ? (
        <ul>
          {reviewsList.map(item => (
            <li key={item.id}>
              <div>
                <h2>Author: {item.author}</h2>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noRev}>Your review will be first</p>
      )}
    </>
  );
};
export default withRouter(Reviews);

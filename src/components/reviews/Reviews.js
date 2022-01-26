import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../utils/fetchQuery';
import { List, Item } from './Reviews.styled';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(obj => setReviews([...obj.results]));
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <List>
          {reviews.map(review => {
            return (
              <Item key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
}

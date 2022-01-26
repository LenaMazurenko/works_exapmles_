import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../utils/fetchQuery';
import { Grid, Item, Image } from './Cast.styled';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(obj => setCast([...obj.cast]));
  }, [movieId]);

  return (
    <>
      {cast && (
        <Grid>
          {cast.map(el => {
            return (
              <Item key={el.id}>
                <Image
                  src={
                    el.profile_path
                      ? `https://www.themoviedb.org/t/p/w780/${el.profile_path}`
                      : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                  }
                  alt={el.original_name}
                />
                <h3>{el.original_name}</h3>
                <p>Character: {el.character}</p>
              </Item>
            );
          })}
        </Grid>
      )}
    </>
  );
}

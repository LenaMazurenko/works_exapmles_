import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../utils/fetchQuery';

export default function HomePage() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(obj => {
      setMoviesList(obj.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today:</h1>

      {moviesList && (
        <ul>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

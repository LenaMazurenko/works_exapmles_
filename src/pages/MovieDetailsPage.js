import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { fetchMovie } from '../utils/fetchQuery';
import Container from '../components/Container/Container';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { NavLinkEl } from '../components/AppNav/AppNav.styled';
import Loader from 'react-loader-spinner';
import { LoaderWrapper } from '../components/Container/Container.styled';

const Cast = lazy(() =>
  import('../components/cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId).then(obj => {
      setMovieDetails(obj);
    });
  }, [movieId]);

  return (
    <Container>
      <button type="button" onClick={() => navigate(-1)}>
        &#8617; Go back
      </button>
      {movieDetails && <MovieDetails md={movieDetails} />}
      <hr />
      <h3>Additional Info:</h3>
      <ul>
        <li>
          <NavLinkEl to={`/movies/${movieId}/cast`}>Cast</NavLinkEl>
        </li>
        <li>
          <NavLinkEl to={`/movies/${movieId}/reviews`}>Reviews</NavLinkEl>
        </li>
      </ul>
      <hr />
      <Suspense
        fallback={
          <LoaderWrapper>
            <Loader type="Oval" color="#00BFFF" height={200} width={200} />
          </LoaderWrapper>
        }
      >
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
//https://www.themoviedb.org/t/p/original/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg

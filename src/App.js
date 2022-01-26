import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import { LoaderWrapper } from './components/Container/Container.styled';

import Container from './components/Container/Container';
import AppNav from './components/AppNav/AppNav';

const StartPage = lazy(() =>
  import('./pages/StartPage' /* webpackChunkName: "start-page" */),
);
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page-" */
  ),
);
const ImagesFinderPage = lazy(() =>
  import('./pages/ImagesFinderPage' /* webpackChunkName: "images-page" */),
);
const PhoneBookPage = lazy(() =>
  import('./pages/PhoneBookPage' /* webpackChunkName: "phone-book-page" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "notfound-page" */),
);

export default function App() {
  return (
    <Container>
      <AppNav />

      <Suspense
        fallback={
          <LoaderWrapper>
            <Loader type="Oval" color="#00BFFF" height={200} width={200} />
          </LoaderWrapper>
        }
      >
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/images" element={<ImagesFinderPage />} />
          <Route path="/phonebook" element={<PhoneBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

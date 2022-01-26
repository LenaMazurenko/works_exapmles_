const BASE_URL = 'https://api.themoviedb.org/3';
export const KEY = '926288ccedb892ed59969fcc82f10d15';

async function fetchQuery(param) {
  return fetch(`${BASE_URL}/${param}?api_key=${KEY}&language=en-US`).then(
    response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('Not found'));
    },
  );
}

//---func for fetch movies
export async function fetchTrendingMovies() {
  return fetchQuery('trending/movie/day');
  //https://api.themoviedb.org/3/   trending/all/day    ?api_key=<<api_key>>
}

export async function fetchMovie(param) {
  return fetchQuery(`movie/${param}`);
  //https://api.themoviedb.org/3/   movie/{movie_id}    ?api_key=<<api_key>>&language=en-US//infoAboutOneMovie
}

export async function fetchMovieCast(id) {
  return fetchQuery(`movie/${id}/credits`);
  //https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US
}

export async function fetchMovieReviews(id) {
  return fetchQuery(`movie/${id}/reviews`);
  //https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US
}

export async function fetchMovieByName(name) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=false`,
  ).then(resp => resp.json());
}

//func for fetch images
export async function fetchQueryImg(query, page) {
  const key =
    '24022997-1f6b45243be8e45a3cc65a02f&image_type=photo&orientation=horizontal&per_page=12';
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}`,
  ).then(response => response.json());
}

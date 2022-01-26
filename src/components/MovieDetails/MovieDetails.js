import { Img, Box, Ul, Li } from './MovieDetails.styled';

export default function MovieDetails({ md }) {
  return (
    <Box>
      <Img
        src={`https://www.themoviedb.org/t/p/w780/${md.backdrop_path}`}
        alt={md.original_title}
      />
      <div>
        <h1>{md.original_title}</h1>
        <p>Average: {md.vote_average}</p>
        <h3>Overview</h3>
        <p>{md.overview}</p>
        <h3>Genres</h3>
        <Ul>
          {md.genres.map(genre => {
            return <Li key={genre.id}>{genre.name}</Li>;
          })}
        </Ul>
      </div>
    </Box>
  );
}

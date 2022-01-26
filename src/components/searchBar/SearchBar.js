import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Header, Form, SubmitBtn, Input } from './SearchBar.styled';
import { MdImageSearch } from 'react-icons/md';
import { fetchMovieByName } from '../../utils/fetchQuery';

export default function Searchbar() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryStr = searchParams.get('query'); // "batman"

  useEffect(() => {
    if (queryStr) {
      fetchMovieByName(queryStr).then(resp => setResult([...resp.results]));
    }
  }, [queryStr]);

  //=================================
  const handlerFormSubmit = e => {
    e.preventDefault();
    navigate(`?query=${e.target.query.value.trim()}`);
  };

  return (
    <>
      <Header>
        <Form onSubmit={handlerFormSubmit}>
          <Input name="query" placeholder="Search movie" />
          <SubmitBtn type="submit">
            <MdImageSearch fontSize="2em" />
          </SubmitBtn>
        </Form>
      </Header>

      {result && (
        <ul>
          {result.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

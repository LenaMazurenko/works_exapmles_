import { useState } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, SubmitBtn, Input } from './Searchbar.styled';
import { MdImageSearch } from 'react-icons/md';

export default function Searchbar({ onSubmitProp }) {
  const [searchWord, setSearchWord] = useState('');

  //==============================================
  const handleWordChange = e => {
    setSearchWord(e.currentTarget.value.toLowerCase());
  };

  //=================================
  const handleWordSubmit = e => {
    e.preventDefault();
    if (searchWord.trim() === '') {
      return toast.error('Enter query');
    }
    // Проп который передается форме для вызова при сабмите
    onSubmitProp(searchWord);
    setSearchWord('');
  };

  return (
    <Header>
      <Form onSubmit={handleWordSubmit}>
        <Input
          type="text"
          value={searchWord}
          onChange={handleWordChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SubmitBtn type="submit">
          <MdImageSearch fontSize="2em" />
        </SubmitBtn>
      </Form>
    </Header>
  );
}

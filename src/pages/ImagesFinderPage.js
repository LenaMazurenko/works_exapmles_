import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { fetchQueryImg } from '../utils/fetchQuery';

import Searchbar from '../components/imgComponents/Searchbar';
import ImageGallery from '../components/imgComponents/ImageGallery';
import Button from '../components/imgComponents/Button';
import Modal from '../components/imgComponents/Modal';

import { LoaderWrapper } from '../components/imgComponents/ImageGallery.styled';

export default function ImagesFinderPage() {
  const [images, setImages] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [activImg, setActivImg] = useState('');

  useEffect(() => {
    // чтоб при первой загрузке не выполнялся fetch
    if (status === 'idle') return;

    setStatus('pending');
    fetchQueryImg(searchWord, page)
      .then(images => {
        if (images.total) {
          setImages(prevState => [...prevState, ...images.hits]);
          setStatus('resolved');
        } else {
          setStatus('reject');
          toast.error('Bad request, try again!');
        }
      })
      .catch(error => setStatus('error'));

    return () => {
      window.removeEventListener('keydown', closeModal);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord, page]);

  const handleformSubmit = searchWord => {
    setStatus('pending');
    setSearchWord(searchWord);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = url => {
    setActivImg(url);
    setShowModal(true);
    window.addEventListener('keydown', closeModal);
  };
  const closeModal = e => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
      setActivImg('');
      setShowModal(false);
      window.removeEventListener('keydown', closeModal);
    }
  };

  //===============================
  return (
    <>
      <Searchbar onSubmitProp={handleformSubmit} />
      <ImageGallery handlerClickImg={handleImageClick} images={images} />
      {status === 'pending' && (
        <LoaderWrapper>
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </LoaderWrapper>
      )}
      {status === 'resolved' && (
        <Button onClickProp={() => setPage(p => p + 1)} />
      )}
      {showModal && <Modal url={activImg} onClick={closeModal} />}
      <ToastContainer autoClose={2000} />
    </>
  );
}

import { Component } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.scss';

import getImagesApi from './services/getImagesApi';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    largeURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }

    if (currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  setLargeURL = (largeURL) => {
    this.setState({ largeURL });
  };

  onChangeQuery = (query) => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      largeURL: '',
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    getImagesApi
      .fetchData(options)
      .then((hits) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        return this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, largeURL } = this.state;
    const renderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} setLargeURL={this.setLargeURL} />

        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={80}
            width={80}
            radius={50}
          />
        )}

        {renderLoadMoreButton && <Button onLoadMore={this.fetchImages} />}

        <ToastContainer theme="dark" transition={Flip} draggableDirection="y" />

        {largeURL && (
          <Modal setLargeURL={this.setLargeURL}>
            <img src={largeURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;

import { Component } from 'react';

// import './style.scss';
import s from './App.module.scss';

import getImagesApi from './services/getImagesApi';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    error: null,
    largeURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }

    if (currentPage > 12) {
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
      searchQuery: query,
      images: [],
      currentPage: 1,
      error: null,
      largeURL: '',
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    getImagesApi
      .fetchData(options)
      .then((hits) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { images } = this.state;

    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} setLargeURL={this.setLargeURL} />
        {/* 
       
       
        <Loader />
        <Button />
        <Modal /> */}
      </div>
    );
  }
}
export default App;

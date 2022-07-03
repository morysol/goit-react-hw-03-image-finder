import React, { Component } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Circles } from 'react-loader-spinner';
//
import { MainApp } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { fetchImages } from '../services/fetchGallery/fetchGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

class App extends Component {
  state = {
    currentPage: 1,
    searchPattern: '',
    imageGallery: [],
    totalHits: 0,
  };

  getSearchPattern = newPattern => {
    this.setState({ searchPattern: newPattern });
    this.setState({ currentPage: 1 });
    this.setState({ imageGallery: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage === this.state.currentPage &&
      prevState.searchPattern === this.state.searchPattern
    ) {
      return;
    }
    fetchImages.call(this);
  }

  // this.setState({
  //   imageGallery: hits.map(hit => {
  //     return {
  //       id: hit.id,
  //       webImage: hit.webformatURL,
  //       largeImage: hit.largeImageURL,
  //       tags: hit.tags,
  //     };
  //   }),
  // });

  nextPage = () => {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1,
      };
    });
  };

  render() {
    return (
      <MainApp>
        <SearchBar onSearch={this.getSearchPattern}></SearchBar>
        <ImageGallery imageGallery={this.state.imageGallery}></ImageGallery>
        <Circles height="100" width="100" color="grey" ariaLabel="loading" />
        <LoadMoreBtn type="button" onButton={this.nextPage}></LoadMoreBtn>
      </MainApp>
    );
  }
}

export default App;

// Создай компоненты

/* <Searchbar>,Sea
  <ImageGallery>,
    <ImageGalleryItem>,
  <Loader> <Button>

  и <Modal>  Портал
  
  Готовые стили компонентов можно взять в файле styles.css и подправить под себя, если необходимо. */

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}

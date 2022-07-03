import { Component } from 'react';
//
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        <ImageGalleryItem gallery={this.props.imageGallery}></ImageGalleryItem>
      </Gallery>
    );
  }
}

export default ImageGallery;

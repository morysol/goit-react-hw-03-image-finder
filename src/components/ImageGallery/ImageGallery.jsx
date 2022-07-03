import { Component } from 'react';
//
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { imageGallery, onImageClick } = this.props;
    return (
      <Gallery>
        <ImageGalleryItem
          gallery={imageGallery}
          onImageClick={onImageClick}
        ></ImageGalleryItem>
      </Gallery>
    );
  }
}

export default ImageGallery;

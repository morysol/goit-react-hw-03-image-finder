import { Component } from 'react';

import { Item, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    return this.props.gallery.map(item => {
      return (
        <Item key={item.id}>
          <Image src={item.webImage} alt={item.tags} />
        </Item>
      );
    });
  }
}

export default ImageGalleryItem;

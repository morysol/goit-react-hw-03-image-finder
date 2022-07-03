import { Component } from 'react';

import { Item, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { gallery, onImageClick } = this.props;
    return gallery.map(item => {
      return (
        <Item
          key={item.id}
          onClick={() => {
            onImageClick(item.id);
          }}
        >
          <Image src={item.webformatURL} alt={item.tags} />
        </Item>
      );
    });
  }
}

export default ImageGalleryItem;

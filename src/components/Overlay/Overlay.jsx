import React, { Component } from 'react';
import { Overlay, Modal } from './Overlay.styled';

class BigPicture extends Component {
  render() {
    const { link, tags, closeOverlay } = this.props;
    return (
      <Overlay onClick={closeOverlay}>
        <Modal>
          <img src={link} alt={tags} />
        </Modal>
      </Overlay>
    );
  }
}

export default BigPicture;

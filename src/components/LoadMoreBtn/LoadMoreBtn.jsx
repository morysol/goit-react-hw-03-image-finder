import { Component } from 'react';

import { Button } from './LoadMoreBtn.styled';

class LoadMoreBtn extends Component {
  render() {
    const { onButton, type } = this.props;
    return (
      <Button onClick={onButton} type={type}>
        Load more...
      </Button>
    );
  }
}

export default LoadMoreBtn;

import { Component } from 'react';

import { Button } from './LoadMoreBtn.styled';

class LoadMoreBtn extends Component {
  render() {
    return <Button onClick={this.props.onButton}>Load more...</Button>;
  }
}

export default LoadMoreBtn;

import React, { Component } from 'react';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  Input,
  SearchLabel,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    inputString: '',
  };

  handleInput = e => {
    this.setState({ inputString: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.inputString);
    this.props.onSearch(this.state.inputString);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchFormBtn>

          <Input
            onChange={this.handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputString}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBar;

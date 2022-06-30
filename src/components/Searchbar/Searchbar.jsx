import React, { Component } from 'react';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  Input,
  SearchLabel,
} from './Searchbar.styled';

class SearchBar extends Component {
  render() {
    return (
      <Header>
        <SearchForm>
          <SearchFormBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchFormBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBar;

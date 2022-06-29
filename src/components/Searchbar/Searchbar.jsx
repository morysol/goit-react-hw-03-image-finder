import React, { Component } from 'react';

import { Header, SearchForm, SearchFormBtn } from './Searchbar.styled';

class SearchBar extends Component {
  render() {
    return (
      <Header>
        <SearchForm>
          <SearchFormBtn type="submit">
            <span className="button-label">Search</span>
          </SearchFormBtn>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBar;

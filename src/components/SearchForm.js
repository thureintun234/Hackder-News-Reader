import React from 'react';
import InputWithLabel from './InputWithLabel';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <InputWithLabel
          id='search'
          value={searchTerm}
          onInputChange={onSearchInput}
          isFocused
        >
          <strong>Search: </strong>
        </InputWithLabel>

        <button type='submit' disabled={!searchTerm}>
          Submit
        </button>
      </form>
    </>
  );
};

export default SearchForm;

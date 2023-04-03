import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import { SearchIconWrapper, StyledInputBase, StyledSearch } from './Search.styles';
import useSearchHandlers from './useSearchHandlers';

const Search = () => {
  const { value, handleChangeSearch } = useSearchHandlers();
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={handleChangeSearch}
      />
    </StyledSearch>
  );
};

export default Search;

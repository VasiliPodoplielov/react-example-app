import React, { useCallback, useContext, useState } from 'react';

import { ListContext } from 'store/context';

const useSearchHandlers = () => {
  const { onFilterList } = useContext(ListContext);
  const [value, setValue] = useState('');

  const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
    onFilterList(value);
  }, []);

  return {
    value,
    handleChangeSearch
  };
};

export default useSearchHandlers;

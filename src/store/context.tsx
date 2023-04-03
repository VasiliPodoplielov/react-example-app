import React, { createContext, ReactElement, useCallback, useMemo, useState } from 'react';

import { Data } from 'api';
import mockedData from 'mocks/data.json';

interface Context {
  list: Data[],
  onFilterList: (query: string) => void;
}

export const ListContext = createContext<Context>({} as Context);

const ListProvider = ({ children }: { children: ReactElement }) => {
  const [list, setList] = useState<Data[]>(mockedData);

  const onFilterList = useCallback((query: string) => {
    const filteredItems = mockedData.filter((item => {
      return item.name.includes(query);
    }));

    setList(filteredItems);
  }, [mockedData]);

  const value = useMemo(() => {
    return { list, onFilterList };
  }, [list, onFilterList]);

  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

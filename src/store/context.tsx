import React, { createContext, ReactElement, useCallback, useMemo, useState } from 'react';

import { Data } from 'api';
import mockedData from 'mocks/data.json';

interface Context {
  list: Data[],
  isDrawerOpened: boolean;
  onFilterList: (query: string) => void;
  toggleDrawer: () => void;
}

export const AppContext = createContext<Context>({} as Context);

const AppProvider = ({ children }: { children: ReactElement }) => {
  const [list, setList] = useState<Data[]>(mockedData);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpened(!isDrawerOpened);
  }, [isDrawerOpened]);

  const onFilterList = useCallback((query: string) => {
    const filteredItems = mockedData.filter((item => {
      return item.name.includes(query);
    }));

    setList(filteredItems);
  }, [mockedData]);

  const value = useMemo<Context>(() => {
    return {
      list,
      isDrawerOpened,
      toggleDrawer,
      onFilterList
    };
  }, [list, isDrawerOpened, onFilterList]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

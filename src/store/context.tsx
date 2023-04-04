import React, { createContext, ReactElement, useCallback, useMemo, useState } from 'react';

import { Data } from 'api';
import mockedData from 'mocks/data.json';

import { DEFAULT_PERIOD } from './constants';

interface Context {
  list: Data[],
  period: Period,
  isDrawerOpened: boolean;
  onFilterList: (query: string) => void;
  toggleDrawer: () => void;
  onChangePeriod: (newPeriod: Period) => void;
  handleClearFields: () => void;
}

export interface Period {
  from: string | null;
  to: string | null;
}

export const AppContext = createContext<Context>({} as Context);

const AppProvider = ({ children }: { children: ReactElement }) => {
  const [list, setList] = useState<Data[]>(mockedData);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [period, setPeriod] = useState<Period>(DEFAULT_PERIOD);
  // const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  // const [toDate, setToDate] = useState<Dayjs | null>(null);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpened(!isDrawerOpened);
  }, [isDrawerOpened]);

  const onFilterList = useCallback((query: string) => {
    const filteredItems = mockedData.filter((item => {
      return item.name.includes(query);
    }));

    setList(filteredItems);
  }, [mockedData]);

  const onChangePeriod = (newPeriod: Period) => setPeriod(newPeriod);

  const handleClearFields = useCallback(() => {
    setPeriod(DEFAULT_PERIOD);
  }, []);

  const value = useMemo<Context>(() => {
    return {
      list,
      period,
      onChangePeriod,
      isDrawerOpened,
      toggleDrawer,
      onFilterList,
      handleClearFields
    };
  }, [list, period, isDrawerOpened, onFilterList]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

import React, { useContext } from 'react';

import './App.css';
import { Header } from 'components/Header';
import { Table } from 'components/Table';

import { AppContext } from 'store';

import { AppWrapper } from './App.styles';

const App = () => {
  const { isDrawerOpened } = useContext(AppContext);
  return (
    <AppWrapper open={isDrawerOpened}>
      <Header />
      <Table />
    </AppWrapper>
  );
};

export default App;

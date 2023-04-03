import React from 'react';

import './App.css';
import { Header } from 'components/Header';
import { Table } from 'components/Table';

import { AppWrapper } from './App.styles';
import ListProvider from './store/context';

const App = () => {
  return (
    <ListProvider>
      <AppWrapper>
        <Header />
        <Table />
      </AppWrapper>
    </ListProvider>
  );
};

export default App;

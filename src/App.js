import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ListOfCategories } from './components/list-of-categories';
import { ListOfPhotoCards } from './components/list-of-photocards';

const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);

export default App;

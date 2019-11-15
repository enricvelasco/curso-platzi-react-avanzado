import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ListOfCategories } from './components/list-of-categories';
import { ListOfPhotoCards } from './components/list-of-photocards';
import { Logo } from './components/logo';

const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);

export default App;

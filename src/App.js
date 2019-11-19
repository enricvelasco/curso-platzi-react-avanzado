import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfCategories } from './components/list-of-categories';
import { ListOfPhotoCards } from './container/list-of-photocards';
import { Logo } from './components/logo';

const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </div>
);

export default App;

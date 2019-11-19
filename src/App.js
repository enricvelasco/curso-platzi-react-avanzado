import React, { Fragment } from 'react'
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfCategories } from './components/list-of-categories';
import { ListOfPhotoCards } from './container/list-of-photocards';
import { PhotoCardWithQuery } from './container/photo-card-with-query'
import { Logo } from './components/logo';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail');

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </Fragment>
      }
    </div>
  );
}

export default App;

import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/photo-card-with-query'
import { Logo } from './components/logo'
import { Home } from './pages/home'

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
          :
          <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
          </Router>
      }
    </div>
  );
}

export default App;

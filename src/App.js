import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo'

import { NavBar } from './components/nav-bar'

import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { Favs } from './pages/favs'
import { User } from './pages/user'
import { NotRegisteredUser } from './pages/not-registered-user'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth ?
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              :
              <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </div>
  );
}

export default App;

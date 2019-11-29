import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo'
import { NavBar } from './components/nav-bar'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
//import { Favs } from './pages/favs'
import { User } from './pages/user'
import { NotRegisteredUser } from './pages/not-registered-user'
import { NotFound } from './pages/not-found'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/favs'))

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  );
}

export default App;

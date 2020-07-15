import React, { useEffect, useContext, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';
import firebase from './services/firebase';
import { AuthContext } from './contexts/auth';

const MainPage = lazy(() => import('./pages/main'));
const Login = lazy(() => import('./pages/login'));

function App ({ location }) {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext);
  const [ didCheckUserIn, setDidCheckUserIn ] = useState(false);

  const { isUserLoggedIn } = userInfo;

  useEffect (() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      });

      setDidCheckUserIn(true);
    });

    window.logout = logout;
  }, [logout, setUserInfo]);

  // Redirect Rules
  if (!didCheckUserIn) {
    return <LinearProgress variant='indeterminate' />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  return (
    <Suspense
      fallback={ <LinearProgress variant='indeterminate' /> }
    >
      <Switch>
        <Route path='/login' component={ Login } />
        <Route component={ MainPage } />
      </Switch>
    </Suspense>
  );
}

App.propTypes = {
  location: PropTypes.object.isRequired
};

export default App;

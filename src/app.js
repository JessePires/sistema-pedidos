import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, LinearProgress } from '@material-ui/core';

const MainPage = lazy(() => import('./pages/main'));
const Login = lazy(() => import('./pages/login'));

function App () {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Suspense
          fallback={ <LinearProgress variant='indeterminate' /> }
        >
          <Switch>
            <Route path='/login' component={ Login } />
            <Route component={ MainPage } />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

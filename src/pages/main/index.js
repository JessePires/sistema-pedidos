import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  withStyles
} from '@material-ui/core';
import {
  Content,
} from './styles.js';
import Header from './header';

const ChoosePizzaSize = lazy(() => import('../choosePizzaSize'));

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback='Loading...' >
        <Switch >
          <Route path='/' exact component={ ChoosePizzaSize } />

        </Switch>
      </Suspense>
    </Content>
  </>
);

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={ classes.main } />
));

export default Main;

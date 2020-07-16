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
const ChoosePizzaFlavours = lazy(() => import('pages/choosePizzaFlavours'));

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback='Loading...' >
        <Switch >
          <Route path='/' exact component={ ChoosePizzaSize } />
          <Route path='/sabores-da-pizza' component={ ChoosePizzaFlavours } />
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

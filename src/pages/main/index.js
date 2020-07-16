import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  withStyles
} from '@material-ui/core';
import {
  Content,
} from './styles.js';
import Header from './header';
import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes';

const ChoosePizzaSize = lazy(() => import('../choosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('pages/choosePizzaFlavours'));

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback='Loading...' >
        <Switch >
          <Route
            path={ HOME }
            exact
            component={ ChoosePizzaSize }
          />

          <Route
            path={ CHOOSE_PIZZA_FLAVOURS }
            component={ ChoosePizzaFlavours }
          />
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

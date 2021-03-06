import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  withStyles
} from '@material-ui/core';
import Header from './header';
import {
  HOME,
  CHOOSE_PIZZA_FLAVOURS,
  CHOOSE_PIZZA_QUANTITY,
  CHECKOUT,
  CHECKOUT_CONFIRMATION,
  CHECKOUT_SUCCESS
} from 'routes';

const ChoosePizzaSize = lazy(() => import('pages/choosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('pages/choosePizzaFlavours'));
const ChoosePizzaQuantity = lazy(() => import('pages/choosePizzaQuantity'));
const Checkout = lazy(() => import('pages/checkout'));
const CheckoutConfirmation = lazy(() => import('pages/checkoutConfirmation'));
const CheckoutSuccess = lazy(() => import('pages/checkoutSuccess'));

const Main = () => (
  <>
    <Header />

    <Spacer />

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

        <Route
          path={ CHOOSE_PIZZA_QUANTITY }
          component={ ChoosePizzaQuantity }
        />

        <Route
          path={ CHECKOUT }
          exact
          component={ Checkout }
        />

        <Route
          path={ CHECKOUT_CONFIRMATION }
          component={ CheckoutConfirmation }
        />

        <Route
          path={ CHECKOUT_SUCCESS }
          component={ CheckoutSuccess }
        />
      </Switch>
    </Suspense>
  </>
);

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={ classes.main } />
));

export default Main;

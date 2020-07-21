import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import {
  Toolbar
} from './styles.js';
import HeaderCommon from './headerCommon';
import HeaderCheckout from './headerCheckout';
import { CHECKOUT } from 'routes';

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={ CHECKOUT } component={ HeaderCheckout } />
        <Route component={ HeaderCommon } />
      </Switch>
    </Toolbar>
  </AppBar>
);

export default Header;

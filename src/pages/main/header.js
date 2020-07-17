import React, { useState } from 'react';
import { useAuth } from 'hooks';
import {
  AppBar,
  IconButton,
  Menu,
  Typography,
  MenuItem
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import {
  Logo,
  Toolbar,
  LogoContainer,
  LinkLogo
} from './styles.js';
import { HOME } from 'routes';

const Header = () => {
  const [ anchorElement, setAnchorElement ] = useState(null);
  const { userInfo, logout } = useAuth();

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <LinkLogo to={ HOME } >
            <Logo />
          </LinkLogo>
        </LogoContainer>

        <Typography color='inherit' >
          Olá { userInfo.user.firstName } :)
        </Typography>

        <IconButton
          color='inherit'
          onClick={ handleOpenMenu }
        >
          <AccountCircle />
        </IconButton>

        <Menu
          open={ Boolean(anchorElement) }
          onClose={ handleClose }
          anchorEl={ anchorElement }
        >
          <MenuItem onClick={ logout } >Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

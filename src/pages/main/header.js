import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
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
} from './styles.js';

const Header = () => {
  const [ anchorElement, setAnchorElement ] = useState(null);
  const { userInfo, logout } = useContext(AuthContext);
  const userName = userInfo.user.displayName.split(' ')[0];

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
          <Logo />
        </LogoContainer>

        <Typography color='inherit' >
          Olá { userName } :)
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

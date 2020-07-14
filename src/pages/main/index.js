import React, { useState, useContext } from 'react';
import { LogoContainer, Logo, Toolbar } from './styles.js';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { AuthContext } from '../../contexts/auth';

function Main () {
  const [ anchorElement, setAnchorElement ] = useState(null);
  const { userInfo, logout } = useContext(AuthContext);

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
          Olá { userInfo.user.displayName.split(' ')[0] } :)
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
}

export default Main;

import React, { useState } from 'react';
import { useAuth } from 'hooks';
import {
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import {
  LogoContainer,
  LinkLogo
} from './styles';
import Logo from './logo';
import { HOME } from 'routes';

function HeaderCommon () {
  const [ anchorElement, setAnchorElement ] = useState(null);
  const { userInfo, logout } = useAuth();

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
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
    </>
  );
}

export default HeaderCommon;

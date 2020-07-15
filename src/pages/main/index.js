import React, { useState, useContext } from 'react';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Grid,
  withStyles
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { AuthContext } from '../../contexts/auth';
import {
  LogoContainer,
  Logo,
  Toolbar,
  Content,
  Title,
  PaperPizza,
  Pizza,
  PizzaText,
  Divider,
  PizzasGrid
} from './styles.js';

function Main () {
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
    <>
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

      <Spacer />

      <Content>
        <Grid
          container
          direction='column'
          alignItems='center'
        >
          <Title variant='h4' >
            O que vai ser hoje, {userName}?
          </Title>

          <Title variant='h5' >
            Escolha o tamanho da pizza:
          </Title>
        </Grid>

        <PizzasGrid>
          {pizzasDesc.map((pizza) => (

            <Grid item key={ pizza.id } xs >
              <PaperPizza >
                <Pizza>
                  <PizzaText>
                    { pizza.size }cm
                  </PizzaText>
                </Pizza>

                <Divider />

                <Typography variant='h6' >
                  { pizza.name }
                </Typography>

                <Typography>
                  { pizza.slices } fatias, { ' ' }
                  { pizza.flavours } {' '}
                  { singularOrPlural(pizza.flavours, 'sabor', 'sabores') }
                </Typography>

              </PaperPizza>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
    </>
  );
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

const pizzasDesc = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },

  {
    id: 1,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },

  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  },
];

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={ classes.main } />
));

export default Main;

import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import {
  Typography,
  Grid,
  withStyles
} from '@material-ui/core';
import {
  Title,
  Content,
  PaperPizza,
  Pizza,
  PizzaText,
  Divider,
  PizzasGrid
} from './styles.js';
import Header from './header';

function Main () {
  const { userInfo } = useContext(AuthContext);
  const userName = userInfo.user.displayName.split(' ')[0];

  return (
    <>
      <Header />

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

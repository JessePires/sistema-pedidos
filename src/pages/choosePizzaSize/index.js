import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Grid, Typography } from '@material-ui/core';
import {
  Title,
  PaperPizza,
  Pizza,
  PizzaText,
  Divider,
  PizzasGrid
} from './styles.js';

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <Grid
        container
        direction='column'
        alignItems='center'
      >
        <Title variant='h4' >
          O que vai ser hoje, {userInfo.user.firstName}?
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
    </>
  );
};

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

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

export default ChoosePizzaSize;

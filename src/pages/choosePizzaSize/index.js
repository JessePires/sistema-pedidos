import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import {
  Grid,
  Card,
  Typography
} from '@material-ui/core';
import {
  Title,
  CardActionArea,
  Pizza,
  PizzaText,
  Divider,
  PizzasGrid
} from './styles.js';
import pizzaSizes from 'fakeData/pizzaSizes';

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
        {pizzaSizes.map((pizza) => (

          <Grid item key={ pizza.id } xs >
            <Card>
              <CardActionArea to={{
                pathname: '/sabores-da-pizza',
                state: pizza
              }}>
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
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
};

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

export default ChoosePizzaSize;

import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import {
  Grid,
  Card,
  Typography
} from '@material-ui/core';
import {
  CardActionArea,
  Pizza,
  PizzaText
} from './styles.js';
import { H4, H5} from 'ui/title';
import PizzasGrid from 'ui/pizzasGrid';
import HeaderContent from 'ui/headerContent';
import Divider from 'ui/divider';
import pizzaSizes from 'fakeData/pizzaSizes';
import { CHOOSE_PIZZA_FLAVOURS } from 'routes';
import { singularOrPlural } from 'utils';

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <HeaderContent>
        <H4>
          O que vai ser hoje, {userInfo.user.firstName}?
        </H4>

        <H5>
          Escolha o tamanho da pizza:
        </H5>
      </HeaderContent>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (

          <Grid item key={ pizza.id } xs >
            <Card>
              <CardActionArea to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
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

export default ChoosePizzaSize;

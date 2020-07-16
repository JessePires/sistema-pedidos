import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  Typography
} from '@material-ui/core';
import { Img } from './styles';
import { H4 } from 'ui/title';
import HeaderContent from 'ui/headerContent';
import PizzasGrid from 'ui/pizzasGrid';
import Divider from  'ui/divider';
import { singularOrPlural } from 'utils';
import { HOME } from 'routes';
import pizzaFlavours from 'fakeData/pizzaFlavours';

const ChoosePizzaFlavours = ({ location }) => {
  console.log('location:', location);

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  const { flavours, id } = location.state;

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até { flavours } {' '}
          { singularOrPlural(flavours, 'sabor', 'sabores') }:
        </H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid
            item
            key={ pizza.id }
            xs
          >
            <Card>
              <Img src={ pizza.image } alt={ pizza.name } />

              <Divider />

              <Typography>
                { pizza.name }
              </Typography>

              <Typography variant='h5' >
                R${ pizza.value[id] }
              </Typography>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
};

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
};

export default ChoosePizzaFlavours;

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography
} from '@material-ui/core';
import {
  Img,
  Card,
  Label,
  Checkbox
} from './styles';
import Content from 'ui/content.js';
import { H4 } from 'ui/title';
import HeaderContent from 'ui/headerContent';
import PizzasGrid from 'ui/pizzasGrid';
import Divider from  'ui/divider';
import Footer from 'ui/footer';
import { toMoney, singularOrPlural } from 'utils';
import { HOME } from 'routes';

import pizzaFlavours from 'fakeData/pizzaFlavours';

const ChoosePizzaFlavours = ({ location }) => {
  const [ checkboxes, setCheckboxes ] = useState(() => ({}));

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  const { flavours, id } = location.state;

  const handleChangeCheckbox = (pizzaId) => (e) => {
    console.log('checkboxes:', checkboxes);

    if (checkboxesChecked(checkboxes).length === flavours
      && e.target.checked === true) {
      return
    }

    setCheckboxes((checkboxes) => ({
      ...checkboxes,
      [pizzaId]: e.target.checked
    }));
  };

  return (
    <>
      <Content>
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
              <Card checked={ !!checkboxes[pizza.id] } >
                <Label>
                  <Checkbox
                    checked={ !!checkboxes[pizza.id] }
                    onChange={ handleChangeCheckbox(pizza.id) }
                  />

                  <Img src={ pizza.image } alt={ pizza.name } />

                  <Divider />

                  <Typography>
                    { pizza.name }
                  </Typography>

                  <Typography variant='h5' >
                    { toMoney(pizza.value[id]) }
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

      <Footer />
    </>
  );
};

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean);
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
};

export default ChoosePizzaFlavours;

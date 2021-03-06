import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useCollection } from 'hooks';
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
import Footer from 'ui/footer/footer';
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes';
import { toMoney, singularOrPlural } from 'utils';

const ChoosePizzaFlavours = ({ location }) => {
  const [ checkboxes, setCheckboxes ] = useState(() => ({}));
  const pizzasFlavours = useCollection('pizzasFlavours');

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  if (!pizzasFlavours) {
    return 'Carregando sabores...';
  }

  if (pizzasFlavours.legnth === 0) {
    return 'Não há dados!';
  }

  const { flavours, id } = location.state.pizzaSize;

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
          {pizzasFlavours.map((pizza) => (
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

      <Footer
        buttons={{
          back: {
            children: 'Mudar Tamanho'
          },

          action: {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzasFlavours: getFlavoursNameAndId({
                  checkboxes,
                  pizzasFlavours
                })
              },
            },

            children: 'Quantas pizzas?',
            disabled: checkboxesChecked(checkboxes).length === 0
          }
        }}
      />
    </>
  );
};

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean);
}

function getFlavoursNameAndId ({ checkboxes, pizzasFlavours }) {
  return Object.entries(checkboxes)
    .filter(([ , value ]) => Boolean(value))
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((flavour) => flavour.id === id).name
    }));
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
};

export default ChoosePizzaFlavours;

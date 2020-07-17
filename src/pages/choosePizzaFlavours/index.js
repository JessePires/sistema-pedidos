import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import {
  Img,
  Card,
  Label,
  Checkbox,
  Footer,
  OrderContainer,
  Button
} from './styles';
import Content from 'ui/content.js';
import { H4 } from 'ui/title';
import HeaderContent from 'ui/headerContent';
import PizzasGrid from 'ui/pizzasGrid';
import Divider from  'ui/divider';
import { toMoney, singularOrPlural } from 'utils';
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes';
import { AuthContext } from 'contexts/auth';

import pizzaFlavours from 'fakeData/pizzaFlavours';

const ChoosePizzaFlavours = ({ location }) => {
  const [ checkboxes, setCheckboxes ] = useState(() => ({}));
  const { userInfo } = useContext(AuthContext);

  console.log('userInfo: ', userInfo);

  console.log('checkboxes:', checkboxes);

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  const { flavours, id, name, slices } = location.state;

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

      <Footer>
        <Container>
          <Grid container >
            <OrderContainer>
              <Typography>
                <b>{ userInfo.user.firstName }, seu pedido é:</b>
              </Typography>

              <Typography>
                Pizza <b>{ name.toUpperCase() }</b> { ' - ' }
                ({ slices } fatias, { flavours } {' '}
                { singularOrPlural(flavours, 'sabor', 'sabores') })
              </Typography>Home
            </OrderContainer>

            <Grid item >
              <Button to={ HOME } >
                Mudar Tamanho
              </Button>

              <Button to={ CHOOSE_PIZZA_QUANTITY } color='primary' >
                Quantas Pizzas?
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Footer>
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

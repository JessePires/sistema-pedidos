import React from 'react';
import { useOrder } from 'hooks';
import {
  List,
  Typography,
  IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { ListItem } from './styles';
import { singularOrPlural } from 'utils';

function OrderInfo () {
  const { order } = useOrder();

  return (
    <List>
      {order.pizzas.map((pizza, index) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza;
        const { name, slices, flavours } = pizzaSize;

        return (
          <ListItem key={ index }>
            <Typography>
              <b>{ quantity }</b> {' '}
              { singularOrPlural(quantity, 'Pizza', 'Pizzas') } {' '}
              <b>{ name.toUpperCase() }</b> { ' - ' }
              ({ slices } fatias, { flavours } {' '}
              { singularOrPlural(flavours, 'sabor', 'sabores') })

              <br />

              { singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores') } {' '}
              <b>{ pizzaFlavours.map(({ name }) => name).join(', ') }</b>
            </Typography>

            <IconButton title='Remover' color='secondary' >
              <Close />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default OrderInfo;

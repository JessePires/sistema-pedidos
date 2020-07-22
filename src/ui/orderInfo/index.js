import React from 'react';
import PropTypes from 'prop-types';
import { useOrder } from 'hooks';
import {
  List,
  Typography,
  IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { ListItem } from './styles';
import { singularOrPlural } from 'utils';

function OrderInfo ({ showOptions }) {
  const { order, removePizzaFromOrder } = useOrder();
  console.log('orderInfo:', order);

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza;
        const { name, slices, flavours } = pizzaSize;

        return (
          <ListItem key={ pizza.id }>
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

            {showOptions && (
              <IconButton
                title='Remover'
                color='secondary'
                onClick={ () => removePizzaFromOrder(pizza.id) }
              >
                <Close />
              </IconButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}

OrderInfo.propTypes = {
  showOptions: PropTypes.bool
};

export default OrderInfo;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import {
  Grid,
  Typography
} from '@material-ui/core';
import {
  OrderContainer,
  ButtonsContainer,
  Button
} from './styles';
import { singularOrPlural } from 'utils';

function FooterWithOrderAndButtons ({ buttons, history, location }) {
  const { userInfo } = useAuth();

  const { pizzaSize, pizzasFlavours } = location.state;
  const { name, slices, flavours } = pizzaSize;

  console.log('pizzaFlavours: ', pizzasFlavours);

  return (
    <Grid container >
      <OrderContainer>
        <Typography>
          <b>{ userInfo.user.firstName }, seu pedido é:</b>
        </Typography>

        <Typography>
          Pizza <b>{ name.toUpperCase() }</b> { ' - ' }
          ({ slices } fatias, { flavours } {' '}
          { singularOrPlural(flavours, 'sabor', 'sabores') })
        </Typography>

        {pizzasFlavours && (
          <Typography>
            { singularOrPlural(pizzasFlavours.length, 'no sabor', 'nos sabores') } {' '}
            <b>{ pizzasFlavours.map(({ name }) => name).join(', ') }</b>
          </Typography>
        )}
      </OrderContainer>

      <ButtonsContainer>
        <Button
          { ...buttons.back }
          component='a'
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        />

        <Button
          { ...buttons.action }
          component={ Link }
          color='primary'
        />
      </ButtonsContainer>
    </Grid>
  );
}

FooterWithOrderAndButtons.propTypes = {
  buttons: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(FooterWithOrderAndButtons);

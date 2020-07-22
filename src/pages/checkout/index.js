import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useOrder } from 'hooks';
import {
  Grid,
  Button
} from '@material-ui/core';
import Content from 'ui/content';
import OrderInfo from 'ui/orderInfo';
import {
  UiTitle,
  PaperContainer
} from './styles';
import TextField from './textField';
import FooterCheckout from './footerCheckout';
import FormAddress from './formAddress';
import { CHECKOUT_CONFIRMATION, HOME } from 'routes';

function Checkout () {
  const { order } = useOrder();

  if (!order.pizzas.length) {
    return <Redirect to={ HOME } />
  }

  return (
    <>
      <Content>
        <Grid
          container
          spacing={ 4 }
        >
          <Grid
            item
            xs={ 12 }
            md={ 6 }
          >
            <UiTitle>Qual o endereço de entrega?</UiTitle>

            <PaperContainer>
              <FormAddress />
            </PaperContainer>

            <UiTitle>Qual o seu telefone?</UiTitle>

            <PaperContainer>
              <TextField label='Telefone' xs={ 4 } />
            </PaperContainer>
          </Grid>

          <Grid
            container
            item
            xs={ 12 }
            md={ 6 }
            direction='column'
          >
            <UiTitle>Informações do seu pedido:</UiTitle>

            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant='contained'
          color='primary'
          component={ Link }
          to={ CHECKOUT_CONFIRMATION }
        >
          Confirmar Pedido
        </Button>
      </FooterCheckout>
    </>
  );
}

export default Checkout;

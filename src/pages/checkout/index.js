import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField as MaterialTextField,
  Button
} from '@material-ui/core';
import Content from 'ui/content';
import OrderInfo from 'ui/orderInfo';
import {
  UiTitle,
  PaperContainer
} from './styles';
import FooterCheckout from './footerCheckout';
import { CHECKOUT_CONFIRMATION } from 'routes';

function Checkout () {
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
              <Grid container spacing={ 2 } >
                <TextField label='CEP' xs={ 4 } autoFocus />
                <Grid item xs={ 8 } />

                <TextField label='Rua' xs={ 9 } />

                <TextField label='Número' xs={ 3 } />

                <TextField label='Complemento' xs={ 12 } />

                <TextField label='Cidade' xs={ 9 } />

                <TextField label='Estado' xs={ 3 } />
              </Grid>
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
          Confirmar Dados
        </Button>
      </FooterCheckout>
    </>
  );
}

function TextField ({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={ xs } >
      <MaterialTextField
        variant='outlined'
        fullWidth
        inputProps={{ autoFocus }}
        { ...props }
      />
    </Grid>
  );
}

TextField.propTypes = {
  xs: PropTypes.number,
  autoFocus: PropTypes.bool
};

export default Checkout;

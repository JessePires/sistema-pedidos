import React from 'react';
import {
  Grid
} from '@material-ui/core';
import Content from 'ui/content';
import {
  UiTitle,
  PaperContainer
} from './styles';

function Checkout () {
  return (
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

          <PaperContainer>Endereço para entrega</PaperContainer>

          <UiTitle>Qual o seu telefone?</UiTitle>

          <PaperContainer>Telefone</PaperContainer>
        </Grid>

        <Grid
          container
          item
          xs={ 12 }
          md={ 6 }
          direction='column'
        >
          <UiTitle>Informações do seu pedido:</UiTitle>

          <PaperContainer>Pedido</PaperContainer>
        </Grid>
      </Grid>
    </Content>
  );
}

export default Checkout;

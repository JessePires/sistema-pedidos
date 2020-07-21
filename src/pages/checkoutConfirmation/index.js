import React from 'react';
import { useAuth } from 'hooks';
import {
  Typography,
  Container
} from '@material-ui/core';
import Content from 'ui/content';
import { H4 } from 'ui/title';
import OrderInfo from 'ui/orderInfo';
import {
  Header,
  PaperContainer
} from './styles';

function CheckoutConfirmation () {
  const { userInfo } = useAuth();

  return (
    <>
      <Content>
        <Header>
          <H4>Oi, { userInfo.user.firstName }!</H4>

          <Typography>
            Confere, por favor, se está tudo certo com seu pedido antes de finalizar?
          </Typography>
        </Header>

        <Container maxWidth='sm' >
          <PaperContainer>
            <Typography variant='h6' >Seu pedido:</Typography>
            <OrderInfo />
          </PaperContainer>
        </Container>
      </Content>
    </>
  );
}

export default CheckoutConfirmation;

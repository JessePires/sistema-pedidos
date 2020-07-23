import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useOrder } from 'hooks';
import FooterCheckout from 'pages/checkout/footerCheckout';
import {
  Typography,
  Container,
  Button
} from '@material-ui/core';
import Content from 'ui/content';
import { H4, H6 } from 'ui/title';
import OrderInfo from 'ui/orderInfo';
import {
  Header,
  PaperContainer,
  Divider
} from './styles';
import { HOME } from 'routes';

function CheckoutSuccess () {
  const { userInfo } = useAuth();
  const { order } = useOrder();

  return (
    <>
      <Content>
        <Header>
          <H4>Prontinho, { userInfo.user.firstName }!</H4>

          <Typography>
            Seu pedido será entregue no endereço abaixo até
          </Typography>

          <H6>
            40 minutos
          </H6>
        </Header>

        <Container maxWidth='sm' >
          <PaperContainer>
            <H6>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <H6>Endereço para entrega:</H6>
            <Typography>
              { order.address.address },
              { ' n' } { order.address.number },
              {' '} { order.address.complement } <br/>
              Bairro: {
                order.address.district === ''
                ? 'Centro'
                : order.address.district
              } <br/>
              CEP: { order.address.code } <br/>
              { order.address.city }/{ order.address.state }
            </Typography>

            <Divider />

            <H6>Telefone para contato:</H6>
            <Typography>
              { order.phone }
            </Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center' >
        <Button
          variant='contained'
          color='secondary'
          size='large'
          component={ Link }
          to={ HOME }
        >
          Voltar para página inicial
        </Button>
      </FooterCheckout>
    </>
  );
}

export default CheckoutSuccess;

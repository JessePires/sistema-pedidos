import React from 'react';
import { useAuth } from 'hooks';
import FooterCheckout from 'pages/checkout/footerCheckout';
import {
  Typography,
  Container,
  Button
} from '@material-ui/core';
import Content from 'ui/content';
import {
  H4,
  H6
} from 'ui/title';
import OrderInfo from 'ui/orderInfo';
import {
  Header,
  PaperContainer,
  Divider
} from './styles';

function CheckoutSuccess () {
  const { userInfo } = useAuth();

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
              Rua tal, 10, complemento, bairro, CEP: 87365-000 - Cidade/UF
            </Typography>

            <Divider />

            <H6>Telefone para contato:</H6>
            <Typography>
              (44) 9 9897-1134
            </Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center' >
        <Button
          variant='contained'
          color='secondary'
          size='large'
        >
          Voltar para página inicial
        </Button>
      </FooterCheckout>
    </>
  );
}

export default CheckoutSuccess;

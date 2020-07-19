import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Button as MaterialButton,
  Typography
} from '@material-ui/core';
import { useAuth } from 'hooks';
import { singularOrPlural } from 'utils';

function Footer ({ buttons, history, location }) {
  const { userInfo } = useAuth();

  const { pizzaSize, pizzaFlavours } = location.state;
  const { name, slices, flavours } = pizzaSize;

  console.log('pizzaFlavours: ', pizzaFlavours);

  return (
    <FooterContent>
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
            </Typography>

            {pizzaFlavours && (
              <Typography>
                { singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores') } {' '}
                <b>{ pizzaFlavours.map(({ name }) => name).join(', ') }</b>
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
      </Container>
    </FooterContent>
  );
}

const FooterContent = styled.footer`
  box-shadow: 0 0 3px ${ ({theme}) => theme.palette.grey[400] };
  padding: ${ ({theme}) => theme.spacing(2) }px;
`;

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`;

const ButtonsContainer = styled(Grid).attrs({
  item: true
})`
  & {
    display: flex;
    align-items: center
  }
`;

const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  & {
    margin-left: ${ ({theme}) => theme.spacing(2) }px;
  }
`;

Footer.propTypes = {
  buttons: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Footer);

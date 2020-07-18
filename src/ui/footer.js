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

function Footer ({ buttons, location }) {
  const { userInfo } = useAuth();
  const { name, slices, flavours } = location.state;

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
          </OrderContainer>

          <Grid item >
            {buttons.map((button) => (
              <Button key={ button.to } { ...button } />
            ))}
          </Grid>
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

const Button = styled(MaterialButton).attrs({
  variant: 'contained',
  component: Link
})`
  && {
    margin-left: ${ ({theme}) => theme.spacing(2) }px;
  }
`;

Footer.propTypes = {
  buttons: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Footer);

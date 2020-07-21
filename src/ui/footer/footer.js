import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import FooterWithOrderAndButtons from './footerWithOrderAndButtons';

const Footer = ({ children, ...props }) => (
  <FooterContent>
    <Container>
      { children || <FooterWithOrderAndButtons { ...props } /> }
    </Container>
  </FooterContent>
);


const FooterContent = styled.footer`
  box-shadow: 0 0 3px ${ ({theme}) => theme.palette.grey[400] };
  padding: ${ ({theme}) => theme.spacing(2) }px;
`;

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

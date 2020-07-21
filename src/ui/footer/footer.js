import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { FooterContent } from './styles';
import FooterWithOrderAndButtons from './footerWithOrderAndButtons';

const Footer = ({ children, ...props }) => (
  <FooterContent>
    <Container>
      { children || <FooterWithOrderAndButtons { ...props } /> }
    </Container>
  </FooterContent>
);

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

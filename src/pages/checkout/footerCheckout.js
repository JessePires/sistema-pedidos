import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'ui/footer/footer';
import { FooterContent } from './styles';

function FooterCheckout ({ children, justifyContent }) {
  return (
    <Footer>
      <FooterContent justifyContent={ justifyContent }>
        { children }
      </FooterContent>
    </Footer>
  );
}

FooterCheckout.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string
};

export default FooterCheckout;

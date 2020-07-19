import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from 'ui/content';
import HeaderContent from 'ui/headerContent';
import { H4 } from 'ui/title';
import Footer from 'ui/footer';
import {
  Input,
  MainContent
} from './styles';
import { HOME } from 'routes';

function ChoosePizzaQuantity ({ location }) {
  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            Quantas pizzas você gostaria <br />
            de pedir com esses sabores
          </H4>
        </HeaderContent>

        <MainContent>
          <Input defaultValue='1' autoFocus />
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar Sabores'
          },

          action: {
            to: '/',
            children: 'Finalizar Compra',
          }
        }}
      />
    </>
  );
}

ChoosePizzaQuantity.propTypes = {
  location: PropTypes.object.isRequired
};

export default ChoosePizzaQuantity;

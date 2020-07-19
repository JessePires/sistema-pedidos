import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from 'ui/content';
import HeaderContent from 'ui/headerContent';
import { H4 } from 'ui/title';
import Footer from 'ui/footer';
import { Button } from '@material-ui/core';
import {
  Input,
  MainContent
} from './styles';
import { HOME, CHECKOUT } from 'routes';

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1);

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  function handleChange (e) {
    const { value } = e.target;

    if (value >= 1) {
      setQuantity(e.target.value);
    }
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
          <Input
            value={ quantity }
            onChange={ handleChange }
            autoFocus
          />

          <Button variant='contained' color='secondary' >
            Adicionar e <br/>
            montar outra
          </Button>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar Sabores'
          },

          action: {
            to: CHECKOUT,
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

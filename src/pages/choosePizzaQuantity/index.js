import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from 'ui/content';
import HeaderContent from 'ui/headerContent';
import { H4 } from 'ui/title';
import Footer from 'ui/footer';
import {
  Input,
  MainContent,
  ButtonAddPizza
} from './styles';
import { HOME, CHECKOUT } from 'routes';
import { useOrder } from 'hooks';

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1);
  const { order, addPizzaToOrder } = useOrder();

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  console.log('order:', order);

  function handleChange (e) {
    const { value } = e.target;

    if (value >= 1) {
      setQuantity(value);
    }
  }

  function addPizza () {
    addPizzaToOrder({
      size: location.state.pizzaSize,
      flavours: location.state.pizzaFlavours.map(flavour => flavour.id),
      quantity
    });
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

          <ButtonAddPizza
            to={ HOME }
            onClick={ addPizza }
          >
            Adicionar e <br/>
            montar outra
          </ButtonAddPizza>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar Sabores'
          },

          action: {
            to: CHECKOUT,
            onClick: addPizza,
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

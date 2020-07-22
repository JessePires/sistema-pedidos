import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import uuidV4 from 'uuid/v4';

export const OrderContext = createContext();

function Order ({ children }) {
  const [ pizzas, addPizza ] = useState([]);
  const [ orderInProgress, setOrderInProgress ] = useState(false);

  function newPizza (pizza) {
    return {
      id: uuidV4(),
      ...pizza
    };
  }

  function addPizzaToOrder (pizza) {
    if (orderInProgress) {
      addPizza((pizzas) => pizzas.concat(newPizza(pizza)));
    }

    setOrderInProgress(true);
    addPizza([ newPizza(pizza) ]);
  };

  function removePizzaFromOrder (id) {
    console.log('RemovePizzaFromOrder => id: ', id);

    addPizza((pizzas) => pizzas.filter(pizza => pizza.id !== id));
  };

  function sendOrder () {
    console.log('send order');

    setOrderInProgress(false);
  };

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder,
      removePizzaFromOrder,
      sendOrder
    }} >
      { children }
    </OrderContext.Provider>
  );
}

Order.propTypes = {
  children: PropTypes.node.isRequired
};

export default Order;

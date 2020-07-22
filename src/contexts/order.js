import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const OrderContext = createContext();

function Order ({ children }) {
  const [ pizzas, addPizza ] = useState([]);
  const [ orderInProgress, setOrderInProgress ] = useState(false);

  function addPizzaToOrder (pizza) {
    if (orderInProgress) {
      addPizza((pizzas) => pizzas.concat(pizza));
    }

    setOrderInProgress(true);
    addPizza([pizza]);
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

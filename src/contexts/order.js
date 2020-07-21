import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const OrderContext = createContext();

function Order ({ children }) {
  const [ pizzas, addPizza ] = useState([]);

  function addPizzaToOrder (pizza) {
    addPizza((pizzas) => pizzas.concat(pizza))
  };

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder
    }} >
      { children }
    </OrderContext.Provider>
  );
}

Order.propTypes = {
  children: PropTypes.node.isRequired
};

export default Order;

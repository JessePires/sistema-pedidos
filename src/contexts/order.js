import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const OrderContext = createContext();

function Order ({ children }) {
  function addPizzaToOrder (pizza) {
    console.log('pizza order:', pizza);
  };

  return (
    <OrderContext.Provider value={{
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

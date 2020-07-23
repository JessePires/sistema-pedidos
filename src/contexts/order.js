import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const OrderContext = createContext();

function Order ({ children }) {
  const [ pizzas, addPizza ] = useState([]);
  const [ address, addAddress ] = useState({});
  const [ phone, addPhone ] = useState('');
  const [ orderInProgress, setOrderInProgress ] = useState(false);

  function addPizzaToOrder (pizza) {
    if (orderInProgress) {
      return addPizza(pizzas => pizzas.concat(newPizza(pizza)));
    }

    setOrderInProgress(true);
    addPizza([ newPizza(pizza) ]);
  };

  function newPizza (pizza) {
    return {
      id: uuidv4(),
      ...pizza
    };
  }

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
        pizzas,
        address,
        phone
      },
      addPizzaToOrder,
      addAddress,
      addPhone,
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

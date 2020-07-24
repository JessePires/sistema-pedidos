import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import { v4 as uuidv4 } from 'uuid';
import firebase, { db } from 'services/firebase';

export const OrderContext = createContext();

function Order ({ children }) {
  const [ pizzas, addPizza ] = useState([]);
  const [ address, addAddress ] = useState({});
  const [ phone, addPhone ] = useState('');
  const [ orderInProgress, setOrderInProgress ] = useState(false);
  const { userInfo } = useAuth();

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

  async function sendOrder () {
    console.log('send order');

    try {
      await db.collection('orders').add({
        userId: userInfo.user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        address,
        phone,
        pizzas: pizzas.map(pizza => ({
          size: pizza.pizzaSize,
          flavours: pizza.pizzasFlavours,
          quantity: pizza.quantity
        }))
      });
    } catch (e) {
      console.log('erro ao salvar pedido:', e);
    }

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

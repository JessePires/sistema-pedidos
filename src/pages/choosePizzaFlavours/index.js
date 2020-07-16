import React from 'react';
import PropTypes from 'prop-types';

const ChoosePizzaFlavours = ({ location }) => {
  console.log('location:', location);

  return (
    <h1>Escolha o sabor da pizza</h1>
  );
};

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
};

export default ChoosePizzaFlavours;

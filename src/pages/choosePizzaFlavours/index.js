import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { H4 } from 'ui/title';
import HeaderContent from 'ui/headerContent';
import { singularOrPlural } from 'utils';
import { HOME } from 'routes';

const ChoosePizzaFlavours = ({ location }) => {
  console.log('location:', location);

  if (!location.state) {
    return <Redirect to={ HOME } />
  }

  const { flavours } = location.state;

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até { flavours } {' '}
          { singularOrPlural(flavours, 'sabor', 'sabores') }:
        </H4>
      </HeaderContent>
    </>
  );
};

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
};

export default ChoosePizzaFlavours;

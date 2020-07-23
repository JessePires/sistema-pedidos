import React from 'react';
import { useAuth, useCollection } from 'hooks';
import {
  Grid,
  Card,
  Typography
} from '@material-ui/core';
import {
  Pizza,
  PizzaText
} from './styles.js';
import Content from 'ui/content';
import { H4, H5} from 'ui/title';
import PizzasGrid from 'ui/pizzasGrid';
import HeaderContent from 'ui/headerContent';
import Divider from 'ui/divider';
import CardLink from 'ui/cardLink';
import { CHOOSE_PIZZA_FLAVOURS } from 'routes';
import { singularOrPlural } from 'utils';

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth();
  const pizzasSizes = useCollection('pizzasSizes');

  if (!pizzasSizes) {
    return 'Carregando tamanhos...';
  }

  if (pizzasSizes.length === 0) {
    return 'Não há dados!';
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            O que vai ser hoje, {userInfo.user.firstName}?
          </H4>

          <H5>
            Escolha o tamanho da pizza:
          </H5>
        </HeaderContent>

        <PizzasGrid>
          {pizzasSizes.map((pizza) => (

            <Grid item key={ pizza.id } xs >
              <Card>
                <CardLink to={{
                  pathname: CHOOSE_PIZZA_FLAVOURS,
                  state: {
                    pizzaSize: pizza
                  }
                }}>
                  <Pizza>
                    <PizzaText>
                      { pizza.size }cm
                    </PizzaText>
                  </Pizza>

                  <Divider />

                  <Typography variant='h6' >
                    { pizza.name }
                  </Typography>

                  <Typography>
                    { pizza.slices } fatias, { ' ' }
                    { pizza.flavours } {' '}
                    { singularOrPlural(pizza.flavours, 'sabor', 'sabores') }
                  </Typography>
                </CardLink>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
    </>
  );
};

export default ChoosePizzaSize;

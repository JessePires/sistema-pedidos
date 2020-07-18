import React from 'react';
import Content from 'ui/content';
import HeaderContent from 'ui/headerContent';
import { H4 } from 'ui/title';
import {
  Input,
  MainContent
} from './styles';

function ChoosePizzaQuantity () {
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
          <Input defaultValue='1' autoFocus />
        </MainContent>
      </Content>
    </>
  );
}

export default ChoosePizzaQuantity;

import styled from 'styled-components';
import { Card as MaterialCard } from '@material-ui/core';
import CardLink from 'ui/cardLink';

export const Img = styled.img`
  width: 200px;
`;

export const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ checked }) => checked === true ? '#000' : ''};
`;

export const Label = styled(CardLink).attrs({
  component: 'label'
})``;

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

import styled from 'styled-components';
import { Card as MaterialCard } from '@material-ui/core';
import CardLink from 'ui/cardLink';

export const Img = styled.img`
  width: 200px;
`;

export const Card = styled(MaterialCard)`
  && {
    border: 2px solid transparent;
    border-color: ${({ theme, checked }) =>
      checked === true
      ? theme.palette.secondary.light
      : ''
    };
  }
`;

export const Label = styled(CardLink).attrs({
  component: 'label'
})``;

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

export const Footer = styled.footer`
  box-shadow: 0 0 3px ${ ({theme}) => theme.palette.grey[400] };
  padding: ${ ({theme}) => theme.spacing(2) }px;
`;

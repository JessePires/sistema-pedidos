import styled from 'styled-components';
import {
  Typography,
} from '@material-ui/core';

export const Pizza = styled.div`
  height: 200px;
  width: 200px;
  background: ${ ({theme}) =>  theme.palette.common.white };
  border: 1px solid ${ ({theme}) => theme.palette.grey[400] };
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    background: ${ ({theme}) => theme.palette.grey[400] };
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    width: 160px;
    height: 1px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`;

export const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  & {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: ${ ({theme}) => theme.palette.common.white };
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }
`;

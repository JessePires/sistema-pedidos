import styled from 'styled-components';
import {
  Typography,
  Paper,
  Grid,
  Divider as MaterialDivider
} from '@material-ui/core';

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``;

export const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  min-width: 250px;
`;

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px,
`;

export const Pizza = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: '';
    background: #ccc;
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
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`;

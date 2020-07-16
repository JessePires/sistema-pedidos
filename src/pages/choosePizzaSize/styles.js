import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  CardActionArea as MaterialCardActionArea,
  Typography,
} from '@material-ui/core';

export const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  min-width: 250px;
`;

export const Pizza = styled.div`
  height: 200px;
  width: 200px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

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

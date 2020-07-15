import styled from 'styled-components';
import {
  Toolbar as MaterialToolbar,
  Grid,
  Divider as MaterialDivider,
  Paper,
  Typography
} from '@material-ui/core';
import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg';

export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`;

export const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px,
`;

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`;

export const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  min-width: 250px;
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

export const Content = styled.main`
  padding: 20px;
`;

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``;

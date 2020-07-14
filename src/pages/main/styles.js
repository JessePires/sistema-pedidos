import styled from 'styled-components';
import { Toolbar as MaterialToolbar } from '@material-ui/core';
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

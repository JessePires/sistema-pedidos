import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Toolbar as MaterialToolbar,
} from '@material-ui/core';

export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const LogoCheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const Toolbar = styled(MaterialToolbar)`
  & {
    margin: 0 auto;
    max-width: ${ ({theme}) => theme.breakpoints.values.lg }px;
    width: 100%;
  }
`;

export const LinkLogo = styled(Link)`
  display: inline-block;
`;

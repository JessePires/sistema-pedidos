import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo-react-zzaria.svg';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  padding: 20px;
`;

export const StyledLogo = styled(Logo)`
  width: 100%;
`;

export const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    padding: 15px;
    max-width: 430px;
    text-transform: none;
  }
`;

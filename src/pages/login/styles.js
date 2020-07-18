import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo-react-zzaria.svg';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  padding: ${ ({ theme }) => theme.spacing(3) }px;
`;

export const StyledLogo = styled(Logo)`
  width: 100%;
`;

export const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  & {
    font-size: ${ ({theme}) => theme.typography.h5.fontSize };
    padding: ${ ({theme}) => theme.spacing(2) }px;
    max-width: 430px;
    text-transform: none;
  }
`;

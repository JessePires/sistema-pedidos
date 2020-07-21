import styled from 'styled-components';
import {
  Grid,
  Button as MaterialButton,
} from '@material-ui/core';

export const FooterContent = styled.footer`
  box-shadow: 0 0 3px ${ ({theme}) => theme.palette.grey[400] };
  padding: ${ ({theme}) => theme.spacing(2) }px;
`;

export const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`;

export const ButtonsContainer = styled(Grid).attrs({
  item: true
})`
  & {
    display: flex;
    align-items: center
  }
`;

export const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  & {
    margin-left: ${ ({theme}) => theme.spacing(2) }px;
  }
`;

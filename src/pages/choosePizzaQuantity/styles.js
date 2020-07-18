import styled from 'styled-components';
import { Input as MaterialInput } from '@material-ui/core';

export const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${ ({theme}) => theme.spacing(3) }px;
`;

import styled from 'styled-components';
import {
  Paper,
  Divider as MaterialDivider
} from '@material-ui/core';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${ ({ theme }) => theme.spacing(3) }px;
  text-align: center;
`;

export const PaperContainer = styled(Paper)`
  && {
    padding: ${ ({ theme }) => theme.spacing(3) }px;
  }
`;

export const Divider = styled(MaterialDivider)`
  margin: ${ ({ theme }) => theme.spacing(3, 0) };
`;

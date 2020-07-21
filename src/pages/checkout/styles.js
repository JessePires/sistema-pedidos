import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Title from 'ui/title';

export const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${ ({ theme }) => theme.spacing(5) }px;
    padding: ${ ({ theme }) => theme.spacing(2) }px;
  }
`;

export const UiTitle = styled(Title).attrs({
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`;

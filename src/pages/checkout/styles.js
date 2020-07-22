import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Title from 'ui/title';

export const UiTitle = styled(Title).attrs({
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`;

export const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${ ({ theme }) => theme.spacing(5) }px;
    padding: ${ ({ theme }) => theme.spacing(2) }px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: ${ ({ justifyContent }) => justifyContent || 'flex-end' };
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardActionArea } from '@material-ui/core';

const CardLink = styled(CardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${ ({theme}) => theme.spacing(3, 0) };
  min-width: 250px;
`;

export default CardLink;

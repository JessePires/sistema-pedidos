import styled from 'styled-components';
import CardLink from 'ui/cardLink';

export const Img = styled.img`
  width: 200px;
`;

export const Label = styled(CardLink).attrs({
  component: 'label'
})``;

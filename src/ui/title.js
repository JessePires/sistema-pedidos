import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``;

export const H4 = (props) => <Title variant='h4' { ...props } />
export const H5 = (props) => <Title variant='h5' { ...props } />

export default Title;
import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { ReactComponent as Logo } from './logo-react-zzaria.svg';
import { Container } from './style';

const Login = () => (
  <>
    <Container>
      <Grid
        container
        direction='column'
        alignItems='center'
        spacing={ 5 }
      >
        <Grid item >
          <Logo />
        </Grid>
        <Grid item >
          <Button>Entrar com o Github</Button>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default Login

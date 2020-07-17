import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, StyledLogo, GithubButton } from './styles';
import { useAuth } from 'hooks';

function Login () {
  const { login } = useAuth();

  return (
    <>
      <Container>
        <Grid
          container
          justify='center'
          spacing={ 5 }
        >
          <Grid item >
            <StyledLogo />
          </Grid>

          <Grid
            item
            xs={ 12 }
            container
            justify='center'
          >
            <GithubButton
              onClick={ login }
            >
              Entrar com o Github
            </GithubButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;

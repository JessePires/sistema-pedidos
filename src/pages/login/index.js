import React, { useState, useEffect, useCallback } from 'react';
import firebase from '../../services/firebase';
import { Button, Grid } from '@material-ui/core';
import { Container, StyledLogo, GithubButton } from './style';

function Login () {
  const [ userInfo, setUserInfo ] = useState({
    isUserLoggedIn: false,
    user: null
  });

  useEffect (() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      });
    });
  }, []);

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou');
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      });
    });
  }, []);

  const { isUserLoggedIn, user } = userInfo;

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

            {isUserLoggedIn && (
              <>
                <pre>{ user.displayName }</pre>

                <Button
                  variant='contained'
                  onClick={ logout }
                >
                  Sair
                </Button>
              </>
            )}

            { !isUserLoggedIn && (
              <GithubButton
                onClick={ login }
              >
                Entrar com o Github
              </GithubButton>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;

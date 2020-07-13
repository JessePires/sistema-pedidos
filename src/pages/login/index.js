import React, { PureComponent } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Grid } from '@material-ui/core';
import { Container, StyledLogo, GithubButton } from './style';

var firebaseConfig = {
  apiKey: 'AIzaSyA9HGweb4P6k0CoIL4sOZqKVjnyCbxNinE',
  authDomain: 'reactzzaria-260e2.firebaseapp.com',
  databaseURL: 'https://reactzzaria-260e2.firebaseio.com',
  projectId: 'reactzzaria-260e2',
  storageBucket: 'reactzzaria-260e2.appspot.com',
  messagingSenderId: '981257987857',
  appId: '1:981257987857:web:023004f63231c954a50eb0',
  measurementId: 'G-M9ZSPQ4YWN'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  };

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user);
      this.setState({
        isUserLoggedIn: !!user,
        user
      });
    });
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou');
      this.setState({
        isUserLoggedIn: false,
        user: null
      });
    });
  }

  login () {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render () {
    const { isUserLoggedIn, user } = this.state;

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
                    onClick={ this.logout }
                  >
                    Sair
                  </Button>
                </>
              )}

              { !isUserLoggedIn && (
                <GithubButton
                  onClick={ this.login }
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
}

export default Login

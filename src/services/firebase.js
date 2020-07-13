import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
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

export default firebase;

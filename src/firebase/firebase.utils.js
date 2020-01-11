import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBgEMefGuYjLS-2gBQDFB2n4bRPlmTXhVM',
  authDomain: 'react-commerce-d79b1.firebaseapp.com',
  databaseURL: 'https://react-commerce-d79b1.firebaseio.com',
  projectId: 'react-commerce-d79b1',
  storageBucket: 'react-commerce-d79b1.appspot.com',
  messagingSenderId: '781567725365',
  appId: '1:781567725365:web:5f9ff07281ee727767867c'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

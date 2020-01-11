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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(`error creating user: ${err}`);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

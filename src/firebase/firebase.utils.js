import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { API_KEY } from '../Env';

const config = {
    apiKey: API_KEY,
    authDomain: "clothing-ecommerce-1dc24.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-1dc24.firebaseio.com",
    projectId: "clothing-ecommerce-1dc24",
    storageBucket: "clothing-ecommerce-1dc24.appspot.com",
    messagingSenderId: "478273845912",
    appId: "1:478273845912:web:044ba2ee961b465a3d2eed"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
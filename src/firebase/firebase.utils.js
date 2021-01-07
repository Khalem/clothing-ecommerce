import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const API_KEY = process.env.REACT_APP_API_KEY;
const config = {
    apiKey: API_KEY,
    authDomain: "clothing-ecommerce-1dc24.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-1dc24.firebaseio.com",
    projectId: "clothing-ecommerce-1dc24",
    storageBucket: "clothing-ecommerce-1dc24.appspot.com",
    messagingSenderId: "478273845912",
    appId: "1:478273845912:web:044ba2ee961b465a3d2eed"
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
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
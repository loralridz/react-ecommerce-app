import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBqSML_S5-AmEwqxYwEeqJ-zHDoIPWkS8k",
  authDomain: "ecommerce-react-95b7a.firebaseapp.com",
  projectId: "ecommerce-react-95b7a",
  storageBucket: "ecommerce-react-95b7a.appspot.com",
  messagingSenderId: "340037531395",
  appId: "1:340037531395:web:75a38bf8c13e5aeb645b36",
  measurementId: "G-NN9J9F34SV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // query inside the firestore
  // console.log(firestore.doc('users/7687yhnh')) -> document refrence of this id
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot); snapshot represents the data
  if (!snapShot.exists) {
    // if user doesnt exist in db create one
    // we want the doc reference
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
      console.log(error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

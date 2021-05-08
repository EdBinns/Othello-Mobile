import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import GoogleSignIn from 'expo-google-sign-in';


const firebaseConfig = {
  apiKey: "AIzaSyDrExnnWCilz2i5VAEL6pKriqdFT7UGda4",
  authDomain: "mesajuegos-19401.firebaseapp.com",
  projectId: "mesajuegos-19401",
  storageBucket: "mesajuegos-19401.appspot.com",
  messagingSenderId: "349581276888",
  appId: "1:349581276888:web:15c7375ae7264c47d249ad"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const { idToken } = await GoogleSignIn.signInAsync();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  await auth().signInWithCredential(googleCredential)
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) {
    console.log("entro al primer if")
    return null;
  }
  try {
    console.log("entro al try")
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWtqEpdo5Y3TVY5mRpJiqsO0ondepgTR4",
  authDomain: "brandstore-b5d71.firebaseapp.com",
  projectId: "brandstore-b5d71",
  storageBucket: "brandstore-b5d71.firebasestorage.app",
  messagingSenderId: "1020033703494",
  appId: "1:1020033703494:web:0d8967650a22fcfa333447",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

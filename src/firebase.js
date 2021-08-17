import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUblwYhUqiIBIlMDgSKdrLaz5J2qGlWVw",
  authDomain: "url-shortener-84d19.firebaseapp.com",
  projectId: "url-shortener-84d19",
  storageBucket: "url-shortener-84d19.appspot.com",
  messagingSenderId: "321617610038",
  appId: "1:321617610038:web:6adc72feb35aab2715df97",
  measurementId: "G-WFTQYDW0G7",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

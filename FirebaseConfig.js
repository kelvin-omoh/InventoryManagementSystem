// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const firebaseConfig = {
//   apiKey: "AIzaSyCTna89SXaWXGA3IRKrMIQXRbAKqLyMFFw",
//   authDomain: "redux-21dee.firebaseapp.com",
//   databaseURL: "https://redux-21dee-default-rtdb.firebaseio.com",
//   projectId: "redux-21dee",
//   storageBucket: "redux-21dee.appspot.com",
//   messagingSenderId: "422168044138",
//   appId: "1:422168044138:web:1328f53b66012328f12013",
//   measurementId: "G-RG1NHE3TV0"
// };





const firebaseConfig = {
  apiKey: "AIzaSyAygFmC-fuKmUkWwy0jvYlINRkycNR3QpY",
  authDomain: "fb-crud-10eb9.firebaseapp.com",
  databaseURL: "https://fb-crud-10eb9-default-rtdb.firebaseio.com",
  projectId: "fb-crud-10eb9",
  storageBucket: "fb-crud-10eb9.appspot.com",
  messagingSenderId: "751757775811",
  appId: "1:751757775811:web:d6068b17f36bf4823f6376"
};

// export const firestore = firebase.firestore();
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

export default firebase;
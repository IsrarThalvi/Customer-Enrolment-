// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCigLUX5knkQD8Bg2mHp0W6Ln-s8B-fvYo",
  authDomain: "customer-enrolment.firebaseapp.com",
  projectId: "customer-enrolment",
  storageBucket: "customer-enrolment.appspot.com",
  messagingSenderId: "1086379630123",
  appId: "1:1086379630123:web:26ce3cbf19f8e9629d146e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = firebaseApp.firestore();
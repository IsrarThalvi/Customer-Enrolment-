import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBRPNpaiwiXPow1qmAOXJunoDu1sIHj5M",
  authDomain: "signin-signup-model.firebaseapp.com",
  projectId: "signin-signup-model",
  storageBucket: "signin-signup-model.appspot.com",
  messagingSenderId: "640465755853",
  appId: "1:640465755853:web:3a16d5fbba005a78f79384"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
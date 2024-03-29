import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOalEIuFgWvnpka4R-iMF3z4p_H4ObD7c",
  authDomain: "cutomer-enrollment.firebaseapp.com",
  projectId: "cutomer-enrollment",
  storageBucket: "cutomer-enrollment.appspot.com",
  messagingSenderId: "271930487548",
  appId: "1:271930487548:web:b035457a50c8e8cd5a5d79"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
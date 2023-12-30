import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm-gSwaA_Pc1U06Hn8UPqXc4jxgL8OTts",
  authDomain: "jas-fatto.firebaseapp.com",
  projectId: "jas-fatto",
  storageBucket: "jas-fatto.appspot.com",
  messagingSenderId: "559657552981",
  appId: "1:559657552981:web:8b93ac7a222f06a4d998dc",
  measurementId: "G-9QGGVQJVM6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fs = firebase.firestore();

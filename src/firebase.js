// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxrVP8o8kcy7f3o0bVSyLkH063s3Vt9Yw",
  authDomain: "voting-92eee.firebaseapp.com",
  projectId: "voting-92eee",
  storageBucket: "voting-92eee.appspot.com",
  messagingSenderId: "486487332387",
  appId: "1:486487332387:web:4ab1c39f89ac6428150396",
  measurementId: "G-WZ2DNLLP87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);

export {app , auth, db };
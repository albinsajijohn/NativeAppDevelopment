// config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqItWlHcKpExaT8lnL8tc5ozcAlY6Eph0",
  authDomain: "reactnativeapp-367dc.firebaseapp.com",
  projectId: "reactnativeapp-367dc",
  storageBucket: "reactnativeapp-367dc.appspot.com",
  messagingSenderId: "691280557589",
  appId: "1:691280557589:web:07798304484be3bc54c01c",
  measurementId: "G-4D2D9SD6D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

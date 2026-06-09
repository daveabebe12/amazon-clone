// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import "firebase/firestore"
import "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhDjeng3H6rdis7xjTCi2eigDQ1X3tNBw",
  authDomain: "clone-5dddc.firebaseapp.com",
  projectId: "clone-5dddc",
  storageBucket: "clone-5dddc.firebasestorage.app",
  messagingSenderId: "66207900754",
  appId: "1:66207900754:web:91f2f1023707e0889b6b8b",
  measurementId: "G-XPWDVV74HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
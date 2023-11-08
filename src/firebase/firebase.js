// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5etr5bhH4fs6NjNJyMRkCEU3J5a0-CY0",
  authDomain: "mozisha-47b2f.firebaseapp.com",
  projectId: "mozisha-47b2f",
  storageBucket: "mozisha-47b2f.appspot.com",
  messagingSenderId: "358610117260",
  appId: "1:358610117260:web:7c723eebd41575dc5c51a9",
  measurementId: "G-HKFG22JMDR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const db = getFirestore(app);

export { database, db };
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
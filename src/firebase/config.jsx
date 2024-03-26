// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxYRLND4pAs3em34kRafaehEgax1MamXo",
  authDomain: "cspproject-18786.firebaseapp.com",
  projectId: "cspproject-18786",
  storageBucket: "cspproject-18786.appspot.com",
  messagingSenderId: "342284241506",
  appId: "1:342284241506:web:528157e4f9551c1adb5f3b",
  measurementId: "G-B4HKEX56GB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const storage = getStorage(app);
export const db=getFirestore(app)
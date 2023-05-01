// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAAmHHXiqz7S68UPVdusddB0aAI71_Z3VQ",
  authDomain: "todo-app-8008.firebaseapp.com",
  databaseURL: "https://todo-app-8008-default-rtdb.firebaseio.com",
  projectId: "todo-app-8008",
  storageBucket: "todo-app-8008.appspot.com",
  messagingSenderId: "1018809230584",
  appId: "1:1018809230584:web:a361cfc769e9472bf6070d",
  measurementId: "G-TGEB6RCY3Y"
};

// Initialize Firebase

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db=getFirestore(app);
const auth = getAuth(app);
export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}
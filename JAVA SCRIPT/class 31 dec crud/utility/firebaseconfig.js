// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { getFirestore, setDoc, doc, getDoc  , getDocs , query} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfmKHxXqzyU2vw6Og7mj5NPYlF6Sdjd5s",
  authDomain: "crud-project-e6b89.firebaseapp.com",
  projectId: "crud-project-e6b89",
  storageBucket: "crud-project-e6b89.appspot.com",
  messagingSenderId: "115288417722",
  appId: "1:115288417722:web:0d8c4bd94d63afb3ac2983"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, db, setDoc, doc, getDoc , getDocs ,query}
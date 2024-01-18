// // Import the functions you need from the SDKs you need
//     import { initializeApp } from "firebase/app";
//     import { getAnalytics } from "firebase/analytics";
//     import { getAuth } from "firebase/auth";
//     import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries
    
//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//       apiKey: "AIzaSyAlaRR8UHAu0OU2MXducVWNo2sKmiwPq4M",
//       authDomain: "singup-login-project.firebaseapp.com",
//       projectId: "singup-login-project",
//       storageBucket: "singup-login-project.appspot.com",
//       messagingSenderId: "856042990582",
//       appId: "1:856042990582:web:689e2d147f8ac61e3535d7",
//       measurementId: "G-G0K6ND91JK"
//     };
    
//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
//     const auth = getAuth(app); 
// // const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
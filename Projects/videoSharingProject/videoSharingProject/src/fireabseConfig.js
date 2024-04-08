import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCshWIa_DDOtpceTE_1Kn-VmrWApIsa_ug",
    authDomain: "fir-4de26.firebaseapp.com",
    projectId: "fir-4de26",
    storageBucket: "fir-4de26.appspot.com",
    messagingSenderId: "628585736652",
    appId: "1:628585736652:web:e9d99d034be191aab6d569"
};

// Initialize Firebae
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export default app
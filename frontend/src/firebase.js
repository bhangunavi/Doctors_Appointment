// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // for Authentication
import { getFirestore } from "firebase/firestore"; // for Firestore
// Add more Firebase services as needed

const firebaseConfig = {
    apiKey: "AIzaSyCs5np9RhGLkQcCb2QJN8NTrjmVn26I6-E",
    authDomain: "doctors-appointment-989ac.firebaseapp.com",
    projectId: "doctors-appointment-989ac",
    storageBucket: "doctors-appointment-989ac.appspot.com",
    messagingSenderId: "222385044831",
    appId: "1:222385044831:web:fd075d0a5441960c778aea",
    measurementId: "G-9K0G0BMMKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app);    // Authentication instance

export { auth, db };


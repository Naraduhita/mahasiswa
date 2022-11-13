// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFqKnioktFU0VDLQEcHrl0pdrQonbZk5o",
  authDomain: "trial-89c72.firebaseapp.com",
  projectId: "trial-89c72",
  storageBucket: "trial-89c72.appspot.com",
  messagingSenderId: "306613664055",
  appId: "1:306613664055:web:788b680262162a766342b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore (app);

export {database}
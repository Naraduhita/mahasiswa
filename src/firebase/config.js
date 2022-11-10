// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5iy0fdXeQoVvedq8APCW2eVt8MailuAA",
  authDomain: "shopp-app-b2b94.firebaseapp.com",
  projectId: "shopp-app-b2b94",
  storageBucket: "shopp-app-b2b94.appspot.com",
  messagingSenderId: "139605541996",
  appId: "1:139605541996:web:fdbcee58162ef53694c449",
  measurementId: "G-XH00CV6D02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNbm_0IICo5OlBFV3iFwp88qF37xFigho",
  authDomain: "simple-firebase-4d645.firebaseapp.com",
  projectId: "simple-firebase-4d645",
  storageBucket: "simple-firebase-4d645.appspot.com",
  messagingSenderId: "1076582914571",
  appId: "1:1076582914571:web:119970ff65e1caa451c50e",
  measurementId: "G-FBNLHF65H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

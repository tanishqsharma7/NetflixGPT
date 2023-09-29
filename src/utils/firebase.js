// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ2-jFdjeqetHjaWedOxfScsDpfrN-Xr0",
  authDomain: "netflixgpt-42485.firebaseapp.com",
  projectId: "netflixgpt-42485",
  storageBucket: "netflixgpt-42485.appspot.com",
  messagingSenderId: "883281944807",
  appId: "1:883281944807:web:65b03c943fb5e303f1c242",
  measurementId: "G-5SFR5PB400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBei9FlGzO9o3W0uBA1khN1khPe2cr1tQQ",
  authDomain: "react-native-6528e.firebaseapp.com",
  projectId: "react-native-6528e",
  storageBucket: "react-native-6528e.appspot.com",
  messagingSenderId: "852146766063",
  appId: "1:852146766063:web:469e6ed6760845b2549b1a",
  measurementId: "G-EV2LCF3CPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
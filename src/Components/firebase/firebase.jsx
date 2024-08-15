// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP5ANRSc9IXPqqgeQAW20CETx0HBPJFJM",
  authDomain: "media-b7463.firebaseapp.com",
  projectId: "media-b7463",
  storageBucket: "media-b7463.appspot.com",
  messagingSenderId: "95229488188",
  appId: "1:95229488188:web:60a755dbd85000b4caa739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
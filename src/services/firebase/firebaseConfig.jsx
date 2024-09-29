// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxGlPzA2aljZhmd56-BL2UjAExDsbG-U0",
  authDomain: "t-shirt10-coder.firebaseapp.com",
  projectId: "t-shirt10-coder",
  storageBucket: "t-shirt10-coder.appspot.com",
  messagingSenderId: "634278008927",
  appId: "1:634278008927:web:cc5891b6fd2be0f7a4a3ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)
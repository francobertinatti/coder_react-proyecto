// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBAwjWSCqKrtlIuXfvhetuzjlYwr83OmU",
  authDomain: "ecommerce-react-bertinatti.firebaseapp.com",
  projectId: "ecommerce-react-bertinatti",
  storageBucket: "ecommerce-react-bertinatti.appspot.com",
  messagingSenderId: "702673692914",
  appId: "1:702673692914:web:8e5020b111020977f2086b",
  measurementId: "G-QH0N43EPHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

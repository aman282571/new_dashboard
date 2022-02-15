// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9WbEZnb7uDGZnWq0-2xJHjeyCUqgJgTY",
  authDomain: "dashboard-4d2ce.firebaseapp.com",
  projectId: "dashboard-4d2ce",
  storageBucket: "dashboard-4d2ce.appspot.com",
  messagingSenderId: "897279111761",
  appId: "1:897279111761:web:545e93c26f4d94cc24fe70",
};

// Initialize Firebase
const firedb = firebase.initializeApp(firebaseConfig);
export default firedb.database().ref();

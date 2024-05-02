import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaAwzkyOxZwyW8PxD0GAMCJDct-mGZO5I",
  authDomain: "react-notes-nd008.firebaseapp.com",
  projectId: "react-notes-nd008",
  storageBucket: "react-notes-nd008.appspot.com",
  messagingSenderId: "545770877359",
  appId: "1:545770877359:web:dde554dc298d8108613f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvQfcgZpUlzJBparlozNjaRPl4it_S7OA",
  authDomain: "computer-upgrade.firebaseapp.com",
  projectId: "computer-upgrade",
  storageBucket: "computer-upgrade.appspot.com",
  messagingSenderId: "464468613155",
  appId: "1:464468613155:web:8931d0552035a8379a3996",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5sXEKmtVdAF2JLyPULxS47nqWQMiL2DI",
  authDomain: "loanlink-762d9.firebaseapp.com",
  projectId: "loanlink-762d9",
  storageBucket: "loanlink-762d9.firebasestorage.app",
  messagingSenderId: "399741682946",
  appId: "1:399741682946:web:ac8bd861ced74b26122e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}
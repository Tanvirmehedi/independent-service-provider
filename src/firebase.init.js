import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCiQjA0iZYjR7ri3zyoFSBXYPXMeOAbN2c",
  authDomain: "write-way-f1e10.firebaseapp.com",
  projectId: "write-way-f1e10",
  storageBucket: "write-way-f1e10.appspot.com",
  messagingSenderId: "784282892230",
  appId: "1:784282892230:web:b11c62dc612268c81064c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

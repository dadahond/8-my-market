import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbrU-8_bpZ8ByZVyCIDJz-twyZfB4-1Gc",
  authDomain: "ituzum-8d145.firebaseapp.com",
  projectId: "ituzum-8d145",
  storageBucket: "ituzum-8d145.firebasestorage.app",
  messagingSenderId: "11266168175",
  appId: "1:11266168175:web:64092cbc8e385cb2f1049a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore";

// Your web app's Firebase configuration (updated)
const firebaseConfig = {
  apiKey: "AIzaSyDBm85bboT1jw4fxT1AmosPhfpx1Bo2MjQ",
  authDomain: "portfoliofp-756f5.firebaseapp.com",
  projectId: "portfoliofp-756f5",
  storageBucket: "portfoliofp-756f5.firebasestorage.app",
  messagingSenderId: "952919357480",
  appId: "1:952919357480:web:b02e843cf3666d90bb1d1d",
  measurementId: "G-8BEC89JQR5" // Optional: only needed if you're using Firebase Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };

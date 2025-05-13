// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration (Updated)
const firebaseConfig = {
  apiKey: "AIzaSyDBm85bboT1jw4fxT1AmosPhfpx1Bo2MjQ",
  authDomain: "portfoliofp-756f5.firebaseapp.com",
  projectId: "portfoliofp-756f5",
  storageBucket: "portfoliofp-756f5.appspot.com", // Fixed incorrect domain
  messagingSenderId: "952919357480",
  appId: "1:952919357480:web:b02e843cf3666d90bb1d1d",
  measurementId: "G-8BEC89JQR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance

// Initialize Analytics (optional)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn("Analytics not enabled:", error);
}

// Export Firebase modules
export { app, db, collection, addDoc, getDocs };

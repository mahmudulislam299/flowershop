// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfqqmZv7MBkJETNQfri9U8lv2wxl05H7U",
  authDomain: "flowerstore-492cd.firebaseapp.com",
  projectId: "flowerstore-492cd",
  storageBucket: "flowerstore-492cd.appspot.com",
  messagingSenderId: "70805200129",
  appId: "1:70805200129:web:53def067e0873a5e068f00",
  measurementId: "G-L3NR19PTBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Auth instance for reuse everywhere
export const auth = getAuth(app);

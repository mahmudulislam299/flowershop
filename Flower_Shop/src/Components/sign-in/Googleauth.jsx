import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Sinup.css";

const firebaseConfig = {
  apiKey: "AIzaSyBfqqmZv7MBkJETNQfri9U8lv2wxl05H7U",
  authDomain: "flowerstore-492cd.firebaseapp.com",
  projectId: "flowerstore-492cd",
  storageBucket: "flowerstore-492cd.appspot.com",
  messagingSenderId: "70805200129",
  appId: "1:70805200129:web:53def067e0873a5e068f00",
  measurementId: "G-L3NR19PTBL",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const Googleauth = () => {
  const handleGoogleLogin = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome, ${user.displayName}! 🎂`);
        localStorage.setItem("token", JSON.stringify(user));
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="google-login-wrap">
      <button onClick={handleGoogleLogin} className="google-login-btn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          alt="Google logo"
        />
        Continue with Google
      </button>
    </div>
  );
};

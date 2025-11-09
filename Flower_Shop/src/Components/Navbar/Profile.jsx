import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase"; // adjust path if needed
import "./Navbar.css";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Listen to Firebase auth state (user login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      navigate("/signin");
    } catch (err) {
      console.error("Logout error:", err);
      alert("Failed to logout. Please try again.");
    }
  };

  // If not logged in → show Sign In / Sign Up
  if (!user) {
    return (
      <div className="navbar_profile">
        <button
          className="nav_auth_btn"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
        <button
          className="nav_auth_btn nav_auth_btn--outline"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    );
  }

  // If logged in → show user info + Logout
  const email = user.email || "";
  const name = user.displayName || email.split("@")[0];
  const initial = name?.[0]?.toUpperCase() || "?";

  return (
    <div className="navbar_profile">
      <div className="navbar_profile_info">
        <div className="navbar_avatar">{initial}</div>
        <div className="navbar_profile_text">
          <span className="navbar_profile_name">{name}</span>
          <span className="navbar_profile_email">{email}</span>
        </div>
      </div>
      <button
        className="nav_auth_btn nav_auth_btn--outline"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

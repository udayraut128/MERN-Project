 // Login.jsx
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";  // Import Firebase Auth from firebase.js

const Login = () => {
  // Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  // Function to handle Facebook login
  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider(); // Initialize FacebookAuthProvider
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Facebook User:", user);
    } catch (error) {
      console.error("Error during Facebook sign-in:", error);
    }
  };
  return (
    <div id="login-page">
      <div id="login-card">
        <h2> Welcome to U Chat </h2>
        <div className="login-button google">
          <div className="flex items-center contents-center" onClick={handleGoogleLogin}>
            <FcGoogle /> &nbsp; Sign In with Google
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="login-button facebook">
          <div className="flex items-center contents-center" onClick={handleFacebookLogin}>
            <FaFacebook /> &nbsp; Sign In with Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

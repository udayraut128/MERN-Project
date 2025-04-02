 // firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAtSmBhAQ_Oe5POHA8428Pw-QoRobr03oo",
  authDomain: "u-chat-80f91.firebaseapp.com",
  projectId: "u-chat-80f91",
  storageBucket: "u-chat-80f91.appspot.com",
  messagingSenderId: "503030339880",
  appId: "1:503030339880:web:e36f0eaa3fbb2833ae581d",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export it
export const auth = getAuth(app);

 
 import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
  

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import Login from "./components/Login"
import "./tailwind.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <AuthProvider> */}

        {/* <Route path="/chats" component={Chats} /> */}
        <Route path="/" element={<Login/>} />

        {/* </AuthProvider> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "../assets/logo.svg"
export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };


  const handleChange = (e) =>{
    console.log("hell");
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo"></img>
            <h1>Snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type='submit'>Create User</button>
          <span>Already have an account ? <Link to="/login">Login</Link></span>
        </form>
      </FormContainer>
    </>
  );
}
const FormContainer =styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
gap:1rem;
align-items:center;
background:#131324;

.brand{
display:flex;
align-items:center;
gap:1rem;
justify-content:center;
img{
height:5rem;
}
h1{
color:white:
text-transform:uppercase;
}
}

form{
display:flex;
flex-direction:column;
gap:2rem;
background-color:#000076;
border-radius:2rem;
padding:3rem 5rem;
}
input{
background-color:transparent;
padding:1rem;
border:0.1rem solid #4e03ff;
border-radius:0.4rem;
color:white;
width:100%;
font-size:1rem;
&:focus{
border:0.1rem solid #997af0;
outline:none;
}
}

button{
background-color:#4eoeff;
color:white;
padding:1rem 2rem;
border:none;
font-weight:bold;
cursor:pointer;
border-radius:0.4rem;
font-size:1rem;
text-transform:uppercase;
&:hover{
background-color:#4e03ff;
}
}

span{
color:white;
text-transform:uppercase;
a{
color:#4e0eff;
font-weight:bold;
}
}

`;


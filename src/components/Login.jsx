import React, { useContext, useState } from 'react'
import Logo from'../assets/olx-logo.png';
import './Login.css'
import FirebaseContext from '../store/FirebaseContext';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const {firebase}=useContext(FirebaseContext)
    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(email,password);
       const auth= getAuth()

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

    }

  return (
    <div>
    <div className="loginParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form onSubmit={handleLogin}>
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          id="fname"
          name="email"
         
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          id="lname"
          name="password"
         
        />
        <br />
        <br />
        <button>Login</button>
      </form>
      <a>Signup</a>
    </div>
  </div>
  )
}

export default Login

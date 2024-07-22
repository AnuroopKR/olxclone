import React, {  useContext, useState } from 'react';
import Logo from '../assets/olx-logo.png';
import './Signup.css';
import FirebaseContext from '../store/FirebaseContext';
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Singnup = () => {
    const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()

  // const {firebase}=useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(firebase);


    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: "username"
    }).then(()=>{
      console.log("asdfghj");
      firebase.firestore().collection('users').add({
        id:user.uid,
        username:username,
        phone:phoneNumber
      }).then(()=>{
        console.log("login");
        navigate('/login')
      })
    })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  )
}

export default Singnup

import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import SignupPage from './pages/SignupPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import { AuthContext } from './store/FirebaseContext'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Create from './components/Create'

function App() {

  const {user,setUser}=useContext(AuthContext)
  useEffect(()=>{

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    setUser(user)

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  },[])

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create" element={<Create />} />

     </Routes>
    </BrowserRouter>
     
       
    </>
  )
}

export default App

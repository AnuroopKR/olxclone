import React, { useContext } from 'react'
import './Header.css'
import OlxLogo from '../assets/OlxLogo';
import Search from '../assets/Search';
import Arrow from '../assets/Arrow';
import SellButton from '../assets/SellButton';
import SellButtonPlus from '../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../store/FirebaseContext';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const userLogout=()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null)
      navigate("/login")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className="headerParentDiv">
    <div className="headerChildDiv">
      <div className="brandName">
        <OlxLogo></OlxLogo>
      </div>
      <div className="placeSearch">
        <Search></Search>
        <input type="text" />
        <Arrow></Arrow>
      </div>
      <div className="productSearch">
        <div className="input">
          <input
            type="text"
            placeholder="Find car,mobile phone and more..."
          />
        </div>
        <div className="searchAction">
          <Search color="#ffffff"></Search>
        </div>
      </div>
      <div className="language">
        <span> ENGLISH </span>
        <Arrow></Arrow>
      </div>
      <div className="loginPage">
        <span>{user ? user.displayName : "Login"}</span>
        <hr />
      </div>
      {user&& <span onClick={userLogout} style={{ cursor: 'pointer'}}>Logout</span>}

      <div className="sellMenu">
        <SellButton></SellButton>
        <div className="sellMenuContent">
          <SellButtonPlus></SellButtonPlus>
          <span onClick={()=>navigate('/create')}>SELL</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header

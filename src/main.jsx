import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import FirebaseContext from './store/FirebaseContext.jsx'
import firebase from './firebase/config.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firebase}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FirebaseContext.Provider>
    
  </React.StrictMode>,
)

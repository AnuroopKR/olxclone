import firebase from "firebase/compat/app";
import 'firebase/auth'
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDWPDwrby7jhKdIYJDTDKHeIv5kd5b315M",
    authDomain: "olxclone-14e96.firebaseapp.com",
    projectId: "olxclone-14e96",
    storageBucket: "olxclone-14e96.appspot.com",
    messagingSenderId: "410015559272",
    appId: "1:410015559272:web:326855c860374dcf7e55dd"
  };
  export default firebase.initializeApp(firebaseConfig)
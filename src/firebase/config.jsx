
  import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDWPDwrby7jhKdIYJDTDKHeIv5kd5b315M",
  authDomain: "olxclone-14e96.firebaseapp.com",
  projectId: "olxclone-14e96",
  storageBucket: "olxclone-14e96.appspot.com",
  messagingSenderId: "410015559272",
  appId: "1:410015559272:web:326855c860374dcf7e55dd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export the necessary Firebase services
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();

export default app;

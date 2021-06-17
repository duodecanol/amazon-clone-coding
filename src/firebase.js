import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRZTi7xwrhF96qYVZnPOfyugnCmspFjEI",
  authDomain: "clone-coding-5e9d8.firebaseapp.com",
  projectId: "clone-coding-5e9d8",
  storageBucket: "clone-coding-5e9d8.appspot.com",
  messagingSenderId: "536893250923",
  appId: "1:536893250923:web:ef4d739a37d09d807b802e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;
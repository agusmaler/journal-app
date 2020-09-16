import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDJfBccH1m1zRepO9EKUc4D1RcD2VjOzUw",
    authDomain: "react-app-journal-2c171.firebaseapp.com",
    databaseURL: "https://react-app-journal-2c171.firebaseio.com",
    projectId: "react-app-journal-2c171",
    storageBucket: "react-app-journal-2c171.appspot.com",
    messagingSenderId: "665625957158",
    appId: "1:665625957158:web:3f2b4317f5f6eaf08d27e7"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }
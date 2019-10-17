import * as firebase from 'firebase/app';
import 'firebase/firebase-firestore';


// Initialize Firebase
firebase.initializeApp({
  //apiKey from firebase
  apiKey: "AIzaSyCDWs3l7cq7hj6KSL3XBqy_pZupif7Pd3Q",
  authDomain: "ck-notes.firebaseapp.com",
  databaseURL: "https://ck-notes.firebaseio.com",
  projectId: "ck-notes",
  storageBucket: "",
  messagingSenderId: "167306684659",
  appId: "1:167306684659:web:63925f5ab37b762353ef86"
});

const db= firebase.firestore();



  export default db;
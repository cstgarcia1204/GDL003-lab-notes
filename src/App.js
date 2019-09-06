import React, { Component } from 'react';
import './App.css';
import LogIn from './Complements/LogIn';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const firebaseConfig = {
  apiKey: "AIzaSyCDWs3l7cq7hj6KSL3XBqy_pZupif7Pd3Q",
  authDomain: "ck-notes.firebaseapp.com",
  databaseURL: "https://ck-notes.firebaseio.com",
  projectId: "ck-notes",
  storageBucket: "",
  messagingSenderId: "167306684659",
  appId: "1:167306684659:web:63925f5ab37b762353ef86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends Component {
  constructor(props){
    super(props)//rquerido por la subclase component
    this.state={
      isSignedIn: false
    }
  }

  //codigo para inicializar firebaseUI
  uiConfig = {

    signInFlow: "",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("El usuario activo es:", user);
      console.log(firebase.auth().currentUser.displayName);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>º Welcome to my CK-Notes App º</h2>
        </div>

        <div>
            {this.state.isSignedIn ? (
            <div>
              <div>Signed In!!!</div>
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img
                alt="profile_picture"
                src={firebase.auth().currentUser.photoURL}
              />
            </div>  
            ) : ( 
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            />
          )}
        </div>
        <LogIn/>
        
      </div>
      
    );
  }
}

export default App;
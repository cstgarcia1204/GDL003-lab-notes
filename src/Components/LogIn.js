import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Navigation from './Navigation';
import {firebaseConfig} from './credencialsFirebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class LogIn extends React.Component{
    constructor(){
        super()//rquerido por la subclase component
        this.state={
              isUserSignedIn: false
        }
    }
  
    //config firebaseUI
    uiConfig = {

    signInFlow: "",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    //callbacks: {signInSuccess: () => false}
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isUserSignedIn: !!user });
      console.log("El usuario activo es:", user);
      if (user != null)console.log(firebase.auth().currentUser.displayName);
    })
  }

    render(){//metodo render
        return(
            <div>
                {this.state.isUserSignedIn ? (
                    <div className="currentUser">
                        <button className="btnLogOut" onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        <br/><br/>
                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                        <img className="LogIn-photo"
                            alt="profile_picture_not_found"
                            src={firebase.auth().currentUser.photoURL}
                        />
                        <br/>
                        <Navigation/>
                    </div>  
                    ) : ( 
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        );
    }

}

export default LogIn;
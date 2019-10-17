import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './credencialsFirebase';
import Dashboard from './Dashboard';
import Navigation from './Navigation';



class LogIn extends React.Component{
    constructor(){
        super()//rquerido por la subclase component
        this.state={
              isUserSignedIn: false,
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
    firebase.auth().onAuthStateChanged((user) => {//funcion watcher
      this.setState({ isUserSignedIn: !!user });//convirtiendo user a valor booleano
      console.log("El usuario activo es:"/*, user*/);
      if (user != null)console.log(firebase.auth().currentUser.displayName);
    })
  }

    render(){//metodo render
        return(
            <div>
                {this.state.isUserSignedIn ? (
                    <div className="currentUser">
                        <Dashboard/>                        
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
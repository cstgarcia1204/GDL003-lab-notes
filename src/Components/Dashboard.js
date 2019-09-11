import React from 'react';
import Navigation from './Navigation';
//import firebase from 'firebase';
//import {firebaseConfig} from './credencialsFirebase';




// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

//firebase.onAuthstateChange((user)=>{
    //firebase.firestore().collection('users');
//});



class HomePage extends React.Component {
   





    render(){
        return(

        <div>
            <h1 style={{color:'#eb0363'}}>Dashboard =D </h1>,
            <input type={'textarea'} placeholder={'Inicia una nueva nota'}/>
            <br/>
            <button>Save Note</button>
            <Navigation/>,
        </div>
        );
    }

};

export default HomePage;
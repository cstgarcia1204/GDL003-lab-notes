import * as firebase from 'firebase/app';


firebase.auth().onAuthStateChanged((user) => {
    if(user && !user.isAnonymous){
        console.log('Usuario Logueado');
    }else{
        console.log('No Logueado');
    }
});
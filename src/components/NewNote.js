import React from 'react';
//import Navigation from './Navigation';
import * as firebase from 'firebase/app';
//import {db} from './credencialsFirebase';


//handleInput(e){
    // console.log(e.target.value)   
    //}
    //usar evento onChange={this.handleInput}

class NewNotes extends React.Component{

    constructor(){
        super();
        this.ref = firebase.firestore().collection('myDataApp')
        .doc(firebase.database().ref().child('myDataApp').push().key);
        this.state = {
            title:'',
            post:'',
            email:firebase.auth().currentUser.email,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp()
          }

    }


    handleChangeInput= (e)=>{

        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    
        
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        const {title,post,email,timeStamp}= this.state;


        this.ref.set({//PARA INTERFAZ, PERMANECEN LOS CAMPOS
            title,post,email,timeStamp
        }).then((resp)=>{
            this.setState({
                title:'',
                post:'',
                email:'',
                timeStamp:firebase.change.doc.data().timeStamp.toDate()
            });
            //this.props.history.push('/')
        }).catch((error)=>{
            console.log('Error adding document', error);
        });

    }



    render(){
        const {title,post}= this.state;
        return(
            <div>
                <br/>
                <p style={{color:'#fff'}}>New Note =D </p>,
                <br/>
                <h3>Add Note</h3>
                <form onSubmit={this.handleSubmit} >
                    <br/>
                    <input  type={'text'}
                            style={{resize:'none', width: '80%', height: '50%', background: 'rgb(75, 70, 70)', color:'#fff', fontSize:'large'}}
                            name='title'
                            placeholder={'Titulo'}
                            value={title}
                            onChange={this.handleChangeInput}
                    />
                    <textarea style={{resize:'none', width: '80%', height: '50%', background: 'rgb(75, 70, 70)', color:'#fff', fontSize:'large'}}
                              name='post'
                              value={post}
                              placeholder='Escribe nueva nota' 
                              onChange={this.handleChangeInput}
                    />
                    <br/>
                    <button type='submit' >Guardar</button>
                </form>
                <br/>
                <br/>
            </div>
            
        )
    }
}

export default NewNotes;






    /*onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const { title, description, author } = doc.data();
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            description,
            author,
          });
        });
        this.setState({
          boards
       });
      }
      */
    
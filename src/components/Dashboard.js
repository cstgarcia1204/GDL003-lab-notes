import React from 'react';
import * as firebase from 'firebase/app';
//import {Link} from 'react-router-dom';
//import 'firebase/auth';


class Dashboard extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        firebase.firestore().collection('myDataApp').onSnapshot((snapshot)=>{
            let changes=snapshot.docChanges();
            this.setState({
                 items:changes.map((change)=>{
    
                    if(firebase.auth().currentUser.email === change.doc.data().email){
                        console.log(change.doc.data().title+'\n'+change.doc.data().post+'|')
                        
                        return  {title:change.doc.data().title , post:change.doc.data().post}
                    
                    }
                }).filter((item) =>  (!!item) )
            })       
        })     
    }
    


    render(){
        

        return(
        <div>
        
            <button className="btnLogOut" onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <br/><br/>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img className="LogIn-photo"
                alt="profile_picture_not_found"
                src={firebase.auth().currentUser.photoURL}
            />
            <h1 style={{color:'#eb0363'}}>Dashboard =D </h1>
            <div>{this.state.items.map((item)=>{
                    return (
                        <div>
                             <p>{item.title}</p>
                            <p>{item.post}</p>
                            <p>{item.email}</p> 
                        </div>
                    )
                })}
            </div>
            
            
        </div>
        );
    }

};

export default Dashboard;


/*componentDidMount(){
        firebase.firestore().collection('myDataApp').onSnapshot((snapshot)=>{
            let changes=snapshot.docChanges();
            this.setState({
                 items:changes.map((change)=>{
    
                    if(firebase.auth().currentUser.email === change.doc.data().email){
                        console.log(change.doc.data().title+'\n'+change.doc.data().post+'|')
                        return {title:change.doc.data().title,post:change.doc.data().post}
                        
                    
                    }else{console.log('data no encontrada')}
                    
                })
            })       
        })     
    } */



    /*userValues= ()=>{
        let filter;
        if (firebase.auth().currentUser.email === this.state.items.email){
            
            for(let i=0;i<this.state.items.length;i++){
                let title=this.state.items[i].title;
                filter+=title;
            }
        }else console.log('Data no encontrada!!!!!')
        return filter;
    }*/
        
    //this.state.items[0].post


    /*v2


    this.state = {
            board: {},
            key: '',
        };


    componentDidMount() {
        const ref = firebase.firestore().collection('myDataApp').doc();
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              board: doc.data(),
              key: doc.id,
              isLoading: false,
            });
          } else {
            console.log("No such document!");
          }
        });
      }
    
      delete(id){
        firebase.firestore().collection('myDataApp').doc(id).delete().
        then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }*/
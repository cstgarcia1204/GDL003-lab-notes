import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'; 
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import NewNote from './components/NewNote';


//conditional rendering checar
//proteccion de rutas
//netNinja videos


class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Magnetic Notes App 2.0</h2>
        </div>
        <BrowserRouter>
          <React.Fragment>
            <Route path="/logIn" component={LogIn}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/newNote" component={NewNote}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
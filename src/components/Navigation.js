import React from 'react';
import {Link} from 'react-router-dom';


const Navi= ()=>{
    return(
        <React.Fragment>
            <ul>
                <li type='circle'>
                    <Link to="/LogIn">Home</Link>
                </li>
                <li type='circle'>
                    <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li type='circle'>
                    <Link to="/NewNote">New Note Area</Link>
                </li>
            </ul>
        </React.Fragment>
    );

};

export default Navi;
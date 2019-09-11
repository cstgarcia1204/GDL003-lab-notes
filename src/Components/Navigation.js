import React from 'react';
import {Link} from 'react-router-dom';


const Navi= ()=>{
    return(
        <React.Fragment>
            <dl>
                <dt>
                    <Link to="/LogIn">Start</Link>
                </dt>
                <dt>
                    <Link to="/Dashboard">Dashboard</Link>
                </dt>
                <dt>
                    <Link to="/NewNote">New Note Area</Link>
                </dt>
            </dl>
        </React.Fragment>
    );

};

export default Navi;
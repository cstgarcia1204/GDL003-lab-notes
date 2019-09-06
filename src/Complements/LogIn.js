import React from 'react'

class LogIn extends React.Component{
    constructor(){
        super()//rquerido por la subclase component
        this.state={}
    }

    render(){//metodo render
        return(
            <div>
                <input type="email" placeholder="Ingresa tu correo"/>
                <br/>
                <input type="password" placeholder="Ingresa tu contraseña"/>
            </div>
        )
    }

}

export default LogIn;
import React, { Component } from "react";
import { Link } from "react-router-dom";

function Error(){
    return(
        <div>
            <p className="error">Esta pagina aun no existe.</p>
        <Link to={'/'}>
           <p className='error'>Haga click aqui para volver al inicio</p>
        </Link>
        <img src='/img/notFound.png' alt='not found' />
        </div>
    )
}

export default Error;
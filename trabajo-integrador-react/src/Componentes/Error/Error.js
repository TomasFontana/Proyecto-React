import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Error.css';

function Error(){
    return(
        <div className="error-container">
            <div className="error-text">
                <p>Esta página aún no existe.</p>
                <Link to={'/'} className="error-link">
                    <p>Haga clic aquí para volver al inicio</p>
                </Link>
            </div>
            <img src='/img/notFound.png' alt='not found' className="error-image" />
        </div>
    )
}

export default Error;

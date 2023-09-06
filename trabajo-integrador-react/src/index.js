import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Footer from './Componentes/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter> 
<Navbar />
<App /> 
<Footer/>
</BrowserRouter>
);


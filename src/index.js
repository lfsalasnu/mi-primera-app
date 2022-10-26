import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Hola from './Componentes/hola';
import Pie_pagina from './Componentes/Pie_pagina';
import Formulario from './Componentes/Formulario';
import Navegacion from './navegacion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacion titulo="Titulo 1" enlace3h={true}/>
    <Formulario/>
    <App />
    <Pie_pagina/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import logo from './logo.svg';
import './App.css';
//import hola from './Componentes/hola.js';
import Navegacion from './navegacion';
import Tarjeta from './Componentes/Tarjeta';
import Cargar from './Componentes/Cargar';
function App() {
  return (
    <div className="App">
      <Navegacion titulo="Titulo 1" enlace3h={true}/>
      <div className='row'>
        <Cargar/>
        {/* <Tarjeta titulo="Titulo 1" descripcion="Descripción 1"/>
        <Tarjeta titulo="Titulo 2" descripcion="Descripción 2"/>
        <Tarjeta titulo="Titulo 3" descripcion="Descripción 3"/> */}
      </div>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guardar para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;

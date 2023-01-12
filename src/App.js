import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import React from 'react';
import Botao from './Components/Botao';


function App() {


  return (<div>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>

      <Botao titulo="Primeiro botão"/>
      <Botao titulo="Segundo  botão"/>
    </div>
    
  );
}

export default App;

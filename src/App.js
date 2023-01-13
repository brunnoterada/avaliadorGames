import './App.css';
import Home from './Pages/Home';
import React from 'react';
import Lista from './Pages/Lista';
import Sobre from './Pages/Sobre';


function App() {
  console.log(window.location)
  let Component
  switch(window.location.pathname){
    case"/":
    Component = App
    break
    case"/Lista":
    Component = <Lista/>
    break
    case"/Sobre":
    Component = <Sobre/>
    break
  }


  return (
  <div>
    <Home/>
    {Component}
  </div>
    
  );
}

export default App;

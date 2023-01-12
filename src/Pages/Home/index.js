import './Home.css';
import Jogos from '../../dados.json';
import ReactDOM from "react-dom/client";
import React from 'react';

function App() {


  return (

    <div>
    {
      Jogos.map( record=>{
        return(
          <div className='box'>
            {
              record.nome
            }
            <br/>
            {
              record.descricao
            }
          </div>
        )
      })
    }
    </div>
  );
}

export default App;

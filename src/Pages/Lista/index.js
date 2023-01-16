import './Lista.css';
import Jogos from '../../dados.json';
import React from 'react';

function Lista() {


  return (

    <div>
    {
      Jogos.map( record=>{
        return(
          <div className='box'>
            <br/>
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

export default Lista;

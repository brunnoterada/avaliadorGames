import './App.css';
import Menu from './Components/Menu';
import Jogos from './dados.json';

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
          </div>
        )
      })
    }
    </div>
  );
}

export default App;

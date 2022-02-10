import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';



function App() {

  //reinderização de listas

  const meusItens = ['React', 'veu', 'Angular']
   
  return (
    <div className="App">
      <h1>Reinderização Condicional</h1>
      <Condicional/>
      <h1>Reinderização de listas</h1>
      <OutraLista itens={meusItens} />
    </div>
  );
}

export default App;

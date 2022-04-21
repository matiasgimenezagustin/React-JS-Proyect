import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />

      {/*<Button texto='Botton' color='red'/> */}

      <ItemListContainer greeting="Aun no se han publicado productos aqui." />
      
    </div>
  );
}

export default App;

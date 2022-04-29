
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Input from './components/Input/Input';
import Home from "./Pages/Home/index"
import Catalogo from "./Pages/Catalogo/index"
import Detalle from "./Pages/Detalle/index"
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  
  const extraerValor = (valorDelInput) =>{

    return console.log(valorDelInput);

  }


  return (
    <div className="App">
      <NavBar />

      <Home/>
      <Detalle/>
      <Catalogo/>

      {/*<Button texto='Botton' color='red'/> */}

      <ItemListContainer greeting="Aun no se han publicado productos aqui." /* lista = {[1,2,3,4]}  */ />

  {/*  no usar () para no ejecutarla, solo usamos "extraerValor" como referencia de la funcion
      <Input handleExtraer={extraerValor} id="1"/>
      <Input handleExtraer={extraerValor} id="2"/> */}

      
    </div>
  );
}


export default App;

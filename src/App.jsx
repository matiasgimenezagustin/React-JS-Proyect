
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import Input from './components/Input/Input';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';



function App() {
  
  const extraerValor = (valorDelInput) =>{

    return console.log(valorDelInput);

  }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>


      {/*<Button texto='Botton' color='red'/> */}

{/*       <ItemListContainer greeting="Aun no se han publicado productos aqui." lista = {[1,2,3,4]}  /> */}

  {/*  no usar () para no ejecutarla, solo usamos "extraerValor" como referencia de la funcion
      <Input handleExtraer={extraerValor} id="1"/>
      <Input handleExtraer={extraerValor} id="2"/> */}

      
    </div>
  );
}


export default App;

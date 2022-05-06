
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
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
    </div>
  );
}


export default App;

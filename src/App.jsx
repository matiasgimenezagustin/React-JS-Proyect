
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './Pages/Cart/Cart';
import CheckOut from './Pages/CheckOut/CheckOut';



function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart/' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </div>
  );
}


export default App;

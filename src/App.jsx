import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import { BrowserRouter, Routes, Route } from "react-router";
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

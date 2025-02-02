import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      
      <ItemListContainer welcome='Bienvenidos a SmartShop, nuevos porductos proximamente...' />
    </>
  )
}

export default App

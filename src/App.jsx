import { useEffect } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contacto from './components/Contacto';
import Admin from './components/Admin';
import LoginBoost from './components/LoginBoost';
import FormularioEdicion from './components/FormularioEdicion';
import { useAuthContext } from './contexts/AuthContext';
import ProductosContainerFirebase from './components/ProductosContainerFirebase';
import ProductoDetalleFirebase from './components/ProductoDetalleFirebase';
import FormularioProductoFirebase from './components/FormularioProductoFirebase';
import NavBoostrap from './components/NavBootstrap'
import CarritoBootstrap from './components/CarritoBootstrap';


function App() {
  const {verificacionLog} = useAuthContext();

  useEffect(() => {
    verificacionLog()
  }, [])
  
  return (
    <Router>
      <div>
        <NavBoostrap/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginBoost/>} />
          <Route path="/productos" element={<ProductosContainerFirebase/>}/>
          <Route path="/productosF/:id" element={<ProductoDetalleFirebase/>} />
          <Route path="/agregarproducto" element={<FormularioProductoFirebase/>} />
          <Route path="/carrito" element={<CarritoBootstrap /> }/>      
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/productos/:id" element={<ProductoDetalleFirebase/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path="/admin/agregarProductos" element={<FormularioProductoFirebase/>}/>
          <Route path="/admin/editarProducto/:id" element={<FormularioEdicion/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;

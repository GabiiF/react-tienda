//import { useState } from 'react'
import Home from './pages/Home'
import Tecnologia from './pages/Tecnologia'
import Moda from './pages/Moda'
import ProductoDetalle from './pages/ProductoDetalle'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Admin from './components/Admin'
import RutaProtegida from './components/RutaProtegida'
import Carrito from './components/Carrito'

function App() {

  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/tecnologia" element={<Tecnologia/> }/>
      <Route path="/moda" element={<Moda/> }/>
      <Route path="/productos/:id" element={<ProductoDetalle/> }/>

      <Route path="/login" element={<Login/> }/>
      {/*encierro admin para que no lo vean todos*/}
      <Route path="/admin" element={
        <RutaProtegida>
          <Admin/> 
        </RutaProtegida>
        }/>
      {/*encierro el carrito para que no lo vean todos*/}
      <Route path="/carrito" element={
        <RutaProtegida>
          <Carrito/> 
        </RutaProtegida>
        }/>
      </Routes>
    <Footer />
    </>
  )
}

export default App

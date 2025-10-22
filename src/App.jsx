//import { useState } from 'react'
import Home from './pages/Home'
import Tecnologia from './pages/Tecnologia'
import Moda from './pages/Moda'
import ProductoDetalle from './pages/ProductoDetalle'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/tecnologia" element={<Tecnologia/> }/>
      <Route path="/moda" element={<Moda/> }/>
      <Route path="/productos/:id" element={<ProductoDetalle/> }/>
    </Routes>
    <Footer />
    </>
  )
}

export default App

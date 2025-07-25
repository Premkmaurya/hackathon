import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Login from '../pages/Login'

function MainRoutes() {
  return (

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
  )
}

export default MainRoutes

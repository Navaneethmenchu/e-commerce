import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Product from "./Product"

const Rout = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
    </Routes>
  )
}

export default Rout
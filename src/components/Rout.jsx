import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import Cart from "./Cart"
import Contact from "./Contact"
import Wishlist from "./Wishlist"
import About from './About';

const Rout = ({product, setProduct, detail, view, close, setClose,cart,setCart,addtocart,wishlist,setWishlist,addtoWishlist}) => {
  return (
    <Routes>
        <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtoWishlist={addtoWishlist}/>}/>
        <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtoWishlist={addtoWishlist}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>}/>
        <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Rout